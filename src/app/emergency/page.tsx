import type { Metadata } from "next";

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
              If your pet is having an emergency during our regular hours
              (Monday–Friday, 8:00 AM – 6:00 PM), please call us immediately.
            </p>
            <a
              href="tel:503-291-1757"
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
            </a>
          </div>
        </div>
      </section>

      {/* After Hours */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            After-Hours Emergency Hospitals
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            If your pet needs emergency care after our business hours, on
            weekends, or on holidays, please contact one of the following
            emergency veterinary hospitals.
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
    </>
  );
}
