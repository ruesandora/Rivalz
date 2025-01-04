# ClaimBot: Telegram ile Claim İşlemi

ClaimBot, kullanıcıların Telegram üzerinden bir komut göndererek blockchain üzerindeki bir smart contract ile **claim** işlemlerini kolayca otomatikleştirmelerine olanak tanır. Bu rehberde, botu sıfırdan kurmak ve çalıştırmak için gereken tüm adımlar detaylı bir şekilde açıklanmıştır.

---

## **Adım 1: Telegram Bot Oluşturma**

### **1.1 BotFather ile Bot Oluşturma**
Telegram'da **[@BotFather](https://t.me/botfather)**'ı açın ve aşağıdaki adımları takip edin:
1. **`/newbot`** komutunu gönderin.
2. Botunuz için bir **ad** ve **kullanıcı adı** belirleyin.
3. BotFather size bir **API Token** sağlayacaktır. Bu token'i bir yere not edin (örneğin, `TELEGRAM_BOT_TOKEN`).

---

## **Adım 2: Gerekli Yazılımları Kurma**

### **2.1 Node.js Kurulumu**

#### a. **Windows için:**
- Node.js'i [resmi web sitesi](https://nodejs.org) üzerinden indirip yükleyin.

#### b. **Linux için:**
```bash
sudo apt update
sudo apt install -y nodejs npm
```

### **2.2 Proje Dizini Oluşturma**

#### a. **Windows için:**
- Yeni bir klasör oluşturun (örneğin `claim-bot`).
- Bu klasörü açın ve içinde komut istemcisini başlatın.

#### b. **Linux için:**
```bash
mkdir claim-bot
cd claim-bot
```

### **2.3 Gerekli Paketleri Kurma**

#### a. **Windows için:**
- Komut istemcisinde şu komutları çalıştırın:
```cmd
npm install dotenv node-telegram-bot-api ethers
```

#### b. **Linux için:**
```bash
npm install dotenv node-telegram-bot-api ethers
```

---

## **Adım 3: Kod Dosyasını Hazırlama**

### **3.1 `index.js` Dosyasını Oluşturma**

#### a. **Windows için:**
- Yeni bir dosya oluşturun: `index.js`.
- Bir metin editörü (örneğin Notepad veya Visual Studio Code) ile açın ve aşağıdaki kodları yapıştırın.

#### b. **Linux için:**
Terminalde aşağıdaki komutları çalıştırarak `index.js` dosyasını oluşturun:
```bash
touch index.js
nano index.js
```
Nano editöründe aşağıdaki kodları yapıştırın ve kaydedin (CTRL + O, ardından ENTER, CTRL + X):

```javascript
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import { ethers } from "ethers";

// Çevre değişkenlerini yükle
dotenv.config();

// Telegram bot oluştur
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// RPC ve cüzdan bilgileri
const privateKey = process.env.PRIVATE_KEY;
const rpcUrl = process.env.RPC_URL;
const contractAddress = process.env.CONTRACT_ADDRESS;
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

const abi = [
    {
        type: "function",
        name: "claim",
        stateMutability: "nonpayable",
        inputs: [],
    },
];

// SmartContract
const contract = new ethers.Contract(contractAddress, abi, wallet);

// Claim işlemi
async function sendClaimTransactions(chatId, count = 20) {
    for (let i = 1; i <= count; i++) {
        try {
            bot.sendMessage(chatId, `(${i}/${count}) Claim işlemi başlatılıyor...`);
            const tx = await contract.claim({ gasLimit: 1000000 });
            bot.sendMessage(chatId, `(${i}/${count}) İşlem gönderildi, transaction hash: ${tx.hash}`);

            const receipt = await tx.wait();
            bot.sendMessage(
                chatId,
                `(${i}/${count}) İşlem tamamlandı:\n- Transaction Hash: ${tx.hash}\n- Block Number: ${receipt.blockNumber}\n- Gas Used: ${receipt.gasUsed}`
            );

            // 5 saniye bekleme
            if (i < count) {
                bot.sendMessage(chatId, "Bir sonraki işlem için 30 saniye bekleniyor...");
                await new Promise((resolve) => setTimeout(resolve, 30000));
            }
        } catch (error) {
            bot.sendMessage(chatId, `(${i}/${count}) Claim işlemi sırasında hata oluştu: ${error.message}`);
            console.error(`Hata (${i}/${count}):`, error);
        }
    }

    bot.sendMessage(chatId, "Tüm işlemler tamamlandı!");
}

// Bot mesajlarını dinleme
bot.onText(/\/claim (\d+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const count = parseInt(match[1], 10) || 20;
    bot.sendMessage(chatId, `${count} adet claim işlemi başlatılıyor...`);
    sendClaimTransactions(chatId, count);
});

// Kullanıcı komut beklenirken bilgi mesajı
console.log("Bot çalışıyor, Telegram üzerinden komut bekleniyor...");
```

---

## **Adım 4: Çevre Değişkenlerini Ayarlama**

### **4.1 `.env` Dosyası Oluşturma**

#### a. **Windows için:**
- Yeni bir dosya oluşturun: `.env`.
- Metin editörüyle açın ve aşağıdaki bilgileri yapıştırın.

#### b. **Linux için:**
Terminalde aşağıdaki komutları çalıştırarak `.env` dosyasını oluşturun:
```bash
touch .env
nano .env
```
Nano editöründe aşağıdaki bilgileri yapıştırın ve kaydedin:

```env
TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
RPC_URL=https://rivalz2.rpc.caldera.xyz/http
CONTRACT_ADDRESS=0xF0a66d18b46D4D5dd9947914ab3B2DDbdC19C2C0
```

### **4.2 Bilgilerinizi Doldurun**
- **`TELEGRAM_BOT_TOKEN`**: BotFather'dan aldığınız token.
- **`PRIVATE_KEY`**: Blockchain cüzdanınıza ait özel anahtar.
- **`RPC_URL`**: Kullanacağınız blockchain ağına ait RPC URL.
- **`CONTRACT_ADDRESS`**: Claim işlemi yapılacak smart contract adresi.

---

## **Adım 5: Botu Çalıştırma**

### **5.1 `package.json` Dosyasını Düzenleme**
Botun düzgün çalışabilmesi için `package.json` dosyanıza aşağıdaki satırı ekleyin veya dosya yoksa oluşturun:

#### **Windows ve Linux için:**
```bash
touch package.json
nano package.json
```
Aşağıdaki içeriği yapıştırın:

```json
{
  "type": "module"
}
```

Kaydedip kapatın (CTRL + O, ardından ENTER, CTRL + X).

### **5.2 Botu Çalıştırma**

#### a. **Windows için:**
1. Komut istemcisinde aşağıdaki komutu çalıştırın:
   ```cmd
   node index.js
   ```

2. Telegram'da botunuza `/claim` komutunu gönderin:
   ```text
   /claim 5
   ```
   Bu komut, 5 adet claim işlemi başlatır.

#### b. **Linux için:**
1. Terminalde aşağıdaki komutu çalıştırın:
   ```bash
   node index.js
   ```

2. Telegram'da botunuza `/claim` komutunu gönderin:
   ```text
   /claim 5
   ```
   Bu komut, 5 adet claim işlemi başlatır.

---

## **Ek Bilgiler**

### **Hatalar ve Debug**
Eğer bir hata alırsanız, terminal çıktısını kontrol edin. Hatalar genellikle aşağıdaki nedenlerden kaynaklanabilir:
- Yanlış çevre değişkenleri.
- Claim işlemi için uygun olmayan koşullar (örneğin, yeterli bakiye yok).

---
