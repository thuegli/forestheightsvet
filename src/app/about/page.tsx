import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Our Clinic",
  description:
    "Forest Heights Veterinary Clinic is a full-service dog and cat hospital in NW Portland. Locally owned since 1994, we offer 30-minute appointments and fear-free care.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Forest Heights Veterinary Clinic",
    description:
      "Full-service dog and cat hospital in NW Portland. Locally owned since 1994 with 30-minute appointments and fear-free care.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Serving NW Portland Since 1994
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            About Our Clinic
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Forest Heights Veterinary Clinic is a full-service, small animal
              veterinary hospital providing comprehensive medical, surgical, and
              dental care for dogs and cats. As a trusted veterinarian in
              Portland, OR, our vet clinic in NW Portland has proudly served the
              Forest Heights, West Slope, Sylvan, and surrounding communities
              since 1994.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Comprehensive Care Under One Roof
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide a broad spectrum of diagnostic procedures through
              in-house testing and the use of external laboratories. We also work
              closely with local specialized veterinarians and clinics when
              special diagnostic procedures are required. Our facility includes a
              well-stocked pharmacy, in-hospital surgery suite, in-house X-ray
              capabilities, a closely supervised hospitalization area, and indoor
              kennels with outdoor walking areas.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              We Listen First
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We believe that truly listening to a pet owner&apos;s concerns is
              the foundation of providing intuitive care. We provide 30-minute
              appointments to ensure that no question goes unanswered. We also
              try to get to know you as an individual, because we feel this helps
              us understand you and your pet&apos;s lifestyle and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100">
              <p className="text-4xl font-bold text-forest mb-3">30 min</p>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Longer Appointments
              </h3>
              <p className="text-sm text-gray-600">
                Every appointment is 30 minutes so your pet gets the time and
                attention they deserve.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100">
              <p className="text-4xl font-bold text-forest mb-3">1994</p>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Locally Owned
              </h3>
              <p className="text-sm text-gray-600">
                An independent, locally owned practice — not a corporate chain.
                Your pet is family, not a number.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100">
              <p className="text-4xl font-bold text-forest mb-3">Fear Free</p>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Certified Care
              </h3>
              <p className="text-sm text-gray-600">
                We use fear-free techniques to reduce stress and anxiety for your
                pet during every visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Proudly Serving NW Portland & Surrounding Areas
          </h2>
          <p className="text-gray-600 mb-8">
            We welcome pets and their families from throughout the Portland metro
            area, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Forest Heights",
              "West Slope",
              "Sylvan",
              "Barnes Heights",
              "West Haven",
              "Green Hills",
              "Willamette Heights",
              "Kings Heights",
              "Bethany",
              "Beaverton",
              "Cedar Mill",
            ].map((area) => (
              <span
                key={area}
                className="bg-forest-lightest text-forest-dark px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Come See the Difference
          </h2>
          <p className="text-white/80 text-lg mb-8">
            New patients are always welcome. Give us a call to schedule your
            pet&apos;s first visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:503-291-1757"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-darkest transition-colors"
            >
              (503) 291-1757
            </a>
            <Link
              href="/staff"
              className="inline-flex items-center justify-center bg-white text-forest-dark px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Meet Our Staff
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
