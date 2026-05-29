# Resume App

A personal portfolio and resume site, built as a single-page React app with a dark-mode aesthetic, motion-driven sections, and content driven from a single JSON file.

Live site: [hpainhas-resume.netlify.app](https://hpainhas-resume.netlify.app/)

## Tech Stack

- **React 18** (Create React App)
- **React Router** for routing
- **Tailwind CSS** for styling
- **Framer Motion** for animations and transitions
- **lucide-react** and **react-icons** for iconography
- **Netlify** for hosting and continuous deployment

## Project Structure

```
src/
├── App.js                  # Router + global layout
├── index.js                # React entry point
├── assets/
│   └── resume.json         # Single source of truth for resume content
├── components/
│   ├── layout/             # Navbar, MobileNavbar, Footer, NotFound
│   ├── pages/              # Landing page composition
│   ├── sections/           # About, Experience, FeaturedProject, Skills, Education, Contact
│   └── ui/                 # Reusable primitives (Section, Card, Pill, Tooltip, etc.)
└── styles/                 # Tailwind layers and global styles
```

Most content lives in `src/assets/resume.json` so the visual sections can be updated without touching component code.

## Getting Started

### Prerequisites

- Node.js 22 (matches the Netlify build environment)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000) with hot reload.

### Build for production

```bash
npm run build
```

Outputs an optimized bundle to the `build/` directory.

### Run tests

```bash
npm test
```

## Deployment

The site is deployed to Netlify. Deploy settings live in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `build`
- Node version: `22`

Pushes to the default branch trigger a production deploy automatically.

## License

This repository is public for transparency, but the content (resume copy, project descriptions, branding) is personal. Feel free to use the structure or component patterns as a reference for your own site.
