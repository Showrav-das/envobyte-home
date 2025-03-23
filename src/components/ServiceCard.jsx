import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card bg-[#0a2472] bg-opacity-60 rounded-lg p-8 border border-[#1d3b8f] flex flex-col items-center justify-center text-center h-full slide-in">
      <div className="service-icon mb-6 w-24 h-24 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
      <p className="text-[#a9b5e0] mb-6">{description}</p>
      <div className="flex space-x-3 mt-auto">
        <button className="btn-secondary text-[#0095ff] border border-[#0095ff] px-6 py-2 rounded-full text-sm font-medium">
          Portfolio
        </button>
        <button className="btn-primary text-white px-6 py-2 rounded-full text-sm font-medium">
          Order
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
