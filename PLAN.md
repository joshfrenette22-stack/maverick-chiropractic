# Maverick Chiropractic — Implementation Plan

## Source of Truth
- **Prototypes:** `/Maverick-Chiropractic - Claude design/` (6 HTML files)
- **Primary homepage:** `maverick-chiropractic-home-v3.html`
- **Inner pages:** `services.html`, `about.html`, `new-patients.html`, `contact.html`, `journal.html`
- **Design brief:** `mpib9qhl-maverick-design-brief.md`
- **Assets:** Dr. Courtney photo (`mpl5zedr-...PNG`), pexels stock photos, Unsplash URLs

## Architecture

```
src/
  app/
    layout.tsx          ← Root layout (fonts, metadata, UtilityBar + Header + Footer)
    page.tsx            ← Homepage
    services/page.tsx
    about/page.tsx
    new-patients/page.tsx
    contact/page.tsx
    journal/page.tsx
    globals.css         ← Design tokens, base resets, animation classes, all component CSS
  components/
    UtilityBar.tsx
    SiteHeader.tsx      ← Desktop nav + mobile hamburger toggle
    MobileNav.tsx       ← Full-screen clip-path overlay
    Footer.tsx
    BrandPanel.tsx      ← "MAVERICK" ghost-text panel with bg image
    ClosingCTA.tsx      ← Moss-bg CTA band (reused on every page)
    SectionDivider.tsx  ← SVG curve dividers (multiple variants)
    SectionRule.tsx     ← Eyebrow with optional stone hairlines
    ScrollReveal.tsx    ← Client component wrapping IntersectionObserver
    Accordion.tsx       ← FAQ collapsible (client component)
    PageHero.tsx        ← Reusable subpage hero banner
  lib/
    site-data.ts        ← Nav links, footer data, hours, address, contact info
```

## Design Tokens (from prototypes)

```css
--color-slate: #2D2C2A    /* Primary text, dark bg */
--color-oat: #EBEBEB      /* Default page bg (NOT used — prototypes use cream) */
--color-moss: #7C806F     /* Primary accent, buttons */
--color-clay: #A78C79     /* Secondary accent, hovers */
--color-stone: #C7C2BC    /* Borders, muted text */
--color-cream: #F7F4EE    /* Actual page background */
--color-white: #FFFFFF    /* Cards, contrast */

Fonts: Cormorant Garamond (300,400,500 + italic) + Montserrat (300,400,500,600)
Container: 1280px max, clamp(20px, 5vw, 80px) padding
Section padding: 120px desktop, 64px mobile
```

## Key Interactive Patterns (all client components)

1. **Scroll reveal** — IntersectionObserver, threshold 0.12, adds `.visible` class
2. **Mobile nav** — clip-path circle animation (0% → 150%), body overflow hidden
3. **Header scroll** — adds `.scrolled` class at scrollY > 80
4. **Accordion** — max-height transition, single-open behavior
5. **Contact form** — floating labels (focus/filled states), client-side validation
6. **Journal filters** — category pill toggles, show/hide articles
7. **Image hover** — scale(1.03-1.04) on 600ms transition

---

## Phase 1: Foundation (globals.css + layout + shared components)

### Task 1.1: Replace globals.css
Replace the scaffold default with the full Maverick design system extracted from prototypes:
- CSS custom properties (all 7 color tokens + font vars + container/pad/section-py)
- Tailwind `@theme inline` block mapping tokens to Tailwind utilities
- Base resets (box-sizing, html smoothing, body font, img block, link/button resets)
- `.container` utility class
- `.eyebrow`, `.section-rule` classes
- All `.btn` variants (primary, secondary, ghost, white, outline-light)
- All `.reveal` animation classes (reveal, reveal-scale, reveal-clip, reveal-left, reveal-right, reveal-rotate + delay modifiers)
- `.section-divider` styles
- `.img-placeholder` styles
- `.img-arch`, `.img-leaf`, `.img-asymmetric` image shape classes

**Source:** Copy CSS verbatim from `services.html` lines 13-71 (tokens + base), lines 39-69 (buttons + animations), lines 72-73 (section dividers), lines 287-293 (image shapes)

### Task 1.2: Replace layout.tsx
- Import Cormorant_Garamond and Montserrat via `next/font/google`
- Set metadata (title, description matching `maverick-chiropractic-home-v3.html` head)
- Render: `<UtilityBar />` + `<SiteHeader />` + `{children}` + `<Footer />`
- Apply font CSS variables to `<html>`
- Configure `next/font` with correct weights and subsets

### Task 1.3: Build UtilityBar component
- 36px slate bar, right-aligned links (Email · Book Online)
- Source: all prototypes share identical utility bar markup

