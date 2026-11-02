# Pharoah Group Website

## Student Information
- **Name:** [Nhlonipho]]
- **Student Number:** ST10502546]
- **Module:** Web Development (Introduction) — WEDE5020
- **Group:** [2]

## Project Overview
This repository contains the Portfolio of Evidence (PoE) for the WEDE5020 module,
built for **Pharoah Group**, a real luxury and supercar dealership based at
3 Winnie Mandela Dr, Bryanston, Sandton (founded by Scott Pharoah, incorporated
October 2006). Site structure and content are inspired by the organisation's
real website (pharoahgroup.com) — see the Content & Image Sourcing Note below.
The project was developed in three parts: HTML foundation (Part 1), CSS
styling (Part 2), and JavaScript functionality, SEO and forms (Part 3) — all
three are complete.

### Content & Image Sourcing Note
Text throughout this site is **paraphrased and rewritten**, not copied, from
pharoahgroup.com — facts (founder, address, sub-brands, vehicle tiers) are
accurate; marketing copy is our own wording. Photos supplied for this
coursework project have been resized and wired into the real `Images/`
image slots described below. Two portrait slots are intentionally kept as
`placehold.co` placeholders rather than using supplied photos of real
people: the "Scott Pharoah" founder photo and the "Director" team photo,
because the supplied images could not be verified as genuinely depicting
those specific Pharoah Group individuals in a Pharoah Group context — using
them risked misrepresenting real, identifiable people. The Sales Manager and
Finance Manager team photos **are** used, because they show visible Pharoah
Group branding/signage confirming they are genuine staff photos. Vehicle
listings on the Vehicles page are representative examples, not a live feed of
real current stock, and the photographed vehicle trims (e.g. Lamborghini
Aventador, Volkswagen Golf 7 GTI) are named to match the actual supplied
photos. The Sandton City "concierge desk" on the Contact page is a
fictional second contact point, clearly labelled as such, added only to meet
the brief's "more than one location" requirement; it keeps a `placehold.co`
image since no real photo of it exists.

## Website Goals and Objectives
- Establish a premium, trustworthy online presence reflecting the brand's exclusivity.
- Showcase current vehicle stock through an accessible, filterable inventory.
- Generate qualified leads via sales, valuation and finance enquiries.
- Provide clear information on financing, trade-ins and after-sales services.

**Key Performance Indicators (KPIs):**
- Increase enquiry form submissions by 20% within 6 months of launch.
- Achieve 2+ minute average session duration on vehicle detail pages.
- Reduce homepage bounce rate to below 45%.
- Grow organic search traffic by 25% within 12 months.

## Key Features and Functionality
- Homepage with hero, two-tier vehicle showcase (Auto Investments / ORIGINS),
  quick-action cards (Sell Your Car / Finance), sub-brand highlights, video
  tour, and culture section
- About Us page (verified history, founder, mission, vision, team)
- Vehicles page with two-tier listings, full sub-brand service gallery,
  **live search/filter/sort controls**, and an **FAQ accordion**
- Enquiry page with a sales/sell-my-car/finance/customisation/rental form,
  **client-side validation**, and a **dynamically generated cost/availability
  response**
- Contact page with two contact points, a **Leaflet.js interactive map**,
  and a general message form with **client-side validation** and
  **mailto-based email compilation**
- Sitewide **image lightbox gallery** (click any vehicle/sub-brand photo to
  view it larger, with keyboard and Prev/Next navigation)
- Sitewide **scroll-reveal animations** and a **mobile nav toggle menu**
- **On-page SEO**: per-page title tags, meta descriptions, keywords,
  canonical URLs, Open Graph/Twitter Card tags, descriptive image filenames
  and alt text, `robots.txt` and `sitemap.xml`

