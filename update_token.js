const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
];

function getRandomUserAgent() {
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

async function login(email, password) {
  const response = await axios.post('https://api.oasis.ai/internal/authLogin?batch=1', {
    "0": { "json": { email, password } }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9,tr;q=0.8',
      'Origin': 'https://dashboard.oasis.ai',
      'Referer': 'https://dashboard.oasis.ai/',
      'User-Agent': getRandomUserAgent()
    }
  });
  return response.data[0].result.data.json;
}

async function getExtensionToken(authToken, clientName) {
  const response = await axios.post('https://api.oasis.ai/internal/authConnect?batch=1', {
    "0": { "json": clientName }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authToken,
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9,tr;q=0.8',
      'Origin': 'https://dashboard.oasis.ai',
      'Referer': 'https://dashboard.oasis.ai/',
      'User-Agent': getRandomUserAgent()
    }
  });
  return response.data[0].result.data.json;
}

async function createDatabaseFile(token) {
  const databaseContent = `const fs = require('fs').promises;
const path = require('path');

let database = {
  version: 1,
  token: "${token}",
  stats: {
    creditsEarned: 0,
    networkPerformance: 0,
    solvedTasks: 0,
    status: "active",
    totalEarnings: 0,
    totalUptime: 0
  },
  models: [],
  schedule: {
    days: new Set(["monday", "tuesday", "wednesday", "thursday", "friday"]),
    mode: "all",
    startTime: "10:00",
    stopTime: "16:00",
    usage: "maximum"
  },
  system: {
    gpuInfo: undefined
  }
};

const updateDatabase = async (updatedData) => {
  const updatedDatabase = Object.assign({}, database);

  if ('token' in updatedData) {
    updatedDatabase.token = updatedData.token;
  }
  if ('models' in updatedData) {
    updatedDatabase.models = updatedData.models;
  }
  if ('stats' in updatedData) {
    updatedDatabase.stats = {
      ...database.stats,
      ...updatedData.stats,
    };
  }
  if ('schedule' in updatedData) {
    updatedDatabase.schedule = {
      ...database.schedule,
      ...updatedData.schedule,
    };
  }
  if ('system' in updatedData) {
    updatedDatabase.system = {
      ...database.system,
      ...updatedData.system,
    };
  }

  await fs.writeFile(path.join(__dirname, 'database.json'), JSON.stringify(updatedDatabase, null, 2));

  database = updatedDatabase;
};

const initDatabase = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'database.json'), 'utf8');
    database = JSON.parse(data);
  } catch (error) {
    await fs.writeFile(path.join(__dirname, 'database.json'), JSON.stringify(database, null, 2));
  }
};

module.exports = {
  database,
  updateDatabase,
  initDatabase,
};`;

  const dbPath = path.join(__dirname, 'database.js');
  await fs.writeFile(dbPath, databaseContent, 'utf8');
  console.log('database.js created and updated with new token');
}

async function main() {
  try {
    const email = await question('Enter your email: ');
    const password = await question('Enter your password: ');

    console.log('Logging in...');
    const authToken = await login(email, password);
    console.log('Auth token:', authToken);

    const clientName = await question('Enter client name: ');

    console.log('Getting extension token...');
    const extensionToken = await getExtensionToken(authToken, clientName);
    console.log('Extension token:', extensionToken);

    console.log('Creating database.js...');
    await createDatabaseFile(extensionToken);
    console.log('database.js created with new token');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    rl.close();
  }
}

main();
