import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "End-of-Life & Euthanasia Services",
  description:
    "Compassionate pet euthanasia services in Portland, OR. In-clinic and in-home euthanasia options, cremation services, and aftercare at Forest Heights Veterinary Clinic.",
  alternates: { canonical: "/euthanasia/" },
  openGraph: {
    title: "End-of-Life & Euthanasia Services | Forest Heights Veterinary Clinic",
    description:
      "Compassionate pet euthanasia services in Portland, OR. In-clinic and in-home euthanasia options, cremation, and aftercare.",
    url: "/euthanasia/",
  },
};

export default function EuthanasiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Compassionate Care
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            End-of-Life Care
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide compassionate pet euthanasia in Portland, including
              in-home pet euthanasia for families who prefer the comfort of
              their own home. When the time comes to say goodbye to a beloved
              pet, we want you to know that our team is here to support you with
              care and kindness. We offer a variety of options to ensure both
              you and your pet are as comfortable as possible during this
              difficult transition.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              In-Clinic Euthanasia
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our clinic provides a peaceful, private environment for saying
              goodbye. Whether or not you choose to be present, your decision
              will be fully supported by our team. We take every measure to
              ensure your pet is calm and comfortable, using gentle sedation
              before the procedure so they feel no pain or anxiety.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              In-Home Euthanasia
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We understand that many families prefer the comfort and familiarity
              of home for this final goodbye. We offer at-home euthanasia
              services so your pet can pass peacefully in their favorite spot,
              surrounded by the people and things they love. Some restrictions
              may apply based on scheduling and location.
            </p>
            <div className="bg-forest-lightest border border-forest-light/30 rounded-lg p-6 mt-6">
              <h3 className="font-heading text-lg font-bold text-forest-dark mb-2">
                Dedicated In-Home Euthanasia Service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For families seeking a dedicated in-home euthanasia provider, we
                recommend our companion service. Specialized in-home end-of-life
                care means your pet can be in the most comfortable environment
                possible.
              </p>
              <a
                href="https://housecalleuthanasia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-dark transition-colors"
              >
                Learn more at housecalleuthanasia.com
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Aftercare Options
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We offer several aftercare options to honor your pet&apos;s memory:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Private Cremation
              </h3>
              <p className="text-sm text-gray-600">
                Your pet is cremated individually. Ashes are returned in your
                choice of an urn or wood box with an engraved name plate.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Communal Cremation
              </h3>
              <p className="text-sm text-gray-600">
                Ashes are spread on private land in the Cascade Range — a
                peaceful and beautiful final resting place.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Home Burial
              </h3>
              <p className="text-sm text-gray-600">
                If cremation is not your preference, we can help you make
                arrangements for a home burial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <div className="max-w-7xl mx-auto">
        <div className="relative h-64 md:h-80">
          <Image
            src="/images/euthanasia-photo.jpg"
            alt="Peaceful golden light over a meadow"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            What to Expect
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Before the Appointment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Take the time you need with your pet. You may want to spend a
                quiet day at home together, take a favorite walk, or offer a
                special treat. There is no rush — we will work with your
                schedule.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                During the Procedure
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your pet will first receive a sedative to help them relax and
                feel comfortable. Once they are peacefully resting, a second
                medication is administered. The process is gentle and painless.
                You are welcome to be present throughout or step away — whatever
                feels right for you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                After
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Take as much time as you need. Our team will handle all aftercare
                arrangements according to your wishes. Grief is a natural and
                important process — please don&apos;t hesitate to reach out if
                you need support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            We&apos;re Here for You
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            If you have questions or would like to discuss end-of-life options
            for your pet, please call us. We&apos;re here to help during this
            difficult time. Serving families in Forest Heights, West Slope,
            Sylvan, Beaverton, and surrounding NW Portland communities.
          </p>
          <a
            href="tel:503-291-1757"
            className="inline-flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-dark transition-colors"
          >
            (503) 291-1757
          </a>
        </div>
      </section>
    </>
  );
}
