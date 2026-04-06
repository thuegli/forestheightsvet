import type { Metadata } from "next";
import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Emergency Veterinary Care",
  description:
    "Emergency veterinary care information for NW Portland pet owners. During hours call Forest Heights Veterinary Clinic. After hours emergency hospitals listed.",
  alternates: { canonical: "/emergency/" },
  openGraph: {
    title: "Emergency Veterinary Care | Forest Heights Veterinary Clinic",
    description:
      "Emergency veterinary care information for NW Portland pet owners. During hours call (503) 291-1757. After hours emergency hospitals listed.",
    url: "/emergency/",
  },
};

const emergencyHospitals = [
  {
    name: "DoveLewis Emergency Animal Hospital",
    address: "1945 NW Pettygrove St, Portland, OR",
    phone: "(503) 228-7281",
  },
  {
    name: "Emergency Veterinary Clinic of Tualatin",
    address: "8250 SW Tonka St, Tualatin, OR 97062",
    phone: "(503) 691-7922",
  },
  {
    name: "Tanasbourne Veterinary Emergency",
    address: "2338 NW Amberbrook Dr, Beaverton, OR 97006",
    phone: "(503) 629-5800",
  },
  {
    name: "VCA Northwest Veterinary Specialists",
    address: "16756 SE 82nd Dr, Clackamas, OR 97015",
    phone: "(503) 656-3999",
  },
  {
    name: "Lake Oswego Pet Emergency",
    address: "3996 SW Douglas Way, Lake Oswego, OR 97035",
    phone: "(503) 850-6296",
  },
];

const faqItems = [
  {
    q: "What are the signs of a pet emergency?",
    a: "Signs of a true pet emergency include difficulty breathing, uncontrolled bleeding, seizures or sudden collapse, suspected ingestion of a toxin or foreign object, inability to urinate (especially in male cats), severe vomiting or diarrhea, distended or bloated abdomen, trauma such as being hit by a car, loss of consciousness, and sudden inability to stand or walk. If you see any of these, call us immediately during business hours or go directly to an after-hours emergency hospital.",
  },
  {
    q: "What should I do before I arrive at the clinic?",
    a: "Stay calm — your pet senses your stress. Call ahead so the team can prepare. Gently restrain your pet using a towel or blanket; for injured pets, minimize movement and support the body. Keep them warm and drive carefully. If you suspect poisoning, bring the packaging or product if you can do so safely.",
  },
  {
    q: "Where do I take my pet for after-hours emergencies in NW Portland?",
    a: "After hours, weekends, or holidays, contact one of the local 24-hour emergency hospitals: DoveLewis Emergency Animal Hospital (1945 NW Pettygrove St, Portland — (503) 228-7281), Tanasbourne Veterinary Emergency (Beaverton — (503) 629-5800), or the Emergency Veterinary Clinic of Tualatin ((503) 691-7922). These facilities serve pet owners in Forest Heights, West Slope, Cedar Hills, Bethany, Beaverton, and surrounding NW Portland communities.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-coral-darkest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-coral-light font-semibold tracking-widest uppercase text-sm mb-3">
            Urgent Care
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Emergency Information
          </h1>
        </div>
      </section>

      {/* During Hours */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-coral/5 border-2 border-coral rounded-lg p-8 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              During Business Hours
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Need an emergency vet in Portland? If your pet is having an
              emergency during our regular hours (Monday–Friday, 8:00 AM –
              6:00 PM), please call us immediately.
            </p>
            <PhoneLink
              location="emergency_cta"
              className="inline-flex items-center justify-center gap-2 bg-coral text-white px-8 py-4 rounded font-semibold text-lg hover:bg-coral-dark transition-colors"
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
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* Signs of a Pet Emergency */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Signs of a Pet Emergency
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Knowing when your pet needs urgent care can save their life. Contact
            a veterinarian immediately if your dog or cat is showing any of the
            following signs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Difficulty breathing or rapid, labored breathing",
              "Uncontrolled bleeding or bleeding that won't stop",
              "Seizures or sudden collapse",
              "Suspected ingestion of a toxin, poison, or foreign object",
              "Inability to urinate or straining without producing urine",
              "Severe vomiting or diarrhea, especially with blood",
              "Distended or bloated abdomen",
              "Trauma such as being hit by a car or a fall",
              "Loss of consciousness or extreme lethargy",
              "Difficulty standing, walking, or sudden paralysis",
            ].map((sign) => (
              <div
                key={sign}
                className="bg-white rounded-lg px-5 py-4 shadow-sm border border-gray-100 flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-coral flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do Before You Arrive */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            What to Do Before You Arrive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <p className="text-3xl font-bold text-forest mb-3">1</p>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Stay Calm
              </h3>
              <p className="text-sm text-gray-600">
                Your pet can sense your stress. Take a deep breath and focus on
                keeping them as calm and comfortable as possible.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <p className="text-3xl font-bold text-forest mb-3">2</p>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Call Ahead
              </h3>
              <p className="text-sm text-gray-600">
                Call the clinic or emergency hospital before you leave so the
                team can prepare for your arrival and give you any immediate
                first-aid instructions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <p className="text-3xl font-bold text-forest mb-3">3</p>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Transport Safely
              </h3>
              <p className="text-sm text-gray-600">
                Gently restrain your pet using a towel or blanket. For injured
                animals, minimize movement and support their body. Keep them
                warm and drive carefully.
              </p>
            </div>
          </div>
          <div className="mt-10 p-4 bg-forest-lightest rounded-lg border border-forest-light/30 text-center">
            <p className="text-forest-dark text-sm">
              Regular preventive care can help avoid many emergencies.{" "}
              <Link
                href="/wellness"
                className="font-semibold underline hover:text-forest transition-colors"
              >
                Learn about our wellness exams
              </Link>{" "}
              to keep your pet healthy year-round.
            </p>
          </div>
        </div>
      </section>

      {/* After Hours */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            After-Hours Emergency Hospitals for NW Portland
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            If your pet needs an after-hours vet in NW Portland, on weekends,
            or on holidays, please contact one of the following emergency
            veterinary hospitals. These facilities serve pet owners in Forest
            Heights, West Slope, Cedar Hills, Bethany, Beaverton, and
            surrounding communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyHospitals.map((hospital) => (
              <div
                key={hospital.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-heading font-semibold text-gray-900 mb-2">
                  {hospital.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{hospital.address}</p>
                <a
                  href={`tel:${hospital.phone.replace(/[^\d]/g, "")}`}
                  className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-dark transition-colors"
                >
                  <svg
                    className="w-4 h-4"
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
                  {hospital.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} />
    </>
  );
}
