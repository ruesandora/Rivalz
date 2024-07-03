> Hem rivalz çalışırken hem de yanında birden fazla proje çalıştırabilirsiniz.

> Bunun için rivalz gerekmez, başka sunucuya da yapabilirsiniz veya bilgisayara - sadece alternatif.

#

> 3 Projemiz var:

> [Nodepay](https://app.nodepay.ai/register?ref=pvAqqadUHkSZcrP) 

> [OasisAI](https://r.oasis.ai/rues)

> [Network3](https://account.network3.ai/register_page?rc=6ef6d1a8)

#

## Nodepay

> Hesap oluşturduktan sonra connect diyoruz ve bize extensionu kurduruyor.

> Auto refresher (bu repoda mevcut) ile nodepayı aktif tutmaya çalışabilirsiniz.

> Ayrıca sağ üstten `ItsClassified` ve `SendN_des` voucher puanlarınızı alabilirsiniz. (Sınırlı sayıda) 

#

## OasisAI

> [Buradan](https://r.oasis.ai/rues) bir hesap oluşturup, extensionu kuruyorsunuz.

> Çalıştırdıktan sonra chrome/edge kapatmayın.

> Extension sağ üstten böyle yapın:

![image](https://github.com/ruesandora/Rivalz/assets/101149671/04a5f8a7-58a8-4137-80b9-1bc63d1af978)

#

## Network3

<details>
  <summary> <h1> Ubuntu kurulumu </summary> </h1>

  > Terminalimizi açalım ve komutlarımızı girelim.
```console
# Network3 yükleyelim. 
wget https://network3.io/ubuntu-node-v1.1.tar
tar -xf ubuntu-node-v1.1.tar
cd ubuntu-node
# port açalım
sudo ufw allow 8080
# nodemuzu başlatalım
sudo bash manager.sh

```
> Kendi bilgisayarımıza geçelim ve tarayıcıya girelim.

> [Buradan](https://account.network3.ai/register_page) bir hesap oluşturalım ya da varsa giriş yapalım. 

> Linkte sunucuip'mizi düzenleyip tarayıcıda aratalım.

> https://account.network3.ai/main?o=sunucuip:8080

> Aşağıdaki resimdeki + butonuna basalım.

![image](https://github.com/janjakrosso/Rivalz/assets/121451942/222b0ee5-f2dd-4165-b19f-3a2cea49f7bd)

>Butona basınca bizden private key isteyecek şimdi onu alacağız. Terminale dönüyoruz.

```console
sudo bash manager.sh key
```
>Private keyimizi aldık tarayıcıya dönüp yapıştıralım. Aşağıdaki resimdekini gördüyseniz kurulum tamam.

![Ekran görüntüsü 2024-07-03 182243](https://github.com/janjakrosso/Rivalz/assets/121451942/6230ad28-d4ed-4516-b94a-f0c9ba094db8)

> Ayrıca node'u durdurmak için

```console
cd ubuntu-node
sudo bash manager.sh down
```



</details>

<details>
  <summary> <h1> Windows kurulumu </summary> </h1>

> Bir hesap oluşturun ve bağlanın.

> Sunucunuzun içinde [bu](https://network3.ai/) websiteyi açın.

> Rivalz ise Windowsu seçerek indirin ve setup yapın dosyadan ve bağlanın.

> Bir kaç dakika sonra hesabınız Connected olacaktır.

#

> indiriken problem yaşarsanız.

> Windows ayarlarından bunu açın:

![image](https://github.com/ruesandora/Rivalz/assets/101149671/97a811bc-a6c0-406f-8e80-994f9b55cd56)

</details>

