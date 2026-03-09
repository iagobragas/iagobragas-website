# iagobragas-website

Personal portfolio built with SvelteKit and deployed on Vercel.

## Stack

- SvelteKit (Svelte 5)
- TypeScript
- TailwindCSS
- Bits UI
- Vercel adapter

## Main Features

- Portfolio sections (about, work, education, skills, projects, contact)
- Theme toggle (light/dark)
- Bilingual UI and content (EN/PT)
- SSR-deterministic language resolution using cookie + `Accept-Language`
- Safe markdown rendering for profile/project descriptions

## Project Structure

- `src/routes/+page.svelte`: main portfolio page
- `src/routes/+layout.svelte`: global layout, theme watcher and i18n context setup
- `src/routes/+layout.server.ts`: server-side language resolution
- `src/lib/data/resume.en.ts` and `src/lib/data/resume.pt.ts`: portfolio content per language
- `src/lib/i18n/`: translated UI labels/messages
- `src/lib/markdown.ts`: hardened markdown rendering helper

## Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run checks:

```bash
npm run check
npm run lint
npm run build
```

## Deployment

Production deployment is handled by Vercel using the SvelteKit Vercel adapter.
