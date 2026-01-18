# Zepline Case Front

Next.js tabanlı modern bir dergi/makale platformu frontend uygulaması.

## 🚀 Teknolojiler

- **Next.js** 16.1.2 - React framework (App Router)
- **React** 19.2.3 - UI kütüphanesi
- **TypeScript** 5.x - Tip güvenliği
- **SCSS/Sass** 1.97.2 - Stil yönetimi
- **Bootstrap** 5.3.3 - CSS framework
- **React Bootstrap** 2.10.2 - Bootstrap React bileşenleri
- **ESLint** 9.x - Kod kalitesi kontrolü
- **Prettier** 3.4.2 - Kod formatlama

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
├── app/                          # Next.js App Router
│   ├── home/                     # Ana sayfa ve bileşenleri
│   │   ├── _components/          # Sayfa özel bileşenler
│   │   │   ├── Hero/             # Hero bölümü
│   │   │   │   ├── HeroContent/  # Hero içerik bileşeni
│   │   │   │   └── HeroJournal/ # Hero dergi bileşeni
│   │   │   ├── JournalIssues/    # Dergi sayıları
│   │   │   │   ├── JournalIssuesHeader/
│   │   │   │   └── JournalIsuesList/
│   │   │   │       └── JournalIssueCard/
│   │   │   ├── LatestArticles/   # Son makaleler
│   │   │   │   ├── LatestArticlesList/
│   │   │   │   │   └── LatestArticlesCard/
│   │   │   │   └── LatestJournalCard/
│   │   │   └── SendArticle/      # Makale gönderme
│   │   │       └── SendArticleContent/
│   │   ├── Home.scss
│   │   └── page.tsx
│   ├── layout.tsx                # Ana layout
│   ├── page.tsx                   # Root sayfa
│   └── globals.scss               # Global stiller
├── components/                    # Yeniden kullanılabilir bileşenler
│   ├── layout/                   # Layout bileşenleri
│   │   ├── Header/               # Header bileşeni
│   │   │   ├── HeaderLogo/
│   │   │   ├── HeaderMobile/
│   │   │   ├── HeaderNav/
│   │   │   ├── HeaderNavMobile/
│   │   │   └── HeaderTop/
│   │   └── Footer/               # Footer bileşeni
│   │       ├── FooterContact/
│   │       ├── FooterCopyright/
│   │       └── FooterLegal/
│   ├── shared/                   # Paylaşılan bileşenler
│   │   └── LastIssueBadge/       # Son sayı rozeti
│   └── ui/                       # UI bileşenleri
│       ├── Badge/                # Rozet bileşeni
│       ├── Button/               # Buton bileşeni
│       ├── Drawer/               # Çekmece bileşeni
│       ├── Icon/                 # İkon bileşeni (68+ SVG ikon)
│       ├── IconButton/           # İkon buton bileşeni
│       ├── Pagination/           # Sayfalama bileşeni
│       ├── Title/                # Başlık bileşeni
│       ├── ToggleButton/         # Toggle buton bileşeni
│       └── ToggleButtonGroup/    # Toggle buton grubu
├── hooks/                        # Custom React hooks
│   └── useMediaQuery.ts          # Medya sorgusu hook'u
├── lib/                          # Yardımcı fonksiyonlar ve utilities
│   ├── hooks/
│   └── utils.ts
├── styles/                       # Global SCSS dosyaları
│   ├── _variables.scss           # SCSS değişkenleri
│   └── _functions.scss           # SCSS fonksiyonları
└── public/                       # Statik dosyalar
    ├── images/                   # Görseller
    └── svg/                      # SVG dosyaları
```

## 🎨 Stil Yönetimi

Proje SCSS kullanmaktadır. Global değişkenler ve fonksiyonlar `styles/` klasöründe tanımlanmıştır ve Next.js config üzerinden otomatik olarak tüm SCSS dosyalarına enjekte edilir.

Her bileşen kendi `.scss` dosyasına sahiptir ve global değişkenler ile fonksiyonlar otomatik olarak kullanılabilir.

## 🧩 Bileşen Yapısı

Her bileşen kendi klasöründe organize edilmiştir:

- **Ana implementasyon dosyası** (`.tsx`) - Bileşen mantığı
- **Stil dosyası** (`.scss`) - Bileşen stilleri
- **Tip tanımları** (`.types.ts`) - TypeScript tip tanımları
- **Export dosyası** (`index.ts`) - Bileşen export'u

Örnek bileşen yapısı:

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.scss
├── ComponentName.types.ts
└── index.ts
```

## 🎯 Ana Özellikler

### Sayfa Bölümleri

- **Hero**: Ana sayfa hero bölümü, dergi tanıtımı ve içerik
- **Journal Issues**: Dergi sayıları listesi ve kart görünümü
- **Latest Articles**: Son makaleler bölümü
- **Send Article**: Makale gönderme formu ve bilgilendirme

### UI Bileşenleri

- **Badge**: Rozet bileşeni
- **Button**: Çok amaçlı buton bileşeni
- **Drawer**: Yan panel/çekmece bileşeni
- **Icon**: 68+ SVG ikon içeren ikon sistemi
- **IconButton**: İkonlu buton bileşeni
- **Pagination**: Sayfalama bileşeni (custom hook ile)
- **Title**: Başlık bileşeni
- **ToggleButton**: Toggle buton bileşeni
- **ToggleButtonGroup**: Toggle buton grubu

### Layout Bileşenleri

- **Header**: Responsive header (mobil ve desktop versiyonları)
- **Footer**: Footer bileşeni (iletişim, telif, yasal bilgiler)

## 🔧 Yapılandırma

### TypeScript

TypeScript yapılandırması `tsconfig.json` dosyasında tanımlanmıştır. Path alias `@/*` root dizini için kullanılabilir.

### Next.js

Next.js yapılandırması `next.config.ts` dosyasında bulunur. SCSS global değişkenleri ve fonksiyonları otomatik olarak yüklenir:

```typescript
sassOptions: {
  loadPaths: ['./styles'],
  additionalData: ` @use "functions" as *; @use "variables" as *;`,
}
```

### ESLint

ESLint yapılandırması `eslint.config.mjs` dosyasında bulunur ve Next.js ESLint config kullanır.

## 📝 Özellikler

- ✅ Responsive tasarım (mobil, tablet, desktop)
- ✅ Modern UI bileşenleri
- ✅ TypeScript desteği
- ✅ SCSS ile stil yönetimi (global değişkenler ve fonksiyonlar)
- ✅ Component-based mimari
- ✅ Next.js App Router
- ✅ 68+ SVG ikon sistemi
- ✅ Custom React hooks
- ✅ Bootstrap entegrasyonu

## 🌐 Deployment

Proje Vercel, Netlify veya benzeri platformlara deploy edilebilir. Production build için:

```bash
npm run build
```

## 📄 Lisans

Bu proje özel bir projedir.
