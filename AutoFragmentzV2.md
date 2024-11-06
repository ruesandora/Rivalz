# **Rivalz Fragmentz v2 Oto Claim Bot**

Bu repo, **Rivalz AI** platformunda **Fragmentz v2** token'larını otomatik olarak mintlemek (claim etmek) için geliştirilmiş bir Python botudur. Bot, kullanıcıya kolay bir kurulum ve kullanım deneyimi sunmayı amaçlar.

## **Özellikler**

- **Rainbow Wallet**'ı otomatik olarak indirir, başlatır ve cüzdanı içe aktarır.
- **Rivalz2** ağını cüzdana ekler.
- Web3 ile cüzdan bakiyesi sorgulaması yapar.
- **Fragmentz v2** token'larını mintler (claim eder).
- Kullanıcıdan sadece gerekli bilgilerin girilmesini bekler ve tüm işlemleri otomatik olarak yapar.

---

## **Gereksinimler**

### **Yazılım Gereksinimleri**
Botu çalıştırmak için aşağıdaki yazılımlar gereklidir:

- **Python 3** (Python 3.6 ve üzeri - Otomatik yüklenir)
- **pip** (Python paket yöneticisi - Otomatik yüklenir)
- **Gerekli pip Paketleri** selenium web3 python-dotenv webdriver-manager pyvirtualdisplay termcolor (Otomatik yüklenir)
- **Google Chrome** (Chrome tarayıcısı - Otomatik yüklenir)
- **ChromeDriver** (Webdriver - Otomatik yüklenir)
- **Xvfb Sanal Ekran** (Otomatik yüklenir)
- **Rainbow Wallet** Chrome uzantısı (Otomatik yüklenir)

### **Kurulum Adımları**

Aşağıdaki adımları izleyerek gerekli yazılımları otomatik olarak kurabilir ve botu çalıştırabilirsiniz.

---

### **1. Otomatik Kurulum için Script Kullanımı**

#### **Linux/Mac Kullanıcıları için**

Linux veya Mac işletim sisteminde kurulum ve çalışma için aşağıdaki script'i kullanabilirsiniz:

1. Repoyu sunucunuza klonlayın:
   ```bash
   git clone https://github.com/mehmet0150/Rivalz-Oto-Claim.git
   ```
2. Yeni bir screen oluşturun:
   ```bash
   screen -S fragmentz-mk
   ```
3. ilgili klasöre girin:
   ```bash
   cd Rivalz-Oto-Claim
   ```
4. Otomatik kurulum dosyasına gerekli yetkiyi verin ve çalıştırın:
    ```bash
    chmod +x install_and_run.sh  # Script'e çalıştırma izni ver
    ./install_and_run.sh  # Script'i çalıştır
    ```
5. Bot çalışmaya başladıktan sonra screen'den `ctrl` + `c` ile çıkış yapın.

6. Botun çalışması için gerekli olan **Rivalz test ethereumlarını** cüzdanınıza sıklıkla almayı unutmayın.

### **2. .env Dosyasını Oluşturma ve Dosyanın İçeriği**

Script çalıştırıldığında öncelikle gerekli yazılımları kuracak ardından kullanıcıdan **Private Key** ve **Password** bilgileri istenecektir. Bu bilgiler `.env` dosyasına kaydedilecektir.

Botun çalışabilmesi için aşağıdaki iki bilgi script tarafından `.env` dosyasına otomatik olarak eklenecektir:

- **PRIVATE_KEY**: Fragmentz v2 için kullanmak istediğiniz cüzdanınızın private key'i. Bu, Web3 ile cüzdanı içe aktarmak için gereklidir.
- **PASSWORD**: Rainbow Wallet cüzdanının şifresi.

Örnek `.env` dosyası:

```env
PRIVATE_KEY=your_private_key_here
PASSWORD=your_wallet_password_here
```
Script'in sonunda bot otomatik olarak çalışacaktır.

