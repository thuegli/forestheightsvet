# Forest Heights Veterinary Clinic — Website Rebuild

## Overview

Rebuild forestheightsvet.com from the current Wix platform to Next.js deployed on Vercel. The goal is to improve UX/UI, content quality, and SEO while keeping the existing brand identity and theme. The site should feel modern, warm, and trustworthy — appropriate for a veterinary clinic that's served NW Portland since 1994.

---

## Business Details

- **Name:** Forest Heights Veterinary Clinic
- **Address:** 7365 SW Barnes Rd, Suite H, Portland, OR 97225
- **Phone:** (503) 291-1757
- **Website:** forestheightsvet.com (currently on Wix)
- **Established:** 1994
- **Type:** Full-service small animal (dogs & cats) veterinary hospital
- **Tagline area:** "Locally owned, full service dog and cat hospital providing exceptional veterinary care since 1994"

### Staff (Doctors)
- Dr. Lisa Loennig, DVM
- Dr. Tracy Mento, DVM
- Dr. Tammy Tomschin, DVM
- Support staff: Tori (room tech, since 2019), Kelsey (since 2022), Becca (since 2022), Emily (receptionist, since 2024)

### Service Areas
Portland, West Haven-Sylvan, West Haven, Sylvan, Barnes Heights, West Slope, Green Hills, Willamette Heights, Kings Heights

---

## Tech Stack

Follow the same pattern as the hueglimediation.com project:

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Raleway (headings — matches current branding), Open Sans (body — matches current branding)
- **Deployment:** Vercel
- **DNS:** Cloudflare (will transfer from current registrar)
- **Source control:** GitHub (thuegli org)

---

## Phase 1: Crawl & Extract

### Steps
1. Use `wget --mirror` to crawl forestheightsvet.com (same approach as hueglimediation)
   - Wix sites are JS-rendered, so wget will get limited content
   - Supplement by manually copying text content from each page in a browser
   - Save raw content to `crawled/` subdirectory
2. Download all images, logos, and assets from the current site
   - Right-click save or use browser DevTools Network tab to capture all image URLs
   - Save to `crawled/images/`
3. Screenshot every page (desktop + mobile) for reference
   - Save to `crawled/screenshots/`
4. Document the current color palette, fonts, and brand elements in `crawled/brand-notes.md`

### Current Site Pages to Crawl
| Page | URL |
|------|-----|
| Home | https://www.forestheightsvet.com/ |
| About | https://www.forestheightsvet.com/about |
| Meet Our Staff | https://www.forestheightsvet.com/meet-our-staff |
| Services | https://www.forestheightsvet.com/services |
| Wellness | https://www.forestheightsvet.com/wellness |
| Dentistry | https://www.forestheightsvet.com/dentistry |
| Surgery & Anesthesia | https://www.forestheightsvet.com/surgery |
| Diagnostics | https://www.forestheightsvet.com/diagnostics |
| Nutrition | https://www.forestheightsvet.com/nutrition |
| Pharmacy | https://www.forestheightsvet.com/pharmacy |
| Emergency | https://www.forestheightsvet.com/emergency |
| Euthanasia | https://www.forestheightsvet.com/euthanasia |
| Contact | https://www.forestheightsvet.com/contact |
| Blog | https://www.forestheightsvet.com/blog-1 |

### Blog Posts to Preserve
- Forest Heights Vet Clinic Coronavirus Action Plan (2020-03-23)
- April Pet First Aid Awareness Month (2018-04-18)
- Spring Has Sprung... and So Have Some Parasites and Pests (2018-03-15)

---

## Phase 2: Project Setup

```bash
# From ~/projects/forestheightsvet
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm

# After scaffold, copy crawled images to public/
mkdir -p public/images
cp crawled/images/* public/images/
```

### Tailwind Config
- Use existing brand colors from the Wix site (extract from crawled CSS variables)
- Likely warm/earthy palette — greens, warm neutrals
- Configure Raleway + Open Sans via next/font/google
- Keep it consistent with the current site's feel (don't redesign the brand, modernize the delivery)

### next.config.mjs
```js
const nextConfig = {
  trailingSlash: true,
};
export default nextConfig;
```

---

## Phase 3: Build Pages

### Site Structure

