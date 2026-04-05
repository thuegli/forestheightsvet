import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "In-House Pharmacy",
  description:
    "Convenient on-site veterinary pharmacy in NW Portland. Prescription medications, flea and tick prevention, supplements, and more at Forest Heights Veterinary Clinic.",
  alternates: { canonical: "/pharmacy/" },
  openGraph: {
    title: "In-House Pharmacy | Forest Heights Veterinary Clinic",
    description:
      "Convenient on-site veterinary pharmacy in NW Portland. Prescription medications, flea and tick prevention, and supplements.",
    url: "/pharmacy/",
  },
};

export default function PharmacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Convenient & Safe
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            In-House Pharmacy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              We are proud to offer an on-site pharmacy that carries both
              prescription and non-prescription veterinary medications. We carry a
              wide variety of medications including those that treat common pet
              ailments as well as long-term conditions such as heart disease,
              liver or kidney disease, and arthritis. If your pet takes a
              medication we don&apos;t carry, we can quickly place a special
              order for you.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Preventive Medications
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We offer a wide array of preventive medications for fleas, ticks,
              heartworm disease, and intestinal parasites. We provide both oral
              and topical options including Nexgard, Heartgard, Trifexis,
              Advantage Multi, and Revolution.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Health Supplements
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We carry a number of supplements that can be used alone or in
              conjunction with prescription medications. These include probiotics
              like Fortiflora for gastrointestinal health, Free Form Fatty Acid
              supplements with multiple health benefits, and glucosamine
              supplements for joint health.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our pharmacy provides convenience and safety — all medications are
              sourced directly from manufacturers and stored under optimal
              conditions. We keep our prices competitive with other local
              veterinary hospitals. For special or hard-to-find medications, we
              work closely with local compounding pharmacies including Northwest
              Compounders and Community Compounding Pharmacy.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/pharmacy-photo-1.jpg" alt="Veterinary pharmacy medications" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/pharmacy-photo-2.jpg" alt="Prescription medications" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a Prescription Refill?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Call us to request a refill or ask about any of the medications and
            supplements we carry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:503-291-1757"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-darkest transition-colors"
            >
              (503) 291-1757
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white text-forest-dark px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
