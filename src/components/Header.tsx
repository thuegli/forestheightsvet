"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const serviceLinks = [
  { href: "/wellness", label: "Wellness" },
  { href: "/dentistry", label: "Dentistry" },
  { href: "/surgery", label: "Surgery & Anesthesia" },
  { href: "/diagnostics", label: "Diagnostics" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/pharmacy", label: "Pharmacy" },
  { href: "/euthanasia", label: "Euthanasia" },
];

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/staff", label: "MEET OUR STAFF" },
  { href: "/services", label: "SERVICES", children: serviceLinks },
  { href: "/emergency", label: "EMERGENCY" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Logo Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <Link href="/" className="block">
          <Image
            src="/images/fhv-logo.png"
            alt="Forest Heights Veterinary Clinic — 7365 SW Barnes Rd, Ste. H, Portland, OR 97225 — (503) 291-1757"
            width={700}
            height={100}
            className="w-full max-w-2xl mx-auto h-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-forest-dark transition-colors inline-flex items-center gap-1 tracking-wide"
                  >
                    {link.label}
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 bg-white rounded-md shadow-lg py-2 min-w-[220px] border border-gray-100 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-forest-lightest hover:text-forest-dark transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-forest-dark transition-colors inline-block tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Nav Bar */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="tel:503-291-1757"
            className="inline-flex items-center gap-2 bg-forest text-white px-4 py-2 rounded text-sm font-semibold hover:bg-forest-dark transition-colors"
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
            (503) 291-1757
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-forest-dark tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-500 hover:text-forest-dark"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
