# Alkaitan Restaurant Website

Single-page restaurant site built with **React + Vite + Tailwind CSS v4 + React Icons**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into /dist
npm run preview    # test the production build locally
```

Requires Node 20.19+.

## Project flow

| Phase | What | Where |
|---|---|---|
| 1. Foundation | Vite + React, Tailwind v4 via `@tailwindcss/vite`, brand tokens | `vite.config.js`, `src/index.css` (`@theme`) |
| 2. Core UI | Header, Hero, About, Menu, Footer | `src/components/` |
| 3. Interactions | Mobile menu, menu filters, reservation validation, floating button | `Header`, `MobileMenu`, `MenuSection`, `ReservationForm`, `FloatingActionButton` |
| 4. Content | Real details, menu, photos | `src/data/business.js`, `src/data/menu.js`, `public/images/` |
| 5. QA and release | Accessibility, responsive, build and device checks | checklist below |

Tailwind v4 uses CSS-based config, so there is no `tailwind.config.js` or `postcss.config.js`. Brand colours live in the `@theme` block of `src/index.css`.

## Where to edit things

- **Business details** (phone, WhatsApp, email, address, map, hours, socials, currency): `src/data/business.js`. Anything left as `null` shows "To be confirmed" instead of fake data.
- **Menu**: `src/data/menu.js`. Add `image: '/images/dish.webp'` once photos are in `public/images/`. Only add `dietary` tags that are verified. Set `sampleContent: false` in `business.js` to remove the "sample menu" notice.
- **About and gallery copy**: `src/data/business.js`.
- **Floating button**: opens WhatsApp once `whatsapp` is set (digits with country code, e.g. `2348012345678`); until then it scrolls to the Contact section.

## Reservations

A frontend-only form cannot confirm or store bookings. Copy `.env.example` to `.env` and set `VITE_RESERVATION_ENDPOINT` to a form service (Formspree, Getform, etc.) or your own API that accepts a JSON POST with: `name, contact, date, time, guests, notes, submittedAt`. Validate again on the server and keep any private keys on the server, never in this code.

If no endpoint is set, the form validates but tells the visitor the request was not sent and points them to call/WhatsApp.

## Pre-launch checklist

- [ ] Logo and final brand colours
- [ ] Address, map link, phone, WhatsApp, email, opening hours
- [ ] Approved menu, prices and allergen info
- [ ] Real photos (compressed, WebP/AVIF) with alt text
- [ ] Reservation endpoint connected and tested
- [ ] Real social profile URLs
- [ ] Keyboard-only and screen-reader pass, contrast check
- [ ] Test at mobile, tablet and desktop widths, then `npm run build` and test on a real phone
