# Pharoah Group Website

## Student Information
- **Name:** Nhlonipho Mkhonto
- **Student Number:** ST10502546
- **Module:** Web Development (Introduction) — WEDE5020


## Project Overview
This repository contains the Portfolio of Evidence (PoE) for the WEDE5020 module,
built for **Pharoah Group**, a real luxury and supercar dealership based at
3 Winnie Mandela Dr, Bryanston, Sandton (founded by Scott Pharoah, incorporated
October 2006). Site structure and content are inspired by the organisation's
real website (pharoahgroup.com) — see the Content & Image Sourcing Note below.
The project is being developed in three parts: HTML foundation (Part 1), CSS
styling (Part 2), and JavaScript functionality (Part 3).

### Content & Image Sourcing Note
Text throughout this site is **paraphrased and rewritten**, not copied, from
pharoahgroup.com — facts (founder, address, sub-brands, vehicle tiers) are
accurate; marketing copy is our own wording. Vehicle, team, division and
showroom photography and the showroom video are stored in `Images/` and
`Videos/` and are used for this coursework project only (Pharoah Group's
photography remains their property — see References). A few slots that have no
photo yet (home hero banner, "Sell" / "Finance" icons, concierge desk) still
use `placehold.co` placeholders marked `<!-- IMAGE SLOT -->` in the HTML.
Vehicle listings on the Vehicles page are representative examples, not a live
feed of real current stock. The Sandton City "concierge desk" on the Contact page is a
fictional second contact point, clearly labelled as such, added only to meet
the brief's "more than one location" requirement.

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
- Vehicles page with two-tier listings and full sub-brand service gallery
- Enquiry page with a sales/sell-my-car/finance/customisation/rental form
- Contact page with two contact points and embedded maps

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
- **Real images and video**: 21 photos (logo, 8 vehicles, 3 team portraits,
  founder portrait, 5 division photos, 2 collection photos, showroom exterior,
  culture photo) plus the showroom video were added from `Images/` and
  `Videos/`. Each image slot has a fixed `aspect-ratio` with
  `object-fit: cover` so mixed portrait/landscape photos sit evenly in their
  cards, with per-image `object-position` focal points.
- **Responsive image files**: vehicle and team photos use `srcset` with a
  300px-wide version in `Images/small/` and the full-size original, plus
  `sizes`, so smaller screens download less.
- **Video**: the showroom clip is vertical (9:16), so the player is capped at
  24rem wide / 85vh tall. It has an H.264 MP4 (works in all browsers) with the
  original HEVC file as fallback, a poster frame, and `playsinline` for mobile.

### Screenshot Evidence (Desktop / Tablet / Mobile)
Full-page captures of `Home.html` at each breakpoint are in
`Document/screenshots/`:

| Desktop (1280px) | Tablet (768px) | Mobile (375px) |
|---|---|---|
| ![Desktop](Document/screenshots/home-desktop.jpg) | ![Tablet](Document/screenshots/home-tablet.jpg) | ![Mobile](Document/screenshots/home-mobile.jpg) |

