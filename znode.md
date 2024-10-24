# Rivalz ZNODE Kurulumu

## Gereklilikler

Node.js ce npm kurulumu. Yüklü değilse kurulum yapın.

```
curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install v20.10.0
nvm use v20.10.0
npm install -g npm@latest
```

## Yüklemeler

Öncelikle kurulum yapacağımız sunucuda screen açıyoruz

```
screen -S rivalz
```

CLI yüklemek için komutu çalıştıralım

```bash

npm i -g rivalz-znode-cli


```

## Delegate Node

Alttaki kodu çalıştırın.

```
znode run

```

size bir node id verecek. [ZNODE](https://znode.rivalz.ai/znode) sayfasına gidin. Cüzdan bağlantılarını yaptıktan sonra kaç tane node aldıysanız her birisi için ayrı NFT burada gözükecek. Adığınız NODE ID yi ilgili kısıma yazdıktan sonra Token Amount'a kaç znode çalıştıracağınızı yazıyorsunuz. Delegate diyip cüzdandan onay verin. Başarılı olduktan sonra terminale dönüp tekrar aşağıdaki kodu çalıştır.

```
znode run

```

CTRL + A D ile screenden çıkabilirsiniz.
