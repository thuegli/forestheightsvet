# Forest Heights Veterinary Clinic — SEO Implementation Plan

Audit date: 2026-04-05
Status: Ready for implementation

---

## Phase 1: Technical Quick Wins (Critical)

### 1.1 Compress All Images
**Priority:** Critical — biggest page speed improvement
**Current state:** 65 MB total, 15+ images over 1 MB (some over 5 MB)
**Target:** Under 5 MB total, each image 100–300 KB max

| Image | Current Size | Action |
|-------|-------------|--------|
| diagnostics-photo-1.jpg | 6.3 MB | Resize to 1600px wide, JPEG quality 80 |
| diagnostics-photo-2.jpg | 5.5 MB | Resize to 1600px wide, JPEG quality 80 |
| wellness-photo-1.jpg | 5.0 MB | Resize to 1600px wide, JPEG quality 80 |
| surgery-photo-1.jpg | 4.8 MB | Resize to 1600px wide, JPEG quality 80 |
| staff-dsc1299.jpg | 4.7 MB | Resize to 800px wide (portrait), JPEG quality 80 |
| pharmacy-photo-2.jpg | 4.6 MB | Resize to 1600px wide, JPEG quality 80 |
| pharmacy-photo-1.jpg | 4.2 MB | Resize to 1600px wide, JPEG quality 80 |
| staff-dsc1361.jpg | 4.1 MB | Resize to 800px wide (portrait), JPEG quality 80 |
| wellness-photo-2.jpg | 4.0 MB | Resize to 1600px wide, JPEG quality 80 |
| surgery-photo-2.jpg | 3.6 MB | Resize to 1600px wide, JPEG quality 80 |
| contact-photo.jpg | 3.1 MB | Resize to 1600px wide, JPEG quality 80 |
| staff-img2040.jpg | 3.0 MB | Resize to 800px wide (portrait), JPEG quality 80 |
| services-cat.jpg | 2.7 MB | Resize to 1600px wide, JPEG quality 80 |
| staff-10.jpg | 2.6 MB | Resize to 800px wide (portrait), JPEG quality 80 |
| staff-img1825.jpg | 2.2 MB | Resize to 800px wide (portrait), JPEG quality 80 |
| storefront.png | 1.0 MB | Convert to JPEG, resize to 1600px wide |

**Tool:** Use `sharp` or `sips` (macOS built-in) to batch resize and compress.
**Files changed:** All images in `public/images/`

---

### 1.2 Add Favicon Set
**Priority:** Critical — brand trust in browser tabs
**Current state:** No favicon, apple-touch-icon, or app icons

**Deliverables:**
- `src/app/favicon.ico` — 32x32, generated from logo mark
- `src/app/apple-icon.png` — 180x180
- `src/app/icon.png` — 192x192 (for Android/PWA)

**Source:** Extract the tree/pet silhouette from the FHV logo (`public/images/fhv-logo.png`) or use `public/images/logo-mark.jpg`

**Files changed:** `src/app/favicon.ico`, `src/app/apple-icon.png`, `src/app/icon.png`

---

### 1.3 Create Custom 404 Page
**Priority:** Critical — user experience, crawl hygiene
**Current state:** Default Next.js 404 with no branding

**Deliverables:**
- `src/app/not-found.tsx`
- Clinic branding (logo, forest green theme)
- Friendly message: "We can't find that page"
- Links to: Home, Services, Contact, phone number CTA
- Consistent with site layout (Header/Footer via layout.tsx)

**Files changed:** `src/app/not-found.tsx` (new file)

---

## Phase 2: Content SEO (Critical)

### 2.1 Add Target Keywords to Page Content
**Priority:** Critical — fundamental ranking requirement
**Current state:** Zero competitive keyword phrases found in any page content

Each page needs its target keywords naturally worked into headings, intro paragraphs, and/or body text. Do NOT keyword-stuff — one or two natural mentions per page is sufficient.

| Page | File | Target Keywords to Add |
|------|------|----------------------|
| Homepage | `src/app/page.tsx` | "veterinarian in Portland, OR", "NW Portland vet clinic" |
| About | `src/app/about/page.tsx` | "veterinarian Portland OR", "vet clinic NW Portland" |
| Wellness | `src/app/wellness/page.tsx` | "pet wellness exams Portland", "preventive vet care NW Portland" |
| Dentistry | `src/app/dentistry/page.tsx` | "pet dentistry Portland", "dog dental cleaning Portland OR" |
| Surgery | `src/app/surgery/page.tsx` | "pet surgery Portland Oregon", "veterinary surgeon NW Portland" |
| Diagnostics | `src/app/diagnostics/page.tsx` | "veterinary diagnostics Portland", "pet X-ray Portland OR" |
| Nutrition | `src/app/nutrition/page.tsx` | "pet nutrition counseling Portland", "veterinary diet Portland" |
| Pharmacy | `src/app/pharmacy/page.tsx` | "veterinary pharmacy Portland", "pet medications NW Portland" |
| Euthanasia | `src/app/euthanasia/page.tsx` | "pet euthanasia Portland", "in-home pet euthanasia Portland" |
| Emergency | `src/app/emergency/page.tsx` | "emergency vet Portland", "after hours vet NW Portland" |
| Contact | `src/app/contact/page.tsx` | "veterinarian NW Portland", "vet clinic Portland OR 97225" |
| Staff | `src/app/staff/page.tsx` | "veterinarians NW Portland", "Portland OR veterinary team" |

