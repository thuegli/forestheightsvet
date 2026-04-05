import Image from "next/image";
import Link from "next/link";

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

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Image
              src="/images/footer-logo.png"
              alt="American Association of Feline Practitioners"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Forest Heights Veterinary Clinic.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
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
    </footer>
  );
}
