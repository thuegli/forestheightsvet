import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Forest Heights Veterinary Clinic in NW Portland. Call (503) 291-1757. 7365 SW Barnes Rd, Portland, OR 97225. Serving Forest Heights, Cedar Mill, Bethany & Beaverton.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | Forest Heights Veterinary Clinic",
    description:
      "Contact Forest Heights Veterinary Clinic in NW Portland. Call (503) 291-1757 or visit us at 7365 SW Barnes Rd, Suite H, Portland, OR 97225.",
    url: "/contact/",
  },
};

const faqItems = [
  {
    q: "Are you accepting new patients?",
    a: "Yes — Forest Heights Veterinary Clinic is accepting new patients. We'd love to meet you and your pet. Call (503) 291-1757 to schedule a first appointment, and please arrive 10–15 minutes early so we can get you checked in.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring any previous medical records, a list of current medications and supplements, a sample of your pet's current food (or note the brand and type), and a list of any concerns or symptoms you've noticed. For cats, a secure carrier is essential. For dogs, a leash and collar. If your pet is anxious, a familiar blanket or toy can help.",
  },
  {
    q: "Do you accept pet insurance?",
    a: "We accept most major pet insurance plans. Insurance companies typically reimburse you directly after you pay at the time of visit, so we'll provide an itemized receipt that you can submit to your insurer. If you're shopping for insurance, we're happy to discuss what to look for in a plan.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Forest Heights Veterinary Clinic
              </h2>
              <p className="text-gray-600 mb-8">
                Your trusted veterinarian in NW Portland, conveniently located
                at 7365 SW Barnes Rd in Portland, OR 97225.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-forest-lightest rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      7365 SW Barnes Rd, Suite H
                      <br />
                      Portland, OR 97225
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-forest-lightest rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p>
                      <PhoneLink
                        location="contact_phone"
                        className="text-forest hover:text-forest-dark transition-colors font-semibold"
                      >
                        (503) 291-1757
                      </PhoneLink>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Fax: (503) 291-1773
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-forest-lightest rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p>
                      <a
                        href="mailto:forestheightsvet@gmail.com"
                        className="text-forest hover:text-forest-dark transition-colors"
                      >
                        forestheightsvet@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  Hours of Operation
                </h3>
                <dl className="space-y-2">
                  {[
                    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "Closed" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between py-1">
                      <dt className="text-gray-600">{day}</dt>
                      <dd
                        className={
                          hours === "Closed"
                            ? "text-gray-400"
                            : "text-gray-900 font-medium"
                        }
                      >
                        {hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 p-4 bg-forest-lightest rounded-lg border border-forest-light/30">
                <p className="text-forest-dark font-semibold text-sm">
                  New patients are always welcome! Call us to schedule your
                  pet&apos;s first appointment.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-auto lg:min-h-[500px] rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Forest Heights Veterinary Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.7!2d-122.7762!3d45.5124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a3c8b7e7b9d%3A0x4b8e3c0e9e9e9e9e!2s7365%20SW%20Barnes%20Rd%20Suite%20H%2C%20Portland%2C%20OR%2097225!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How to Find Us
              </h2>
              <p className="text-gray-600 mb-4">
                Forest Heights Veterinary Clinic is located in the Barnes Road
                shopping area at 7365 SW Barnes Rd, Suite H. We&apos;re in the
                same complex as Forest Heights Pharmacy, just west of the
                intersection of SW Barnes Rd and SW Leahy Rd. Look for our sign
                near the parking lot entrance.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>From Highway 26 (Sunset Highway):</strong> Take the
                Sylvan/Barnes Rd exit and head west on SW Barnes Rd. Continue
                about 1.5 miles — the clinic will be on your right, past SW 72nd
                Ave.
              </p>
              <p className="text-gray-600">
                <strong>From Beaverton/Bethany:</strong> Head east on SW Barnes
                Rd from Cedar Hills Blvd. The clinic is about 1 mile on your
                left, just past the Forest Heights neighborhood entrance.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/contact-photo.jpg"
                alt="Kitten at Forest Heights Veterinary Clinic"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Patient */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              New Patient?
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;d love to meet you and your pet! For your first visit,
              please arrive 10&ndash;15 minutes early so we can get you checked
              in. Bring any previous medical records, a list of current
              medications, and let us know about any concerns or symptoms
              you&apos;ve noticed. Our veterinary team will take the time to get
              to know your pet and discuss a personalized care plan.
            </p>
            <p className="text-gray-600 mb-8">
              We accept most major pet insurance plans and offer a range of{" "}
              <Link
                href="/wellness/"
                className="text-forest hover:text-forest-dark transition-colors underline"
              >
                wellness and preventive care
              </Link>{" "}
              services to keep your pet healthy at every stage of life.
            </p>
            <PhoneLink
              location="contact_new_patient"
              className="inline-flex items-center gap-2 bg-forest text-white font-semibold px-8 py-3 rounded-lg hover:bg-forest-dark transition-colors"
            >
              Call (503) 291-1757 to Schedule
            </PhoneLink>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} background="gray" />

      {/* Neighborhoods */}
      <section className="py-12 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Proudly Serving NW Portland &amp; Surrounding Communities
          </p>
          <p className="text-lg text-gray-300">
            Conveniently located for pet owners in Forest Heights, West Slope,
            Sylvan, Cedar Mill, Cedar Hills, Bethany, Bonny Slope, Oak Hills,
            and Beaverton. Serving zip codes 97225 and 97229.
          </p>
        </div>
      </section>
    </>
  );
}
