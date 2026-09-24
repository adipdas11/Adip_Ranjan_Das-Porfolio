# Adip Ranjan Das — Robotics Portfolio

Research portfolio for Adip Ranjan Das, PhD researcher at ARM²Lab, Heriot-Watt University / National Robotarium.

**Website:** https://adipdas11.github.io/Adip_Ranjan_Das-Porfolio/

## Development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000/Adip_Ranjan_Das-Porfolio/.

## Verification

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Tests run against a production preview and mock contact submissions and video embedding. No test message is sent. If using an existing Chromium installation, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable.

## Publishing

Push to `main`. The GitHub Actions workflow checks TypeScript, builds, runs the browser tests, and deploys to GitHub Pages. Repository Settings → Pages must use **GitHub Actions** as the source. The build uses `/Adip_Ranjan_Das-Porfolio/` as its base path.

## Editing content

- `src/data/profile.ts`: publications, experience, skills, external links.
- `src/data/projects.ts`: all 16 projects and their source links.
- `src/components/Background.tsx`: education and research biography.
- `src/index.css`: theme tokens and responsive styling, alongside Tailwind utilities.
- `public/images`: optimized WebP assets.
- `public/logo.svg`: original AD monogram and favicon.
- `public/Adip_Ranjan_Das_CV.pdf`: supplied PDF resume download. Replace this file when the CV changes.

The RA-L paper remains **under review**. Its reported results are explicitly distinguished from the published eGRAP work. The video loads only after the visitor presses Play. The existing Formspree endpoint is retained; contact delivery depends on that account remaining active.

The site supports system-aware, persistent light/dark themes, reduced motion, keyboard navigation, accessible project dialogs, and mobile layouts. No API key or environment variable is needed.

See [rebuild notes](docs/REBUILD-NOTES.md) for the content audit, performance comparison and verification scope, and [component credits](docs/COMPONENTS.md) for the MIT-licensed 21st.dev/Magic UI adaptations.