### Task 1.4: Build SiteHeader + MobileNav
- **SiteHeader:** 88px sticky header, 3-column grid (nav-left | logo | nav-right)
- Desktop nav links: Services, New Patients, About, Contact
- Logo: "Maverick" (Cormorant) + "CHIROPRACTIC" (Montserrat) + clay line
- Book Now primary button
- Hamburger toggle (3 spans, rotates to X on active)
- `scrolled` class on scroll > 80px (client-side useEffect)
- **MobileNav:** Fixed overlay, clip-path circle animation
  - Brand header, italic Cormorant nav links with staggered delays
  - Book CTA, footer info (Email, "Windsor, Colorado")
- Must accept `pathname` for `.active` link highlighting
- Source: `services.html` lines 76-260 (all header + mobile nav CSS), lines 374-410 (markup)

### Task 1.5: Build Footer + BrandPanel
- **Footer:** Slate bg, 4-column grid (brand | site links | visit/hours | contact)
  - Address: Inside Stine Chiropractic, 1226 W Ash St, Unit A, Windsor, CO 80550
  - Hours from prototypes, Get Directions link, Instagram link
  - Bottom strip with copyright + Privacy/Terms/Accessibility
- **BrandPanel:** Full-bleed section after footer with bg image + gradient overlay + "MAVERICK" ghost text
- Source: `services.html` lines 314-368 (footer CSS), lines 586-606 (markup)

### Task 1.6: Build ClosingCTA component
- Moss bg, centered headline + body + two CTAs (Book + Email)
- Accepts props: `headline`, `body`, `primaryLabel`, `secondaryLabel`, `secondaryHref`
- Source: `services.html` lines 300-303 (CSS), lines 577-583 (markup)

### Task 1.7: Build ScrollReveal client component
- Wraps children, applies IntersectionObserver
- Props: `variant` (reveal | reveal-scale | reveal-clip | reveal-left | reveal-right | reveal-rotate), `delay` (0-4), `className`
- Observer config: threshold 0.12, rootMargin '0px 0px -40px 0px'
- Adds `.visible` class on intersect, unobserves after

### Task 1.8: Build SectionDivider + SectionRule + PageHero
- **SectionDivider:** Accepts `variant` prop for different SVG curve shapes (wave, scallop, ellipse, organic)
- **SectionRule:** Eyebrow text with stone hairlines on each side
- **PageHero:** Subpage hero banner (40-50vh, bg image, overlay, eyebrow + h1 + sub, bottom SVG arch)

### Verification Phase 1
- `npm run build` succeeds
- `npm run dev` shows the layout skeleton (utility bar, header, empty content, footer, brand panel)
- Mobile nav opens/closes with clip-path animation
- Header gets shadow on scroll
- No horizontal overflow at any viewport

---

## Phase 2: Homepage

### Task 2.1: Homepage sections
Build `src/app/page.tsx` with all 12 sections from `maverick-chiropractic-home-v3.html`:
0. (Utility bar + Header in layout)
1. Hero — full-viewport, bg image with overlay, centered text, scroll chevron
2. About intro — 7/5 image-text split (image left, text right)
3. Services grid — cream bg, centered header, 3×2 grid of service cards
4. The Office — two side-by-side images + centered text below
5. The Method (FAQ) — 5/7 image-text split with accordion
6. Who We Serve — 4-column category card grid with image + label overlay
7. Meet Dr. Courtney — 7/5 parallax-style split with pull-quote
8. Trusted by Families — 3-column testimonial cards + trust signal row
9. Journal preview — 3-column blog card grid
10. Closing CTA (shared component)
11. (Footer in layout)

### Task 2.2: Homepage-specific CSS
Add to globals.css:
- Hero section styles (100vh, overlay, centered content, chevron animation)
- Service card styles (hover scale, ghost CTA)
- Office dual-image layout
- Accordion styles for FAQ
- Category card overlay styles
- Founder section with pull-quote
- Testimonial card styles
- Blog/journal card styles

**Source:** `maverick-chiropractic-home-v3.html` — the entire `<style>` block contains all homepage-specific CSS

### Task 2.3: Build Accordion client component
- Single-open behavior (opening one closes others)
- Smooth max-height transition (400ms cubic-bezier)
- Rotating + icon
- Source: `new-patients.html` lines 307-314 (CSS), lines 516-521 (markup + JS)

### Verification Phase 2
- Homepage renders all 12 sections
- Scroll animations fire on scroll
- Accordion opens/closes smoothly
- Service cards have hover effects
- Responsive at 360, 390, 834, 1440px widths

