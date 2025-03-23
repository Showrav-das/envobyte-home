import React from "react";

const FeatureCard = ({
  title,
  subtitle,
  description,
  icon,
  color = "bg-blue-900",
  delay = "delay-0",
}) => {
  return (
    <div
      className={`group relative overflow-hidden ${color} h-full rounded-sm animate-fade-in ${delay} transition-all duration-500`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-8 md:p-10 flex flex-col h-full">
        <div className="mb-4">{icon}</div>

        <h2 className="text-3xl text-white font-bold mb-4 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h2>
        <h3 className="text-sm text-blue-100 font-medium transition-transform duration-300 group-hover:translate-x-1 mb-3">
          {subtitle}
        </h3>
        <p className="text-white/90 transition-transform duration-300 group-hover:translate-x-1">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default FeatureCard;
