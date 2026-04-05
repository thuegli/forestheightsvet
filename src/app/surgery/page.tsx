import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Surgery & Anesthesia",
  description:
    "Safe pet surgery with modern anesthesia protocols in NW Portland. Spay, neuter, mass removal, soft tissue surgery, and more at Forest Heights Veterinary Clinic.",
  alternates: { canonical: "/surgery/" },
  openGraph: {
    title: "Surgery & Anesthesia | Forest Heights Veterinary Clinic",
    description:
      "Safe pet surgery with modern anesthesia protocols in NW Portland. Spay, neuter, mass removal, and soft tissue surgery.",
    url: "/surgery/",
  },
};

const procedures = [
  "Spay (Ovariohysterectomy)",
  "Neuter (Castration)",
  "Mass Removal",
  "Soft Tissue Surgery",
  "Stomach Tacking",
  "Minor Orthopedic Surgery",
  "Enucleation",
  "Abdominal Exploratory",
  "Cherry Eye Repair",
  "Entropion / Ectropion",
  "Aural Hematoma",
  "Hernia Repair",
];

export default function SurgeryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Surgical Services
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Surgery &amp; Anesthesia
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              If your pet needs surgery in Portland, Oregon, our experienced
              veterinary surgeons in NW Portland are here to help. We strive to
              make surgery day as stress- and fear-free as possible by educating
              you about what will happen while your pet is with us. Your
              pet&apos;s safety and well-being is our number one priority, and
              we have stringent anesthetic protocols in place to ensure the
              safest experience possible.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Our Safety Protocols
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We always perform a thorough physical exam before anesthesia to
              ensure no new medical conditions have developed. Pre-anesthetic
              blood testing is required for all surgical patients — even
              apparently healthy animals can have underlying issues that
              can&apos;t be detected without bloodwork. All pets undergoing
              surgery have an IV catheter in place with fluids being administered
              to maintain hydration and blood pressure.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Preparing for Surgery
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your pet should have an empty stomach prior to anesthesia to
              prevent nausea and vomiting while sedated. You will be asked to
              withhold food for about 8-10 hours before the procedure. Water
              access overnight is usually fine, as we want your pet to be well
              hydrated. For geriatric pets or those with pre-existing conditions,
              additional tests may be recommended.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/surgery-photo-1.jpg" alt="Veterinary surgery suite" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/surgery-photo-2.jpg" alt="Sterile surgical instruments" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Surgical Procedures We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures.map((procedure) => (
              <div
                key={procedure}
                className="bg-white rounded-lg px-5 py-4 shadow-sm border border-gray-100 flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5 text-forest flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{procedure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/diagnostics/"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-forest transition-colors mb-2">
                Diagnostic Services
              </h3>
              <p className="text-gray-600 text-sm">
                In-house lab work, X-rays, and ultrasound for fast, accurate
                diagnoses.
              </p>
            </Link>
            <Link
              href="/pharmacy/"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-forest transition-colors mb-2">
                In-House Pharmacy
              </h3>
              <p className="text-gray-600 text-sm">
                Convenient on-site pharmacy for prescriptions, refills, and
                supplements.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Have Questions About Surgery?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We&apos;re happy to discuss your pet&apos;s surgical needs and walk
            you through the process. Call us to learn more. Serving pet owners
            in Forest Heights, West Slope, Sylvan, Beaverton, and surrounding
            NW Portland communities.
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