---

## Phase 3: Services Page

### Task 3.1: Services page
Build `src/app/services/page.tsx`:
- PageHero with "Our Care" / "The Menu"
- 6 alternating service sections (image-text splits)
  - Pediatric (img-arch, image left)
  - Prenatal (img-leaf, image right)
  - Postpartum (img-asymmetric, image left)
  - Family (img-arch, image right)
  - First Visit (img-leaf, image left)
  - Wellness (img-asymmetric, image right)
- SVG section dividers between each service
- Benefit pills under each service
- Closing CTA

### Task 3.2: Services-specific CSS
- `.service-section`, `.service-split`, `.service-split.reverse`
- `.benefit-pills`, `.benefit-pill`
- Image shape classes (already in Phase 1)
- Source: `services.html` lines 274-298

### Verification Phase 3
- All 6 services render with alternating layouts
- Image shapes (arch, leaf, asymmetric) display correctly
- Section dividers create smooth visual transitions
- Responsive stacking on mobile

---

## Phase 4: About Page

### Task 4.1: About page
Build `src/app/about/page.tsx`:
- PageHero with "Our Story" / "Rooted in Windsor, built for families."
- Our Story section — 7/5 split with pull-quote
- Meet Dr. Courtney — 5/7 split with credentials grid, photo
- Values section — 3-column card grid with SVG icons
- Office mosaic — creative grid layout (arch, asymmetric, circle, wide shapes)
- Closing CTA

### Task 4.2: About-specific CSS
- `.our-story`, `.story-split`, `.pull-quote`
- `.meet-doc`, `.doc-split`, `.credentials-grid`, `.credential-item`
- `.values`, `.values-grid`, `.value-card`, `.value-icon`
- `.office-mosaic`, `.mosaic-grid`, `.mosaic-item-1` through `.mosaic-item-4`
- Source: `about.html` lines 274-320

### Task 4.3: Copy Dr. Courtney photo to public/
- Copy `mpl5zedr-B3F2C9DB-93D7-4C80-B46F-01CE2F2A41C9.PNG` → `public/images/dr-courtney.png`

### Verification Phase 4
- All sections render
- Dr. Courtney photo displays in arch-shaped container
- Credentials grid renders properly
- Office mosaic has correct creative grid layout
- Values cards display with SVG icons

---

## Phase 5: New Patients Page

### Task 5.1: New Patients page
Build `src/app/new-patients/page.tsx`:
- PageHero with "New Patients" / "Your first visit is a conversation."
- What to Expect intro (centered text)
- Timeline section — 3-step vertical timeline with alternating content/images
- FAQ section — 5/7 split with sticky image + 6 accordion items
- Preparing section — 2×2 prep card grid with SVG icons
- Testimonial spotlight — centered single testimonial
- Closing CTA

### Task 5.2: New Patients-specific CSS
- `.expect-intro`
- `.timeline-section`, `.timeline`, `.timeline-step`, `.timeline-dot`, `.timeline-content`, `.timeline-img`
- `.faq-section`, `.faq-split`, `.faq-image`, `.faq-img-shape`
- `.preparing`, `.prep-grid`, `.prep-card`, `.prep-card-icon`
- `.testimonial-spotlight`, `.spotlight-img`, `.spotlight-stars`
- Source: `new-patients.html` lines 273-335

### Verification Phase 5
- Timeline renders with alternating left/right content
- Timeline collapses to single-column on mobile
- FAQ accordion works (6 items)
- Prep cards display with icons
- Testimonial spotlight centered

---

## Phase 6: Contact Page

### Task 6.1: Contact page
Build `src/app/contact/page.tsx`:
- PageHero with "Get in Touch" / "We'd love to hear from you."
- Contact methods — 3-column card grid (Email, Visit, Hours) with arch icons
- Contact form + info panel — 7/5 split (form left, sticky info right)
  - Form: first/last name, email, phone, subject select, message textarea
  - Floating labels with focus/filled states
  - Client-side validation
  - Success state
- Map placeholder section
- Quick links — 3-column card grid
- Closing CTA

### Task 6.2: Contact-specific CSS
- `.contact-methods`, `.contact-cards`, `.contact-card`, `.contact-card-arch`
- `.contact-form-section`, `.contact-form-grid`
- `.form-row`, `.form-group` (with floating label states: focused, filled, error)
- `.form-success`
- `.contact-info-panel`, `.hours-grid`, `.hours-row`
- `.map-section`, `.map-placeholder`
- `.quick-links`, `.quick-links-grid`, `.quick-link-card`
- Source: `contact.html` lines 273-385

