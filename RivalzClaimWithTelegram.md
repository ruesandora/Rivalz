# ClaimBot: Telegram ile Blockchain Claim İşlemi Otomasyonu

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
Bilgisayarınızda Node.js'in yüklü olduğundan emin olun. Node.js'i [resmi web sitesi](https://nodejs.org) üzerinden indirip kurabilirsiniz.

### **2.2 Proje Dizini Oluşturma**
Bir terminal veya komut istemcisi açın ve bir proje dizini oluşturun:
```bash
mkdir claim-bot
cd claim-bot
```

### **2.3 Gerekli Paketleri Kurma**
Aşağıdaki komutu çalıştırarak gerekli npm paketlerini kurun:
```bash
npm install dotenv node-telegram-bot-api ethers
```

---

## **Adım 3: Kod Dosyasını Hazırlama**

### **3.1 `index.js` Dosyasını Oluşturma**
Proje dizininde `index.js` adında bir dosya oluşturun ve aşağıdaki kodları içine yapıştırın:

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
            const tx = await contract.claim();
            bot.sendMessage(chatId, `(${i}/${count}) İşlem gönderildi, transaction hash: ${tx.hash}`);

            const receipt = await tx.wait();
            bot.sendMessage(
                chatId,
                `(${i}/${count}) İşlem tamamlandı:\n- Transaction Hash: ${receipt.transactionHash}\n- Block Number: ${receipt.blockNumber}\n- Gas Used: ${receipt.gasUsed}`
            );

            // 5 saniye bekleme
            if (i < count) {
                bot.sendMessage(chatId, "Bir sonraki işlem için 5 saniye bekleniyor...");
                await new Promise((resolve) => setTimeout(resolve, 5000));
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
```

---

## **Adım 4: Çevre Değişkenlerini Ayarlama**

### **4.1 `.env` Dosyası Oluşturma**
Proje dizininde bir `.env` dosyası oluşturun ve aşağıdaki gibi doldurun:
```env
TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
RPC_URL=https://your-rpc-url.com
CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS
```

### **4.2 Bilgilerinizi Doldurun**
- **`TELEGRAM_BOT_TOKEN`**: BotFather'dan aldığınız token.
- **`PRIVATE_KEY`**: Blockchain cüzdanınıza ait özel anahtar.
- **`RPC_URL`**: Kullanacağınız blockchain ağına ait RPC URL.
- **`CONTRACT_ADDRESS`**: Claim işlemi yapılacak smart contract adresi.

---

## **Adım 5: Botu Çalıştırma**

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
