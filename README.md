<h1 align="center">Rivalz</h1>

> Selamlar, teşvikli Rivalz node va app testleri yaptım. Katılırken bir çok şey öğreneceğinizi düşünüyorum

> Ben hetzner'den yaptım bunu fakat kendi sunucu sağlayacınızda da benzer şeyleri yaparsınız (olmadı contabocular pR atar)

> Donanım kısmı için her sunucu olur, sunucunuz ne kadar iyise o kadar rewards demek, miner olcaz sonuçta..

#
<details>
  <summary> <h1> Hetzner VPS Windows Kurulumu</summary> </h1>
    
<h1 align="center">Sadece Hetner VPS için geçerlidir</h1>


> Windows Server 2019 Englishi bul - Mouth butonuna tıkla - 3. numarada ki ikona tıkla ve sunucuna bağlan

![image](https://github.com/ruesandora/Rivalz/assets/101149671/d0ea7c04-2998-4447-bf6e-62610b76ee5d)

> Açılan yeni sekmede sunucu bilgilerinizi girmenizi isteyecek. 

> Açılan sekmede Ctrl + Alt + Del butonu var sağ altta, tıklıyoruz sonrasında windows kurulumu başlayacak.

> Gui seçeneğini seçmeyi unutmuyoruz.

> Sonrasında mavi arkaplanlı kısıma geçicek hiç bir ayarı değiştirmeden Nexte bas ardından Install Now butonuna tıklıyoruz. 

> Sonrasında 2. sıradaki Desktop Experince yazana tıklıyoruz.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/a09a37af-48c8-43ce-9ae8-007e65ed306f)

> Sonraki aşamada Custom: Install Windows only yazana tıkla ve Hetzner paneline geri dön. 

> Bu sefer Iso Images kısmına Virtio yazın ve fotodaki işaretli sürümü mounth edin.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/0c2b193d-aa76-477a-8a4a-e9aef71dc765)

> Sunucuya geri dönün ve Load Driver butonuna tıklayın, ardından görseldeki sürümü seçin.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/c016e3b3-fff5-4831-8c0d-cff468c3091f)

> 3 Tane Driver göreceksiniz 3üne de delete işlemi yapın.

> Silme işlemi bittikten sonra New butonuna tıkla ve herhangi bir ayarı değiştirmeden direk Apply butonuna basalım. 

> Sonrasında gelen uyarıda yes butonuna tıklayalım.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/3ca7fb7d-0860-4035-a86f-d91817ef8d5e)

> Şimdi Hetzner Paneline tekrar dönüyoruz Iso images kısmına tıklıyoruz.

> Ve arama yerinden Windows Server 2019 Englishi tekrar mounth et.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/ad01131d-99ff-4db5-88fb-4b749bbe2b9b)

> Sunucuya geri dön, Refresh butonuna bas Next butonuna bas. Windowsun kurulmasını bekle.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/a07cb8bb-9327-4d1b-9fc5-e9e759c981e6)

> Sunucumuza off/on yapıyor tekrar bağlanıyoruz.

> Akabinde şifre belirleme alanı geliyor burda 8 haneli bir şifre girin büyük harf istiyor

![image](https://github.com/ruesandora/Rivalz/assets/101149671/8d513ee7-7302-47b4-8a31-0fa04f5c2d61)

> Windowsun kilit ekranı kısmına geldiğinizde sağ alttaki Ctrl + Alt + Del butonuna tıklayın ve masaüstüne geçiş yapın. 

> İlk açılışta Server Manager kısmı açılıyor. Alttaki görseli takip edin 3 ve 4. kısımdaki tikler fotodakiyle aynı olsun.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/8f38a679-dea8-49a9-b931-4b01994a5173)

> Kurulum Aşaması bitti şimdi Ayar kısımlarına geçiyoruz.

> Hetznere geri dönün ve Iso Images kısmından bu sefer Virtio win 248i mounth edin

![image](https://github.com/ruesandora/Rivalz/assets/101149671/210356bd-462c-43db-b27e-f04487dce13a)

> Sunucuya geri dönün Windows logosuna sağ tıkla ve Device Manageri seç.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/9fb7f205-719c-481f-8051-ad88603a0328)

> Açılan ekranda Other Devices bölümünde 3 veya 4 tane Sarı ünlem görüyorsunuz

> Önce Ethernet yazana sağ tık yapın ve update driverse tıklayın.

> Browse my computer... yazanı seç ve fotoğraftaki adımları takip et

