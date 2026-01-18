# Profuture

Next.js tabanlı modern bir dergi/makale platformu frontend uygulaması.

## 🚀 Teknolojiler

- **Next.js** 16.1.2 - React framework
- **React** 19.2.3 - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **SCSS/Sass** - Stil yönetimi
- **Bootstrap** 5.3.3 - CSS framework
- **React Bootstrap** 2.10.2 - Bootstrap React bileşenleri

## 📋 Gereksinimler

- Node.js 20 veya üzeri
- npm, yarn veya pnpm

## 🛠️ Kurulum

Projeyi klonlayın ve bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
# veya
pnpm install
```

## 🏃 Geliştirme

Geliştirme sunucusunu başlatın:

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📦 Build

Production build oluşturmak için:

```bash
npm run build
# veya
yarn build
# veya
pnpm build
```

Build'i çalıştırmak için:

```bash
npm run start
# veya
yarn start
# veya
pnpm start
```

## 🧹 Kod Kalitesi

Kodu formatlamak için:

```bash
npm run format
# veya
yarn format
```

Format kontrolü için:

```bash
npm run format:check
# veya
yarn format:check
```

Lint kontrolü için:

```bash
npm run lint
# veya
yarn lint
```

## 📁 Proje Yapısı

```
zepline-case-front/
├── app/                    # Next.js App Router
│   ├── home/              # Ana sayfa ve bileşenleri
│   │   └── _components/   # Sayfa özel bileşenler
│   │       ├── Hero/      # Hero bölümü
│   │       ├── JournalIssues/  # Dergi sayıları
│   │       ├── LatestArticles/ # Son makaleler
│   │       └── SendArticle/    # Makale gönderme
│   ├── layout.tsx         # Ana layout
│   └── page.tsx           # Root sayfa
├── components/            # Yeniden kullanılabilir bileşenler
│   ├── layout/           # Layout bileşenleri (Header, Footer)
│   ├── shared/           # Paylaşılan bileşenler
│   └── ui/               # UI bileşenleri (Button, Badge, Icon, vb.)
├── hooks/                # Custom React hooks
├── lib/                  # Yardımcı fonksiyonlar ve utilities
├── styles/               # Global SCSS dosyaları
│   ├── _variables.scss   # SCSS değişkenleri
│   └── _functions.scss   # SCSS fonksiyonları
└── public/               # Statik dosyalar
    └── images/           # Görseller
```

## 🎨 Stil Yönetimi

Proje SCSS kullanmaktadır. Global değişkenler ve fonksiyonlar `styles/` klasöründe tanımlanmıştır ve Next.js config üzerinden otomatik olarak tüm SCSS dosyalarına enjekte edilir.

## 🧩 Bileşen Yapısı

Her bileşen kendi klasöründe organize edilmiştir:

- Ana implementasyon dosyası (`.tsx`)
- Stil dosyası (`.scss`)
- Tip tanımları (`.types.ts`)
- Export dosyası (`index.ts`)

## 🔧 Yapılandırma

### TypeScript

TypeScript yapılandırması `tsconfig.json` dosyasında tanımlanmıştır. Path alias `@/*` root dizini için kullanılabilir.

### Next.js

Next.js yapılandırması `next.config.ts` dosyasında bulunur. SCSS global değişkenleri ve fonksiyonları otomatik olarak yüklenir.

## 📝 Özellikler

- ✅ Responsive tasarım
- ✅ Modern UI bileşenleri
- ✅ TypeScript desteği
- ✅ SCSS ile stil yönetimi
- ✅ Component-based mimari
- ✅ Next.js App Router

## 🌐 Deployment

Proje Vercel, Netlify veya benzeri platformlara deploy edilebilir. Production build için:

```bash
npm run build
```

## 📄 Lisans

Bu proje özel bir projedir.
