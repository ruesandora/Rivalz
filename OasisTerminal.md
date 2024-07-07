# Oasis Terminal
![image](https://github.com/Dwtexe/Rivalz-TerminalAddons/assets/63106683/d27be0f4-e8cd-443a-a067-f7fe3abdb6be)

Oasis Terminal'e hoş geldiniz! Bu README, Ubuntu sisteminde update_token.js ve oasis_terminal.js komut dosyalarının kurulumunu ve kullanımını adım adım açıklayacaktır.

## Gereklilikler
Başlamadan önce, Ubuntu sisteminizde aşağıdaki önkoşulların yüklü olduğundan emin olun:

Node.js\
npm

## Oasis.ai hesabınız yoksa aşağıdaki linkten açın:

[KAYIT OL](https://github.com/ruesandora/Rivalz/blob/main/Yanc%C4%B1klar.md#oasisai)

### Scripti Çalıştıralım
```
wget https://raw.githubusercontent.com/ruesandora/Rivalz/main/oasis.sh
```
>screen oluşturalım:
```
screen -S oasis
```

>oasis dizinine geçin:
```
cd oasis
```

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
Screendan CTRL A + D ile çıkalım.
Artık hazırsınız! Oasis Terminal ile mutlu puan kazanmalar dilerim!
