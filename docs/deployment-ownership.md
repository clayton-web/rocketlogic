# RocketLogic deployment ownership

This document defines which Vercel project owns which production surface.
Violating these rules previously took down the marketing homepage and `/dashboard`.

## Production URL map

| Public URL | Served by | Vercel project |
|------------|-----------|----------------|
| `https://www.rocketlogic.ca/` (marketing pages) | This repo (`rocketlogic` / Rocket Logic marketing) | **`rocketlogic`** |
| `https://www.rocketlogic.ca/dashboard/*` | Rocket PM Dashboard (rewrite) | **`rocket-pm-dashboard-app`** |
| `https://www.rocketlogic.ca/inspection/*` | Rocket Inspection (rewrite) | **`rocket-inspection-app`** |

Apex `https://rocketlogic.ca` redirects to `www`.

## Hard rules

1. **Only the marketing repository** may deploy to Vercel project **`rocketlogic`**.
2. **Never** deploy the inspection app or the PM Dashboard app into **`rocketlogic`**.
3. Inspection production deploys go to **`rocket-inspection-app`** only.
4. Dashboard production deploys go to **`rocket-pm-dashboard-app`** only.
5. Path access under `/dashboard` and `/inspection` is provided by **edge rewrites** in this repo’s `vercel.json` (path-preserving; do not strip base paths).

## Rewrites (source of truth)

See `vercel.json`:

- `/dashboard` and `/dashboard/:path*` → `https://rocket-pm-dashboard-app.vercel.app/dashboard…`
- `/inspection` and `/inspection/:path*` → `https://rocket-inspection-app.vercel.app/inspection…`

Both apps keep native Next.js `basePath` values (`/dashboard`, `/inspection`).

## Deploy marketing (allowed)

From this repository, with `.vercel` linked to **`rocketlogic`**:

```bash
cd "/Users/claytonbeckler/Rocket Logic"
cat .vercel/project.json   # projectName must be "rocketlogic"
git checkout main && git pull
npm run build
vercel deploy --prod --yes
```

Post-deploy smoke:

1. `https://www.rocketlogic.ca/` → marketing homepage 200
2. `https://www.rocketlogic.ca/dashboard/api/health` → `ok: true`
3. `https://www.rocketlogic.ca/inspection/login` → 200

## Rollback

If a marketing deploy breaks the front door:

```bash
vercel ls rocketlogic --prod | head -5
vercel rollback <previous-marketing-dpl-id> --yes
```

Do **not** “fix” `/inspection` by deploying the inspection app into `rocketlogic`.
That removes marketing and breaks `/dashboard`.

## Related projects

| App | Repo (typical local path) | Vercel project |
|-----|---------------------------|----------------|
| Marketing | `/Users/claytonbeckler/Rocket Logic` | `rocketlogic` |
| Inspection | `/Users/claytonbeckler/rocket-inspection-app` | `rocket-inspection-app` |
| PM Dashboard | `/Users/claytonbeckler/Clay's Dashboard` | `rocket-pm-dashboard-app` |
