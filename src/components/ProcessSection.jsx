import React from "react";

const ProcessSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#020c3b] py-16 px-4">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 bg-[#020c3b] opacity-90">
        {/* We could add a background image here but will use pure color as shown */}
      </div>

      {/* Vertical "PROJECT IN STEPS" text on right side */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center">
          <div className="h-20 w-0.5 bg-white mb-4"></div>
          <p className="text-white text-xs tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap transform translate-x-6">
            Project in steps
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h3 className="text-white uppercase text-sm tracking-wider mb-4">
            HOW WE WORK
          </h3>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Process For Delivering Results
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-20 mb-16">
          {/* Process steps container */}
          <div className="relative h-[350px] md:h-[300px]">
            {/* The four circles with their position */}

            {/* Step 1 */}
            <div className="absolute left-0 md:left-0 top-0 z-20 w-32 h-32 md:w-36 md:h-36">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff5f3d] to-[#6a2f8d] flex flex-col items-center justify-center text-white p-4">
                <div className="font-bold text-2xl md:text-3xl">01.</div>
                <div className="font-semibold text-sm md:text-base text-center">
                  Make An Appointment
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="absolute left-1/4 md:left-1/3 top-1/2 z-20 w-32 h-32 md:w-36 md:h-36">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff5f3d] to-[#6a2f8d] flex flex-col items-center justify-center text-white p-4">
                <div className="font-bold text-2xl md:text-3xl">02.</div>
                <div className="font-semibold text-sm md:text-base text-center">
                  Meet Our Team
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="absolute right-1/4 md:right-1/3 top-0 z-20 w-32 h-32 md:w-36 md:h-36">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff5f3d] to-[#6a2f8d] flex flex-col items-center justify-center text-white p-4">
                <div className="font-bold text-2xl md:text-3xl">03.</div>
                <div className="font-semibold text-sm md:text-base text-center">
                  Get Consultation
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="absolute right-0 md:right-0 top-1/2 z-20 w-32 h-32 md:w-36 md:h-36">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff5f3d] to-[#6a2f8d] flex flex-col items-center justify-center text-white p-4">
                <div className="font-bold text-2xl md:text-3xl">04.</div>
                <div className="font-semibold text-sm md:text-base text-center">
                  Start Project
                </div>
              </div>
            </div>

            {/* Connecting dashed lines using before/after is difficult with Tailwind alone, so using a simple SVG overlay */}
            <div className="absolute inset-0 z-10 w-full h-full hidden md:block">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M150 150 C 250 50, 350 50, 450 150 C 550 250, 650 250, 750 150"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  fill="none"
                />
              </svg>
            </div>

            {/* Mobile dashed lines (simpler vertical arrangement) */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 md:hidden">
              <div className="h-full border-l-2 border-dashed border-white/50"></div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[#ff5f3d] text-white rounded-md hover:bg-opacity-90 transition-all">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
