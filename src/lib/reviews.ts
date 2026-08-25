// Google review link.
//
// The short form below is what you put in a post-visit text or email: it opens
// the Google review dialog directly, already pointed at this clinic, so the
// client taps once and writes. Every extra step between "we'd love a review"
// and the text box costs you responses.
//
// TODO: fill in GOOGLE_PLACE_ID. Find it by signing in to the Google Business
// Profile dashboard and choosing "Ask for reviews" — the link it hands you ends
// in the place id. (Google's Place ID Finder also works.) Until this is set,
// reviewUrl() returns the clinic's Maps search as a fallback, which still
// works but costs the client an extra tap.
export const GOOGLE_PLACE_ID = "";

const MAPS_FALLBACK =
  "https://www.google.com/maps/search/?api=1&query=Forest+Heights+Veterinary+Clinic+7365+SW+Barnes+Rd+Portland+OR+97225";

export function reviewUrl(): string {
  if (!GOOGLE_PLACE_ID) return MAPS_FALLBACK;
  return `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
}

export const YELP_URL =
  "https://www.yelp.com/biz/forest-heights-veterinary-clinic-portland";
export const NEXTDOOR_URL =
  "https://nextdoor.com/pages/forest-heights-veterinary-clinic-portland-or/";
