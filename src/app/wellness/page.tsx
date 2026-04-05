import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

export default function WellnessPage() {
  return (
    <>
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
              Prevention is key to keeping your pet healthy, and we start this
              process with thorough physical examinations. In addition to a
              complete, nose-to-tail physical exam, we take the time to ensure
              your pet&apos;s routine preventive care needs are met and up to
              date. Exams are a great time for you to ask the veterinarian any
              questions you might have about your pet.
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Schedule a Wellness Exam
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Keep your pet healthy with regular check-ups. Call us to book a
            30-minute appointment.
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
