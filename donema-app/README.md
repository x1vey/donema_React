# Donema Construction Vision — Website

A multi-page React site for **Donema Construction Vision Ltd** (Hoddesdon, Hertfordshire).
Dark editorial design using Donema's own branding — navy-charcoal (#1d212d) palette, cool
steel accent, their real logo, and their fonts (Nanum Myeongjo + Quicksand) — layered with
smooth scrolling and scroll-driven animation.

The design tokens live in `src/styles/global.css` (`:root`). To re-skin, change the
`--bg / --surface / --accent / --serif / --sans` variables — every component reads from them.
Brand assets (logo, NICEIC & City & Guilds badges) are in `public/brand/`.

## Stack
- **Vite** + **React 18** + **React Router 6**
- **Lenis** (smooth scroll) + **GSAP** (available; current animations use IntersectionObserver + CSS for performance)
- Plain CSS design system (`src/styles/global.css`) — tokens, type scale, light/dark sections

## Run
```bash
cd donema-app
npm install
npm run dev      # http://localhost:5181
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Pages / routes
| Route | Page |
|-------|------|
| `/` | Home |
| `/renovations` | Home Renovations |
| `/kitchens` | Kitchen Fitting |
| `/bathrooms` | Bathroom Fitting |
| `/extensions` | Property Extensions |
| `/gallery` | Gallery (filterable + lightbox) |
| `/reviews` | Reviews (real Google reviews) |
| `/contact` | Contact (enquiry form → mailto) |

The four service pages are **data-driven** from `src/data/services.js` and rendered by a
single `ServicePage` component, so adding a service = adding one data object.

## Editing content
All copy and contact details live in `src/data/`:
- `site.js` — brand, phone, email, address, nav
- `services.js` — the four service detail pages
- `content.js` — stats, reviews, process steps, gallery

## Replacing placeholder photos
Project/service images are stable Unsplash URLs. To use Donema's real photos:
1. Drop images into `public/projects/`
2. Replace the Unsplash URLs in `src/data/services.js` (`hero`, `gallery`) and
   `src/data/content.js` (`gallery`) with `/projects/your-file.jpg`.

## Notes
- The contact form opens the user's email client (mailto) — no backend. Wire it to a
  form service (Formspree, Netlify Forms, etc.) for production submissions.
- Fully responsive; respects `prefers-reduced-motion`.
- The earlier single-file static prototype lives in the parent folder (`index.html`,
  `styles.css`, `app.js`) and is now superseded by this app.
