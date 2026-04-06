import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Veterinary Diagnostics",
  name: "Veterinary Diagnostics at Forest Heights Veterinary Clinic",
  description:
    "In-house veterinary lab, digital X-ray, digital dental X-ray, and ultrasound for fast, accurate results. Pet diagnostic services for dogs and cats in NW Portland.",
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
  url: "https://www.forestheightsvet.com/diagnostics/",
};

const faqItems = [
  {
    q: "How long do in-house lab results take?",
    a: "Most in-house tests — including complete blood counts, chemistry panels, and urinalysis — are available within 15–30 minutes. That means we can often test your pet, get results, and start treatment all during the same visit. More specialized tests are sent to our reference lab IDEXX, with results typically back within 24 hours.",
  },
  {
    q: "Do you perform ultrasounds in-house?",
    a: "Yes. We use ultrasound to evaluate the abdomen, heart, and individual organs in real time. It's especially useful for diagnosing issues with the bladder, kidneys, liver, and intestines, and we can also use it to guide needle biopsies or sterile urine collection without surgery.",
  },
  {
    q: "When does my pet need diagnostic imaging?",
    a: "We may recommend X-rays or ultrasound when your pet has unexplained symptoms, before anesthesia for surgery, to monitor a chronic condition, or as part of a senior wellness baseline. Imaging gives us a window into what's happening inside the body when a physical exam alone isn't enough.",
  },
];

export default function DiagnosticsPage() {
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
          { name: "Diagnostics", href: "/diagnostics/" },
        ]}
      />
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
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
            For veterinary diagnostics in Portland, Forest Heights Veterinary
            Clinic offers state-of-the-art equipment including digital
            radiography, digital dental radiography, ultrasonography, and
            in-house lab machines. From pet X-rays to bloodwork, our NW
            Portland clinic delivers fast, accurate results so treatment can
            begin sooner.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
            When We Recommend Diagnostics
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Diagnostic testing isn&apos;t about ordering every test we can — it&apos;s
            about answering a specific question your veterinarian has after
            the physical exam. The most common reasons we recommend diagnostics
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mt-4">
            <li>
              <strong className="text-gray-900">
                Pre-anesthetic screening
              </strong>{" "}
              — bloodwork before any sedated or surgical procedure to confirm
              organ function and catch hidden anesthesia risks.
            </li>
            <li>
              <strong className="text-gray-900">Unexplained symptoms</strong> —
              vomiting, weight loss, drinking more, limping, or coughing that
              hasn&apos;t resolved on its own.
            </li>
            <li>
              <strong className="text-gray-900">
                Chronic disease monitoring
              </strong>{" "}
              — periodic rechecks for kidney disease, diabetes, thyroid
              disease, or pets on long-term medications.
            </li>
            <li>
              <strong className="text-gray-900">
                Senior wellness baselines
              </strong>{" "}
              — annual or twice-yearly screening to detect age-related changes
              early, when treatment options are widest.
            </li>
            <li>
              <strong className="text-gray-900">Trauma or acute illness</strong>{" "}
              — to rule out fractures, internal bleeding, foreign-body
              ingestion, or organ damage.
            </li>
          </ul>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
            In-House vs. Send-Out Testing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Most of the testing your pet needs happens right here at Forest
            Heights. Our in-house lab handles complete blood counts, chemistry
            panels, electrolytes, urinalysis, fecal exams, and many infectious
            disease tests with results back in 15–30 minutes — fast enough to
            adjust the treatment plan during the same visit. Digital X-rays
            and ultrasound are also same-day. For more specialized testing —
            biopsies and histopathology, hormone panels, culture and
            sensitivity, advanced thyroid testing — we partner with IDEXX, our
            reference laboratory, with most results returned within 24 hours.
            For complex imaging studies, we can email digital X-rays to a
            board-certified veterinary radiologist for a written
            interpretation, usually within 12–24 hours.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">
            What to Expect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For most blood draws, your pet doesn&apos;t need to fast unless
            we&apos;re running specific tests like a glucose curve — we&apos;ll
            tell you in advance if any prep is needed. Routine X-rays usually
            take just a few minutes and most cooperative pets don&apos;t
            require sedation; for ultrasound, abdominal imaging, or stressed
            patients we may use light sedation to keep your pet still and
            comfortable. We always discuss recommended testing, expected
            costs, and turnaround time with you before we start, so there are
            no surprises. After the results come back, your veterinarian will
            walk you through what they mean and what — if anything — happens
            next.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/diagnostics-photo-1.jpg" alt="Digital X-ray machine" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/diagnostics-photo-2.jpg" alt="Laboratory microscope" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/diagnostics-photo-3.jpg" alt="Veterinarian reviewing digital X-ray results" fill className="object-cover" />
            </div>
          </div>
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

      <FAQSection items={faqItems} />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Fast, Accurate Answers
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our in-house diagnostics mean faster results and faster treatment for
            your pet. Call us with any questions. Serving pet owners in Forest
            Heights, West Slope, Green Hills, Cedar Hills, and surrounding NW
            Portland communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink
              location="diagnostics_cta"
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