**Not: Cüzdanınızın güvenliği tamamen size aittir. Otomasyon verdiğiniz Private Key ile sadece mintleme işlemi yapmak üzere tasarlanmıştır. Bu botu indirip kullanıyorsanız bu sorumluluğu alıyorsunuz demektir.**

---

### **Kodun Çalışması**

#### **Botun Adımları:**

1. **Rainbow Wallet**'ı başlatır ve cüzdanınızı içe aktarır.
2. **Rivalz2** ağını cüzdanınıza ekler.
3. **Cüzdan bakiyesi** sorgulanır (Rivalz eth_balance).
4. **Fragmentz v2 mintleme** işlemi yapılır.
5. Tüm bu işlemler başarıyla tamamlandıktan sonra, bot otomatik olarak bekleme durumuna geçer ve bir soanraki mintleme zamanını beklemeye başlar. İşlemler sırasında beklenmeyen bir hata oluşursa bot sona erer. Zaman zaman botu kontrol etmeniz sorunlara erken müdahale etme imkanı sağlar.

#### **Scriptin Çalıştırılması:**

Botu ilk çalıştırmada **install_and_run.sh** (Linux/Mac) ile başlatmanız gerekir. Bot, gerekli yazılımları yükleyecek, `.env` dosyasını oluşturacak ve ardından işlemlere başlayacaktır. Otomasyon herhangi bir zamanda hata verip kapanırsa **Rivalz-Oto-Claim** klasöründe olduğunuzdan emin olduktan sonra **./rivalz-oto-claim.py** komutu ile tekrar çalıştırabilirsiniz. Eğer her şey doğru şekilde yapılandırıldıysa mintleme işlemleri kaldığı yerden devam edecektir.

---

## **Yazılımın Çalışması**

### **Otomasyon Adımları ve İşleyişi:**

1. **Rainbow Wallet Setup**: Rainbow Wallet cüzdanınız otomatik olarak içe aktarılır. Private Key ve Password bilgilerinizi kullanarak cüzdanı güvenli bir şekilde cüzdana aktarırsınız.
   
2. **Yeni Ağ Ekleme**: `Rivalz2` ağı cüzdanınıza otomatik olarak eklenir.

3. **Cüzdan Bağlantısı**: Bot, cüzdanınızı Rivalz platformuna bağlar.

4. **"Rivalz ETH" Bakiye Sorgulama**: Yeterli "Rivalz ETH" bakiyesi olup olmadığı sorgulanır. İşlem ücretlerini karşılayacak yeterli ETH yoksa, bot 30 saniye aralıklarla bakiye kontrolü yapar. Yeterli bakiye oluşması durumunda işlemlerine otomatik olarak devam eder.

5. **Fragmentz v2 Mintleme**: Yeterli ETH bakiyesi varsa, Fragmentz token'larını mintleme işlemi başlatılır. 

   - **Mintleme Sayısı**: Bot, mintlenebilir Fragmentz sayısını kontrol eder.
   - **Mintleme**: Token'lar başarılı bir şekilde mintlendikten sonra, işlem tamamlanır.

---

## **Sorun Giderme (Troubleshooting)**

Eğer bot çalışırken herhangi bir sorunla karşılaşırsanız, aşağıdaki adımları izleyebilirsiniz:

1. **Python veya pip eksikse**: Script, eksik Python veya pip'i otomatik olarak yüklemeyi deneyecektir.
2. **ChromeDriver Hatası**: Eğer ChromeDriver ile ilgili bir hata alırsanız, bot otomatik olarak gerekli sürümü yüklemeye çalışacaktır.
3. **Cüzdan Bağlantısı Sorunu**: Eğer cüzdanınız bağlanmazsa, `.env` dosyasındaki bilgileri tekrar kontrol edin ve doğru girildiğinden emin olun.

---

Bu README, botun nasıl kurulacağını, çalıştırılacağını ve yapılandırılacağını adım adım açıklar. Yalnızca belirtilen script'leri çalıştırarak, botu kolayca kurabilir ve kullanabilirsiniz.

