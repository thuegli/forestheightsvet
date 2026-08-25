# Review request playbook

Google Business Profile reviews are the local ranking factor the website itself
cannot influence. As of the August 2026 audit the clinic had **37 Yelp reviews**
and **60 Nextdoor faves** against a client base built over 30+ years — which
means the overwhelming majority of satisfied clients were simply never asked.

Asking systematically is the highest-leverage marketing action available to the
practice. It is also the only one that feeds both the local pack and the
sentiment AI assistants read when someone asks them to recommend a vet.

---

## Rules that are not optional

**Ask everyone, not just the happy ones.** Filtering — sending a satisfaction
survey first and only routing the positive responses to Google — is called
review gating. It violates both Google's policies and the FTC's Rule on the Use
of Consumer Reviews and Testimonials. The same rule bans writing reviews
yourself or having staff write them.

**No incentives tied to sentiment.** You may not offer a discount, a free nail
trim, or a prize drawing in exchange for a positive review. An incentive offered
for *any* review, positive or negative, is a grey area best avoided entirely.

**Never write a testimonial for a client**, even one paraphrasing something they
genuinely said. Attributing an invented quote to an invented person is precisely
what the rule prohibits, and penalties are assessed per violation.

---

## The post-visit ask

Timing matters more than wording. Send **2 to 4 hours after the appointment** —
late enough that they are home and settled, early enough that the visit is fresh.
Avoid sending after a euthanasia appointment or a bad-news diagnosis; those
clients should be excluded from the send entirely.

### Text message (preferred — far higher response than email)

> Hi {FirstName}, thanks for bringing {PetName} in today! If you have a minute,
> a short review really helps other Portland pet owners find us: {ReviewLink}
> — The team at Forest Heights Veterinary Clinic

### Email

**Subject:** How was {PetName}'s visit?

> Hi {FirstName},
>
> Thank you for trusting us with {PetName} today. We hope they're settling in
> well at home.
>
> If you have a moment, we'd be grateful if you'd share your experience. Reviews
> are how most new clients find us, and hearing what mattered to you helps us
> get better.
>
> [Leave a review]({ReviewLink})
>
> It takes about a minute. And if anything about the visit fell short, please
> reply to this email instead — we'd rather hear it directly and fix it.
>
> — The team at Forest Heights Veterinary Clinic
> (503) 291-1757

That last line matters. Inviting direct feedback is not gating, because the
review link is still there for everyone. It just gives an unhappy client a route
that is likelier to end in a fixed problem than a one-star review.

---

## The backlog campaign

One-time send to clients seen in the last 12–18 months. Even a 3% response on a
few thousand contacts is a step change from 37.

**Subject:** A quick favor, from your team at Forest Heights

> Hi {FirstName},
>
> We've been caring for pets in NW Portland since 1994, mostly because families
> like yours tell their neighbors about us.
>
> If {PetName} has had a good experience with us, would you consider leaving a
> short review? It's the single most helpful thing a client can do for a small,
> locally owned practice.
>
> [Leave a review]({ReviewLink})
>
> Thank you — truly.
>
> — Dr. Mento, Dr. Tomschin, and Dr. Bedsaul

Send in batches of 200–300 per week rather than all at once. A sudden spike of
reviews on a profile that averaged a couple per year looks inorganic and can get
them filtered.

---

## Responding

Respond to every review, positive and negative. Response rate and recency are
themselves signals, and a calm, specific reply to a critical review does more
for a prospective client reading it than the criticism does against you.

Keep replies short, never discuss a patient's medical details publicly (that is
a confidentiality problem regardless of what the reviewer disclosed), and offer
to take it offline with a phone number.

---

## Setup checklist

- [ ] Fill in `GOOGLE_PLACE_ID` in `src/lib/reviews.ts` — from the Business
      Profile dashboard's "Ask for reviews" link
- [ ] Add the Google Business Profile URL to `sameAs` in `src/app/layout.tsx`
      (still marked TODO)
- [ ] Decide the send channel — SMS needs prior express consent from the client;
      email is lower friction to start
- [ ] Check whether the practice management software can trigger the send
      automatically on appointment checkout; if not, a weekly manual export and
      batch send works
- [ ] Build the suppression list: euthanasia appointments, unresolved
      complaints, clients who opted out
- [ ] Once reviews arrive, copy genuine quotes into `content/testimonials.json`
      with real names as signed and correct source attribution

---

## Directory consistency (found during the audit)

The Oregon VMA clinic listing shows **Dr. Lisa Loennig, DVM** on staff, who does
not appear on the current staff page. If she has left the practice, that listing
and any others carrying it should be corrected — inconsistent practitioner and
NAP data across directories weakens exactly the entity signals local search and
AI assistants rely on. Worth auditing the clinic's listings on Oregon VMA,
Portland VMA, CareCredit, Nextdoor, Yelp, and Google at the same time.
