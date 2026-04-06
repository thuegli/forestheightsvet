import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Wellness & Preventive Care",
  description:
    "Comprehensive wellness exams and preventive care for dogs and cats in NW Portland. 30-minute appointments, vaccinations, parasite prevention, and weight monitoring.",
  alternates: { canonical: "/wellness/" },
  openGraph: {
    title: "Wellness & Preventive Care | Forest Heights Veterinary Clinic",
    description:
      "Comprehensive wellness exams and preventive care for dogs and cats in NW Portland. 30-minute appointments and fear-free care.",
    url: "/wellness/",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pet Wellness Exams & Preventive Care",
  name: "Wellness & Preventive Care at Forest Heights Veterinary Clinic",
  description:
    "Comprehensive wellness exams, vaccinations, parasite prevention, and preventive care for dogs and cats in NW Portland. 30-minute appointments and fear-free care.",
  provider: {
    "@type": "VeterinaryCare",
    name: "Forest Heights Veterinary Clinic",
    url: "https://www.forestheightsvet.com",
  },
  areaServed: {
    "@type": "Place",
    name: "NW Portland, OR",
  },
  audience: { "@type": "PeopleAudience", audienceType: "Pet Owners" },
  url: "https://www.forestheightsvet.com/wellness/",
};

const faqItems = [
  {
    q: "How often should my dog or cat have a wellness exam?",
    a: "We recommend a wellness exam at least once a year for healthy adult pets. Senior pets (dogs 7+ and cats 10+) and pets with chronic conditions benefit from twice-yearly exams. Puppies and kittens need a series of visits during their first few months for vaccinations and growth monitoring.",
  },
  {
    q: "What vaccines does my pet need in Oregon?",
    a: "Core vaccines for dogs include rabies, distemper, parvovirus, and adenovirus. Many Portland-area dogs also benefit from leptospirosis (carried by wildlife in our wet climate), Bordetella, and canine influenza. Core feline vaccines include rabies, FVRCP (feline herpesvirus, calicivirus, and panleukopenia), and FeLV for cats with outdoor access. We tailor each pet's vaccine plan to their lifestyle and risk.",
  },
  {
    q: "Do you see senior pets, and how is a senior exam different?",
    a: "Yes — we love caring for senior pets. Senior wellness visits include the standard physical exam plus baseline bloodwork, blood pressure checks, urinalysis, and a thorough discussion of mobility, cognition, and quality of life. Catching age-related changes early gives us more options to keep your pet comfortable.",
  },
  {
    q: "What does a wellness exam at Forest Heights include?",
    a: "Our 30-minute wellness exam includes a complete nose-to-tail physical, weight tracking, dental and oral health assessment, vaccine review, parasite prevention recommendations, nutritional counseling, and time for any questions. We never rush — wellness visits are an opportunity to build a complete picture of your pet's health.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Preventive Care
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Wellness Exams
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Looking for pet wellness exams in Portland? Prevention is key to
              keeping your pet healthy, and we start this process with thorough
              physical examinations. In addition to a complete, nose-to-tail
              physical exam, we take the time to ensure your pet&apos;s routine
              preventive vet care needs are met and up to date. Exams are a
              great time for you to ask the veterinarian any questions you might
              have about your pet.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Why Regular Exams Matter
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Physical examinations play an extremely important role in managing
              your pet&apos;s health. Many diseases are difficult to diagnose
              based on observation alone. One of the more important aspects of a
              yearly (or twice yearly) exam is getting an accurate weight.
              Monitoring your pet&apos;s weight is an excellent way to gauge
              their health status — weight changes can be the only indication
              that there is a medical issue.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Dental Health Starts at Wellness Exams
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A thorough physical examination is also necessary to identify
              hidden health issues such as oral and dental disease. Even if there
              are no outward issues with your pet&apos;s oral health, the exam
              allows us to demonstrate and teach you about the importance of home
              dental care. Dental disease not only causes discomfort and
              inflammation in the mouth — it can also significantly impact the
              kidneys, liver, and heart.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/wellness-photo-1.jpg" alt="Cat on scale during wellness exam" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/wellness-photo-2.jpg" alt="Veterinarian examining a dog with owner present" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What to Expect at a Wellness Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Complete Physical Exam",
                desc: "A thorough nose-to-tail examination checking eyes, ears, heart, lungs, abdomen, skin, joints, and more.",
              },
              {
                title: "Vaccinations",
                desc: "Core and lifestyle-based vaccinations tailored to your pet's risk factors and environment.",
              },
              {
                title: "Parasite Prevention",
                desc: "Flea, tick, heartworm, and intestinal parasite prevention recommendations and prescriptions.",
              },
              {
                title: "Weight Monitoring",
                desc: "Accurate weight tracking to detect changes early and maintain a healthy body condition.",
              },
              {
                title: "Nutritional Counseling",
                desc: "Diet recommendations based on age, breed, activity level, and any medical conditions.",
              },
              {
                title: "Oral Health Assessment",
                desc: "Evaluation of dental health with recommendations for home care or professional cleaning.",
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
              href="/dentistry/"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-forest transition-colors mb-2">
                Dentistry
              </h3>
              <p className="text-gray-600 text-sm">
                Professional dental cleanings, exams, and extractions to protect
                your pet&apos;s oral health.
              </p>
            </Link>
            <Link
              href="/nutrition/"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-forest transition-colors mb-2">
                Nutrition Counseling
              </h3>
              <p className="text-gray-600 text-sm">
                Personalized diet plans and weight management guidance for every
                life stage.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Schedule a Wellness Exam
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Keep your pet healthy with regular check-ups. Call us to book a
            30-minute appointment. Serving pet owners in Forest Heights, West
            Slope, Bethany, Cedar Hills, Bonny Slope, and surrounding NW
            Portland communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink
              location="wellness_cta"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-darkest transition-colors"
            >
              (503) 291-1757
            </PhoneLink>
            <Link
              href="/services/"
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
