import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Mr Anik",
    role: "Backend Developer",
    image: "/member1.png",
  },
  {
    id: 2,
    name: "Mr Shahed",
    role: "Frontend Developer",
    image: "/member2.png",
  },
  {
    id: 3,
    name: "Mr Mainul Islam",
    role: "SEO Expert",
    image: "/member1.png",
  },

  {
    id: 6,
    name: "Ms Sarah",
    role: "Project Manager",
    image: "/member2.png",
  },
];

export default function TeamMember() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-medium tracking-wider mb-2">
            EXPERIENCED TEAM
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900">
            Our Team Members
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
          {teamMembers.slice(0, 4).map((member) => (
            <div key={member.id} className="relative group">
              {/* Image Container */}
              <div className="aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={0}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center mt-5 gap-2">
          <button
            className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="w-10 h-10 bg-orange-500 text-white rounded flex items-center justify-center hover:bg-orange-600 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
