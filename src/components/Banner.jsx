import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, X, Globe, ThumbsUp, Users, UserPlus } from "lucide-react";
export default function Banner() {
  const stats = [
    {
      id: "1",
      icon: <Globe size={24} className="text-white" />,
      number: "2k+",
      text: "Websites build",
    },
    {
      id: "2",
      icon: <ThumbsUp size={24} className="text-white" />,
      number: "97%",
      text: "Client satisfaction",
    },
    {
      id: "3",
      icon: <Users size={24} className="text-white" />,
      number: "25+",
      text: "Team members",
    },
    {
      id: "4",
      icon: <UserPlus size={24} className="text-white" />,
      number: "500+",
      text: "Amazing clients",
    },
  ];
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            DIGITAL SERVICES
          </h1>
          <p className="text-sm md:text-base mt-1 tracking-wider">
            BUILDING YOUR EMPIRE DIGITALLY
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            href="#"
            className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium py-2 px-6 rounded text-center"
          >
            GET STARTED
          </Link>
          <Link
            href="#"
            className="bg-transparent border border-white hover:bg-white/10 transition-colors text-white font-medium py-2 px-6 rounded text-center"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>

        {/* Stats Section */}
        <div className=" w-full">
          <div className="max-w-5xl mx-auto px-4 py-4 sm:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat) => (
                <StatItem
                  key={stat.id}
                  icon={stat.icon}
                  number={stat.number}
                  text={stat.text}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Envobyte Banner */}
        <div className="relative rounded-lg overflow-hidden">
          {/* Logo and Brand */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Team Image */}
            <div className="mt-8 flex items-center justify-center">
              <Image
                src="/banner.png"
                alt="Envobyte Team"
                width={982}
                height={553}
                className=" rounded object-cover"
              />
            </div>
          </div>

          {/* Background Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/50"></div> */}
        </div>
      </div>
    </main>
  );
}

// Stats Item component
const StatItem = ({ icon, number, text }) => {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="text-white">{icon}</div>
      <div>
        <p className="font-bold text-xl leading-tight">{number}</p>
        <p className="text-sm opacity-80 leading-tight">{text}</p>
      </div>
    </div>
  );
};
