
# Fragmentz Auto Claim Bot

Bildiğiniz gibi Rivalz için client çalıştırıyoruz.

Bunun yanında Fragment NFT'leri claim ederek gelecekte Intel Indirimi alacağız.

COMMON, MID, RARE, ULTRA ve HYPER olarak 5 adet NFT özelliği bulunmakta ve bu özelliklerinin her birinin indirim oranı farklı şekilde olmakta. 

NFT'leri claim edebilmek için faucetten alınmış tokeniniz olması gerekmektedir.



## Gereksinimler

- Python 3.9+
- Docker

  
## Kurulum

Eğer tüm gereksinimler yüklüyse öncelikle gerekli dosyalarımızı çekelim.

```bash
git clone https://github.com/Dtractus/DTRivalz.git

```

İndirdiğimiz dosyanın içerisine girelim.

```bash
cd DTRivalz

```

Bağlı olan cüzdanınızdan claim işlemi yapılması için cüzdanınızın private key'i gereklidir. 
Bu private key'i .env dosyası içerisinde saklayacağız.
Buradaki cüzdan/sunucu güvenliği tamamen sizin sorumluluğunuzda, ona göre.

Aşağıdaki kodu kullanarak .env dosyamızın içerisine girelim ve sadece en baştaki PRIVATE_KEY kısmını dolduralım. Herhangi bir şekilde tırnak işareti kullanmanıza gerek yok. 

```bash
nano .env

```

Yazdıktan sonra CTRL + X ardından Y diyerek dosyamızı kaydedelim.

Ardından docker ile built edelim;

```bash
docker build -t dtrivalz .

```

Başarıyla built ettiysek artık çalıştırabiliriz;


```bash
docker run -d --env-file .env --name autofrag dtrivalz

```

Tebrikler, başarıyla container'ı oluşturdunuz. Container'ı kontrol etmek için aşağıdaki komutu kullanabilirsiniz.


```bash
docker logs -f autofrag

```
## Geri Bildirim

Herhangi bir geri bildiriminiz varsa, lütfen dtractus@gmail.com adresinden bana ulaşın.

  
