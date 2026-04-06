# Forest Heights Veterinary Clinic — SEO & GEO Refactor Plan

**Audit date:** 2026-04-06
**Status:** Ready for implementation
**Prior work:** `docs/SEO_IMPLEMENTATION_PLAN.md` (2026-04-05) — all items completed.
**Current overall grade:** B (83/100). Target after this refactor: **A− (92/100)**.

This plan addresses the gaps identified in the 2026-04-06 audit. The prior plan handled foundational SEO (images, favicons, keywords, content depth, internal linking, 404, basic JSON-LD). This plan focuses on **Generative Engine Optimization (GEO)**, **per-page structured data**, **measurement**, **legacy URL redirects**, and **content depth on the remaining thin pages**.

The three biggest levers, in order of ROI:
1. Install analytics + verify Search Console (measurement)
2. Add Wix legacy URL redirects (reclaim link equity)
3. Add FAQPage / Article / Service / Person / BreadcrumbList schema site-wide (GEO)

---

## Tier 1 — Critical (do first)

### 1.1 Install Vercel Web Analytics + Google Analytics 4
**Priority:** Critical — nothing else in this plan can be measured without it.
**Current state:** No analytics of any kind. `grep` for `gtag`, `google-analytics`, `plausible`, `@vercel/analytics` returns zero results in `src/` and `package.json`.

**Deliverables:**
- Install `@vercel/analytics` and mount `<Analytics />` in `src/app/layout.tsx`.
- Install `@next/third-parties` and mount `<GoogleAnalytics gaId="G-XXXXXXX" />` in `src/app/layout.tsx` (requires GA4 property ID from owner).
- Add `tel:` click tracking via a small client component that fires a `gtag('event', 'phone_click')` on click.

**Implementation:**
```bash
npm install @vercel/analytics @next/third-parties
```

```tsx
// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

// inside <body>, after <SiteShell>
<Analytics />
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
```

Add `NEXT_PUBLIC_GA_ID` to Vercel env vars.

**Phone click tracking:** Create `src/components/PhoneLink.tsx` as a client component wrapping the `<a href="tel:…">` pattern used across the site, firing a `gtag` event on click. Replace the ~15 hand-rolled `tel:503-291-1757` anchors with `<PhoneLink />`.

**Acceptance:**
- Vercel Analytics dashboard shows pageviews within 24 hours of deploy.
- GA4 Realtime report shows active users.
- GA4 Events shows `phone_click` events firing from page CTAs.

**Files touched:** `src/app/layout.tsx`, `src/components/PhoneLink.tsx` (new), all pages with `tel:` anchors (`src/app/page.tsx`, `about/`, `services/`, `wellness/`, `dentistry/`, `surgery/`, `diagnostics/`, `nutrition/`, `pharmacy/`, `emergency/`, `euthanasia/`, `contact/`, `staff/`, `blog/[slug]/`, `not-found.tsx`), `package.json`.

---

### 1.2 Verify Google Search Console + Bing Webmaster Tools + Submit Sitemap
**Priority:** Critical — required for measurement and indexation monitoring.
**Current state:** No verification meta tag in root metadata; no record of either being set up.

**Deliverables:**
- Add `verification.google` and `verification.other` fields to `src/app/layout.tsx` metadata (or verify via DNS TXT record in Cloudflare and skip the meta tag).
- Submit `https://www.forestheightsvet.com/sitemap.xml` to both consoles.
- Request indexing for the home page and top 5 service pages.

**Implementation:**
```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  // ...existing
  verification: {
    google: "google-site-verification-code-here",
    other: {
      "msvalidate.01": "bing-verification-code-here",
    },
  },
};
```

**Acceptance:**
- Google Search Console shows "Ownership verified".
- Sitemap submission status = "Success" and all 19 URLs discovered.
- Bing Webmaster Tools shows verified.

**Files touched:** `src/app/layout.tsx` (optional — can be DNS-verified instead).

