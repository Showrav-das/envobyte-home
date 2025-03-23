"use client";
import React, { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import FooterMain from "./FooterMain";
import {
  Mail,
  ArrowRight,
  ExternalLink,
  Phone,
  Facebook,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-6xl mx-auto py-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-blue-800/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="support@envobyte.com"
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (667) 777 2477"
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Envobyte"
                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors"
              >
                Send message
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Let us know what you think!
              </h1>
              <p className="text-blue-100 mb-6">
                Got something on your mind? Share it with us! Drop a message,
                and we&apos;ll respond quickly to assist you
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:support@envobyte.com"
                className="flex items-center gap-4 p-3 hover:bg-blue-800/30 rounded-md transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-800 rounded-md">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Business:</p>
                  <p className="flex items-center">
                    support@envobyte.com
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/16677772477"
                className="flex items-center gap-4 p-3 hover:bg-blue-800/30 rounded-md transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200">Whatsapp:</p>
                  <p className="flex items-center">
                    +1 (667) 777 2477
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/envobyte"
                className="flex items-center gap-4 p-3 hover:bg-blue-800/30 rounded-md transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200">Linkedin:</p>
                  <p className="flex items-center">
                    www.linkedin.com/company/envobyte
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-navy-950 text-white py-12 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              {/* Company Logo and Info */}
              <div
                className="space-y-4 animate-fade-up"
                style={{ animationDelay: "0ms" }}
              >
                <h2 className="text-xl font-semibold">Envisyte</h2>
                <p className="text-sm text-white leading-relaxed max-w-xs">
                  Elevating healthcare performance to help clients truly excel
                  in safety and efficiency.
                </p>
              </div>

              {/* Company Links */}
              <div
                className="space-y-4 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                <h3 className="text-md font-medium tracking-wide">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      Pricing/Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Company Links */}
              <div
                className="space-y-4 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                <h3 className="text-md font-medium tracking-wide">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      Pricing/Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Learn More */}
              <div
                className="space-y-4 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <h3 className="text-md font-medium tracking-wide">
                  Learn More
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      Service Advantage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div
                className="space-y-4 animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                <h3 className="text-md font-medium tracking-wide">
                  Get In Touch
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-white" />
                    <a
                      href="mailto:support@envisyte.com"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      support@envisyte.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-white" />
                    <a
                      href="tel:+18667711427"
                      className="text-sm text-white hover:text-white transition-all-300"
                    >
                      +1 (866) 771-1427
                    </a>
                  </li>
                  {/* Social Media Icons */}
                  <li className="flex items-center space-x-3 pt-2">
                    <a
                      href="https://facebook.com"
                      className="text-white hover:text-white transition-all-300"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="text-white hover:text-white transition-all-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      className="text-white hover:text-white transition-all-300"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      className="text-white hover:text-white transition-all-300"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-navy-800 mt-10 pt-6">
              <p className="text-xs text-center text-gray-400">
                ©2024 - Envisyte. All rights are reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
