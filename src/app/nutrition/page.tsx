import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Nutrition Counseling",
  description:
    "Personalized pet nutrition counseling in NW Portland. Diet plans, weight management, and prescription diets for dogs and cats at Forest Heights Veterinary Clinic.",
  alternates: { canonical: "/nutrition/" },
  openGraph: {
    title: "Nutrition Counseling | Forest Heights Veterinary Clinic",
    description:
      "Personalized pet nutrition counseling in NW Portland. Diet plans, weight management, and prescription diets for dogs and cats.",
    url: "/nutrition/",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pet Nutrition Counseling",
  name: "Pet Nutrition Counseling at Forest Heights Veterinary Clinic",
  description:
    "Personalized pet nutrition counseling, weight management, and prescription therapeutic diets for dogs and cats in NW Portland.",
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
  url: "https://www.forestheightsvet.com/nutrition/",
};

const faqItems = [
  {
    q: "Do I need a prescription from Forest Heights to buy Royal Canin or Hill's prescription diet?",
    a: "Yes — therapeutic diets from Royal Canin Veterinary Diet, Hill's Prescription Diet, and Purina Pro Plan Veterinary Diets require a veterinary authorization. If your pet is already a Forest Heights patient and on a therapeutic diet, we can provide the authorization needed to purchase from us, online, or at a partner pharmacy.",
  },
  {
    q: "How do I transition my pet to a new food?",
    a: "Switch slowly over 7–10 days to avoid stomach upset. Start with about 25% new food mixed with 75% old food for the first 2–3 days, then 50/50 for 2–3 days, then 75% new food, then fully transition. If your pet has gastrointestinal issues during the transition, slow it down further or call us for advice.",
  },
  {
    q: "What prescription diets do you carry?",
    a: "We carry a full range of veterinary therapeutic diets including renal/kidney support, urinary, gastrointestinal, hydrolyzed (for food allergies), weight management, joint/mobility, dental, dermatologic, and life-stage formulas for puppies, kittens, adults, and seniors. If we don't stock the exact diet your pet needs, we can quickly special order it.",
  },
];

export default function NutritionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
          { name: "Nutrition", href: "/nutrition/" },
        ]}
      />
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Diet & Wellness
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Nutrition Counseling
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Looking for pet nutrition counseling in Portland? Nutrition plays
              an important role in your pet&apos;s overall health, but with all
              the pet food choices on the market, it can be hard to know which
              food — and how much — is right for your pet. Our veterinary diet
              experts in Portland can help you navigate the many factors that
              affect your pet&apos;s nutritional needs, including age, breed,
              activity level, lifestyle, and medical conditions.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Personalized Diet Recommendations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              During your pet&apos;s physical exam, our veterinarians will
              discuss nutritional needs and answer any questions. Whether your pet
              has special dietary needs, needs to gain or lose weight, or is
              simply a picky eater, we can help you choose the right diet and
              feeding practices to keep your pet in optimal health.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Prescription Diets
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We carry a wide variety of veterinary prescription diets that can
              be used to treat or prevent many medical conditions. These
              therapeutic diets are formulated specifically by veterinary
              nutritionists and are only available through veterinary clinics.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Therapeutic Diet Categories
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Veterinary therapeutic diets are designed to help manage specific
              medical conditions. Here are the categories we most often
              prescribe at Forest Heights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mt-4">
              <li>
                <strong className="text-gray-900">
                  Renal / kidney support
                </strong>{" "}
                — lower-phosphorus, controlled-protein formulas to slow the
                progression of chronic kidney disease.
              </li>
              <li>
                <strong className="text-gray-900">Cardiac</strong> — sodium-
                and protein-balanced diets for pets diagnosed with heart
                disease.
              </li>
              <li>
                <strong className="text-gray-900">Gastrointestinal</strong> —
                highly digestible diets to settle vomiting, diarrhea, IBD, or
                pancreatitis flare-ups.
              </li>
              <li>
                <strong className="text-gray-900">Urinary</strong> — formulas
                designed to dissolve struvite crystals or prevent calcium
                oxalate stones, especially common in cats.
              </li>
              <li>
                <strong className="text-gray-900">
                  Hydrolyzed / hypoallergenic
                </strong>{" "}
                — for pets with confirmed food allergies or chronic itchy
                skin.
              </li>
              <li>
                <strong className="text-gray-900">
                  Joint &amp; mobility
                </strong>{" "}
                — added omega-3s, glucosamine, and chondroitin to support
                arthritic dogs and cats.
              </li>
              <li>
                <strong className="text-gray-900">Weight management</strong> —
                calorie-controlled diets that keep pets feeling full while
                they slim down to a healthy body condition.
              </li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Feeding Through Each Life Stage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nutritional needs change as pets age. Puppies and kittens need
              calorie-dense, growth-formula diets that support healthy bone,
              muscle, and brain development — and large-breed puppies in
              particular need controlled calcium levels to protect developing
              joints. Adult pets do best on a maintenance diet matched to
              their activity level: a working dog and a couch companion of the
              same breed can have very different caloric needs. Senior pets
              (dogs 7+ and cats 10+) often benefit from diets with adjusted
              protein, added joint support, and antioxidants. We&apos;ll
              recommend transitions at the appropriate ages during your
              pet&apos;s wellness exams.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
              Weight Management
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Roughly half of dogs and cats in the U.S. carry extra weight,
              and even a few extra pounds can contribute to arthritis,
              diabetes, heart disease, and a shorter lifespan. At wellness
              visits, we calculate your pet&apos;s ideal body condition score
              and a daily caloric target based on weight, age, and activity.
              For pets who need to lose, we build a gradual plan that includes
              a measured-portion diet (a kitchen scale beats a measuring cup),
              treat budgeting, and regular weigh-ins. Sudden weight loss is
              also a red flag we take seriously — unexplained drops can point
              to dental pain, kidney disease, hyperthyroidism, or diabetes,
              and warrant a closer look.
            </p>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <Image src="/images/nutrition-photo.jpg" alt="Chihuahua sitting on prescription diet food bags" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Prescription Diets We Carry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Royal Canin Veterinary Diet",
                desc: "Precise nutritional formulas tailored to specific health conditions and life stages.",
              },
              {
                name: "Hill's Prescription Diet",
                desc: "Clinically proven nutrition to help manage a wide range of health conditions.",
              },
              {
                name: "Purina Pro Plan Veterinary Diets",
                desc: "Advanced nutrition backed by research for therapeutic dietary management.",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center"
              >
                <h3 className="font-heading font-semibold text-gray-900 mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600">{brand.desc}</p>
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

      <FAQSection items={faqItems} />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Questions About Your Pet&apos;s Diet?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our veterinarians can help you navigate nutrition choices for your
            pet. Ask about diet at your next visit. Serving pet owners in
            Forest Heights, Bethany, Beaverton, Bonny Slope, and surrounding
            NW Portland communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink
              location="nutrition_cta"
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