Captures were taken with the browser developer tools' device toolbar at the
widths shown above (desktop, tablet, mobile).

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
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── Images/                  (logo, vehicle, team, division and location photos)
│   ├── small/               (300px-wide versions used in srcset)
│   └── Location-crop.jpg    (cropped showroom exterior used on About and Contact)
├── Videos/
│   ├── Show room-h264.mp4   (H.264 version, played first)
│   ├── Show room.mp4        (original HEVC fallback)
│   └── Show room-poster.jpg (poster frame)
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
| 18 Sep 2026 | Added the real images from `Images/` to every matching slot on Home, Vehicles, About and Contact (replacing `placehold.co` placeholders); removed the placeholder `srcset` values so the real files load |
| 18 Sep 2026 | Added `logo.png` to the header on all 5 pages and fixed the `class="logo.png"` typo on `Home.html` (now `class="logo"`) |
| 18 Sep 2026 | Video: linked `Videos/Show room.mp4`, added an H.264 re-encode as the first `<source>`, a poster frame, and CSS to fit the vertical 9:16 clip (max-width 24rem, max-height 85vh) |
| 18 Sep 2026 | CSS: added `aspect-ratio` + `object-fit: cover` rules for vehicle, team, About and Contact images so mixed-shape photos stay even; per-image `object-position` focal points |
| 18 Sep 2026 | Responsive images: added `Images/small/` (300px) versions and updated `srcset`/`sizes` on the 8 vehicle and 3 team images |
| 18 Sep 2026 | Cropped the showroom exterior screenshot to `Location-crop.jpg` (removed carousel arrow/dots) and used it on About and Contact |
| 18 Sep 2026 | Corrected three vehicle cards so text matches the photos: Huracán → Aventador (V12), Range Rover SV → Range Rover Sport SVR, Golf R → Golf 7 GTI |
| 18 Sep 2026 | README: updated image sourcing note, Part 2 details, folder structure and added a References section |
| [Insert Date] | Added inline `CHANGE` comments throughout `CSS/style.css` and `Home.html` marking exactly what was modified and why |
| [Insert Date] | Rewrote all page content around verified real Pharoah Group facts (founder Scott Pharoah, Bryanston address, two vehicle tiers, 6IXPCK Customs, Skär Wheels, Espresso, FOAM Car Wash, Black Velvet Rentals) |
| [Insert Date] | Added new homepage sections: two-tier vehicle showcase, Sell Your Car/Finance quick actions, sub-brand highlight grid, culture section |
| [Insert Date] | Added sub-brand service gallery and second vehicle tier to `Services.html` |
| [Insert Date] | Updated `Enquiry.html` dropdown to real enquiry types (Sell My Car, 6IXPCK Customs, Black Velvet Rental) |
| [Insert Date] | Updated `Contact us.html` to the real Bryanston address and added a clearly-labelled fictional second contact point |
| [Insert Date] | Added ~15 new `<!-- IMAGE SLOT -->` placeholders across all pages describing the real photo needed for each spot |

## References
Harvard-style references for facts and techniques used across Parts 1–2:

- Pharoah Group (2026) *Home page*. Available at: https://pharoahgroup.com/ (Accessed: 12 August 2026).
- Pharoah Group (2026) *Facebook page*. Available at: https://www.facebook.com/PharoahGroup/ (Accessed: 17 September 2026).
- B2BHint (2026) *Pharoah Group — Company M2006032637, South Africa*. Available at: https://b2bhint.com/en/company/za/pharoah-group--M2006032637 (Accessed: 12 August 2026).
- Mozilla Developer Network (2026) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *CSS flexible box layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *Using responsive images in HTML*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 17 September 2026).
- Google Fonts (2026) *Playfair Display; Lato*. Available at: https://fonts.google.com/ (Accessed: 17 September 2026).
- Mozilla Developer Network (2026) *<picture>: The Picture element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture (Accessed: [insert access date]).
- Mozilla Developer Network (2026) *<video>: The Video Embed element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video (Accessed: [insert access date]).
- Mozilla Developer Network (2026) *object-fit*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit (Accessed: [insert access date]).
- Mozilla Developer Network (2026) *aspect-ratio*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio (Accessed: [insert access date]).
- Placehold.co (n.d.) *Placeholder images*. Available at: https://placehold.co (Accessed: [insert access date]). Used only for slots that do not have a photo yet.
- Pharoah Group (n.d.) *Vehicle, team, division and showroom photographs and showroom video* [images and video]. [Insert where the files were obtained from] (Accessed: [insert access date]).
- The Independent Institute of Education (2026) *WEDE5020 Portfolio of Evidence: Part 2 — Designing the Visuals: CSS Styling and Responsive Design*. Rosebank: The IIE.
- Anthropic (2026) *Claude Sonnet 5* [large language model]. Available at: https://claude.ai (Accessed: 18 September 2026). Used to help place the images and video, and to draft CSS and README updates.

See the Website Project Proposal document for the full set of organisation-specific
references used in researching Pharoah Group.
