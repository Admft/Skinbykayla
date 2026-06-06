# SkinByKaylaa Website

Professional static website for **SkinByKaylaa**, a Royse City esthetician studio. Built with Astro so the site ships as fast static HTML, is easy for search engines to crawl, and can be deployed cheaply on Netlify.

## What is included

- A custom homepage inspired by the provided SkinByKaylaa theme: warm paper, blush, sage, lavender, soft clinic/spa energy.
- Service pages for every service, with local SEO titles, descriptions, prices, durations, and structured data.
- Booking request form that works with Netlify Forms after deployment.
- Moving review marquee plus a full reviews page.
- Google review button using the provided Google share link.
- LocalBusiness / BeautySalon schema, Service schema, FAQ schema, breadcrumbs, canonical URLs, Open Graph image, robots.txt, sitemap.xml, and llms.txt.
- AI search profile page for answer engines and AI assistants.
- Deployment guide and SEO playbook.

## Tech stack

- Astro
- HTML/CSS/TypeScript
- No Tailwind, no React, no Framer Motion, no generic AI-template dependency stack
- Netlify recommended for hosting and form handling

## Quick start

```powershell
npm install
npm run dev
```

Open the local URL Astro prints in the terminal, usually `http://localhost:4321`.

## Build

```powershell
npm run build
npm run preview
```

## Main files to edit

- Business details, services, reviews, schema: `src/data/business.ts`
- Homepage: `src/pages/index.astro`
- Global design system: `src/styles/global.css`
- AI file: `public/llms.txt`
- Sitemap: `public/sitemap.xml`

## Booking form notes

The form is already set up for Netlify Forms:

```html
<form name="booking-request" method="POST" data-netlify="true" netlify-honeypot="company" action="/thanks/">
```

After the site is deployed on Netlify, submit one test booking. Then open Netlify dashboard -> your site -> Forms -> `booking-request` -> Notifications, and add Kaylaa's email address.

## Important SEO note about reviews

Client reviews are displayed on the page, but this project intentionally does **not** add review/aggregateRating schema for the business. Google's review snippet guidelines say local businesses and organizations are ineligible for review stars when the business controls the reviews about itself. Keep the visible reviews, keep asking for Google reviews, but do not mark up self-serving local-business reviews as star-rating structured data.

## Before launch checklist

- Confirm all service prices, durations, and descriptions with Kaylaa.
- Confirm if facial services should be added as official services. Some reviews mention facials, but the current service list provided did not include facial services.
- Replace any email if Kaylaa wants a business email instead of `kpwindell46@gmail.com`.
- Submit a test booking request on the live Netlify URL.
- Add email notification for the Netlify form.
- Connect `www.skinbykaylaa.com` and `skinbykaylaa.com` to the deployed site.
- Update Google Business Profile website and appointment URL to `https://www.skinbykaylaa.com/booking/`.
- Verify in Google Search Console and submit `https://www.skinbykaylaa.com/sitemap.xml`.
