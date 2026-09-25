# Sundial website

Marketing website for Sundial, a venue operations platform for wedding venues, bespoke hotels, and event venues. General hotels have a separate, secondary page.

Built with Next.js App Router, React, TypeScript, and Bun. Fonts and photography are served locally. The site needs no database, authentication, or service credentials.

## Local setup

```sh
bun install --frozen-lockfile
bun run dev
```

Checks:

```sh
bun run typecheck
bun run lint
```

## What's here

- A homepage with client portal illustrations.
- An interactive sample dashboard with Events, Inquiries, and Invoices views. It uses made-up data and doesn't connect to any application.
- A feature overview at `/platform` and an audience hub at `/venues`.
- Sales pages at `/venues/wedding-venues`, `/venues/bespoke-hotels`, `/venues/event-venues`, and `/venues/hotels`.
- Permanent redirects from the earlier private-events and boutique-hotels URLs.
- Mobile navigation, FAQ disclosure controls, keyboard focus styles, and reduced-motion support.
- Shared design tokens in `src/styles/design-tokens.css` and component styles in `src/app/globals.css`.
- One logo file, `src/app/icon.svg`, used by the header, footer, and favicon.

The site currently asks search engines not to index it, through `noindex, nofollow` metadata and `/robots.txt`.

## Demo booking

Without a booking page, primary links go to the platform page or venue index, and their labels describe that destination.

To add a booking page, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_DEMO_URL` to its HTTPS URL. Primary links will then say "Book a demo". The value is read at build time, so restart the dev server or rebuild after changing it.

## Docs

- [design.md](docs/design.md) covers the visual direction.
- [sales-content.md](docs/sales-content.md) covers the page map and the limits on product claims.