---

### 1.3 Add 301 Redirects for Legacy Wix URLs
**Priority:** Critical — silent link-equity loss.
**Current state:** `next.config.mjs` has no `redirects()` block. `vercel.json` has no redirects. No `middleware.ts` exists. `PROJECT_INSTRUCTIONS.md` flags `/blog-1` and `/meet-our-staff` as URLs that need redirects.

**Deliverables:**
- Add `redirects()` to `next.config.mjs` for all known legacy URLs.
- Before deploy: crawl the old Wix sitemap (or use `wget --spider` on archive.org) to enumerate every URL. Add a redirect for each.

**Known legacy URLs:**
| Old | New |
|---|---|
| `/meet-our-staff` | `/staff/` |
| `/blog-1` | `/blog/` |
| `/blog-1/:slug*` | `/blog/` (fallback — owner should map specific slugs if desired) |

**Implementation:**
```js
// next.config.mjs
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/meet-our-staff", destination: "/staff/", permanent: true },
      { source: "/meet-our-staff/", destination: "/staff/", permanent: true },
      { source: "/blog-1", destination: "/blog/", permanent: true },
      { source: "/blog-1/", destination: "/blog/", permanent: true },
      { source: "/blog-1/:slug*", destination: "/blog/", permanent: true },
    ];
  },
};
export default nextConfig;
```

**Pre-deploy verification step:** Run `wget --spider -r -l 3 https://www.forestheightsvet.com 2>&1 | grep '^--' | awk '{print $3}' | sort -u` on the *current Wix site before cutover* to capture every live URL, then add any missing entries to the redirect list.

**Acceptance:**
- `curl -I https://www.forestheightsvet.com/blog-1` returns `HTTP/2 308` with `Location: /blog/`.
- Google Search Console "Pages" report shows legacy URLs marked as "Page with redirect" rather than "Not found (404)".

**Files touched:** `next.config.mjs`.

---

### 1.4 Add FAQPage JSON-LD to Q&A-Style Pages
**Priority:** Critical — the single highest-leverage GEO move.
**Current state:** Zero `FAQPage` schema site-wide. Several pages already have Q&A-shaped content that just isn't marked up (Emergency's "Signs of a Pet Emergency", Wellness's "What to Expect", Euthanasia's "What to Expect", etc.).

**Deliverables:**
- Add a visible FAQ section to each page below **and** a matching `FAQPage` JSON-LD block.
- FAQ questions should be written in natural conversational form (how Google users phrase queries).

**Suggested Q&A content per page:**

**`/wellness/`**
- How often should my dog or cat have a wellness exam?
- What vaccines does my pet need in Oregon?
- Do you see senior pets? How is a senior exam different?
- What does a wellness exam at Forest Heights include?

**`/dentistry/`**
- Does my pet need anesthesia for a dental cleaning?
- How much does a dog or cat dental cleaning cost in Portland?
- How often should my pet's teeth be cleaned?
- What are the signs my pet needs a dental cleaning?

**`/surgery/`**
- Does Forest Heights require pre-operative bloodwork?
- How long should my pet fast before surgery?
- What should I expect the day of surgery?
- How long does it take to recover from a spay or neuter?

**`/diagnostics/`**
- How long do in-house lab results take?
- Do you perform ultrasounds in-house?
- When does my pet need diagnostic imaging?

**`/nutrition/`**
- Do I need a prescription from Forest Heights to buy Royal Canin or Hill's?
- How do I transition my pet to a new food?
- What prescription diets do you carry?

**`/pharmacy/`**
- Can you fill a prescription written by another veterinarian?
- What flea and tick prevention do you recommend for the Portland area?
- Do you carry compounded medications?

**`/emergency/`** (wrap existing "Signs of a Pet Emergency" list)
- What are the signs of a pet emergency?
- What should I do before I arrive at the clinic?
- Where do I take my pet for after-hours emergencies in NW Portland?

