# React AOS Projesi

Bu proje, React uygulamasında AOS (Animate On Scroll) kütüphanesinin kullanımını göstermektedir. Animasyonları yönetmek için özel hook'lar ve resim yüklenene kadar shimmer (iskelet yükleme) efekti ile şık bir kart bileşeni içerir.

## İçindekiler

- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Bileşenler](#bileşenler)
- [Hook'lar](#hooklar)

## Kurulum

1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/Alperenhks/React-Aos.git
    ```

2. Proje dizinine gidin:
    ```bash
    cd React-Aos
    ```

3. Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

## Kullanım

Geliştirme sunucusunu başlatmak için:
```bash
npm run dev
```

## bileşenler
### Card

Card bileşeni, bir resim, başlık, açıklama ve bağlantı içeren bir kart görüntüler. Resim yüklenene kadar shimmer (iskelet yükleme) efekti kullanır.

### Props

- `image` (`string`): Gösterilecek resmin URL'si.
- `title` (`string`): Kartın başlığı.
- `description` (`string`): Kartın açıklaması.
- `link` (`string`): Kartın butonunun yönlendireceği URL.

### Örnek Kullanım

```jsx
import React from 'react';
import Card from './components/Card'; // Kart bileşeninin yerel veya doğru yolu

function App() {
  return (
    <Card
      image="https://picsum.photos/200/100"
      title="React AOS Demo"
      description="React ile AOS Kütüphanesi kullanımı"
      link="https://michalsnik.github.io/aos/"
    />
  );
}

export default App;
```

### hooklar

### useScrollAnimation

useScrollAnimation hook'u, AOS'u özel seçeneklerle başlatır.

### Parametreler

- `options` (`object`): Aşağıdaki özellikleri içeren bir nesne:
- `duration` `(number`): Animasyon süresi milisaniye cinsinden (varsayılan: 800).
- `easing` (`string`): Easing fonksiyonu (varsayılan: 'ease-in-out').
- `once` (`boolean`): Animasyonun sadece bir kez olup olmayacağı (varsayılan: true).

### Örnek Kullanım

```jsx
useScrollAnimation({ duration: 1000, easing: 'ease-out', once: false });
```
