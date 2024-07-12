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

CTRL + A D Enter ile screenden çıkabilirsiniz

**Rivalz Dashboarddan client'i validate etmeyi unutmayın**

Validate edilemeyen ve dashboard bozuk olanlar için bu linki yeni sekmede cüzdan adresinizi slash'den sonrasına ekleyip enter yaparsanız validate etmiş olursunuz. Daha sonrasıda Rivalz dashboard'a dönüp f5 atarsanız dashboard düzelmiş olmalıdır. Not: Modified Count yeni validate edilen node sayısını verir.

<img width="210" alt="Ekran Resmi 2024-07-12 23 24 11" src="https://github.com/user-attachments/assets/6f6feeef-7b4b-43e4-ad0f-a1460e087d59">

```
https://be.rivalz.ai/api-v1/orbit-db/verify-orbit-db/<cüzdan-adresi>
```
Bol puan kasmalar