**`/euthanasia/`**
- How will I know when it's time to say goodbye?
- Do you offer in-home euthanasia in Portland?
- What aftercare options are available?
- What should I expect during the procedure?

**`/contact/`** (the "New Patient?" section already has this content — just mark it up)
- Are you accepting new patients?
- What should I bring to my first appointment?
- Do you accept pet insurance?

**Implementation pattern:** Create `src/components/FAQSection.tsx` that takes `items: { q: string; a: string }[]` and renders both the visible `<details>` accordion and the JSON-LD script tag:

```tsx
// src/components/FAQSection.tsx
interface FAQItem { q: string; a: string }

export default function FAQSection({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">{title}</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details key={item.q} className="bg-gray-50 rounded-lg p-6 border border-gray-100 group">
              <summary className="font-heading font-semibold text-gray-900 cursor-pointer">{item.q}</summary>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
```

Each page imports and renders `<FAQSection items={...} />` above its final CTA.

**Acceptance:**
- Google's Rich Results Test passes `FAQPage` schema for each page.
- Visible FAQ section renders on each page.
- Answer text is complete enough to stand alone as a cited excerpt (50–150 words per answer).

**Files touched:** `src/components/FAQSection.tsx` (new), all 9 page files listed above.

---

### 1.5 Add Article / BlogPosting JSON-LD to Blog Posts
**Priority:** Critical — zero blog posts currently have Article schema.
**Current state:** `src/app/blog/[slug]/page.tsx` generates OpenGraph `type: article` and `publishedTime`, but no JSON-LD. Posts have no `author` field at all.

**Deliverables:**
- Add `author` field to `BlogPost` interface and to all 5 JSON files in `content/blog/published/`.
- Add `dateModified` field (default to `date` if missing).
- Emit `BlogPosting` JSON-LD in the blog post page component.
- Add a visible byline at the top of each post ("By Dr. Tracy Mento, DVM · April 1, 2026").

**Implementation:**

```ts
// src/app/blog/posts.ts
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateModified?: string;
  description: string;
  category: string;
  author: string;          // e.g. "Dr. Tracy Mento, DVM"
  authorSlug?: string;     // e.g. "dr-tracy-mento"
  image?: string;          // optional featured image path
  content: string;
}
```

