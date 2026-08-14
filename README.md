# Aroma Industries — Website

A premium, responsive business/catalogue website for **Aroma Industries**, a
manufacturer of bags and related products. Built with **React + Vite +
Tailwind CSS** and **React Router**.

This is a **catalogue website, not an e-commerce store** — there is no cart,
checkout or online payment. The site is designed to present the company,
showcase products, and generate enquiries via **WhatsApp, phone, email and a
contact form**.

---

## Quick start

```bash
npm install
npm run dev      # local development
npm run build    # production build (outputs to /dist)
npm run preview  # preview the production build
```

---

## Project structure

```
src/
  components/     Reusable UI (Navbar, Footer, ProductCard, Gallery, …)
  pages/          One component per route
  data/           ALL editable content (see below)
  utils/          Small helpers (WhatsApp links, class names)
  App.tsx         Routes + layout
  index.css       Design system (colours, fonts, animations)
public/
  images/         Placeholder photography (organised by folder)
  robots.txt
  sitemap.xml
vercel.json       SPA routing + caching for Vercel
```

---

## Editing content (everything is centralised)

### 1. Business information → `src/data/siteConfig.ts`

Phone, WhatsApp number, email, address, working hours and social links are all
in **one file**. Change a value here and it updates everywhere on the site.

Values still wrapped in square brackets (e.g. `[PHONE NUMBER]`) are intentional
placeholders — replace them with real information.

- `whatsappNumber` must be digits only, full international format, e.g. `"910000000000"`.
- `social.instagram` / `facebook` / `linkedin` — only non-empty URLs are shown.
- `contact.formEndpoint` — leave empty until a form service is connected (see below).
- `contact.mapEmbedUrl` — paste a Google Maps `embed` URL to show a map.

### 2. Product categories → `src/data/categories.ts`

Add, rename or remove categories by editing the `categories` array. Each entry
has an `id`, `name`, `slug`, `description` and `image`. The home page,
products page filters and footer all update automatically.

### 3. Products → `src/data/products.ts`

Every product is an object in the `products` array. To add a product, append a
new object; to remove one, delete it. Fields:

- `id`, `slug` (used in the URL `/products/<slug>`), `name`, `category`
- `shortDescription`, `description`
- `images` (array of image paths)
- `material`, `sizes`, `colors` (name + hex), `features`
- `featured` (show on the home page), `customizable` + `customizationNote`

### 4. Gallery → `src/data/gallery.ts`

Gallery images are a flat array with `src`, `alt` and `category` (one of
`Products`, `Collections`, `Manufacturing`, `Materials`, `Finished Products`).

---

## Replacing the placeholder images

Placeholder images live in `public/images/`, organised by folder:

```
public/images/
  branding/     Hero + brand imagery
  categories/   One image per product category
  products/     (create this folder for per-product photos)
  gallery/      Gallery / materials shots
  about/        About page / workshop imagery
```

To use the client's real photography, simply **replace the files** in these
folders (keep the same filenames), or update the `image`/`images` paths in the
data files. No code changes are required.

> Tip: for best performance, export photos as **WebP/AVIF** or well-compressed
> JPG (ideally under ~300 KB per image, max dimension ~1600 px).

---

## Contact form

The form is built and validated, and is ready to connect to a form service.

- **Without a service:** submitting opens WhatsApp with the enquiry pre-filled
  (an honest, working fallback).
- **With a service:** set `siteConfig.contact.formEndpoint` to a Formspree /
  Basin / Netlify Forms endpoint. The form will then `POST` to it instead.

---

## Deployment (Vercel)

The site is configured for Vercel with the custom domain `aroma-industries.com`.

- `vercel.json` provides SPA rewrites so direct URLs (e.g. `/products`) and
  refreshes work without 404s, plus long-term caching for `/images`.
- `robots.txt` and `sitemap.xml` are served from the root.
- To finish indexing in Google Search Console, verify the domain and submit
  `https://aroma-industries.com/sitemap.xml`.

---

## SEO

- Each page sets a unique `<title>`, meta description, canonical URL and
  Open Graph / Twitter tags (see `src/components/Seo.tsx`).
- Semantic HTML, correct heading hierarchy, descriptive `alt` text and
  human-readable URLs are used throughout.

## Accessibility

Semantic landmarks, keyboard-accessible navigation and menus, labelled form
fields, visible focus states, and `prefers-reduced-motion` support are built in.