### Task 6.3: ContactForm client component
- Floating label behavior (focus/blur/filled class toggles)
- Client-side validation (required fields, email format)
- Form success state (hide form, show success message)
- Source: `contact.html` lines 684-752 (JS)

### Verification Phase 6
- Contact cards render with arch icons
- Form floating labels animate on focus
- Validation shows errors on submit
- Success state displays after valid submit
- Info panel is sticky on desktop, static on mobile

---

## Phase 7: Journal Page

### Task 7.1: Journal page
Build `src/app/journal/page.tsx`:
- PageHero with "The Journal" / "Reading for growing families."
- Featured article — 7/5 split (arch image left, text right) with "Featured" tag
- Category filter bar — horizontal pill row (All, Pediatric, Prenatal, etc.)
- Article grid — 3-column grid of 9 article cards with arch images
- Newsletter signup — centered form with email input + subscribe button
- Closing CTA

### Task 7.2: Journal-specific CSS
- `.featured-article`, `.featured-card`, `.featured-tag`
- `.filter-bar`, `.filter-pill`, `.filter-pill.active`
- `.article-grid-section`, `.article-grid`, `.article-card`, `.article-card-img`, `.category-pill`
- `.newsletter`, `.newsletter-form`, `.newsletter-caption`
- Source: `journal.html` lines 270-329

### Task 7.3: JournalFilter client component
- Category filter pill click handler
- Show/hide articles by `data-category`
- Re-trigger scroll reveal on shown articles
- Source: `journal.html` lines 662-685 (JS)

### Verification Phase 7
- Featured article renders with tag
- Filter pills toggle article visibility
- Article cards have arch-topped images with hover scale
- Newsletter form renders
- Grid responds correctly at all breakpoints

---

## Phase 8: Images, Polish & Responsive QA

### Task 8.1: Configure next.config.ts for Unsplash images
Add `images.remotePatterns` for `images.unsplash.com`

### Task 8.2: Replace `<img>` with `next/image`
Convert all Unsplash image references to use `<Image>` component with proper width/height/alt

### Task 8.3: Responsive QA pass
Test all pages at: 360, 390, 430, 600, 820, 1024, 1366, 1440, 1920px
- Verify no horizontal overflow
- Verify mobile nav works
- Verify all section dividers connect cleanly
- Verify typography scales properly

### Task 8.4: Metadata per page
Add proper `<title>` and `<meta description>` to each page (matching prototype `<head>` tags)

### Verification Phase 8
- `npm run build` succeeds with no errors
- All images load from Unsplash via next/image
- No layout issues at any breakpoint
- Lighthouse performance score is acceptable

---

## Unsplash Image Map (from prototypes)

| Context | URL path |
|---------|----------|
| Hero / family outdoors | photo-1475503572774-15a45e5d60b9 |
| Baby smiling | photo-1519689680058-324335c77eba |
| Pregnant woman | photo-1493894473891-10fc1e5dbd22 |
| Mother + newborn | photo-1492725764893-90b379c2b6e7 |
| Father + child shoulders | photo-1536640712-4d4c36ff0e4e |
| Clinic interior | photo-1629909613654-28e377c37b09 |
| Mother + newborn intimate | photo-1544126592-807ade215a0b |
| Family golden hour | photo-1511895426328-dc8714191300 |
| Mountain landscape (about hero) | photo-1464822759023-fed622ff2c3b |
| Mountain landscape (contact hero) | photo-1454496522488-7a8e488e8606 |
| Office interior | photo-1497366754035-f200968a6e72 |
| Parents + newborn nursery | photo-1555252333-9f8e92e65df9 |
| Mother + daughter | photo-1476703993599-0035a21b17a9 |
| Family outdoors playing | photo-1484665754804-74b091211472 |
| Sleeping woman (wellness) | photo-1520206183501-b80df61043c2 |
| Pregnant belly | photo-1504439468489-c8920d796a29 |
| Map placeholder | photo-1631217868264-e5b90bb7e133 |
| Services hero bg | photo-1475503572774-15a45e5d60b9 |

## Build Order Summary

1. **Phase 1** — Foundation (CSS tokens, layout, all shared components)
2. **Phase 2** — Homepage (largest page, establishes all remaining patterns)
3. **Phase 3** — Services (reuses image-text splits, adds service-specific patterns)
4. **Phase 4** — About (reuses splits, adds mosaic + values grid)
5. **Phase 5** — New Patients (timeline, FAQ accordion, prep cards)
6. **Phase 6** — Contact (form with floating labels, validation)
7. **Phase 7** — Journal (filter system, article grid, newsletter)
8. **Phase 8** — Images, polish, responsive QA
