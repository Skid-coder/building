<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 portfolio site with static data (no database, no external APIs, no Docker).

**Key commands** (all from repo root):
- `npm run dev` — starts dev server on port 3000
- `npm run build` — production build (also validates TypeScript)
- `npm run lint` — runs ESLint
- Package manager: **npm** (lockfile: `package-lock.json`)

**Non-obvious notes:**
- All portfolio/service data lives in `src/data/` as plain TypeScript arrays — no CMS or API.
- The contact form (`src/components/ContactForm.tsx`) is client-side only; it does not submit anywhere.
- Remote images come from `images.unsplash.com`; they won't load without internet, but the site still functions.
- Next.js 16 uses Turbopack by default for dev and build. No special flags needed.