![image](https://github.com/ruesandora/Rivalz/assets/101149671/acc911b3-fcfb-4570-9614-c7f9e2e9623f)

> Sağ kısımda Mavi panel açılacak Network başlıklı, Yes butonuna basın. 

> Geri kalan 2 veya 3 Adet sarı ünleme aynı işlemleri yapın.

#

> Windows logosuna tıklayın ve arama yerine Remote Desktop Settings yazın.

> Açılan ekrandaki Enable Remote Desktop kısmını aktif edin.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/448d8fd2-e841-4719-b95b-a765faf9e707)


> Kişisel bilgisayarınızda Uzaktan Masaüstü bağlantı programı var onu açın.

> Mac'de Microsoft Remote Desktop - Windows'da Windows Remot isminde olmalı.

> Sunucu bilgilerinizi yazıp bağlanın.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/90d5a984-c824-4834-9966-835fc4cee65d)
</details>

<details>
  <summary> <h1> Contabo VPS Windows Kurulumu</summary> </h1>
    
<h1 align="center">Sadece Contabo VPS için geçerlidir</h1>

> Bu işlem için contabo  Aylık 1.5$ istiyor. Normalde Contaboya Windows kurmak isterseniz 6$ masraf çıkartıyor ama bu yöntemle bunu 1.5$a düşebiliyorsunuz.

> Contabo hesabınıza giriş yapın, Control panelinden Custom Imagese tıklayın. Add Custom image butonuna tıklayın

> Bilgilendirme mesajı gösterirse yes diyip geçin 1. kısımda anlattığım şeyi söylüyor size.

> Karşınıza açılan Panelde verdiğim bilgileri girin.