**Approach:** Add 1–2 sentences per page that naturally include the keyword. For example:
- Homepage intro: "As a trusted **veterinarian in Portland, OR**, we provide..."
- Dentistry intro: "Looking for **pet dentistry in Portland**? At Forest Heights..."
- Euthanasia intro: "We provide compassionate **pet euthanasia in Portland**, including **in-home pet euthanasia** for families who prefer..."

**Files changed:** All 12 page.tsx files listed above

---

### 2.2 Add Geo-Targeted Neighborhood Mentions to Service Pages
**Priority:** Important — local SEO ranking signal
**Current state:** Neighborhoods only mentioned on About page

**Action:** Add a brief sentence or "Serving" line to each service page's intro or CTA section mentioning 3–4 nearby neighborhoods. Example:

> "Serving pet owners in Forest Heights, West Slope, Bethany, Beaverton, and surrounding NW Portland communities."

**Pages to update:**
- `src/app/wellness/page.tsx`
- `src/app/dentistry/page.tsx`
- `src/app/surgery/page.tsx`
- `src/app/diagnostics/page.tsx`
- `src/app/nutrition/page.tsx`
- `src/app/pharmacy/page.tsx`
- `src/app/euthanasia/page.tsx`
- `src/app/emergency/page.tsx`

**Files changed:** 8 service page files

---

### 2.3 Expand Emergency Page Content
**Priority:** Important — thin content, high-value keyword page
**Current state:** Mostly phone numbers, minimal prose

**Add:**
- "Signs of a Pet Emergency" section (difficulty breathing, bleeding, seizures, toxin ingestion, inability to urinate, etc.) — 150+ words
- "What to Do Before You Arrive" section (stay calm, restrain gently, call ahead) — 100+ words
- Natural inclusion of "emergency vet in Portland"
- Cross-link to wellness page ("Regular preventive care can help avoid emergencies")

**Files changed:** `src/app/emergency/page.tsx`

---

### 2.4 Expand Contact Page Content
**Priority:** Important — thin content
**Current state:** Structured data only, no prose

**Add:**
- "How to Find Us" paragraph with driving directions and nearby landmarks
- "New Patient?" section explaining what to expect on a first visit
- Neighborhood list: "Conveniently located for pet owners in Forest Heights, West Slope, Sylvan, Bethany, Cedar Mill, and Beaverton"

**Files changed:** `src/app/contact/page.tsx`

---

## Phase 3: Internal Linking & Structure (Important)

### 3.1 Add Cross-Links Between Service Pages
**Priority:** Important — internal linking strength, user flow
**Current state:** Service pages only link back to /services

**Add a "Related Services" section** at the bottom of each service page (before the CTA) with 2–3 links to related services:

| Page | Cross-link to |
|------|--------------|
| Wellness | Dentistry, Nutrition |
| Dentistry | Surgery, Wellness |
| Surgery | Diagnostics, Pharmacy |
| Diagnostics | Surgery, Wellness |
| Nutrition | Wellness, Pharmacy |
| Pharmacy | Nutrition, Wellness |
| Euthanasia | (none — sensitive page, keep self-contained) |

**Implementation:** Simple row of linked cards or text links:
```
Related Services: [Dentistry](/dentistry/) · [Nutrition](/nutrition/)
```

**Files changed:** 6 service page files

---

### 3.2 Remove Blog or Add Noindex
**Priority:** Important — stale content (2018–2020) can hurt rankings
**Current state:** 3 blog posts from 2018–2020, blog link in sitemap but not in nav

**Option A (Recommended): Remove blog entirely**
- Delete `src/app/blog/` directory
- Remove blog entries from `src/app/sitemap.ts`
- Remove blog link from footer if present
- This is the cleanest approach since there's no active blog

**Option B: Keep but noindex**
- Add `robots: { index: false }` to blog metadata
- Remove from sitemap
- Keeps URLs alive but tells Google not to rank them

**Files changed:**
- Option A: Delete `src/app/blog/`, update `src/app/sitemap.ts`
- Option B: Update `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/sitemap.ts`

---

### 3.3 Clean Up Orphaned Images
**Priority:** Minor — reduces deployment size
**Current state:** 9 images in public/images/ not referenced by any page

**Action:**
- `euthanasia-photo.jpg` — Add to euthanasia page as decorative break (warm wheat field photo)
- `contact-photo.jpg` — Add to contact page (kitten photo)
- `header-banner.png` — Delete (old Wix letterhead, no longer used)
- `header-banner-text.jpg` — Delete (old Wix asset)
- `logo-mark.jpg` — Keep (may be useful for favicon generation)
- `paw-icon.png` — Delete or use as decorative element
- `social-icon-1/2/3.png` — Delete (replaced by SVG icons in footer)
- `site-logo.jpg` — Delete (replaced by fhv-logo.png)

