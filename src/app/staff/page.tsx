import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Our Staff",
  description:
    "Meet the veterinarians and support team at Forest Heights Veterinary Clinic in NW Portland. Our experienced, compassionate staff is dedicated to your pet's health.",
  alternates: { canonical: "/staff/" },
  openGraph: {
    title: "Meet Our Staff | Forest Heights Veterinary Clinic",
    description:
      "Meet the veterinarians and support team at Forest Heights Veterinary Clinic in NW Portland.",
    url: "/staff/",
  },
};

const doctors = [
  {
    name: "Dr. Tracy Mento, DVM",
    role: "Owner & Veterinarian",
    image: "/images/staff-dsc1299.jpg",
    bio: "Dr. Mento has owned Forest Heights Veterinary Clinic since 2013. She attended University of California, San Diego, and received her BS in Biochemistry and Cell Biology, Cum Laude in 2000. In 2004, she graduated from University of California, Davis, with her DVM degree. She is a member of the Portland Veterinary Medical Association, the Oregon Veterinary Medical Association, the American Veterinary Medical Association, and the American Association of Feline Practitioners. Outside the hospital, she volunteers for the Pixie Project and Columbia Humane Society. Dr. Mento is a pet parent to Lucy, a 16 year old tuxedo DSH cat she adopted as an orphan kitten while in vet school, and Asha, a 1 year old grey kitty adopted from Forest Heights Veterinary Clinic. Her hobbies include travel, scuba diving, and backpacking.",
  },
  {
    name: "Dr. Tammy Tomschin, DVM",
    role: "Veterinarian",
    image: "/images/staff-dsc1361.jpg",
    bio: "Dr. Tomschin attended Oregon State University, achieving her DVM degree in 1999. She is a member of the Portland Veterinary Medical Association, Oregon Veterinary Medical Association, and the American Veterinary Medical Association. Dr. Tomschin's interest in veterinary medicine all started after her family got their first dog. She was involved in 4-H throughout middle school and high school and also showed dogs for the AKC. She enjoys taking cooking classes, going on hikes with her pups, knitting, and swimming. She has two dogs, Sonja, a 13 year old Lab/Rhodesian Mix, and Sander, a 9 year old Cockapoo, and a one-eyed black and white kitty named Cookie.",
  },
  {
    name: "Dr. Lyn Bedsaul, DVM, CCRP",
    role: "Veterinarian",
    image: "/images/staff-img1825.jpg",
    bio: "Dr. Bedsaul attended the University of Tennessee for undergrad and veterinary school. She graduated in 2000 and received the Gentle Doctor Award. In 2013, she went back to UT to complete her CCRP (Certified Canine Rehabilitation Practitioner), which is similar to a physical therapist for dogs. She is a member of the Portland Veterinary Medical Association, the Oregon Veterinary Medical Association, and the American Veterinary Medical Association. The Bedsaul family loves outdoor adventures including biking, skiing, camping, and paddle boarding.",
  },
];

const team = [
  {
    name: "Marissa Paolacci",
    role: "Practice Manager",
    bio: "Marissa studied fine arts at the University of Washington. She started working with animals in Chicago as a full-time dog walker and veterinary technician before relocating to Portland in 2014.",
  },
  {
    name: "Hannah Hargens, CVT",
    role: "Lead Certified Vet Tech",
    bio: "Hannah has been working in veterinary medicine for 12 years and thrives in dental cleanings and procedures. She's been a certified veterinary technician at Forest Heights for five years.",
  },
  {
    name: "Candace Harpole, CVT",
    role: "Certified Vet Tech",
    bio: "Candace has been a certified vet tech for 19 years, with experience in both large and small animals. Her special interests include cytology, emergency, and reproductive surgeries.",
  },
  {
    name: "Taylor Jason, CVT",
    role: "Certified Vet Tech",
    bio: "Taylor graduated from Washington State University with a bachelor's in biology and completed the PCC vet tech program in 2025. She has worked in vet med for 6 years.",
  },
  {
    name: "Tori Diekmeyer",
    role: "Vet Technician",
    bio: "Tori started working at Forest Heights in 2019 as a room technician. Known as 'Panda' for her love of food, cuddles, and extreme obsession with pandas.",
  },
  {
    name: "Kelsey Crow",
    role: "Vet Technician",
    bio: "Kelsey started with Forest Heights in 2022 and now assists the doctors as a room technician. She also runs her own pet and house sitting operation.",
  },
  {
    name: "Becca Best",
    role: "Client Services Lead",
    bio: "Becca joined Forest Heights in 2022, bringing over 30 years of healthcare experience. She has prior education in animal health and a passion for working with animals.",
  },
  {
    name: "Emily Gross",
    role: "Client Services",
    bio: "Emily joined our team as a receptionist in fall of 2024, coming from Washington state with experience in farming and veterinary work.",
  },
  {
    name: "Angela Haas",
    role: "Tech Assistant",
    bio: "Angela joined the Forest Heights team after graduating high school. She's the younger sister to Tori, one of our technicians.",
  },
  {
    name: "Ashley Cruz",
    role: "Tech Assistant",
    bio: "Ashley joined the team in fall of 2024. She grew up on a farm and began her love for animals during her time in FFA and barrel racing.",
  },
];

export default function StaffPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-darkest text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/header-banner.png"
            alt="Forest Heights Veterinary Clinic team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-teal-light font-semibold tracking-widest uppercase text-sm mb-4">
            Our Team
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Meet Our Staff
          </h1>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Veterinarians
          </h2>
          <div className="space-y-16">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-full md:w-64 flex-shrink-0">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="text-teal font-semibold mt-1">{doctor.role}</p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Support Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-teal font-semibold text-sm mt-1">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Meet Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We&apos;d love to meet you and your pet. Call us to schedule an
            appointment.
          </p>
          <a
            href="tel:503-291-1757"
            className="inline-flex items-center justify-center gap-2 bg-teal-darkest text-white px-8 py-4 rounded font-semibold text-lg hover:bg-teal-dark transition-colors"
          >
            (503) 291-1757
          </a>
        </div>
      </section>
    </>
  );
}
