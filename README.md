# SAFEENA website

A bilingual, responsive React + Vite landing page for SAFEENA, a platform connecting Colombian coffee origins with Hong Kong and Asian markets.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

Create the production build with:

```bash
npm run build
```

Vite writes the static site to `dist/`.

## Cloudflare Pages

Connect this GitHub repository in **Workers & Pages → Create application → Pages → Connect to Git**. Select the `main` production branch and use:

| Setting | Value |
| --- | --- |
| Framework preset | React (Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

The Pages Git integration builds and deploys each push. The default `*.pages.dev` address works without buying a domain. Keep the account on Cloudflare's Free plan; no paid add-ons or domain purchase are needed for this setup.

## Brand and content

The site uses the SAFEENA logo asset and the English-first brand direction already defined for SAFEENA, with a Spanish language switch. The copy describes the planned Colombia → Hong Kong → Asia business path and avoids claims about specific shipments, partners, certifications, tasting scores or producer permissions.

The hero photograph was generated for this website and is used as an illustrative coffee-origin image. It does not represent a named farm or a specific producer.