```
src/
  app/
    layout.tsx          — Root layout with Header, Footer, fonts, metadata
    page.tsx            — Home page
    about/page.tsx      — About the clinic
    staff/page.tsx      — Meet our staff (doctors + team)
    services/page.tsx   — Services overview
    wellness/page.tsx   — Wellness & preventive care
    dentistry/page.tsx  — Dental care
    surgery/page.tsx    — Surgery & anesthesia
    diagnostics/page.tsx — Diagnostic services
    nutrition/page.tsx  — Nutrition counseling
    pharmacy/page.tsx   — In-house pharmacy
    emergency/page.tsx  — Emergency info
    euthanasia/page.tsx — End-of-life care (KEY PAGE — links to housecalleuthanasia.com)
    contact/page.tsx    — Contact info, map, hours
    blog/page.tsx       — Blog listing
    blog/[slug]/page.tsx — Individual blog posts
    globals.css
  components/
    Header.tsx          — Sticky nav with phone CTA (follow hueglimediation pattern)
    Footer.tsx          — Contact info, nav links, hours
    ServiceCard.tsx     — Reusable card for services grid
```

### Home Page Sections
1. **Hero** — Warm, welcoming image of clinic or pets. Tagline + phone CTA + "Book Appointment" button
2. **Intro text** — Brief "Since 1994" message, what makes them special (30-min appointments, locally owned)
3. **Services grid** — Cards linking to each service page (icons + short descriptions)
4. **Meet the Doctors** — Photo + name + brief intro for each DVM, link to full staff page
5. **Testimonials** — If available from Yelp/Google (ask owner for quotes)
6. **CTA** — Phone number, address, "New patients welcome"

### Service Pages
Each service page should follow a consistent template:
- Hero banner with page title
- Description of the service (rewrite current content for better SEO — more detailed, natural language)
- What to expect / process
- FAQ section if applicable
- CTA to schedule appointment

### Euthanasia Page (Special Attention)
This is the bridge page to housecalleuthanasia.com:
- Compassionate, empathetic tone
- Describe in-clinic euthanasia services
- **Prominent section:** "In-Home Euthanasia" — describe the house call service and link to housecalleuthanasia.com
- Include what to expect, aftercare options, grief resources
- This page should rank for "pet euthanasia Portland" and "in-home pet euthanasia Portland"

### Contact Page
- Address with embedded Google Map
- Phone number
- Hours of operation
- "New patients welcome" messaging
- Contact form (can use Formspree, Resend, or similar for serverless form handling)

---

## Phase 4: SEO Improvements

### Technical SEO
- Proper metadata on every page (title, description, OpenGraph)
- JSON-LD structured data (LocalBusiness + VeterinaryCare schema)
- Sitemap generation (next-sitemap or built-in)
- robots.ts
- Canonical URLs
- Alt text on all images
- Fast load times (static generation where possible)

### Content SEO
- Each service page should target specific keywords:
  - "veterinarian Portland OR"
  - "vet clinic NW Portland"
  - "pet dentistry Portland"
  - "pet surgery Portland Oregon"
  - "pet euthanasia Portland"
  - "in-home pet euthanasia Portland"
  - "emergency vet Portland"
- Add geo-targeted content (mention neighborhoods: Forest Heights, West Slope, Bethany, Beaverton, etc.)
- Blog posts can target long-tail keywords
- Each page should have 300+ words of unique, helpful content

### Local SEO
- Ensure Google Business Profile is up to date
- NAP (Name, Address, Phone) consistency across site and footer
- Service area pages or mentions

---

## Phase 5: Deploy

### GitHub
```bash
git init
git add -A
git commit -m "Initial commit: Forest Heights Veterinary Clinic site"
gh repo create forestheightsvet --public --source=. --push --description "Forest Heights Veterinary Clinic website"
```

### Vercel
```bash
vercel link --yes
vercel --prod
vercel domains add forestheightsvet.com
vercel domains add www.forestheightsvet.com
```

### Cloudflare DNS Records
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

Disable Cloudflare proxy (gray cloud) for both records — Vercel handles SSL.

### Domain Transfer
Same process as hueglimediation.com — transfer registration to Cloudflare from current registrar.

---

## Phase 6: Post-Launch

- [ ] Verify Google Search Console
- [ ] Submit sitemap
- [ ] Set up Vercel Analytics (free tier)
- [ ] Connect GitHub repo to Vercel for auto-deploy on push
- [ ] Redirect old Wix URLs to new paths (if URL structure changes)
- [ ] Test all pages on mobile
- [ ] Run Lighthouse audit — target 90+ on all metrics
- [ ] Set up Google Business Profile link to new site
- [ ] Plan blog content calendar for ongoing SEO

---

## Reference

- **Hueglimediation project:** ~/projects/hueglimediation (completed — use as template)
- **Huegli Law project:** ~/projects/Huegli-Law (use for design pattern reference)
- **Current site:** https://www.forestheightsvet.com
- **Funnel site:** housecalleuthanasia.com (see separate project instructions)
