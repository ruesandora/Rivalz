<h1 align="center">Nodepay Konsol İle Yenileme</h1>
    
> Rivalz sunucumuza girip, Edge'yi açıyoruz.
> Arama yerine aşağıdaki linkleri yapıştırıyoruz.
> 
![nodepay1](https://github.com/ferdiyalcin/Rivalz/assets/108075007/87a0f49d-f21d-40e9-92b4-534716787559)

> Nodepay : 
```
extension://lgmpfmgeabnnlemejacfljbmonaomfmm/index.html
```
> Oasis :

```
extension://knhbjeinoabfecakfppapfgdhcpnekmm/index.html
```

> Ardından açılan sayfada F12'ye basıyoruz.
> Open DevTools diyerek konsolu açıyoruz.
> 
![nodepay2](https://github.com/ferdiyalcin/Rivalz/assets/108075007/e5b12f8f-d93d-40b7-9fa7-b06f0d3c4598)



> Konsol kısmına yapıştırma izni vermek için aşağıdaki kodu yapıştırıyoruz ve Enter'a basıyoruz.
```
allow pasting
```
<!-- ![image](https://github.com/awelmisin/Rivalz/assets/73443933/72cb8fa9-4079-47f1-a41f-5b609cc4a3a1) -->

> Bu kodu yapıştırıyoruz ve Enter'a basıyoruz.
> > Not : Kodun yenileme süresi default olarak 5 dakika. `setInterval(updateIframe, 300000);` bu kısmı ms cinsinden düzenleyebilirsiniz.


```
// Mevcut body içeriğini iframe ile değiştirir ve her 5 dakikada bir yeniler
function updateIframe() {
  // Eski iframe'i kaldırır
  const oldIframe = document.getElementById("testFrame");
  if (oldIframe) {
    oldIframe.remove();
  }

  // Yeni iframe oluşturur ve ekler
  document.getElementsByTagName("body")[0].innerHTML = `
    <iframe id="testFrame" src="${window.location.toString()}" style="position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;">
    </iframe>
  `;
}

// 5 dakikada bir (300000 milisaniye) updateIframe fonksiyonunu çalıştırır
setInterval(updateIframe, 300000);

// İlk çalıştırma
updateIframe();
```
#
>Yukarıdaki işlemleri aynı şekilde chrome'da yapabilirsiniz.

> Nodepay : 

```
chrome-extension://lgmpfmgeabnnlemejacfljbmonaomfmm/index.html
```
> Oasis :

```
chrome-extension://knhbjeinoabfecakfppapfgdhcpnekmm/index.html
```

`This page has been blocked by an extension` şeklinde uyarı geliyorsa, uzantıyı kapatıp açın.
#
>İşlemler bu kadardı. Sonrasında sayfayı o şekilde bırakıp bağlantıyı koparıyoruz.
