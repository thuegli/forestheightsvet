import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";

export default function NotFound() {
  return (
    <>
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            404
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            We Can&apos;t Find That Page
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-10">
            The page you&apos;re looking for may have been moved or no longer
            exists. Let&apos;s get you back on track.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 p-6 rounded-lg border border-gray-200 hover:border-forest hover:shadow-md transition-all"
            >
              <svg
                className="w-8 h-8 text-forest"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="font-semibold text-gray-900">Home</span>
            </Link>

            <Link
              href="/services/"
              className="flex flex-col items-center gap-2 p-6 rounded-lg border border-gray-200 hover:border-forest hover:shadow-md transition-all"
            >
              <svg
                className="w-8 h-8 text-forest"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="font-semibold text-gray-900">Services</span>
            </Link>

            <Link
              href="/contact/"
              className="flex flex-col items-center gap-2 p-6 rounded-lg border border-gray-200 hover:border-forest hover:shadow-md transition-all"
            >
              <svg
                className="w-8 h-8 text-forest"
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
              <span className="font-semibold text-gray-900">Contact</span>
            </Link>
          </div>

          <PhoneLink
            location="not_found"
            className="inline-flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-dark transition-colors"
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
            Call (503) 291-1757
          </PhoneLink>
        </div>
      </section>
    </>
  );
}
