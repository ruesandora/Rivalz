# Rivalz Testnet CLI

Bu kılavuz, Rivalz istemcisini indirmek ve çalıştırmak için talimatlar ve komutlar sağlar.

## Gereklilikler

- Node.js version 20.0.0
- Yarn or NPM

Node.js ve npm versiyonlarını kontrol etmek için
```
node -v
```
```
npm -v
```

## Yüklemeler

Öncelikle kurulum yapacağımız sunucuda screen açıyoruz
```
screen -S rivalz
```

CLI yüklemek için komutu çalıştıralım
```bash
sudo npm i -g rivalz-node-cli
```
Rivalz'i çalıştırmak için komutu kullanalım ve EVM adresimizi ne kadar cpu ve ram kullanmak istediğimizi yazalım ve ayrıca depolama olarak ne kadar paylaşmak istediğimizi de girelim. Depolamada max gösterdiği total depolama olduğu için ne kadar boş yerimiz olduğunu göz önünde bulundurup yazalım.

```
sudo rivalz run
```

Kurulum başarılı olduysa aşağıdaki gibi bir ekran göreceksiniz

![image](https://github.com/utkubayri/Rivalz/assets/83476028/b69b4c3a-64a8-4e02-bb9e-56a12aa07f76)

CTRL + X Y Enter ile screenden çıkabilirsiniz

**Rivalz Dashboarddan client'i validate etmeyi unutmayın**

Bol puan kasmalar