> Image URL: https://archive.org/download/newIsoForContabo/newIsoForContabo.iso
>
> Image Name: Windows Contabo
>
> Os Type: Windows
>
> Version: 2019
>
> Description: Rues
![image](https://github.com/enzifiri/Rivalz/assets/76253089/71a3ff23-0075-4abc-934a-c6208623d7ac)

> Upload butonuna basın ve dolmasını bekleyin. Bu adımda yüklenmesi contabodan kaynaklı olarak 1-2 saat sürebiliyor. Yüklendikten sonra diğer adıma geçin.

# Kurduğumuz İso dosyasını sunucuya mounth etme adımı
> Vps kontrol kısmına gidin, Önce Cloud init kısmını yeşil yapın, sonra Re install butonuna basın.
![image](https://github.com/enzifiri/Rivalz/assets/76253089/d00b1652-51e7-4239-9ce6-5333a1adcf60)

> Görseldeki adımları sırasıyla yapın.
> Windows Contaboyu seçtikten sonra Install butonuna basın. 5 Dakika sonra bir sonraki adıma geçin.
![image](https://github.com/ruesandora/Rivalz/assets/76253089/ea4eac88-f4a9-4291-b9e1-bb7a4fd854bf)


# Windows kurulumu başlayacak, şimdi VNC ile sunucumuza bağlanmamız gerekiyor. 
> Windows pc kullanıyosanız Mobaxterm ile bağlanabilirsiniz.
> New Session oluşturup VNCyi seçin, VNC bağlantı bilgilerinizi bir sonraki adımda nasıl öğrenebileceğinizi göstericem.
![image](https://github.com/enzifiri/Rivalz/assets/76253089/ee192e2b-1ded-48fc-b558-109a04c2a553)

# VNC bilgilerinim nerede?

> VPS control kısmında sunucunuzu bulun ve manage butonuna tıklayın VNC Informationda bilgileriniz yazıyor.

> VNC ile bağlanınca mouse sıkıntısı oluyor, bu yüzden mouse kullanmak yerine TAB tuşu ve Enter tuşu ile gerekli işlemleri yapabilirsiniz.
![image](https://github.com/enzifiri/Rivalz/assets/76253089/cc81709b-df3b-49e6-94e4-0b3f1717dfa3)

# Windows Kurulumunu tamamlayalım.

> Mavi arkaplanlı kısım gelecek hiç bir ayarı değiştirmeden Nexte bas ardından Install Now butonuna tıklıyoruz. 

> Sonrasında 2. sıradaki Desktop Experince yazana tıklıyoruz.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/a09a37af-48c8-43ce-9ae8-007e65ed306f)

> Sonraki aşamada Custom: Install Windows only yazana tıklayın.

> Bu kısımı lütfen iyi okuyun atlarsanız diskiniz gözükmeyecektir.

> Load Driver butonuna tıklayın
> Browse butonuna tıklayın ve ardından D: disketindeki (177 ile başlayan) > virio-win klasörü > amd64 > 2k19 klasörünü seçin ve Ok butonuna tıklayın.
> Eğer doğru klasörünü seçtiyseniz Red Hat SCSI ... ile başlayan bir text gelecek onu seçip next butonuna bas.

![image](https://github.com/enzifiri/Rivalz/assets/76253089/1fc9b04f-d7f9-4bbf-9677-3e0f2a89e0dc)

> New butonuna bas, hiç bi ayar değişmeden Apply butonuna bas ve Next yap.

![image](https://github.com/enzifiri/Rivalz/assets/76253089/7a6a13cb-72c5-4cd7-940d-dd0a8043e613)

> Sunucumuza off/on yapıyor tekrar bağlanıyoruz. (EĞER SİYAH EKRANDA KALDIYSANIZ BUNU YAPIN NORMALDE OTOMATİK YAPIYOR)

> Akabinde şifre belirleme alanı geliyor burda 8 haneli bir şifre girin büyük harf istiyor

![image](https://github.com/ruesandora/Rivalz/assets/101149671/8d513ee7-7302-47b4-8a31-0fa04f5c2d61)

> Windowsun kilit ekranı kısmına geldiğinizde sağ alttaki Ctrl + Alt + Del butonuna tıklayın ve masaüstüne geçiş yapın.
![image](https://github.com/enzifiri/Rivalz/assets/76253089/1796694a-5a90-479d-9c98-6682684c5a3b)

> İlk açılışta Server Manager kısmı açılıyor. Alttaki görseli takip edin 3 ve 4. kısımdaki tikler fotodakiyle aynı olsun.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/8f38a679-dea8-49a9-b931-4b01994a5173)

# Windows Server Ayarlarımızı tamamlayalım. 

> Şifreyi ayarlayıp giriş yaptıktan sonra Windows logosuna sağ tıkla ve Device Manageri seç.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/9fb7f205-719c-481f-8051-ad88603a0328)

> Açılan ekranda Other Devices bölümünde 3 veya 4 tane Sarı ünlem görüyorsunuz

> Önce Ethernet yazana sağ tık yapın ve update driverse tıklayın.

> Browse my computer... yazanı seç ve fotoğraftaki adımları takip et

![image](https://github.com/enzifiri/Rivalz/assets/76253089/e207a615-4ac1-40fb-a087-b1fe919b1660)


> Sağ kısımda Mavi panel açılacak Network başlıklı, Yes butonuna basın. 

> Geri kalan 2 veya 3 Adet sarı ünleme aynı işlemleri yapın.

#

> Windows logosuna tıklayın ve arama yerine Remote Desktop Settings yazın.

> Açılan ekrandaki Enable Remote Desktop kısmını aktif edin.

![image](https://github.com/ruesandora/Rivalz/assets/101149671/448d8fd2-e841-4719-b95b-a765faf9e707)


> Kişisel bilgisayarınızda Uzaktan Masaüstü bağlantı programı var onu açın.

> Mac'de Microsoft Remote Desktop - Windows'da Windows Remot isminde olmalı.

> Sunucu bilgilerinizi yazıp bağlanın.
> Kullanıcı Adı: Administrator
> Şifre: Windows kururken girdiğiniz şifre
![image](https://github.com/enzifiri/Rivalz/assets/76253089/454b08a5-bdf5-4c1b-b9a9-3b31cc7ac67b)

# Windows kurulumu bitti, Şimdi Rivalz Nodeu kurmaya devam edebilirsiniz.

</details>

# Rivalz Node Kurulumu

> Rivalz hesap açıyoruz [buradan](https://rivalz.ai?r=Ruesandora0)

> Burada cüzdan, twitter ve discord her şey bağlayın.

#

> Remote ile bağlandığımız ekrana geri dönüyoruz.

> Microsoft Edge'i indiriyoruz Remota'a (suncuya)

> rivalz.ai sitesine girip dowland windows diyoruz

> Kurulumu yapıyoruz

#

> Kurulum tamamlandıktan sonra, önce metmaask cüzdan adresimizi giriyoruz

> Storage Control'den free space neye müsade ediyorsa o rakamı giriyoruz

> Sonra başlatıyoruz node'u ve hayırlı olsun.

>  rClient uygulamasında sol üstte view sekmesi var oradan reload'a basıp, node'u tekrar çalıştırın

<img width="1251" alt="Ekran Resmi 2024-05-25 00 38 38" src="https://github.com/ruesandora/Rivalz/assets/101149671/cdf68d07-c897-4e5a-93d8-b34e2c4a82ee">

#

> Akabinde rivalz'da LOYALTY NFTs kısmını yapmayı unutmayın mintlein 10 NFT'yi.

> Rivalz hakkında link paylaşmak isterseniz [burayı](https://t.me/ruesshare/21528) kullanabilirsiniz.
