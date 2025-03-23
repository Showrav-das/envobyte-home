"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("UI/UX");

  const filters = [
    "UI/UX",
    "WEBSITE",
    "SEO",
    "LOGO DESIGN",
    "BANNER DESIGN",
    "GOOGLE ADS",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Stock Trading Platform",
      category: "UI/UX",
      image: "/portfolio1.png",
    },
    {
      id: 1,
      title: "Stock Trading Platform",
      category: "UI/UX",
      image: "/portfolio1.png",
    },
    {
      id: 1,
      title: "Stock Trading Platform",
      category: "UI/UX",
      image: "/portfolio1.png",
    },

    {
      id: 4,
      title: "Skills Development",
      category: "WEBSITE",
      image: "/portfolio1.png",
    },
    {
      id: 5,
      title: "Email Marketing Software",
      category: "UI/UX",
      image: "/portfolio1.png",
    },
    {
      id: 6,
      title: "Chat Solution",
      category: "UI/UX",
      image: "/portfolio1.png",
    },
    {
      id: 7,
      title: "Digital Design Agency",
      category: "WEBSITE",
      image: "/portfolio1.png",
    },
    {
      id: 8,
      title: "Trading Platform",
      category: "UI/UX",
      image: "/portfolio1.png",
    },
    {
      id: 9,
      title: "E-Learning Website",
      category: "WEBSITE",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h3 className="text-[#0099ff] font-medium text-sm mb-1">
            UI/UX PORTFOLIO
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1952]">
            Check Our Previous Work
          </h1>
        </div>
        <Link href="/portfolio">
          <span className="mt-4 sm:mt-0 inline-block px-6 py-3 bg-[#ff6b3d] hover:bg-[#ff5a2c] text-white font-medium rounded-md transition-colors">
            All Portfolio
          </span>
        </Link>
      </div>

      {/* Filter Navigation */}
      <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-200 pb-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setCurrentPage(1);
            }}
            className={`text-sm md:text-base font-medium transition-colors ${
              activeFilter === filter
                ? "text-[#0099ff]"
                : "text-gray-600 hover:text-[#0099ff]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-12">
        <div className="text-gray-500 uppercase tracking-wider text-sm">
          CREATIVE PORTFOLIO
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-md border ${
              currentPage === 1
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:border-[#0099ff] hover:text-[#0099ff]"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#ff6b3d] text-white hover:bg-[#ff5a2c]"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
