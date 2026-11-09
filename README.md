# SAMPLE — Supply Chain & Regulatory Advisory

Professional advisory website for Kedarnath Kaushik, based on the supply chain profile and Nigeria regulatory roadmap presentations.

## Run locally

```bash
npm run dev
```

The site is built with Next.js and the App Router. The root page is in `app/page.tsx`. Previous starter links are preserved in [LINKS.md](./LINKS.md).

## Project structure

- `app/page.tsx` composes the page from section components.
- `app/components/` contains the header, page sections, contact form and footer.
- `app/data/advisory.ts` contains the service, process and industry content.
- `app/styles/` contains the base, section, responsive and typography styles.
- `app/globals.css` imports the stylesheets in application order.
