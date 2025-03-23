"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Stephanie Powell",
    platform: "fiverr",
    quote:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 2,
    name: "Brian Clark",
    platform: "upwork",
    quote:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 3,
    name: "Christopher White",
    platform: "upwork",
    quote:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 4,
    name: "Brian Clark",
    platform: "fiverr",
    quote:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 5,
    name: "Christopher White",
    platform: "upwork",
    quote:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 6,
    name: "Stephanie Powell",
    platform: "fiverr",
    quote:
      "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare",
    avatar: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
];

export default function ClientReviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  // Function to handle pagination
  const nextPage = () => {
    setCurrentPage((prev) =>
      prev + 1 >= Math.ceil(testimonials.length / 3) ? 0 : prev + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev - 1 < 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[#3498db] text-sm md:text-base font-medium uppercase tracking-wider mb-2">
          CLIENT REVIEWS
        </h2>
        <h1 className="text-[#0a1f44] text-4xl md:text-5xl font-bold">
          Our Proud Clients
        </h1>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#3498db] fill-[#3498db]"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>

            {/* Author */}
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/team.png"
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-[#0a1f44] font-bold text-lg">
                  {testimonial.name}
                </h3>
                <div className="flex items-center text-gray-400 text-sm">
                  <span className="inline-flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-1">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    From {testimonial.platform}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        <button
          onClick={prevPage}
          className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center mr-2 hover:bg-gray-50 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={nextPage}
          className="w-10 h-10 rounded-md bg-[#ff7846] text-white flex items-center justify-center hover:bg-[#ff6a33] transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
