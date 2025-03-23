"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#00205B] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Envisight
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="hover:text-gray-300 text-sm font-medium"
              >
                HOME
              </Link>
              <Link
                href="/source"
                className="hover:text-gray-300 text-sm font-medium"
              >
                SOURCE
              </Link>
              <Link
                href="/consultancy"
                className="hover:text-gray-300 text-sm font-medium"
              >
                CONSULTANCY
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-gray-300 text-sm font-medium"
              >
                PORTFOLIO
              </Link>
              <Link
                href="/about-us"
                className="hover:text-gray-300 text-sm font-medium"
              >
                ABOUT US
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-300 text-sm font-medium"
              >
                BLOG
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#FF693B] hover:bg-[#FF693B] text-white px-5 py-2 rounded text-sm font-medium"
            >
              SEE PRICING
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-[#001845]"
            >
              HOME
            </Link>
            <Link
              href="/source"
              className="block px-3 py-2 text-base font-medium hover:bg-[#001845]"
            >
              SOURCE
            </Link>
            <Link
              href="/consultancy"
              className="block px-3 py-2 text-base font-medium hover:bg-[#001845]"
            >
              CONSULTANCY
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-base font-medium hover:bg-[#001845]"
            >
              PORTFOLIO
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 text-base font-medium hover:bg-[#001845]"
            >
              ABOUT US
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium hover:bg-[#001845]"
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium bg-[FF693B] hover:bg-[#e05f00] mt-4"
            >
              SEE PRICING
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
