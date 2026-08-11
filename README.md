# Mohammad Zahirinia Portfolio

Premium bilingual resume and portfolio app for Mohammad Zahirinia, Senior Frontend Engineer.

## Features

- Next.js App Router and TypeScript
- Tailwind CSS responsive UI
- English and Persian i18n with RTL support
- Dark and light mode
- Sticky navigation with active section highlighting
- Structured resume data in `src/data/resume.ts`
- GitHub Pages static export support
- Existing vinext/Sites build support

## Quick Start

```bash
npm install
npm run dev
```

## Content Editing

All resume content lives in `src/data/resume.ts`. Edit the English and Persian entries there to update profile text, links, stats, experience, skills, projects, education, languages, and the resume download URL.

## Build Commands

```bash
npm run build
npm run lint
npm test
```

## GitHub Pages

Use the included workflow at `.github/workflows/pages.yml`.

For a repository project page, the workflow passes GitHub's base path automatically. For a manual local export, set it yourself:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repository-name npm run build:github
```

For a custom domain or user/organization page at the root domain, omit the base path:

```bash
npm run build:github
```

The static output is generated in `out/`.
