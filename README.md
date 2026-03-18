# Gig Wewu Website

React + Vite implementation of a Sinhala content site built on top of the HTML5 UP Spectral theme.

## Overview

This project adapts the original Spectral HTML theme into a React application with routed content pages. The home page keeps the Spectral landing behavior and banner animation, while the inner pages are structured as long-form Sinhala content pages.

## Stack

- React
- Vite
- React Router
- HTML5 UP Spectral theme assets

## Available Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd run dev
```

## Main Routes

- `/` - Home
- `/thawulla` - තාවුල්ල
- `/wae-kandiya` - වෑ කණ්ඩිය
- `/wae-angopanga` - වැවෙ ක අංගෝපාංග
- `/waew-kare-gaha-kola` - වැව් කරේ ගහ කොළ
- `/waew-thanawima` - වැව් තැනවීම
- `/waweka-mahima` - වැවේ ක මහිම
- `/waew-namawaliya` - සිරි ලක වැව් සිතියම
- `/pin-panduru` - පිං පඬුරු
- `/jathiyata-shasanayata` - ජාතිය ට ශාසනය ට
- `/jathiyata-shasanayata/example-post-1` - sample blog post
- `/europiya-wartha` - යුරෝපීය වාර්තා

## Important Files

- `src/App.jsx` - router and page transitions
- `src/App.css` - project-level overrides and custom page styling
- `src/components/layout/Header.jsx` - header and menu
- `src/components/layout/Footer.jsx` - footer
- `src/components/sections/Banner.jsx` - home banner
- `src/components/sections/SectionOne.jsx` - main home content block
- `src/components/sections/CTA.jsx` - lower home CTA section
- `src/hooks/useSmoothScroll.js` - home banner scroll behavior

## Content Pages

Most inner pages live in `src/pages/` and follow the Spectral `article` + `wrapper style5` structure.

Current content pages include:

- `Home.jsx`
- `Thawulla.jsx`
- `WaeKandiya.jsx`
- `WaeAngopanga.jsx`
- `WaewKareGahaKola.jsx`
- `WaewThanawima.jsx`
- `WawekaMahima.jsx`
- `WaewNamawaliya.jsx`
- `PinPanduru.jsx`
- `JathiyataShasanayata.jsx`
- `JathiyataShasanayataPost.jsx`

## Images

Temporary page images currently use files from:

- `public/images/banner.jpg`
- `public/images/pic01.jpg`
- `public/images/pic02.jpg`
- `public/images/pic03.jpg`
- `public/images/pic04.jpg`
- `public/images/pic05.jpg`

Replace these with final images as needed. Most pages are already structured to accept image swaps without changing layout.

## Styling Notes

- Base Spectral styles are imported from `src/assets/css/main.css`
- Project-specific overrides live in `src/App.css`
- Sinhala typography is handled through `Noto Sans Sinhala`
- Home page animation depends on the `landing` and `is-preload` body classes

## Blog Pattern

The `ජාතිය ට ශාසනය ට` section is set up as a simple blog listing:

- list page: `src/pages/JathiyataShasanayata.jsx`
- post page example: `src/pages/JathiyataShasanayataPost.jsx`

To add more blog posts, create a new routed page and add a matching card/link on the listing page.

## Notes

- The project is theme-driven, so when updating layout or behavior, prefer checking the original `html5up-spectral` files first.
- Some pages still contain placeholder routes or placeholder images and can be extended incrementally.