```tsx
// src/app/blog/[slug]/page.tsx
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  image: post.image
    ? `https://www.forestheightsvet.com${post.image}`
    : "https://www.forestheightsvet.com/images/storefront.jpg",
  datePublished: post.date,
  dateModified: post.dateModified ?? post.date,
  author: {
    "@type": "Person",
    name: post.author,
    url: `https://www.forestheightsvet.com/staff/#${post.authorSlug ?? ""}`,
  },
  publisher: {
    "@type": "VeterinaryCare",
    name: "Forest Heights Veterinary Clinic",
    logo: {
      "@type": "ImageObject",
      url: "https://www.forestheightsvet.com/images/fhv-logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.forestheightsvet.com/blog/${post.slug}/`,
  },
};
```

Add the `<script type="application/ld+json">` tag inside the page return.

**Author attribution:**
- `new-pet-first-vet-visit.json` → Dr. Tracy Mento, DVM
- `pet-first-aid-essentials.json` → Dr. Tammy Tomschin, DVM
- `signs-pet-needs-dental-cleaning.json` → Dr. Tracy Mento, DVM
- `spring-parasites-portland.json` → Dr. Lyn Bedsaul, DVM, CCRP
- `summer-heat-safety-pets-portland.json` → Dr. Tammy Tomschin, DVM

(Owner to confirm/reassign.)

**Visible byline:** Add a `<div className="flex items-center gap-3 text-sm text-gray-600">` after the post title with the author name, date, and estimated read time (calculate as `Math.ceil(post.content.split(/\s+/).length / 200)` min read).

**Acceptance:**
- Google Rich Results Test passes `BlogPosting` for each post.
- Visible byline renders on each post.
- GSC "Enhancements > Articles" report begins to populate within 1–2 weeks.

**Files touched:** `src/app/blog/posts.ts`, `src/app/blog/[slug]/page.tsx`, all 5 files in `content/blog/published/*.json`.

---

### 1.6 Add Service Schema to Service Pages
**Priority:** High — ties each service to the LocalBusiness.
**Current state:** Only the root `VeterinaryCare` / `LocalBusiness` JSON-LD exists. Each service page is schema-silent.

**Deliverables:** A `Service` JSON-LD block on each of the 7 service pages referencing the LocalBusiness as `provider`.

**Implementation pattern:**
```tsx
// src/app/dentistry/page.tsx
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pet Dentistry",
  name: "Pet Dentistry at Forest Heights Veterinary Clinic",
  description:
    "Professional pet dental care including cleanings, digital dental X-rays, extractions, and oral surgery for dogs and cats in NW Portland.",
  provider: {
    "@type": "VeterinaryCare",
    name: "Forest Heights Veterinary Clinic",
    url: "https://www.forestheightsvet.com",
  },
  areaServed: {
    "@type": "Place",
    name: "NW Portland, OR",
  },
  audience: { "@type": "PeopleAudience", audienceType: "Pet Owners" },
  url: "https://www.forestheightsvet.com/dentistry/",
};
```

Render inside each service page's component return:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
```

Apply to: `/wellness/`, `/dentistry/`, `/surgery/`, `/diagnostics/`, `/nutrition/`, `/pharmacy/`, `/euthanasia/`.

**Acceptance:** Rich Results Test detects `Service` schema on each page.

**Files touched:** 7 service page files.

---

## Tier 2 — High Value (next)

### 2.1 Add Person Schema for Veterinarians
**Priority:** High — boosts E-E-A-T for YMYL-adjacent veterinary content.
**Current state:** Staff page has full bios with DVM credentials, schools, and years, but none of it is in schema. No `employee` field on the root LocalBusiness.

**Deliverables:**
- Add a `Person` JSON-LD block on `src/app/staff/page.tsx` (via `@graph`) for each of the 3 DVMs.
- Also reference them as `employee: [ ... ]` on the root LocalBusiness JSON-LD in `src/app/layout.tsx` (or link via `@id`).
- Add HTML `id` anchors to each vet's profile card (`id="dr-tracy-mento"`) so blog post author links can deep-link to the right bio.

**Implementation:**
```tsx
// src/app/staff/page.tsx
const staffGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.forestheightsvet.com/staff/#dr-tracy-mento",
      name: "Tracy Mento",
      honorificPrefix: "Dr.",
      honorificSuffix: "DVM",
      jobTitle: "Owner & Veterinarian",
      worksFor: { "@type": "VeterinaryCare", name: "Forest Heights Veterinary Clinic" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of California, San Diego" },
        { "@type": "CollegeOrUniversity", name: "University of California, Davis School of Veterinary Medicine" },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor of Veterinary Medicine (DVM)",
      },
      knowsAbout: ["Small Animal Medicine", "Preventive Care", "Surgery", "Dentistry"],
    },
    // Repeat for Dr. Tammy Tomschin (Oregon State DVM 1999) and Dr. Lyn Bedsaul (Tennessee DVM 2000, CCRP 2013)
  ],
};
```

**Acceptance:**
- `@graph` with 3 Persons validates in Rich Results Test.
- Each vet's profile card on `/staff/` has a unique `id` attribute matching the `@id` URL fragment.

**Files touched:** `src/app/staff/page.tsx`, `src/app/layout.tsx`.

---

### 2.2 Add BreadcrumbList Schema + Visible Breadcrumbs
**Priority:** High — eligible for breadcrumb SERP feature.
**Current state:** No breadcrumb UI, no `BreadcrumbList` schema anywhere.

**Deliverables:**
- Create `src/components/Breadcrumbs.tsx` that renders both the visible breadcrumb UI and the JSON-LD.
- Add to all non-home pages.

**Implementation:**
```tsx
// src/components/Breadcrumbs.tsx
interface Crumb { name: string; href: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://www.forestheightsvet.com${item.href}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-600">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-400">/</span>}
            {i === items.length - 1 ? (
              <span className="text-gray-900 font-medium">{item.name}</span>
            ) : (
              <a href={item.href} className="hover:text-forest">{item.name}</a>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
```

**Breadcrumb hierarchies:**
- `/about/` → Home / About
- `/staff/` → Home / Staff
- `/services/` → Home / Services
- `/wellness/` → Home / Services / Wellness
- `/dentistry/` → Home / Services / Dentistry
- `/surgery/` → Home / Services / Surgery
- `/diagnostics/` → Home / Services / Diagnostics
- `/nutrition/` → Home / Services / Nutrition
- `/pharmacy/` → Home / Services / Pharmacy
- `/euthanasia/` → Home / Services / End-of-Life Care
- `/emergency/` → Home / Emergency
- `/contact/` → Home / Contact
- `/blog/` → Home / Blog
- `/blog/[slug]/` → Home / Blog / [Post Title]

**Acceptance:** Rich Results Test validates `BreadcrumbList` on all non-home pages.

**Files touched:** `src/components/Breadcrumbs.tsx` (new), 14 page files.

---

### 2.3 Expand Thin Pages
**Priority:** High — three pages are noticeably underweight.
**Current state:**
- `/services/` hub: ~250 words (hub only)
- `/nutrition/`: ~400 words
- `/diagnostics/`: ~450 words

**Deliverables:**

**`/services/`** — expand to ~600 words. Add a 300-word "Why one roof matters" section explaining how wellness → diagnostics → pharmacy → surgery flow under one team shortens time-to-diagnosis and reduces stress for pets. Include internal links to each sub-service.

**`/nutrition/`** — expand to ~800 words. Add sections:
- "Therapeutic Diet Categories" — renal/kidney, cardiac, gastrointestinal, urinary, dermatologic, joint/mobility, weight-management. 1–2 sentences each explaining when a vet prescribes each.
- "Feeding Life Stages" — puppy/kitten, adult, senior. What changes and why.
- "Weight Management" — how the clinic calculates caloric targets; when to worry about weight gain or loss.

**`/diagnostics/`** — expand to ~800 words. Add sections:
- "When We Recommend Diagnostics" — pre-anesthetic screening, unexplained symptoms, chronic disease monitoring, senior wellness baselines.
- "In-House vs. Send-Out" — which tests run same-day vs. next-day via IDEXX.
- "What to Expect" — fasting, sedation if imaging requires it, result turnaround.

**Acceptance:** Word counts verified; new H2s present; FAQ sections from Tier 1.4 already included.

**Files touched:** `src/app/services/page.tsx`, `src/app/nutrition/page.tsx`, `src/app/diagnostics/page.tsx`.

---

### 2.4 Add Senior Pet Care Section to Wellness
**Priority:** High — missed keyword cluster.
**Current state:** `/wellness/` has no senior-pet content.

**Deliverables:** Add a ~200 word section to `src/app/wellness/page.tsx`:
- H2: "Senior Pet Wellness"
- Age thresholds: dogs 7+, cats 10+
- Twice-yearly exams
- Baseline bloodwork + blood pressure + thyroid
- Arthritis/mobility assessments
- Target keywords: "senior dog vet Portland", "geriatric cat exam NW Portland"

**Acceptance:** New H2 present; 2–3 of the target long-tail keywords appear naturally.

**Files touched:** `src/app/wellness/page.tsx`.

---

### 2.5 Add Post-Op / Recovery Content to Surgery
**Priority:** High — high-intent query gap.
**Current state:** `/surgery/` covers safety and procedures but has zero recovery content.

**Deliverables:** Add a ~250 word "After Surgery: Recovery & Follow-Up" section:
- General recovery expectations (sedation wearing off, appetite, activity)
- Typical restrictions for spay/neuter (7–14 days, no running/jumping, e-collar)
- Suture removal timing
- When to call the clinic (redness, discharge, refusal to eat >24h)
- Cross-link to wellness recheck

**Acceptance:** New H2 present; page word count > 800.

**Files touched:** `src/app/surgery/page.tsx`.

---

### 2.6 Add Testimonials + AggregateRating Schema
**Priority:** High — E-E-A-T + local pack signals.
**Current state:** Zero on-site testimonials. Yelp is linked in `sameAs` but no reviews surfaced.

**Deliverables:**
- Owner collects 4–6 representative quotes (with permission) from existing Google Business Profile / Yelp reviews.
- Add a testimonials section to the home page (carousel NOT allowed per project rules — use a static grid instead).
- Add `review` and `aggregateRating` properties to the root `VeterinaryCare` JSON-LD in `src/app/layout.tsx`.

**Implementation:**
```tsx
// src/app/layout.tsx (extend existing jsonLd)
const jsonLd = {
  // ...existing fields
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",       // pull actual value from GBP
    reviewCount: "127",       // pull actual count from GBP
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "First L." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Actual quote here...",
      datePublished: "2025-11-14",
    },
    // 3-5 more
  ],
};
```

**Visible testimonials section on home page:**
Add a new `<section>` between the "Meet the Doctors" and final CTA with a 2×2 or 1×4 static grid of testimonial cards. Match the brand (forest green accents).

**Acceptance:**
- AggregateRating passes Rich Results Test.
- Stars visible on home page.
- Visible testimonial cards match the schema `review` entries.

**Files touched:** `src/app/layout.tsx`, `src/app/page.tsx`.

---

### 2.7 Standardize Internal Link Trailing Slashes
**Priority:** Medium — eliminates 308 redirect hops.
**Current state:** Mixed `href="/staff"` vs `href="/staff/"` across ~8 files.

**Deliverables:** A single find/replace pass that ensures every internal `href` ends in `/` (except anchor links and external URLs).

**Implementation:** Grep pattern: `href="/[a-z-]+"` (no trailing slash). Results expected in:
- `src/app/page.tsx` (staff, contact references)
- `src/app/about/page.tsx` (staff)
- `src/app/services/page.tsx` (emergency, euthanasia)
- `src/app/emergency/page.tsx` (wellness)
- `src/app/not-found.tsx` (contact, services)
- `src/app/blog/[slug]/page.tsx` (blog)
- Possibly others.

**Acceptance:** `grep -rE 'href="/[a-z][a-z-]*"' src/app` returns only anchors and external URLs.

**Files touched:** 6–8 page files.

---

### 2.8 Add `hasMap` to LocalBusiness Schema
**Priority:** Medium — minor local SEO enhancement.

**Deliverables:** Add `hasMap: "https://maps.google.com/?cid=<CLINIC_CID>"` to the root JSON-LD. Owner pulls the CID from Google Business Profile.

**Files touched:** `src/app/layout.tsx`.

---

## Tier 3 — Polish & Growth

### 3.1 Per-Page OpenGraph Images
**Priority:** Medium-Low — improves social CTR.
**Current state:** All pages share `/images/storefront.jpg`.

**Deliverables:** Generate per-page OG images using Next.js `opengraph-image.tsx`. Prioritize:
- `src/app/opengraph-image.tsx` (site default, branded with clinic name + tagline)
- `src/app/euthanasia/opengraph-image.tsx` (compassionate tone, different visual)
- `src/app/emergency/opengraph-image.tsx` (urgent tone)
- `src/app/blog/[slug]/opengraph-image.tsx` (dynamic, uses post title)

Use Next.js's `ImageResponse` API for dynamic generation.

**Files touched:** Several new `opengraph-image.tsx` files.

---

### 3.2 Compress Oversized Source Images
**Priority:** Low — runtime is fine because `next/image` transcodes, but source hygiene matters.
**Current state:**
- `public/images/services-dog.jpg` — 726 KB
- `public/images/nutrition-photo.jpg` — 508 KB
- `public/images/surgery-photo-2.jpg` — 400 KB
- `public/images/wellness-photo-2.jpg` — 388 KB

**Deliverables:** Recompress each to <250 KB JPEG (quality ~80, max 1600px wide).

```bash
sips -Z 1600 -s formatOptions 80 public/images/services-dog.jpg
sips -Z 1600 -s formatOptions 80 public/images/nutrition-photo.jpg
sips -Z 1600 -s formatOptions 80 public/images/surgery-photo-2.jpg
sips -Z 1600 -s formatOptions 80 public/images/wellness-photo-2.jpg
```

**Acceptance:** `ls -lh public/images/ | awk '$5 ~ /M$/ || ($5 ~ /K$/ && $5+0 > 300)'` returns nothing.

**Files touched:** 4 files in `public/images/`.

---

### 3.3 Add Pricing Guidance
**Priority:** Medium — unlocks "how much" queries but requires owner input.
**Current state:** No pricing info anywhere on site. Schema `priceRange: "$$"` is not a substitute.

**Deliverables:** Owner provides qualitative ranges. Add to Wellness, Dentistry, Surgery pages. Example language:
- "Wellness exams at Forest Heights range from $X to $Y depending on species and any recommended tests."
- "A routine dog or cat dental cleaning typically ranges from $X to $Y; advanced cases requiring extractions may be more."
- "Spay and neuter costs depend on the pet's size and age; please call us for a quote specific to your pet."

**Decision needed:** Does the owner want to publish ranges or keep pricing opaque? If opaque, skip this item.

**Files touched:** `src/app/wellness/page.tsx`, `src/app/dentistry/page.tsx`, `src/app/surgery/page.tsx`.

---

### 3.4 Blog Byline + Related Posts Block
**Priority:** Medium — depends on 1.5 above.
**Current state:** No byline, no related posts at the end of posts.

**Deliverables:**
- Byline: implemented in 1.5.
- Related Posts: at the bottom of `src/app/blog/[slug]/page.tsx`, show 2 other posts from the same category (or most recent if category has <2).

**Files touched:** `src/app/blog/[slug]/page.tsx`.

---

### 3.5 Legacy Blog Post Decision
**Priority:** Low — housekeeping.
**Current state:** `PROJECT_INSTRUCTIONS.md` lists 3 legacy Wix posts as "to preserve":
- Forest Heights Vet Clinic Coronavirus Action Plan (2020-03-23)
- April Pet First Aid Awareness Month (2018-04-18)
- Spring Has Sprung... and So Have Some Parasites and Pests (2018-03-15)

None of these appear in `content/blog/published/`.

**Decision needed:** Either restore them (with updated dates / "originally published" note) or redirect their old Wix URLs to the closest current post.

**Proposed mapping:**
- COVID action plan → retire (stale)
- April first aid → redirect to `/blog/pet-first-aid-essentials/`
- Spring parasites → redirect to `/blog/spring-parasites-portland/`

Add these to the `redirects()` block in 1.3 if the Wix slug is known.

**Files touched:** `next.config.mjs`.

---

### 3.6 Consider Neighborhood Landing Pages (optional)
**Priority:** Low — growth play.
**Current state:** Neighborhood mentions are distributed across existing pages (strong as-is).

**Deliverables (if pursued):** 3–5 pages under `/serving/` like:
- `/serving/cedar-mill/`
- `/serving/bethany/`
- `/serving/beaverton/`

Each should be ~500+ words with unique local content (not boilerplate). Skip if the thin-content risk outweighs the traffic opportunity.

**Decision needed:** Discuss with owner before implementing.

---

### 3.7 PWA Manifest
**Priority:** Very low. Skip unless offline support becomes a goal.

---

## Implementation Order

| Order | Item | Tier | Blocker for |
|---|---|---|---|
| 1 | 1.1 Install analytics | Critical | All measurement |
| 2 | 1.2 Search Console | Critical | Indexation visibility |
| 3 | 1.3 Wix redirects | Critical | Link equity recovery |
| 4 | 1.4 FAQPage schema (+ content) | Critical | GEO ranking |
| 5 | 1.5 Article schema + bylines | Critical | Blog GEO |
| 6 | 1.6 Service schema | Critical | Per-page entity grounding |
| 7 | 2.1 Person schema | High | E-E-A-T |
| 8 | 2.2 Breadcrumbs | High | Navigation UX + schema |
| 9 | 2.3 Expand thin pages | High | Content depth |
| 10 | 2.4 Senior pet section | High | Keyword coverage |
| 11 | 2.5 Post-op content | High | Keyword coverage |
| 12 | 2.6 Testimonials + AggregateRating | High | E-E-A-T + local pack |
| 13 | 2.7 Trailing slash cleanup | Medium | Cleanliness |
| 14 | 2.8 `hasMap` | Medium | Local polish |
| 15 | 3.1 Per-page OG images | Medium-Low | Social CTR |
| 16 | 3.2 Image compression | Low | Source hygiene |
| 17 | 3.3 Pricing guidance | Medium (blocked on owner) | "How much" queries |
| 18 | 3.4 Related posts block | Medium | Blog engagement |
| 19 | 3.5 Legacy post decision | Low | Housekeeping |
| 20 | 3.6 Neighborhood pages | Low (optional) | Growth |

---

## Success Metrics

### Immediate (within 1 week of deploy)
- [ ] Vercel Analytics + GA4 recording pageviews
- [ ] `phone_click` events firing in GA4
- [ ] Google Search Console verified and sitemap submitted
- [ ] All 301 redirects verified via `curl -I`
- [ ] Rich Results Test passes for: LocalBusiness, FAQPage (9 pages), BlogPosting (5 posts), Service (7 pages), Person (3 vets), BreadcrumbList (all non-home)

### 4 weeks
- [ ] GSC "Pages" report shows legacy Wix URLs as "Page with redirect"
- [ ] GSC "Enhancements" report shows FAQ and Article rich results
- [ ] All thin pages >= 700 words
- [ ] AggregateRating visible in SERP for brand query

### 12 weeks
- [ ] At least 2 service pages ranking on page 1 for their primary "<service> Portland" query
- [ ] Organic traffic up measurably vs. the pre-refactor baseline captured from analytics installation date
- [ ] At least one blog post cited in a Google AI Overview or Perplexity answer
- [ ] `phone_click` events attributed to organic traffic trending upward

---

## Out of Scope (deliberately)

- Full rewrite of brand voice / copy (voice is already strong)
- Photo reshoot
- Redesign of header, footer, or color system
- Any content on the `/admin/` dashboard (internal tool, noindex)
- Backlink acquisition / outreach (separate workstream)
- Paid search / Google Ads

---

## Target Grade After This Refactor

| Category | Current | After | Delta |
|---|---|---|---|
| Technical SEO | A− (91) | A (95) | +4 |
| On-Page SEO | B+ (86) | A− (92) | +6 |
| Local SEO | A (95) | A (97) | +2 |
| Content Depth & E-E-A-T | B (82) | A− (91) | +9 |
| GEO | C+ (74) | A− (92) | +18 |
| Performance | B (83) | B+ (87) | +4 |
| Measurement | F (40) | A (95) | +55 |
| Accessibility | A− (90) | A− (90) | 0 |
| **Overall** | **B (83)** | **A− (92)** | **+9** |
