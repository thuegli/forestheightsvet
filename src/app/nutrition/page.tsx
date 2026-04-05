import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

export default function NutritionPage() {
  return (
    <>
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