## Timeline and Milestones
| Phase | Timeframe |
|---|---|
| Planning & Proposal | Week 1 |
| Content Research & Sourcing | Week 2 |
| Website Structure & Planning | Week 2–3 |
| HTML Foundation (Part 1) | Week 3–4 |
| **Part 1 Submission** | Week 4 |
| CSS Styling (Part 2) | Week 5–7 |
| **Part 2 Submission** | Week 8 |
| JavaScript Functionality (Part 3) | Week 9–11 |
| **Part 3 Submission** | Week 12 |

## Part 1 Details
Part 1 delivers the foundational HTML structure of the website:
- 5 HTML pages: `Home.html`, `About us.html`, `Services.html`, `Enquiry.html`, `Contact us.html`
- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Working navigation linking all pages
- Researched content integrated into each page
- Placeholder `JS/script.js` for Part 3 functionality

## Part 2 Details
Part 2 applies full CSS styling and responsive design on top of the Part 1 HTML:
- **External stylesheet** (`CSS/style.css`) linked from all 5 pages
- **CSS reset + base style**: custom properties (`:root`) for colour, spacing,
  fonts; box-sizing reset; consistent base typography
- **Typography scale**: modular 1.25 ratio scale across `h1`–`h4`, consistent
  line-height and letter-spacing
- **Layout structure**: Flexbox for the header, nav, cards, and forms; CSS Grid
  for the hero (`grid-template-areas`) and footer (3-column named areas)
- **Decorative styling**: colour palette, background colours, borders, box-shadows
  on cards and buttons
- **Pseudo-classes**: `:hover`, `:focus`, and `:active` states on nav links,
  buttons, and form fields for interactivity and accessibility
- **Responsive design**: two breakpoints (tablet ≤1024px, mobile ≤600px) using
  relative units (`rem`, `%`) throughout, so a single `html { font-size }` change
  rescales the whole page; layout, typography, navigation, and images all adapt
  at each breakpoint
- **Responsive images**: `srcset`/`sizes` on all vehicle/team images, plus a
  `<picture>` element with breakpoint-specific `<source>`s on the homepage hero

### Screenshot Evidence (Desktop / Tablet / Mobile)
Full-page captures of `Home.html` at each breakpoint are in
`Document/screenshots/`:

| Desktop (1280px) | Tablet (768px) | Mobile (375px) |
|---|---|---|
| ![Desktop](Document/screenshots/home-desktop.jpg) | ![Tablet](Document/screenshots/home-tablet.jpg) | ![Mobile](Document/screenshots/home-mobile.jpg) |

> Note: these were captured in an offline environment, so the placeholder
> vehicle/hero images show as broken-image icons — the layout, spacing and
> responsive behaviour shown is accurate. Re-capture these once the site is
> deployed, now that real images are wired into `Images/`.

## Part 3 Details
Part 3 adds JavaScript functionality, SEO and full form handling on top of
the Part 1/2 site. Everything lives in one shared file, `JS/script.js`
(loaded with `defer` on all 5 pages), with clearly commented sections.

### 1. Working Through Part 2 Feedback
No formal Part 2 mark/feedback had been released at the time Part 3 was
completed. In its place, the following corrections were made while
integrating Part 3, and are logged in the Changelog below with today's date:
- Fixed a corrupted logo `<div>` on `Home.html` left over from an earlier
  edit (`class="logo.png"` instead of a real `<img>` tag).
- Fixed a broken image path on `About us.html`'s showroom photo
  (`src="Location.png"` was missing the `Images/` folder prefix and its
  `srcset` still pointed at placeholder URLs).
- Replaced all `placehold.co` image references with the real supplied
  Pharoah Group photos (see Content & Image Sourcing Note above).
- Corrected two vehicle listings on `Services.html` to match the actual
  photographed trims (Lamborghini **Aventador**, not Huracán; Volkswagen
  **Golf 7 GTI**, not Golf R).
- Added explicit `width`/`height` attributes to every image (page-speed:
  prevents layout shift while images load).

### 2. Functionality (JavaScript Enhancements)
**2.1 Interactive Elements**
- **Accordion**: an FAQ accordion on `Services.html` (`#vehicle-faq`),
  built with vanilla JavaScript (no framework needed at this scale).
