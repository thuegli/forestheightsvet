import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Dentistry",
  description:
    "Professional pet dental care in NW Portland. Dental cleanings, digital dental X-rays, extractions, and oral surgery for dogs and cats at Forest Heights Veterinary Clinic.",
  alternates: { canonical: "/dentistry/" },
  openGraph: {
    title: "Pet Dentistry | Forest Heights Veterinary Clinic",
    description:
      "Professional pet dental care in NW Portland. Dental cleanings, digital X-rays, extractions, and oral surgery for dogs and cats.",
    url: "/dentistry/",
  },
};

export default function DentistryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Dental Care
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Dentistry
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Looking for pet dentistry in Portland? At Forest Heights, we
              believe that every pet deserves a healthy mouth. Dental disease is
              one of the most common conditions we see in dogs and cats, and
              left untreated, it can lead to serious health problems affecting
              the kidneys, liver, and heart. From dog dental cleanings to
              advanced oral surgery, our veterinarians perform comprehensive
              dental care for pets throughout Portland, OR.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Understanding Dental Disease
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dental disease is a progressive process that begins with plaque — a
              thin film of food particles and bacteria that builds up along the
              gum line. Over time, plaque hardens into calculus, which can
              develop below the gum line and create pockets that trap more
              bacteria. This leads to gingivitis and, if untreated, can progress
              to periodontal disease, bone destruction, and tooth loss.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Our Dental Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our dental services range from routine dental cleanings to more
              advanced procedures, including extractions and oral surgery. We
              utilize digital dental X-rays in every dental procedure to evaluate
              the health of the tooth and bone below the gum line. All dental
              cleanings are performed under general anesthesia — this is the only
              way to obtain dental X-rays and thoroughly clean below the gum
              line.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/dentistry-photo-1.jpg" alt="Pet dental equipment" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/dentistry-photo-2.jpg" alt="Veterinary dental procedure" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Professional Dental Cleanings",
                desc: "Thorough cleaning above and below the gum line under general anesthesia for a complete clean.",
              },
              {
                title: "Digital Dental X-Rays",
                desc: "Advanced imaging to evaluate tooth roots and bone health that can't be seen with the naked eye.",
              },
              {
                title: "Tooth Extractions",
                desc: "Safe removal of damaged or diseased teeth to eliminate pain and prevent infection.",
              },
              {
                title: "Oral Surgery",
                desc: "Advanced oral procedures for complex dental conditions requiring surgical intervention.",
              },
              {
                title: "Oral Health Assessments",
                desc: "Dental evaluations during every wellness exam to catch problems early.",
              },
              {
                title: "Home Care Guidance",
                desc: "Tips and recommendations for maintaining your pet's dental health between cleanings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-heading font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
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
              href="/surgery/"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-forest transition-colors mb-2">
                Surgery &amp; Anesthesia
              </h3>
              <p className="text-gray-600 text-sm">
                Safe surgical procedures with modern anesthesia monitoring and
                attentive post-op care.
              </p>
            </Link>
            <Link
              href="/wellness/"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-forest transition-colors mb-2">
                Wellness Exams
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive preventive care exams to keep your pet healthy at
                every life stage.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Concerned About Your Pet&apos;s Teeth?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Bad breath, difficulty eating, or visible tartar are all signs your
            pet may need dental care. Call us to schedule an assessment.
            Serving pet owners in Forest Heights, West Slope, Cedar Mill,
            Bethany, and surrounding NW Portland communities.
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
