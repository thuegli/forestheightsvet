import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Forest Heights Veterinary Clinic | NW Portland Vet | Dogs & Cats",
    description:
      "Locally owned, full-service dog and cat hospital in NW Portland providing exceptional veterinary care since 1994. 30-minute appointments, fear-free care.",
    url: "/",
  },
};

const services = [
  {
    href: "/wellness",
    title: "Wellness",
    description: "Preventive care and annual exams to keep your pet healthy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    href: "/dentistry",
    title: "Dentistry",
    description: "Comprehensive dental cleanings, exams, and oral surgery.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    href: "/surgery",
    title: "Surgery",
    description: "Safe surgical procedures with modern anesthesia protocols.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.17M15.17 8.83L21 12m-9.58 3.17L12 21.5l1.42-6.33M15.17 8.83L12 2.5 8.83 8.83m6.34 0H8.83" />
      </svg>
    ),
  },
  {
    href: "/diagnostics",
    title: "Diagnostics",
    description: "In-house lab, digital X-ray, and ultrasound imaging.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: "/nutrition",
    title: "Nutrition",
    description: "Personalized diet and nutrition counseling for your pet.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    href: "/pharmacy",
    title: "Pharmacy",
    description: "In-house pharmacy for convenient prescription fulfillment.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Pet Photo Mosaic */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        <div className="relative aspect-square md:aspect-[4/3]">
          <Image
            src="/images/wellness-photo-1.jpg"
            alt="Cat on scale at Forest Heights Veterinary Clinic"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="relative aspect-square md:aspect-[4/3]">
          <Image
            src="/images/wellness-photo-2.jpg"
            alt="Veterinarian examining a dog with owner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square md:aspect-[4/3]">
          <Image
            src="/images/storefront.png"
            alt="Forest Heights Veterinary Clinic storefront"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square md:aspect-[4/3]">
          <Image
            src="/images/nutrition-photo.jpg"
            alt="Chihuahua sitting on pet food bags"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Tagline */}
      <section className="py-4 bg-forest-dark text-center">
        <p className="text-white text-sm md:text-base tracking-widest font-heading font-semibold uppercase">
          Healing Pets in Portland Since 1994
        </p>
      </section>

      {/* Intro / Differentiators */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Neighborhood Vet in NW Portland
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Forest Heights Veterinary Clinic is a locally owned, full-service
            veterinary hospital providing thorough, individualized, fear-free
            medical care with kindness and compassion. Unlike many clinics, we
            schedule 30-minute appointments so your pet gets the time and
            attention they deserve.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-forest">30 min</p>
              <p className="text-gray-600 mt-2">Appointment Times</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-forest">Since 1994</p>
              <p className="text-gray-600 mt-2">Locally Owned</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-forest">Fear Free</p>
              <p className="text-gray-600 mt-2">Certified Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive veterinary care for dogs and cats, from wellness
              exams to surgery and everything in between.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctors Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Veterinarians
            </h2>
            <p className="text-gray-600">
              Experienced, compassionate doctors dedicated to your pet&apos;s health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Tracy Mento, DVM", role: "Owner & Veterinarian", image: "/images/staff-10.jpg" },
              { name: "Dr. Tammy Tomschin, DVM", role: "Veterinarian", image: "/images/staff-dsc1361.jpg" },
              { name: "Dr. Lyn Bedsaul, DVM, CCRP", role: "Veterinarian", image: "/images/staff-img1811.jpg" },
            ].map((doc) => (
              <Link key={doc.name} href="/staff" className="group text-center">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  {doc.name}
                </h3>
                <p className="text-forest text-sm font-semibold">{doc.role}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/staff"
              className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-dark transition-colors"
            >
              Meet the full team &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            New Patients Welcome
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We&apos;re accepting new patients! Call us today to schedule your
            pet&apos;s first visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:503-291-1757"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-darkest transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (503) 291-1757
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
