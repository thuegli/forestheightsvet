import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forestheightsvet.com"),
  title: {
    default:
      "Forest Heights Veterinary Clinic | NW Portland Vet | Dogs & Cats",
    template: "%s | Forest Heights Veterinary Clinic",
  },
  description:
    "Locally owned, full-service dog and cat hospital in NW Portland providing exceptional veterinary care since 1994. 30-minute appointments, fear-free care.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Forest Heights Veterinary Clinic",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["VeterinaryCare", "LocalBusiness"],
  name: "Forest Heights Veterinary Clinic",
  description:
    "Locally owned, full-service dog and cat hospital in NW Portland providing exceptional veterinary care since 1994.",
  url: "https://www.forestheightsvet.com",
  telephone: "+1-503-291-1757",
  faxNumber: "+1-503-291-1773",
  email: "forestheightsvet@gmail.com",
  foundingDate: "1994",
  image: "https://www.forestheightsvet.com/images/fhv-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7365 SW Barnes Rd, Ste. H",
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97225",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5166,
    longitude: -122.7532,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "00:00",
    },
  ],
  areaServed: [
    "Portland",
    "NW Portland",
    "Forest Heights",
    "West Haven-Sylvan",
    "West Slope",
    "Sylvan",
    "Green Hills",
    "Willamette Heights",
    "Kings Heights",
    "Barnes Heights",
    "Cedar Mill",
    "Cedar Hills",
    "Bethany",
    "Bonny Slope",
    "Oak Hills",
    "Beaverton",
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/Forest-Heights-Veterinary-Clinic-104537922938443/",
    "https://www.yelp.com/biz/forest-heights-veterinary-clinic-portland",
    // TODO: add the Google Business Profile URL — the single most valuable
    // identity link for a local practice. Also add the clinic's real Instagram
    // profile; the previous entry here pointed at an Instagram location tag
    // page, which is not a profile.
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${openSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
