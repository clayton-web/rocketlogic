# Rocket Logic

Public-facing website for Rocket Logic Inc. — the headquarters for the Rocket Logic software ecosystem.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Geist Sans via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://www.rocketlogic.ca
```

## Project Structure

```
app/                  # Routes and pages
components/
  brand/              # Logo and brand assets
  ecosystem/          # Product cards and grid
  hero/               # Dashboard preview mockup
  layout/             # Header and footer
  sections/           # Landing page sections
  ui/                 # Reusable UI primitives
lib/
  products.ts         # Central product data model
  constants.ts        # Company copy and routes
  metadata.ts         # SEO configuration
public/
  logo.png            # Official Rocket Logic logo
```

## Adding a Product

Add an entry to `lib/products.ts`. Product cards and future navigation update automatically.

## Deployment

Deploy to Vercel:

```bash
npm run build
```

The project is configured for Vercel out of the box via `vercel.json`.

## Brand Colors

Logo-derived CSS variables are defined in `app/globals.css`:

| Token | Value | Source |
|-------|-------|--------|
| `--rl-accent` | `#D32F2F` | Rocket body red |
| `--rl-accent-secondary` | `#0284C7` | Motion swoosh blue |
| `--rl-navy` | `#1B365D` | Rocket fins / wordmark |
| `--rl-bg` | `#0B1120` | Dark theme base |