**Files changed:** `public/images/` cleanup, possibly `src/app/euthanasia/page.tsx` and `src/app/contact/page.tsx`

---

## Phase 4: Structured Data & Meta (Important)

### 4.1 Populate JSON-LD `sameAs` Array
**Priority:** Important — helps Google associate social profiles
**Current state:** Empty array in layout.tsx line 81

**Change:**
```js
sameAs: [
  "https://www.facebook.com/Forest-Heights-Veterinary-Clinic-104537922938443/",
  "https://www.instagram.com/explore/locations/270229209/",
  "https://www.yelp.com/biz/forest-heights-veterinary-clinic-portland",
],
```

**Files changed:** `src/app/layout.tsx`

---

### 4.2 Add Default OG Image
**Priority:** Minor — social media sharing appearance
**Current state:** No OG image on any page

**Action:** Add to layout.tsx metadata:
```js
openGraph: {
  type: "website",
  locale: "en_US",
  siteName: "Forest Heights Veterinary Clinic",
  images: [{ url: "/images/storefront.png", width: 1200, height: 630 }],
},
```

Consider creating a dedicated OG image (1200x630) with the clinic logo and tagline for better social sharing appearance.

**Files changed:** `src/app/layout.tsx`

---

### 4.3 Add Explicit Homepage Metadata
**Priority:** Minor — best practice
**Current state:** Homepage relies on layout.tsx defaults for title/description

**Action:** Add explicit `title` and `description` to `src/app/page.tsx` metadata export.

**Files changed:** `src/app/page.tsx`

---

### 4.4 Improve Blog Post Meta Descriptions (if keeping blog)
**Priority:** Minor — only if blog is retained
**Current state:** Auto-generated, under 100 characters

**Action:** Add custom `description` field to each blog post object with 150–160 character descriptions.

**Files changed:** `src/app/blog/[slug]/page.tsx`

---

### 4.5 Shorten Long Page Titles
**Priority:** Minor — some titles exceed Google's ~60 character display limit

| Current Title (with template) | Chars | Suggested |
|------------------------------|-------|-----------|
| End-of-Life & Euthanasia Services \| Forest Heights Veterinary Clinic | 69 | "Euthanasia Services" (52 with template) |
| Emergency Veterinary Care \| Forest Heights Veterinary Clinic | 60 | OK (borderline) |

**Files changed:** `src/app/euthanasia/page.tsx`

---

## Phase 5: Code Cleanup (Minor)

### 5.1 Fix Blog `generateMetadata` Async Params
**Priority:** Minor — future Next.js compatibility
**Current state:** Sync params access may break in future versions

**Action:** Update `src/app/blog/[slug]/page.tsx` to use async params pattern.

**Files changed:** `src/app/blog/[slug]/page.tsx`

---

### 5.2 Fix Misleading Alt Text
**Priority:** Minor — accuracy
**Current state:** `services-cat.jpg` has alt text about a dog (the image IS a dog despite the filename)

**Action:** Rename file to `services-dog.jpg` and update all references, OR just accept the filename mismatch and keep the accurate alt text describing the dog.

**Files changed:** Possibly rename in `public/images/` and update `src/app/services/page.tsx`

---

## Implementation Order

| Order | Phase | Estimated Scope | Impact |
|-------|-------|----------------|--------|
| 1 | 1.1 Image compression | Batch process ~25 images | High — page speed |
| 2 | 1.2 Favicon | Generate 3 icon files | High — brand trust |
| 3 | 1.3 Custom 404 | 1 new file | Medium — UX |
| 4 | 2.1 Target keywords | Edit 12 pages | High — rankings |
| 5 | 2.2 Geo neighborhoods | Edit 8 pages | Medium — local SEO |
| 6 | 2.3 Expand emergency | Edit 1 page | Medium — content depth |
| 7 | 2.4 Expand contact | Edit 1 page | Medium — content depth |
| 8 | 3.1 Cross-links | Edit 6 pages | Medium — internal linking |
| 9 | 3.2 Remove blog | Delete directory, update sitemap | Medium — remove stale content |
| 10 | 3.3 Orphaned images | Delete/reassign ~8 files | Low — cleanup |
| 11 | 4.1 JSON-LD sameAs | Edit 1 file | Medium — structured data |
| 12 | 4.2 OG image | Edit 1 file | Low — social sharing |
| 13 | 4.3–4.5 Meta tweaks | Edit 3–4 files | Low — polish |
| 14 | 5.1–5.2 Code cleanup | Edit 2 files | Low — maintenance |

---

## Success Metrics (Post-Implementation)

- [ ] Lighthouse Performance score: 90+
- [ ] Lighthouse SEO score: 95+
- [ ] All images under 300 KB
- [ ] Total image directory under 5 MB
- [ ] Every page has target keyword in content
- [ ] Every service page mentions 3+ neighborhoods
- [ ] Every service page cross-links to 2+ related services
- [ ] Favicon visible in browser tab
- [ ] Custom 404 page with navigation
- [ ] JSON-LD sameAs populated
- [ ] OG image set for social sharing
- [ ] No stale blog content indexed
