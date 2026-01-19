# Zepline Case Front

A modern journal/article platform frontend application built with Next.js.

## 🌐 Live Demo

**Live Demo:** [https://zepline-case-front.vercel.app/home](https://zepline-case-front.vercel.app/home)

## 🚀 Technologies

- **Next.js** 16.1.2 - React framework (App Router)
- **React** 19.2.3 - UI library
- **TypeScript** 5.x - Type safety
- **SCSS/Sass** 1.97.2 - Style management
- **Bootstrap** 5.3.3 - CSS framework
- **React Bootstrap** 2.10.2 - Bootstrap React components
- **ESLint** 9.x - Code quality control
- **Prettier** 3.4.2 - Code formatting

## 📋 Requirements

- Node.js 20 or higher
- npm, yarn, or pnpm

## 🛠️ Installation

Clone the project and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To run the build:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 🧹 Code Quality

To format code:

```bash
npm run format
# or
yarn format
```

To check formatting:

```bash
npm run format:check
# or
yarn format:check
```

To run linting:

```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
zepline-case-front/
├── app/                          # Next.js App Router
│   ├── home/                     # Home page and components
│   │   ├── _components/          # Page-specific components
│   │   │   ├── Hero/             # Hero section
│   │   │   │   ├── HeroContent/  # Hero content component
│   │   │   │   └── HeroJournal/  # Hero journal component
│   │   │   ├── JournalIssues/    # Journal issues
│   │   │   │   ├── JournalIssuesHeader/
│   │   │   │   └── JournalIsuesList/
│   │   │   │       └── JournalIssueCard/
│   │   │   ├── LatestArticles/   # Latest articles
│   │   │   │   ├── LatestArticlesList/
│   │   │   │   │   └── LatestArticlesCard/
│   │   │   │   └── LatestJournalCard/
│   │   │   └── SendArticle/      # Send article
│   │   │       └── SendArticleContent/
│   │   ├── Home.scss
│   │   └── page.tsx
│   ├── layout.tsx                # Main layout
│   ├── page.tsx                  # Root page
│   └── globals.scss              # Global styles
├── components/                    # Reusable components
│   ├── layout/                   # Layout components
│   │   ├── Header/               # Header component
│   │   │   ├── HeaderLogo/
│   │   │   ├── HeaderMobile/
│   │   │   ├── HeaderNav/
│   │   │   ├── HeaderNavMobile/
│   │   │   └── HeaderTop/
│   │   └── Footer/               # Footer component
│   │       ├── FooterContact/
│   │       ├── FooterCopyright/
│   │       └── FooterLegal/
│   ├── shared/                   # Shared components
│   │   └── LastIssueBadge/       # Last issue badge
│   └── ui/                       # UI components
│       ├── Badge/                # Badge component
│       ├── Button/               # Button component
│       ├── Drawer/               # Drawer component
│       ├── Icon/                 # Icon component (68+ SVG icons)
│       ├── IconButton/           # Icon button component
│       ├── Pagination/           # Pagination component
│       ├── ToggleButton/         # Toggle button component
│       └── ToggleButtonGroup/    # Toggle button group
├── hooks/                        # Custom React hooks
│   └── useMediaQuery.ts          # Media query hook
├── lib/                          # Helper functions and utilities
│   ├── hooks/
│   └── utils.ts
├── styles/                       # Global SCSS files
│   ├── _variables.scss           # SCSS variables
│   └── _functions.scss           # SCSS functions
└── public/                       # Static files
    ├── images/                   # Images
    └── svg/                      # SVG files
```

## 🎨 Style Management

The project uses SCSS. Global variables and functions are defined in the `styles/` folder and are automatically injected into all SCSS files through the Next.js config.

Each component has its own `.scss` file and can automatically use global variables and functions.

## 🧩 Component Structure

Each component is organized in its own folder following a consistent structure:

- **Main implementation file** (`.tsx`) - Component logic
- **Style file** (`.scss`) - Component styles
- **Type definitions** (`.types.ts`) - TypeScript type definitions (when needed)
- **Export file** (`index.ts`) - Component export

Example component structure:

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.scss
├── ComponentName.types.ts
└── index.ts
```

Some components may have sub-components in their own directories, maintaining the same structure.

## 🎯 Main Features

### Page Sections

- **Hero**: Home page hero section, journal introduction and content
- **Journal Issues**: Journal issues list and card view
- **Latest Articles**: Latest articles section
- **Send Article**: Article submission form and information

### UI Components

- **Badge**: Badge component
- **Button**: Multi-purpose button component
- **Drawer**: Side panel/drawer component
- **Icon**: Icon system with 68+ SVG icons
- **IconButton**: Icon button component
- **Pagination**: Pagination component (with custom hook)
- **ToggleButton**: Toggle button component
- **ToggleButtonGroup**: Toggle button group

### Layout Components

- **Header**: Responsive header (mobile and desktop versions)
- **Footer**: Footer component (contact, copyright, legal information)

## 🔧 Configuration

### TypeScript

TypeScript configuration is defined in the `tsconfig.json` file. Path alias `@/*` can be used for the root directory.

### Next.js

Next.js configuration is located in the `next.config.ts` file. SCSS global variables and functions are automatically loaded:

```typescript
sassOptions: {
  loadPaths: ['./styles'],
  additionalData: ` @use "functions" as *; @use "variables" as *;`,
}
```

### ESLint

ESLint configuration is located in the `eslint.config.mjs` file and uses Next.js ESLint config.

## 📝 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI components with consistent structure
- ✅ TypeScript support with strict mode
- ✅ SCSS style management (global variables and functions)
- ✅ Component-based architecture
- ✅ Next.js App Router (v16.1.2)
- ✅ 68+ SVG icon system
- ✅ Custom React hooks (useMediaQuery, usePagination)
- ✅ Bootstrap 5.3.3 integration
- ✅ ESLint and Prettier for code quality

## 🌐 Deployment

The project can be deployed to Vercel, Netlify, or similar platforms. For production build:

```bash
npm run build
```

The project is currently deployed on Vercel: [https://zepline-case-front.vercel.app/home](https://zepline-case-front.vercel.app/home)

## 📄 License

This is a private project.
