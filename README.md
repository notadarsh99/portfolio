# Adarsh — Portfolio

A multi-page React portfolio site (Vite + React Router + Tailwind CSS v4),
styled as a security case-file / terminal dashboard.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Render, Cloudflare
Pages, GitHub Pages, or any static host.

## Where to edit content

Almost everything you'll want to change lives in **`src/data/content.js`**:

- `profile` — name, role, email, GitHub/LinkedIn URLs, location
- `about` — bio paragraphs, "how I learn", goal, currently-exploring tags
- `skillCategories` — skills grouped by category, each with a severity
  (`CRITICAL` / `HIGH` / `MEDIUM` / `LOW`) representing depth of experience
- `projects` — your project "case files"; replace the `TODO:` summaries,
  add real links, and adjust `status` (`DEPLOYED`, `IN PRODUCTION`,
  `RESOLVED`, `ARCHIVED`)

Search the file for `TODO` to find every placeholder that needs a real
value before you publish (email, GitHub/LinkedIn links, location, and
each project summary/link).

## Structure

```
src/
  components/   Nav, Footer, Terminal hero, Badge, SectionHeader
  pages/        Home, About, Skills, Projects, Contact
  data/         content.js — all editable copy lives here
  index.css     design tokens (colors, fonts) + global styles
```

## Design notes

- Font pairing: JetBrains Mono (headers, labels, terminal UI) + Inter (body)
- Palette: deep navy base, amber + teal + violet + red accents used like
  severity levels in a security dashboard
- Respects `prefers-reduced-motion` (disables the terminal typing animation
  and other transitions)
