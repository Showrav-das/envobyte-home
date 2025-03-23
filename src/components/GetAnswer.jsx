import React from "react";

export default function GetAnswer() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div
          style={{
            margin: "0 auto",
            padding: "2rem",
            maxWidth: "1400px",
            width: "100%",
            "@media (min-width: 640px)": { maxWidth: "640px" },
            "@media (min-width: 768px)": { maxWidth: "768px" },
            "@media (min-width: 1024px)": { maxWidth: "1024px" },
            "@media (min-width: 1280px)": { maxWidth: "1280px" },
          }}
          className="container mx-auto flex justify-between items-center"
        >
          <h1 className="text-brand-blue text-2xl font-bold">Envobyte</h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-brand-blue transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-brand-blue transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-brand-blue transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-brand-blue transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div
          style={{
            margin: "0 auto",
            padding: "2rem",
            maxWidth: "1400px",
            width: "100%",
            "@media (min-width: 640px)": { maxWidth: "640px" },
            "@media (min-width: 768px)": { maxWidth: "768px" },
            "@media (min-width: 1024px)": { maxWidth: "1024px" },
            "@media (min-width: 1280px)": { maxWidth: "1280px" },
          }}
          className="container mx-auto text-center"
        >
          <h2 className="text-brand-blue text-sm font-medium uppercase tracking-wide mb-2 animate-fade-in">
            MORE DETAILS
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-blue mb-12 animate-slide-up">
            Get Your Answers
          </h1>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div
          style={{
            margin: "0 auto",
            padding: "2rem",
            maxWidth: "1400px",
            width: "100%",
            "@media (min-width: 640px)": { maxWidth: "640px" },
            "@media (min-width: 768px)": { maxWidth: "768px" },
            "@media (min-width: 1024px)": { maxWidth: "1024px" },
            "@media (min-width: 1280px)": { maxWidth: "1280px" },
          }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="feature-card bg-brand-blue text-white animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-8">
                <div className="w-36 h-36 mx-auto">
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <circle cx="100" cy="100" r="50" fill="#FF6937" />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="white"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="65"
                      stroke="white"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M100 180 L110 150"
                      stroke="white"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M130 140 L160 150"
                      stroke="white"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Why Chose Envobyte</h3>
              <p className="text-blue-200 mb-2">Experienced & trustworthy</p>
              <p className="text-sm leading-relaxed">
                We're experienced, trustworthy, and a team of experts in design,
                development, SEO, and more, delivering everything you need for
                success.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="feature-card bg-white border border-gray-100 shadow-sm animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mb-8 flex justify-center">
                <img
                  src="/lovable-uploads/f520eb6f-a5b9-4d3e-89c0-0fb33d170813.png"
                  alt="Multi-tasking professional"
                  className="h-36 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-3">
                What's Your Benefit
              </h3>
              <p className="text-brand-blue font-medium mb-2">
                No hassle with best price
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                A hassle-free process that saves you time, with everything you
                need in one seamless package at an incredibly attractive price.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="feature-card bg-white border border-gray-100 shadow-sm animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-brand-blue rounded-full blob-animation opacity-90 -z-10 mx-auto w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-white text-6xl font-bold z-10 relative text-center">
                  <span>9</span>
                  <span className="text-4xl">in</span>
                  <span>1</span>
                  <span className="text-6xl">?</span>
                </h2>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-3">
                What is Combo Offer
              </h3>
              <p className="text-brand-blue font-medium mb-2">
                Get 9 services in one package
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                You're getting web design, development, content writing, social
                media kit, custom graphics, and business consultation—all in one
                combo package!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div
          style={{
            margin: "0 auto",
            padding: "2rem",
            maxWidth: "1400px",
            width: "100%",
            "@media (min-width: 640px)": { maxWidth: "640px" },
            "@media (min-width: 768px)": { maxWidth: "768px" },
            "@media (min-width: 1024px)": { maxWidth: "1024px" },
            "@media (min-width: 1280px)": { maxWidth: "1280px" },
          }}
          className="mx-auto flex justify-center"
        >
          <button
            className="cta-button animate-slide-up"
            style={{ animationDelay: "0.7s" }}
          >
            See Pricing
          </button>
        </div>
      </section>
    </div>
  );
}
