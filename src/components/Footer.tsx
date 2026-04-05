import Image from "next/image";
import Link from "next/link";

const associations = [
  {
    name: "Portland Veterinary Medical Association",
    href: "https://www.portlandvma.org",
    abbr: "PVMA",
  },
  {
    name: "Oregon Veterinary Medical Association",
    href: "https://oregonvma.org",
    abbr: "OVMA",
  },
  {
    name: "American Association of Feline Practitioners",
    href: "https://www.catvets.com",
    abbr: "AAFP",
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Forest-Heights-Veterinary-Clinic-104537922938443/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/explore/locations/270229209/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/forest-heights-veterinary-clinic-portland",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.26 7.26 0 011.96 3.202c.197.75-.29 1.51-1.09 1.51zm-3.8 5.78l-1.31-5.04c-.253-.973 1.01-1.64 1.76-.93l3.96 3.75c.39.37.39.97.03 1.38a7.3 7.3 0 01-3.08 1.67c-.74.22-1.36-.3-1.36-1.03v.2zm-5.79 1.97l1.56-4.96c.303-.96-.72-1.78-1.56-1.25L5.7 17.64c-.44.28-.56.86-.25 1.29a7.27 7.27 0 003.29 2.26c.74.23 1.43-.22 1.58-.85zm-1.2-9.49L5.5 8.17c-.87-.44-.68-1.73.28-1.9a7.3 7.3 0 013.74.2c.7.23 1.06.97.82 1.68l-1.39 4.7c-.29.97-1.6.97-1.88 0h.1zm1.4-6.38l1.31 5.04c.253.973-1.01 1.64-1.76.93L6.4 6.72c-.39-.37-.39-.97-.03-1.38a7.3 7.3 0 013.08-1.67c.74-.22 1.36.3 1.36 1.03v-.2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold tracking-wide mb-4">
              FOREST HEIGHTS VETERINARY CLINIC
            </h3>
            <address className="not-italic text-sm text-white/80 space-y-1">
              <p>7365 SW Barnes Rd, Ste. H</p>
              <p>Portland, OR 97225</p>
              <p className="mt-3">
                Ph:{" "}
                <a
                  href="tel:503-291-1757"
                  className="text-white hover:text-forest-light transition-colors font-semibold"
                >
                  (503) 291-1757
                </a>
              </p>
              <p>Fax: (503) 291-1773</p>
              <p className="mt-2">
                <a
                  href="mailto:forestheightsvet@gmail.com"
                  className="hover:text-forest-light transition-colors"
                >
                  forestheightsvet@gmail.com
                </a>
              </p>
            </address>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg font-bold tracking-wide mb-4">
              HOURS
            </h3>
            <dl className="text-sm text-white/80 space-y-1">
              {[
                { day: "Monday", hours: "8:00 AM – 6:00 PM" },
                { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
                { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
                { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
                { day: "Friday", hours: "8:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "Closed" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between gap-4">
                  <dt>{day}</dt>
                  <dd
                    className={
                      hours === "Closed" ? "text-white/50" : "text-white"
                    }
                  >
                    {hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-heading text-lg font-bold tracking-wide mb-4">
              FIND US
            </h3>
            <div className="rounded-lg overflow-hidden h-48">
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

        {/* Associations & Bottom bar */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Association links */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Image
                src="/images/footer-logo.png"
                alt="American Association of Feline Practitioners"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
              {associations.map((assoc) => (
                <a
                  key={assoc.abbr}
                  href={assoc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-white transition-colors border border-white/20 rounded px-3 py-1.5"
                  title={assoc.name}
                >
                  {assoc.abbr}
                </a>
              ))}
            </div>

            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Forest Heights Veterinary Clinic.
              All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
