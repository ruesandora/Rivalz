# Oasis Terminal
![image](https://github.com/Dwtexe/Rivalz-TerminalAddons/assets/63106683/d27be0f4-e8cd-443a-a067-f7fe3abdb6be)

Oasis Terminal'e hoş geldiniz! Bu README, Ubuntu sisteminde update_token.js ve oasis_terminal.js komut dosyalarının kurulumunu ve kullanımını adım adım açıklayacaktır.

## Gereklilikler
Başlamadan önce, Ubuntu sisteminizde aşağıdaki önkoşulların yüklü olduğundan emin olun:

Node.js\
npm

## Oasis.ai hesabınız yoksa aşağıdaki linkten açın:

[KAYIT OL](https://github.com/ruesandora/Rivalz/blob/main/Yanc%C4%B1klar.md#oasisai)

### Node.js ve npm'yi Yükleme

>Bir terminal penceresi açın.\
>Paket listelerini güncellemek için aşağıdaki komutu çalıştırın:
```
sudo apt update
```

Node.js ve npm'yi yüklemek için aşağıdaki komutu çalıştırın:
```
sudo apt install nodejs npm
```
> Yüklemeyi doğrulamak için sürümleri kontrol edin:
```
node -v
npm -v
```

## Kurulum

### Bağımlılıkları Yükleme
Komut dosyaları birkaç npm paketine dayanır. Bunları yüklemek için aşağıdaki adımları izleyin:

>Bir terminal penceresi açın.\
>Komut dosyalarını depolamak istediğiniz dizine gidin.\
>Gerekli paketleri yüklemek için aşağıdaki komutu çalıştırın:\
```
npm install axios readline-sync figlet ws
```

### Oasis Dizinini Oluşturma

>Terminalde, oasis dizinini oluşturmak istediğiniz dizine gidin.\
>Dizini oluşturmak için aşağıdaki komutu çalıştırın:\
```
mkdir oasis
```
>oasis dizinine geçin:
```
cd oasis
```

### Komut Dosyalarını Oluşturma

>Yeni bir terminal penceresi veya sekmesi açın.\
>update_token.js dosyasını Nano metin düzenleyicisinde oluşturmak ve açmak için aşağıdaki komutu çalıştırın:\
```
nano update_token.js
```
>Repodaki update_token.js komut dosyasının içeriğini Nano düzenleyicisine kopyalayıp yapıştırın.\
>Değişiklikleri kaydetmek ve Nano'dan çıkmak için Ctrl+X, ardından Y ve son olarak Enter tuşlarına basın.\
>oasis_terminal.js dosyası için bu bu adımları tekrarlayın.

### Kullanım
Tokeni Güncelleme

>Terminalde oasis dizinine gidin.\
>update_token.js komut dosyasını çalıştırmak için aşağıdaki komutu çalıştırın:\
```
node update_token.js
```
E-postanızı, şifrenizi ve istemci adınızı girmek için istemleri izleyin.
Komut dosyası giriş yapacak, uzantı tokenini alacak ve bu token ile database.js dosyasını oluşturacaktır.

### Oasis Terminal'i Çalıştırma

>Terminalde hala oasis dizininde olduğunuzdan emin olun.\
>Oasis Terminal'i başlatmak için aşağıdaki komutu çalıştırın:\
```
node oasis_terminal.js
```
Artık hazırsınız! Oasis Terminal ile mutlu puan kazanmalar dilerim!
