import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    images: [{ url: "/images/storefront.jpg", width: 1200, height: 630 }],
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
    latitude: 45.5097,
    longitude: -122.7638,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    "Portland",
    "NW Portland",
    "Forest Heights",
    "West Haven-Sylvan",
    "West Slope",
    "Green Hills",
    "Willamette Heights",
    "Kings Heights",
    "Barnes Heights",
    "Bethany",
    "Beaverton",
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/Forest-Heights-Veterinary-Clinic-104537922938443/",
    "https://www.instagram.com/explore/locations/270229209/",
    "https://www.yelp.com/biz/forest-heights-veterinary-clinic-portland",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${openSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
