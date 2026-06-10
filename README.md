# Arjun Dev Sharma — Portfolio

A full Next.js 14 portfolio for a dual-identity character: **Punjab Under-23 cricketer** and **B.Tech CS student** at Chandigarh University.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Chart.js + react-chartjs-2** (stats bar chart)
- **Framer Motion** (ready to use — add animations wherever you like)
- **Next/Image** (optimised photos from Unsplash)

---

## Routes

| Route | Description |
|---|---|
| `/` | Home — hero, stats, about, timeline, CTA |
| `/cricket` | Cricket profile — skills, matches, awards |
| `/stats` | Full career tables (batting & bowling), season chart |
| `/academics` | CGPA table, skills, certifications, 6 projects |
| `/gallery` | Action photos, campus photos, achievement cards |
| `/contact` | Contact details, agent/coach info, availability |

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Customisation

All data lives in a single file:

```
src/lib/data.ts
```

Edit the exported objects to change:
- Profile info (name, bio, contact)
- Cricket match results & awards
- Batting/bowling statistics
- Academic records & projects
- Gallery photo URLs

## Project structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout + Navbar
│   ├── page.tsx           # Home
│   ├── not-found.tsx      # 404 page
│   ├── cricket/
│   │   └── page.tsx
│   ├── stats/
│   │   └── page.tsx
│   ├── academics/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx         # Sticky responsive nav
│   ├── RunsChart.tsx      # Chart.js bar chart (client)
│   └── ui.tsx             # All reusable UI components
├── lib/
│   └── data.ts            # ← All portfolio data lives here
└── styles/
    └── globals.css        # Tailwind base + animations
```

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```
