import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Veterinary Services",
  description:
    "Comprehensive veterinary services for dogs and cats in NW Portland. Wellness exams, dentistry, surgery, diagnostics, nutrition, and pharmacy — all under one roof.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Veterinary Services | Forest Heights Veterinary Clinic",
    description:
      "Comprehensive veterinary services for dogs and cats in NW Portland — wellness, dentistry, surgery, diagnostics, nutrition, and pharmacy.",
    url: "/services/",
  },
};

const services = [
  {
    href: "/wellness",
    title: "Wellness & Preventive Care",
    description:
      "Annual exams, vaccinations, parasite prevention, and routine screenings to keep your pet healthy year-round.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    href: "/dentistry",
    title: "Dentistry",
    description:
      "Complete dental cleanings, digital dental X-rays, extractions, and oral surgery to maintain your pet's oral health.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    href: "/surgery",
    title: "Surgery & Anesthesia",
    description:
      "Safe surgical procedures with modern anesthesia protocols, IV fluids, and comprehensive monitoring throughout.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.17M15.17 8.83L21 12m-9.58 3.17L12 21.5l1.42-6.33M15.17 8.83L12 2.5 8.83 8.83m6.34 0H8.83" />
      </svg>
    ),
  },
  {
    href: "/diagnostics",
    title: "Diagnostics",
    description:
      "In-house laboratory, digital X-ray, digital dental X-ray, and ultrasound for fast, accurate diagnoses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    href: "/nutrition",
    title: "Nutrition Counseling",
    description:
      "Personalized diet plans and nutritional guidance tailored to your pet's age, breed, and health needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    href: "/pharmacy",
    title: "In-House Pharmacy",
    description:
      "Convenient on-site pharmacy with prescription medications, preventatives, and supplements.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Full-Service Veterinary Hospital
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Forest Heights Veterinary Clinic is a full-service medical facility
            providing services ranging from wellness care and vaccines to
            critical care and surgery. We welcome and encourage our clients to
            call us with any questions or concerns. Our philosophy of open
            communication and strong connections with our patients is the most
            effective way we can truly fulfill our mission of providing the
            highest quality medical care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Additional Services
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/emergency"
              className="bg-coral/10 text-coral-dark px-6 py-3 rounded-lg font-semibold hover:bg-coral/20 transition-colors"
            >
              Emergency Care
            </Link>
            <Link
              href="/euthanasia"
              className="bg-forest-lightest text-forest-dark px-6 py-3 rounded-lg font-semibold hover:bg-forest-light/20 transition-colors"
            >
              End-of-Life Care
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Questions About Our Services?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We&apos;re happy to answer any questions about the care we provide.
            Call us or stop by our clinic.
          </p>
          <a
            href="tel:503-291-1757"
            className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-darkest transition-colors"
          >
            (503) 291-1757
          </a>
        </div>
      </section>
    </>
  );
}
