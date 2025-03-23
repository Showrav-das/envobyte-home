"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "WordPress Website",
    description: "Design & Development",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="40" fill="#2E5BFF" fillOpacity="0.1" />
        <rect
          x="16"
          y="16"
          width="48"
          height="48"
          rx="24"
          fill="#2E5BFF"
          fillOpacity="0.2"
        />
        <path
          d="M30 30H50V45C50 47.7614 47.7614 50 45 50H35C32.2386 50 30 47.7614 30 45V30Z"
          fill="#4377FF"
        />
        <path
          d="M25 25H45V40C45 42.7614 42.7614 45 40 45H30C27.2386 45 25 42.7614 25 40V25Z"
          fill="#7698FF"
        />
        <circle cx="40" cy="35" r="6" fill="white" />
        <path
          d="M35 35L38 38L45 31"
          stroke="#0054FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Content Writing",
    description: "For entire project",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="40" fill="#2E5BFF" fillOpacity="0.1" />
        <rect
          x="16"
          y="16"
          width="48"
          height="48"
          rx="24"
          fill="#2E5BFF"
          fillOpacity="0.2"
        />
        <rect x="30" y="25" width="20" height="30" rx="2" fill="#4377FF" />
        <rect x="33" y="30" width="14" height="2" rx="1" fill="white" />
        <rect x="33" y="35" width="14" height="2" rx="1" fill="white" />
        <rect x="33" y="40" width="10" height="2" rx="1" fill="white" />
        <rect x="33" y="45" width="12" height="2" rx="1" fill="white" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Monthly SEO",
    description: "Rank #1 on google",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="40" fill="#2E5BFF" fillOpacity="0.1" />
        <rect
          x="16"
          y="16"
          width="48"
          height="48"
          rx="24"
          fill="#2E5BFF"
          fillOpacity="0.2"
        />
        <path
          d="M40 25L45.3612 35.9562L57.4448 37.4524L48.5503 45.7952L50.8779 57.7976L40 52.0423L29.1221 57.7976L31.4497 45.7952L22.5552 37.4524L34.6388 35.9562L40 25Z"
          fill="#FF6B47"
        />
        <path
          d="M40 32L42.9389 38.2746L50 39.0451L44.95 43.9549L46.1756 51L40 47.6393L33.8244 51L35.05 43.9549L30 39.0451L37.0611 38.2746L40 32Z"
          fill="#FFCC00"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Modern & intuitive interfaces",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="40" fill="#2E5BFF" fillOpacity="0.1" />
        <rect
          x="16"
          y="16"
          width="48"
          height="48"
          rx="24"
          fill="#2E5BFF"
          fillOpacity="0.2"
        />
        <path
          d="M25 30H55V50C55 52.7614 52.7614 55 50 55H30C27.2386 55 25 52.7614 25 50V30Z"
          fill="#4377FF"
        />
        <rect x="30" y="35" width="20" height="3" rx="1.5" fill="white" />
        <rect x="30" y="42" width="15" height="3" rx="1.5" fill="white" />
        <rect x="30" y="49" width="10" height="3" rx="1.5" fill="white" />
      </svg>
    ),
  },
];

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;
  const [navItems, setNavItems] = useState([
    { label: "WEBSITE", active: true },
    { label: "UI/UX", active: false },
    { label: "SEO", active: false },
    { label: "LOGO DESIGN", active: false },
    { label: "BANNER DESIGN", active: false },
    { label: "GOOGLE ADS", active: false },
  ]);

  const handleNavClick = (index) => {
    const updatedNavItems = navItems.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setNavItems(updatedNavItems);
  };
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, services.length - visibleCards));
  };

  const visibleServices = services.slice(startIndex, startIndex + visibleCards);

  return (
    <div className="min-h-screen w-full digital-services-bg text-white overflow-hidden bg-[#0a2472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div>
              <span className="text-[#ff6b47] font-medium text-sm tracking-wider mb-2 inline-block">
                DIGITAL SERVICES
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Check Our Available Services
              </h1>
            </div>
            <button className="bg-[#ff6b47] rounded-lg px-8 py-3 font-medium whitespace-nowrap w-full sm:w-auto">
              All Services
            </button>
          </div>

          {/* Navigation Section */}
          <div className="w-full overflow-x-auto py-4 no-scrollbar">
            <div className="flex space-x-8 min-w-max">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`tab-button text-sm font-medium px-1 py-2 ${
                    item.active ? "text-white active" : "text-[#a9b5e0]"
                  }`}
                  onClick={() => handleNavClick(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
              {visibleServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="nav-arrows flex justify-center mt-10 space-x-4">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`w-10 h-10 rounded-lg flex items-center justify-center border border-[#1d3b8f] ${
                  startIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#ff6b47]"
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= services.length - visibleCards}
                className={`w-10 h-10 rounded-lg flex items-center justify-center bg-[#ff6b47] ${
                  startIndex >= services.length - visibleCards
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="flex items-center justify-end pt-16">
            <div className="text-sm uppercase tracking-[0.2em] text-white/60 font-light">
              CREATIVE SOLUTION{" "}
              <span className="ml-2 inline-block w-16 h-[1px] bg-white/30 align-middle"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
