# Portfolio

A modern, accessible, and interactive portfolio website designed to showcase projects and skills with a premium user experience. Built with performance and accessibility in mind using Astro, React, and Tailwind CSS.

## 🚀 Features

- **High Performance**: Static site generation (SSG) with [Astro](https://astro.build/) for blazing fast load times.
- **Interactive UI**: Dynamic components built with [React](https://react.dev/).
- **Responsive Design**: Beautiful, mobile-first layouts using [Tailwind CSS](https://tailwindcss.com/).
- **Accessible Components**: Accessible primitives from [Radix UI](https://www.radix-ui.com/).
- **Fluid Animations**: Smooth transitions and effects powered by [Framer Motion](https://www.framer.com/motion/).
- **Internationalization (i18n)**: Native support for multiple languages.
- **Dark/Light Mode**: Thematic consistency with `next-themes`.
- **Type Safety**: Full [TypeScript](https://www.typescriptlang.org/) support.

## 🛠️ Tech Stack

- **Core**: Astro, React, TypeScript
- **Styling**: Tailwind CSS, Tailwind Merge, CLSX
- **UI Libraries**: Radix UI, Lucide React (Icons)
- **State Management**: Nanostores
- **Animations**: Framer Motion
- **Testing**: Vitest (Unit), Playwright (E2E)
- **Linting & Formatting**: ESLint, Prettier

## 📂 Project Structure

```text
/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── content/     # CMS content
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route definitions
│   ├── styles/      # Global styles
│   ├── i18n/        # Internationalization config
│   └── lib/         # Utility functions
├── package.json     # Project dependencies and scripts
└── astro.config.mjs # Astro configuration
```

## 🧞 Commands

All commands are run from the root of the project:

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:4321` |
| `npm run build`    | Build your production site to `./dist/`     |
| `npm run preview`  | Preview your build locally                  |
| `npm run lint`     | Run ESLint to check for code quality issues |
| `npm run format`   | Format code with Prettier                   |
| `npm run test`     | Run unit tests with Vitest                  |
| `npm run test:e2e` | Run end-to-end tests with Playwright        |

## 🧪 Testing

### Unit Tests

Run unit tests using Vitest:

```bash
npm run test
```

### End-to-End Tests

Run E2E tests using Playwright:

```bash
npm run test:e2e
```
