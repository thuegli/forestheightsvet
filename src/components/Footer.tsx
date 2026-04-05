import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-darkest text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading text-lg font-semibold mb-4">
              Forest Heights Veterinary Clinic
            </h3>
            <address className="not-italic text-sm space-y-2">
              <p>7365 SW Barnes Rd, Ste. H</p>
              <p>Portland, OR 97225</p>
              <p className="mt-3">
                <a
                  href="tel:503-291-1757"
                  className="text-teal-light hover:text-white transition-colors font-semibold"
                >
                  (503) 291-1757
                </a>
              </p>
              <p>Fax: (503) 291-1773</p>
              <p>
                <a
                  href="mailto:forestheightsvet@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  forestheightsvet@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/staff"
                  className="hover:text-white transition-colors"
                >
                  Meet Our Staff
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/euthanasia"
                  className="hover:text-white transition-colors"
                >
                  Euthanasia
                </Link>
              </li>
              <li>
                <Link
                  href="/emergency"
                  className="hover:text-white transition-colors"
                >
                  Emergency
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Hours</h3>
            <dl className="text-sm space-y-1">
              <div className="flex justify-between">
                <dt>Monday</dt>
                <dd>8:00 AM - 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Tuesday</dt>
                <dd>8:00 AM - 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Wednesday</dt>
                <dd>8:00 AM - 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Thursday</dt>
                <dd>8:00 AM - 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Friday</dt>
                <dd>8:00 AM - 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd className="text-gray-500">Closed</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd className="text-gray-500">Closed</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Forest Heights Veterinary Clinic.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
