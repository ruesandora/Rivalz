> Rivalz sunucularınızda Asissterr otomatik claimlesin siz uğraşmayın.

> Edge'den [Asissterr](https://x.com/Ruesandora0/status/1808228728889033005)'i açın.

> Phantom ile bağlanın ve bir extensionda oto claim'i kurun alttaki kod iile.

#

```
function dailyClaim() {
    // Butonun sınıf adını kullanarak butonu seç
    var claimButton = document.querySelector("button.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.disabled\\:pointer-events-none.disabled\\:opacity-50.focus-visible\\:outline-\\[darkgrey\\].border.border-input.bg-background.hover\\:bg-accent.hover\\:text-accent-foreground.h-10.px-4.py-2.mt-4.md\\:mt-12.max-w-96.w-full");
    
    if (claimButton) {
        claimButton.click();
        console.log("Daily claim yapıldı");
    } else {
        console.log("Daily claim butonu bulunamadı");
    }
}

// 12 saatlik (43200000 ms) süreyle tekrarla
setInterval(dailyClaim, 43200000);

// İlk başlatma
dailyClaim();
```

#

![image](https://github.com/ruesandora/Rivalz/assets/101149671/b484022a-82b2-4d92-a2d0-b5be37db345d)

Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and hit Enter to allow pasting.Understand this warning
hatası alanlar consola allow pasting yazarak hatayı geçebilir.
