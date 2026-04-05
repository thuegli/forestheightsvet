import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnostic Services",
  description:
    "State-of-the-art veterinary diagnostics in NW Portland. In-house lab, digital X-ray, digital dental X-ray, and ultrasound for fast, accurate results.",
  alternates: { canonical: "/diagnostics/" },
  openGraph: {
    title: "Diagnostic Services | Forest Heights Veterinary Clinic",
    description:
      "State-of-the-art veterinary diagnostics in NW Portland. In-house lab, digital X-ray, and ultrasound for fast, accurate results.",
    url: "/diagnostics/",
  },
};

export default function DiagnosticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-darkest text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/diagnostics-photo-1.jpg"
            alt="Veterinary diagnostic equipment"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-teal-light font-semibold tracking-widest uppercase text-sm mb-4">
            Advanced Technology
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Diagnostic Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            At Forest Heights Veterinary Clinic, we are proud to offer
            state-of-the-art diagnostic equipment including digital radiography,
            digital dental radiography, ultrasonography, and in-house lab
            machines. When it comes to your pet&apos;s health, time is of the
            essence — our in-house capabilities allow us to get results quickly
            so treatment can begin sooner.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              In-House Laboratory
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We have the ability to run in-house lab work including complete
              blood cell counts and general chemistry panels, which monitor the
              function of your pet&apos;s internal organs. Our lab machines are
              fully integrated with IDEXX, our reference laboratory, giving us
              access to a comprehensive range of tests. The fact that we can
              offer in-house testing allows our veterinarians to perform tests
              and receive results while your pet is still in the clinic.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Digital Radiography (X-Ray)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Digital X-rays help our veterinarians evaluate almost all of your
              pet&apos;s internal organs, including heart, lungs, stomach,
              intestines, liver, spleen, kidneys, joints, and bones. Digital
              radiographs are developed on a computer screen, allowing the doctor
              to manipulate the image for optimal viewing. We can also send
              images via email to a board-certified radiologist for
              interpretation, usually within 12-24 hours.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Ultrasound
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ultrasound uses high-frequency sound waves to create real-time
              images of your pet&apos;s internal organs. We use this tool to
              diagnose a variety of conditions and can also use it to gather
              samples — whether it&apos;s sterile urine from the bladder or a
              needle biopsy from a mass or internal organ. Ultrasound is
              non-invasive and provides valuable diagnostic information without
              the need for surgery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Fast, Accurate Answers
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our in-house diagnostics mean faster results and faster treatment for
            your pet. Call us with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:503-291-1757"
              className="inline-flex items-center justify-center gap-2 bg-teal-darkest text-white px-8 py-4 rounded font-semibold text-lg hover:bg-teal-dark transition-colors"
            >
              (503) 291-1757
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white text-teal-darkest px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
