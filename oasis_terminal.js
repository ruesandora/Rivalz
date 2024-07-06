const WebSocket = require('ws');
const os = require('os');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const figlet = require('figlet');

// Simple color function
const color = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
    }
};

// Import the database module
const { database, updateDatabase, initDatabase } = require('./database');

function formatMetrics(data) {
    const { creditsEarned, totalUptime, networkPerformance } = data;
    
    const days = Math.floor(totalUptime / 86400);
    const hours = Math.floor((totalUptime % 86400) / 3600);
    const minutes = Math.floor((totalUptime % 3600) / 60);
    
    let uptimeString = '';
    if (days > 0) uptimeString += `${days}d `;
    if (hours > 0 || days > 0) uptimeString += `${hours}h `;
    uptimeString += `${minutes}m`;
    
    const networkPercentileFormatted = (networkPerformance * 100).toFixed(0);
    
    return `Credits Earned: ${creditsEarned} | Provider Uptime: ${uptimeString} | Network Percentile: ${networkPercentileFormatted}%`;
}

function main() {
    // Clear the console
    console.clear();

    // Use figlet to generate the ASCII art
    const asciiArt = figlet.textSync('Oasis Terminal', { 
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });

    console.log(`${color.fg.blue}${color.bright}${asciiArt}${color.reset}`);
    console.log(`${color.fg.green}${color.bright}📡 Monitoring Oasis.ai${color.reset}`);
    console.log(`${color.fg.cyan}👨‍💻 Created by: @dwtexe${color.reset}`);
    console.log(`${color.fg.magenta}🔍 Starting Oasis Terminal script...${color.reset}`);
	console.log();

    // Initialize the database
    initDatabase();
    console.log(`${color.fg.yellow}Database initialized.${color.reset}`);

    // WebSocket connection
    let socket;
    let heartbeatInterval;
    let settingsInterval;

    const connectWebSocket = () => {
        console.log(`${color.fg.cyan}Attempting to connect websocket...${color.reset}`);

        if (database.token) {
            if (socket && socket.readyState === WebSocket.OPEN) {
                console.log(`${color.fg.green}WebSocket already connected.${color.reset}`);
                return;
            }

            socket = new WebSocket(`wss://api.oasis.ai/websocket?token=${database.token}`);

            socket.on('open', () => {
                console.log(`${color.fg.green}${color.bright}WebSocket connection established.${color.reset}`);
                updateDatabase({ stats: { status: 'active' } });
                startHeartbeatInterval();
                startSettingsInterval();
            });

            socket.on('close', (code) => {
                console.log(`${color.fg.red}WebSocket closed with code ${code}.${color.reset}`);
                clearHeartbeatInterval();
                clearSettingsInterval();

                if (code === 1000) {
                    console.log(`${color.fg.yellow}Normal closure, updating database...${color.reset}`);
                    updateDatabase({
                        stats: { status: 'offline' },
                        token: false,
                    });
                    return;
                }

                console.log(`${color.fg.yellow}Unexpected closure, updating status and attempting reconnection...${color.reset}`);
                updateDatabase({ stats: { status: 'offline' } });
                setTimeout(connectWebSocket, 2500);
            });

            socket.on('message', (data) => {
                const message = JSON.parse(data);
                console.log(`${color.fg.blue}${color.bright}Received WebSocket message:${color.reset} ${color.fg.yellow}==>${color.reset} ${color.fg.green}Type: ${message.type}${color.reset}`);
                
                if (message.type === 'serverMetrics') {
                    const formattedMetrics = formatMetrics(message.data);
                    console.log(`${color.fg.cyan}${formattedMetrics}${color.reset}`);
                    console.log(`${color.fg.magenta}Updating database with server metrics...${color.reset}`);
                    updateDatabase({ stats: { ...message.data } });
                } else {
                    console.log(`${color.fg.green}Data: ${JSON.stringify(message.data, null, 2)}${color.reset}`);
                }
                
                console.log(`${color.fg.cyan}${'─'.repeat(70)}${color.reset}`);
            });
        } else {
            console.log(`${color.fg.red}${color.bright}No token available. Cannot connect to WebSocket.${color.reset}`);
        }
    };

    const sendMessage = (message) => {
        if (!socket || socket.readyState !== WebSocket.OPEN) {
            console.log(`${color.fg.red}Cannot send message. WebSocket is not open.${color.reset}`);
            updateDatabase({ stats: { status: 'offline' } });
            return;
        }

        try {
            console.log(`${color.fg.blue}Sending message of type: ${message.type}${color.reset}`);
            socket.send(JSON.stringify(message));
        } catch (error) {
            console.error(`${color.fg.red}${color.bright}Error sending message:${color.reset}`, error);
        }
    };

    const startHeartbeatInterval = () => {
        console.log(`${color.fg.yellow}Starting heartbeat interval...${color.reset}`);
        heartbeatInterval = setInterval(() => {
            console.log(`${color.fg.cyan}Sending heartbeat...${color.reset}`);
            sendMessage({
                type: 'heartbeat',
                data: { status: database.stats.status },
            });
            
            // Send settings data after heartbeat
            sendSettingsData();
        }, 60000);
    };

    const clearHeartbeatInterval = () => {
        if (heartbeatInterval !== undefined) {
            console.log(`${color.fg.yellow}Clearing heartbeat interval.${color.reset}`);
            clearInterval(heartbeatInterval);
            heartbeatInterval = undefined;
        }
    };

    const startSettingsInterval = () => {
        console.log(`${color.fg.yellow}Starting settings interval...${color.reset}`);
		console.log(`${color.fg.cyan}${'─'.repeat(70)}${color.reset}`);
        settingsInterval = setInterval(() => {
            sendSettingsData();
        }, 120000);
    };

    const clearSettingsInterval = () => {
        if (settingsInterval !== undefined) {
            console.log(`${color.fg.yellow}Clearing settings interval.${color.reset}`);
            clearInterval(settingsInterval);
            settingsInterval = undefined;
        }
    };

    const getCPUInfo = () => {
        const cpus = os.cpus();
        return {
            archName: os.arch(),
            features: cpus[0].model.split(' '),
            modelName: cpus[0].model,
            numOfProcessors: cpus.length,
            processors: cpus.map(cpu => ({
                usage: {
                    idle: cpu.times.idle * 1000000,
                    kernel: cpu.times.sys * 1000000,
                    total: Object.values(cpu.times).reduce((a, b) => a + b, 0) * 1000000,
                    user: cpu.times.user * 1000000
                }
            })),
            temperatures: []
        };
    };

    const getMemoryInfo = () => {
        return {
            availableCapacity: os.freemem(),
            capacity: os.totalmem()
        };
    };

    const getGPUInfo = () => {
        try {
            const gpuInfo = execSync('lspci | grep -i vga').toString();
            const match = gpuInfo.match(/:\s(.+)/);
            return {
                vendor: "Unknown",
                renderer: match ? match[1].trim() : "Unknown"
            };
        } catch (error) {
            console.error(`${color.fg.red}Error getting GPU info:${color.reset}`, error);
            return {
                vendor: "Unknown",
                renderer: "Unknown"
            };
        }
    };

    const sendSettingsData = () => {
        console.log(`${color.fg.cyan}Sending settings data...${color.reset}`);
        const cpuInfo = getCPUInfo();
        const memoryInfo = getMemoryInfo();
        const gpuInfo = getGPUInfo();

        const settingsData = {
            type: "settings",
            data: {
                mostRecentModel: "todo",
                userSettings: {
                    schedule: {
                        ...database.schedule,
                        days: Array.from(database.schedule.days)
                    },
                    enabledModels: database.models.filter(model => model.status === 'available').map(model => model.name)
                },
                systemInfo: {
                    cpuInfo,
                    memoryInfo,
                    gpuInfo
                },
                extensionVersion: "0.1.0",
                chromeVersion: "119"
            }
        };

        sendMessage(settingsData);
		console.log(`${color.fg.cyan}${'─'.repeat(70)}${color.reset}`);
    };

    console.log(`${color.fg.magenta}${color.bright}Main function started.${color.reset}`);
    console.log(`${color.fg.cyan}${'─'.repeat(70)}${color.reset}`);
    connectWebSocket();
    console.log(`${color.fg.cyan}${'─'.repeat(70)}${color.reset}`);
}

console.log(`${color.fg.green}${color.bright}Script setup complete. Starting main function...${color.reset}`);
main();
