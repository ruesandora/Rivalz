<h1 align="center">Rivalz Client Linux CLI / Ubuntu </h1>

> selams, ubuntu / linux CLI üzerinde nasıl RClient açabileceğinizi göstereceğim. Ben PoyrazHosting kullanıyorum, diğer hostlarda denemedim. Deneyen arkadaşlar PR atabilirler.
> 
> ihtiyacınız olan şeyler, bir ubuntu 22.04 sunucusu (20.04 çalışır belki? denemedim.) ve MobaXTerm programı.
> 
> hadi başlayalım.

#
<details>
  <summary> <h1> Ubuntu Sunucu Kurulumu </summary> </h1>
    <h1 align="center">Sadece Ubuntu için geçerlidir</h1>
    
> Sunucuya bağlandığınızı farz ederek devam ediyorum.
> Sunucu güncelleme, libfuse2 ve gereklilikleri yüklüyoruz.
```
sudo apt update -y && sudo apt upgrade -y
```
```
sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev libnss3-dev libfuse2
```
![image](https://github.com/awelmisin/Rivalz/assets/73443933/72cb8fa9-4079-47f1-a41f-5b609cc4a3a1)

> ekran açalım.
```
screen -S rivalz
```

> rivalz clienti indirelim.
```
wget https://api.rivalz.ai/fragmentz/clients/rClient-latest.AppImage
```
![image](https://github.com/awelmisin/Rivalz/assets/73443933/c1393ff3-f43b-4b3b-8620-79db8c937b50)

> indirdiğimiz dosyayı executable yapalım.
```
chmod +x rClient-latest-appImage
```
![image](https://github.com/awelmisin/Rivalz/assets/73443933/cb35396c-4c4b-4f16-ad0a-ab7ed3ca0501)

> dosyayı açalım.
```
  ./rClient-latest.AppImage --no-sandbox
```
![image](https://github.com/awelmisin/Rivalz/assets/73443933/e556d8ba-64d0-4bf9-aec6-02beb0ae9fb4)
> bir sorun çıkmaz ise karşınıza bu ekran gelecek.
> 
> bundan sonra storage belirleyip, wallet girerek yapabilirsiniz. tebrikler! linuxda rclient açabiliyorsunuz artık.

![image](https://github.com/awelmisin/Rivalz/assets/73443933/0ab8f196-0c17-44bc-b536-e1a25445357a)