- **Interactive map**: a genuine [Leaflet.js](https://leafletjs.com/)
  map on `Contact us.html` (`#leaflet-map`), using free OpenStreetMap
  tiles, with markers and popups for both the real Bryanston showroom and
  the fictional Sandton City concierge desk.
- **Animations/transitions**: scroll-reveal fade/slide-in animation on
  every `<section>`, implemented with the `IntersectionObserver` API and
  CSS transitions (respects `prefers-reduced-motion`).
- **Advanced DOM manipulation**: sections get `.reveal`/`.is-visible`
  classes added dynamically; vehicle cards are re-ordered in the DOM when
  sorted; form response panels and error messages are built and injected
  into the page at runtime.
- **Lightbox gallery**: every vehicle and sub-brand image across the site
  opens in a full-size lightbox overlay on click, with keyboard (Esc,
  Arrow keys) and Prev/Next support.

**2.2 Dynamic Content**
- The vehicle search/filter/sort bar on `Services.html` dynamically
  shows/hides and re-sorts `.vehicle-card` elements already in the DOM,
  which satisfies "dynamically load content" for a static-hosting project
  with no database — all vehicle data lives in `data-*` attributes read
  by JavaScript rather than hardcoded into the filtering logic.
- **Search functionality**: free-text search, a Make filter, a Body Type
  filter, and a Price/Name sort — all combinable — on `Services.html`.

### 3. Search Engine Optimization (SEO)
**3.1 On-Page SEO**
- **Keyword research**: each page targets a distinct set of keywords
  relevant to that page's content (see each `<meta name="keywords">` tag),
  e.g. Services.html targets vehicle-specific searches like "Lamborghini
  for sale South Africa", while Contact us.html targets local-intent
  searches like "Pharoah Group contact".
- **Title tags & meta descriptions**: unique, descriptive `<title>` and
  `<meta name="description">` on every page.
- **Header tags**: a single `<h1>` per page with a logical `<h2>`/`<h3>`
  hierarchy beneath it.
- **Image optimisation**: descriptive filenames (`vehicle-aventador-400w.jpg`,
  `team-sales-manager-250w.jpg`, etc.) and descriptive `alt` text on every
  content image.
- **URL structure**: flat, descriptive filenames per page
  (`Services.html`, `Enquiry.html`, etc.).
- **Internal linking**: every page links to the others via nav + footer,
  plus contextual links (e.g. "Enquire About This Vehicle" → `Enquiry.html`).
- **Mobile-friendliness**: responsive layout from Part 2, plus a new
  mobile nav toggle menu for easier navigation on small screens.

**3.2 Off-Page SEO**
- **Backlinks**: the real Pharoah Group Facebook page is linked from the
  footer's social links, providing a credible, verifiable outbound link.
- **Social media**: Open Graph and Twitter Card meta tags were added to
  every page so links shared on social media show a proper title,
  description and preview image.
- **Local SEO**: the real Bryanston, Sandton address, phone number and an
  embedded interactive map appear on the Contact page, and address details
  appear in the footer of every page.

**3.3 Additional Requests**
- `robots.txt` — allows all crawlers and points to `sitemap.xml`.
- `sitemap.xml` — lists all 5 pages with priority/change-frequency hints.
- **Page speed**: images are resized to the smallest sensible resolution
  (honest `srcset` with only genuinely distinct widths — no duplicate
  files), `loading="lazy"` on below-the-fold images, `width`/`height` set
  on every image to prevent layout shift, and the JS file is loaded with
  `defer` so it never blocks page rendering.
- **Security**: `X-Content-Type-Options: nosniff` and a `referrer-policy`
  meta tag on every page; all forms use client-side validation before any
  data leaves the browser.

### 4. Form Functionality and Validation
- **`Enquiry.html`**: collects name, email, phone, enquiry type and
  message. On valid submission, a simulated async request (see note below)
  returns a **dynamically generated response** covering indicative price
  (looked up from the vehicle of interest) and expected availability —
  satisfying "present the user with a response related to the cost,
  availability, or another relevant aspect".
- **`Contact us.html`**: collects name, email, optional phone, **message
  type** (General Enquiry / Feedback / Partnership / Media / Careers /
  Other) and message. On valid submission, the fields are **compiled into
  an email** and the visitor is given a "Open & Send Email" button (and
  their mail client opens automatically) addressed to
  **info@pharoahgroup.com**, the recipient stated in `JS/script.js`.
- **Validation**: both forms use a mix of HTML5 attributes (`required`,
  `type="email"`, `minlength`, a South African phone `pattern`) and
  matching JavaScript validation, with inline error messages shown/hidden
  per field as the visitor types.
- **Form submission**: both forms are intercepted with
  `event.preventDefault()`, validated, then processed in JS.
- **"AJAX" note**: this is a static site with no backend/database, so
  there is no real server endpoint to call. Both forms simulate the async
  request/response cycle AJAX would normally provide (`window.setTimeout`
  + a loading spinner + a dynamically injected response), rather than a
  real `fetch()`/`XMLHttpRequest` call to a server that doesn't exist.
  This is the same pattern recommended for static-hosting coursework
  projects (Netlify/GitHub Pages have no server-side code).

## GitHub Repository
Changes are committed regularly throughout each part with descriptive
commit messages (not one single "final submission" commit), and this
README's Changelog is updated alongside every meaningful change so the
commit history and the changelog tell the same story. If you are pushing
this project to GitHub for the first time:
```bash
git init
git add .
git commit -m "Initial commit: Part 1 HTML structure"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```
From then on, commit after each meaningful change, e.g.:
```bash
git add .
git commit -m "Part 3: add vehicle search/filter/sort and FAQ accordion"
git push
```

## Deployment
This site is a static HTML/CSS/JS site with no build step, so it can be
deployed directly to any static host. Two free options named in the brief:

**Netlify (drag-and-drop):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `PharoahGroup` folder onto the page.
3. Netlify assigns a live URL immediately (e.g. `random-name-123.netlify.app`).
4. Optional: in *Site settings → Change site name*, set a custom subdomain.
5. Update the base URL in `sitemap.xml` and the `<link rel="canonical">`/
   Open Graph tags in each page's `<head>` to match your real deployed URL.

**GitHub Pages:**
1. Push this repository to GitHub (see GitHub Repository section above).
2. In the repo, go to *Settings → Pages*.
3. Under *Source*, select the `main` branch and `/ (root)` folder, then Save.
4. GitHub publishes the site at `https://<username>.github.io/<repo-name>/`.
5. Because `Home.html` is not named `index.html`, visitors must browse to
   `/Home.html` directly, or add a small root `index.html` that redirects
   to `Home.html` (not included here, to keep the required file-naming
   convention from the brief intact).
6. As above, update `sitemap.xml` and the canonical/Open Graph URLs to
   match your GitHub Pages URL once deployed.

## Sitemap
```
Home (Home.html)
├── About Us (About us.html)
├── Inventory / Services (Services.html)
├── Enquiry (Enquiry.html)
└── Contact (Contact us.html)
```

## Folder Structure
```
PharoahGroup/
├── Home.html
├── About us.html
├── Services.html
├── Enquiry.html
├── Contact us.html
├── robots.txt
├── sitemap.xml
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── Images/
│   ├── logo.png
│   ├── hero-600w.jpg / hero-632w.jpg
│   ├── about-hero-632w.jpg
│   ├── tier-investments.jpg / tier-origins.jpg
│   ├── vehicle-*-300w.jpg / vehicle-*-400w.jpg (8 vehicles)
│   ├── team-sales-manager-*.jpg / team-finance-manager-*.jpg
│   ├── subbrand-*.jpg (6IXPCK, Skär Wheels, Espresso, FOAM, Rentals)
│   ├── culture.jpg / video-poster.jpg / contact-bryanston.jpg
│   └── (original supplied source photos)
├── Videos/
│   └── (drop showroom-tour.mp4 / .webm here)
├── Document/
│   └── screenshots/
│       ├── home-desktop.jpg
│       ├── home-tablet.jpg
│       └── home-mobile.jpg
└── README.md
```

## Changelog
| Date | Change |
|---|---|
| [Insert Date] | Initial commit — Part 1 HTML structure, navigation and content added |
| [Insert Date] | Part 2 feedback fixes — [list any corrections made from Part 1 lecturer feedback here, e.g. "corrected heading hierarchy on About Us", "fixed missing alt text"] |
| [Insert Date] | Part 2 — Added external stylesheet (`CSS/style.css`) and linked it from all 5 pages |
| [Insert Date] | Part 2 — Implemented CSS reset and base style (colour/spacing custom properties) |
| [Insert Date] | Part 2 — Applied modular typography scale across headings and body text |
| [Insert Date] | Part 2 — Built desktop layout using Flexbox (header, nav, cards, forms) and CSS Grid (hero, footer) |
| [Insert Date] | Part 2 — Added decorative styling (colours, borders, box-shadows) and `:hover`/`:focus`/`:active` pseudo-classes |
| [Insert Date] | Part 2 — Added responsive breakpoints (tablet ≤1024px, mobile ≤600px) covering layout, typography, navigation and images |
| [Insert Date] | Part 2 — Added `srcset`/`sizes` to all images and a `<picture>` element to the homepage hero |
| [Insert Date] | Part 2 — Captured desktop/tablet/mobile screenshots as responsive design evidence |
| [Insert Date] | Added a video tour section to `Home.html` (`Videos/` folder) with `<video>`, dual `mp4`/`webm` sources, and a `poster` fallback image |
| [Insert Date] | Added inline `CHANGE` comments throughout `CSS/style.css` and `Home.html` marking exactly what was modified and why |
| [Insert Date] | Rewrote all page content around verified real Pharoah Group facts (founder Scott Pharoah, Bryanston address, two vehicle tiers, 6IXPCK Customs, Skär Wheels, Espresso, FOAM Car Wash, Black Velvet Rentals) |
| [Insert Date] | Added new homepage sections: two-tier vehicle showcase, Sell Your Car/Finance quick actions, sub-brand highlight grid, culture section |
| [Insert Date] | Added sub-brand service gallery and second vehicle tier to `Services.html` |
| [Insert Date] | Updated `Enquiry.html` dropdown to real enquiry types (Sell My Car, 6IXPCK Customs, Black Velvet Rental) |
| [Insert Date] | Updated `Contact us.html` to the real Bryanston address and added a clearly-labelled fictional second contact point |
| [Insert Date] | Added ~15 new `<!-- IMAGE SLOT -->` placeholders across all pages describing the real photo needed for each spot |
| 2026-10-29 | Part 2 feedback fix — corrected a corrupted `Home.html` logo `<div>` (`class="logo.png"`) left over from a prior edit; replaced with a proper `<img>` tag across all 5 pages, plus a new `.logo-img` circular-crop CSS rule |
| 2026-10-29 | Part 2 feedback fix — corrected a broken image path on `About us.html`'s showroom photo (missing `Images/` prefix, stale placeholder `srcset`) |
| 2026-10-29 | Wired real supplied photos into every image slot across all 5 pages (hero, vehicle cards, team photos, sub-brand gallery, culture section, video poster), resized with an "honest" `srcset`/`sizes` approach — no duplicate-resolution files; Director and founder portraits intentionally kept as placeholders (see Content & Image Sourcing Note) |
| 2026-10-29 | Corrected two `Services.html` vehicle listings to match the actual photographed trims: Lamborghini Aventador (was Huracán) and Volkswagen Golf 7 GTI (was Golf R) |
| 2026-10-29 | Added `.vehicle-card img` fixed-height + `object-fit: cover` rule so cards stay visually consistent across differently-shaped real photos |
| 2026-10-29 | Part 3 — Added mobile nav-toggle button and responsive collapsible nav menu (`CSS/style.css`, all 5 pages) |
| 2026-10-29 | Part 3 — Added scroll-reveal animations on every page section via `IntersectionObserver` |
| 2026-10-29 | Part 3 — Added a sitewide image lightbox gallery for vehicle and sub-brand photos, with keyboard and Prev/Next navigation |
| 2026-10-29 | Part 3 — Added an FAQ accordion to `Services.html` |
| 2026-10-29 | Part 3 — Added a live search/filter/sort bar to `Services.html`, driven by `data-make`/`data-type`/`data-price`/`data-name` attributes on each vehicle card |
| 2026-10-29 | Part 3 — Replaced the Google Maps iframes on `Contact us.html` with a genuine Leaflet.js interactive map plotting both locations |
| 2026-10-29 | Part 3 — Added full client-side validation, inline error messages, and a dynamically generated cost/availability response to `Enquiry.html` |
| 2026-10-29 | Part 3 — Added a "type of message" field, full client-side validation, and mailto-based email compilation to the `Contact us.html` form |
| 2026-10-29 | Part 3 — Added simulated async ("AJAX-style") submission feedback (loading spinner + delayed response) to both forms |
| 2026-10-29 | Part 3 — Added on-page SEO: canonical URLs, meta keywords, Open Graph and Twitter Card tags, and basic security meta tags to all 5 pages |
| 2026-10-29 | Part 3 — Added `robots.txt` and `sitemap.xml` at the project root |
| 2026-10-29 | Part 3 — Added `loading="lazy"` and explicit `width`/`height` to images sitewide for page-speed and layout-shift prevention |
| 2026-10-29 | Part 3 — Rewrote `JS/script.js` from its Part 1/2 placeholder into the full Part 3 feature set described above |
| 2026-10-29 | Part 3 — Updated README.md with Part 3 Details, Deployment instructions, new Changelog entries and new References |

## References
Harvard-style references for facts and techniques used across Parts 1–3:

- Pharoah Group (2026) *Home page*. Available at: https://pharoahgroup.com/ (Accessed: 12 August 2026).
- Pharoah Group (2026) *Facebook page*. Available at: https://www.facebook.com/PharoahGroup/ (Accessed: 17 September 2026).
- B2BHint (2026) *Pharoah Group — Company M2006032637, South Africa*. Available at: https://b2bhint.com/en/company/za/pharoah-group--M2006032637 (Accessed: 12 August 2026).
- Mozilla Developer Network (2026) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *CSS flexible box layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *Using responsive images in HTML*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 17 September 2026).
- Google Fonts (2026) *Playfair Display; Lato*. Available at: https://fonts.google.com/ (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *IntersectionObserver API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 29 October 2026).
- Mozilla Developer Network (2026) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 29 October 2026).
- Mozilla Developer Network (2026) *Sending forms through JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript (Accessed: 29 October 2026).
- Mozilla Developer Network (2026) *mailto: URL scheme*. Available at: https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/mailto (Accessed: 29 October 2026).
- Leaflet (2026) *Leaflet — an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 29 October 2026).
- OpenStreetMap Contributors (2026) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed: 29 October 2026).
- Google Search Central (2026) *SEO starter guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 29 October 2026).
- Google Search Central (2026) *robots.txt introduction and guide*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 29 October 2026).
- sitemaps.org (2026) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 29 October 2026).
- The Open Graph protocol (2026) *The Open Graph protocol*. Available at: https://ogp.me/ (Accessed: 29 October 2026).
- Mozilla Developer Network (2026) *X-Content-Type-Options*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options (Accessed: 29 October 2026).
- Netlify (2026) *Netlify Drop*. Available at: https://app.netlify.com/drop (Accessed: 29 October 2026).
- GitHub (2026) *GitHub Pages documentation*. Available at: https://docs.github.com/en/pages (Accessed: 29 October 2026).

See the Website Project Proposal document for the full set of organisation-specific
references used in researching Pharoah Group.
