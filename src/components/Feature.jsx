import React, { useEffect, useRef } from "react";

import FeatureCard from "./FeatureCard";
import { ComboOffer, EnvoLogo, MultitaskingIllustration } from "./Logos";
import Image from "next/image";

// import Button from "../components/Button";

const Feature = () => {
  const sectionRef = useRef(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <section ref={sectionRef} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <div className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-3">
                MORE DETAILS
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-12">
                Get Your Answers
              </h1>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0.5 mt-12">
              {/* Card 1 */}
              <FeatureCard
                title="Why Chose Envobyte"
                subtitle="Experienced & trustworthy"
                description="We're experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success."
                icon={<EnvoLogo />}
                delay="delay-100"
              />

              {/* Card 2 */}

              <div
                className={`group relative overflow-hidden bg-white h-full rounded-sm animate-fade-in delay-200 transition-all duration-500`}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-4">
                    <Image
                      src="/feature3.png"
                      height={284}
                      width={249}
                      alt="feature 2"
                    />
                  </div>

                  <h2 className="text-3xl text-[#001246] font-bold mb-4 transition-transform duration-300 group-hover:translate-x-1 mt-4">
                    What's Your Benefit
                  </h2>
                  <h3 className="text-sm text-[#002AA3] font-medium transition-transform duration-300 group-hover:translate-x-1 mb-3">
                    No hassle with best price
                  </h3>
                  <p className="text-[#424242] transition-transform duration-300 group-hover:translate-x-1">
                    A hassle-free process that saves you time, with everything
                    you need in one seamless package at an incredibly attractive
                    price.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card 3 */}
              <FeatureCard
                title="What is Combo Offer"
                subtitle="Get 9 services in one package"
                description="You're getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!"
                icon={<ComboOffer />}
                delay="delay-300"
              />
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <button className="px-8 py-3 bg-[#ff5f3d] text-white rounded-md hover:bg-opacity-90 transition-all">
                See Pricing
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Feature;
