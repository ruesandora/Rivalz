# Rivalz Testnet CLI

Bu kılavuz, Rivalz istemcisini indirmek ve çalıştırmak için talimatlar ve komutlar sağlar.

## Gereklilikler

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc

nvm install 20.0.0
nvm use 20.0.0
```

## Yüklemeler

Öncelikle kurulum yapacağımız sunucuda screen açıyoruz
```
screen -S rivalz
```

CLI yüklemek için komutu çalıştıralım
```bash
npm i -g rivalz-node-cli
```
Rivalz'i çalıştırmak için komutu kullanalım ve EVM adresimizi ne kadar cpu ve ram kullanmak istediğimizi yazalım ve ayrıca depolama olarak ne kadar paylaşmak istediğimizi de girelim. Depolamada max gösterdiği total depolama olduğu için ne kadar boş yerimiz olduğunu göz önünde bulundurup yazalım.

```
rivalz run
```

Kurulum başarılı olduysa aşağıdaki gibi bir ekran göreceksiniz

![image](https://github.com/utkubayri/Rivalz/assets/83476028/b69b4c3a-64a8-4e02-bb9e-56a12aa07f76)

CTRL + X Y Enter ile screenden çıkabilirsiniz

**Rivalz Dashboarddan client'i validate etmeyi unutmayın**

Bol puan kasmalar
