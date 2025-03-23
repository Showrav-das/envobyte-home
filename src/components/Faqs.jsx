import { useState } from "react";
import { Plus, X } from "lucide-react";

// FAQ Item component
const FAQItem = ({ number, question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <div
        className="flex items-center justify-between py-6 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center gap-8">
          <span className="text-blue-800 font-medium min-w-[40px]">
            {number}
          </span>
          <h3 className="text-gray-600 font-medium text-lg md:text-xl">
            {question}
          </h3>
        </div>
        <button className="text-gray-400 focus:outline-none">
          {isOpen ? (
            <X className="w-5 h-5 transition-transform duration-300" />
          ) : (
            <Plus className="w-5 h-5 transition-transform duration-300" />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-16 text-gray-500 pr-10">{answer}</div>
      </div>
    </div>
  );
};

const Faqs = () => {
  // FAQ data
  const faqs = [
    {
      id: "01",
      question: "What Is Included In Your Web Development Service?",
      answer:
        "Our web development service includes custom design, responsive development, content management system integration, SEO optimization, browser compatibility testing, and post-launch support. We provide a complete solution that ensures your website looks great and functions perfectly across all devices.",
    },
    {
      id: "02",
      question: "What Technologies Do You Use For Web Development?",
      answer:
        "We use modern technologies such as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL to ensure your website is scalable, secure, and responsive.",
    },
    {
      id: "03",
      question: "What If I Need Ongoing Support After The Website Is Launched?",
      answer:
        "We offer various maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally. Our team is available to handle any updates, fixes, or additions you might need after launch.",
    },
    {
      id: "04",
      question: "Can I Customize My Website According To My Business Needs?",
      answer:
        "Absolutely! We specialize in creating custom websites tailored to your specific business requirements. During our consultation process, we'll discuss your needs, goals, and preferences to create a website that perfectly aligns with your brand and business objectives.",
    },
    {
      id: "05",
      question: "Do You Offer Seo Services As Part Of Your Web Development?",
      answer:
        "Yes, we implement basic SEO best practices during development, including optimized site structure, meta tags, responsive design, and proper HTML semantics. We also offer more comprehensive SEO services as separate packages to further enhance your online visibility.",
    },
  ];

  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState("02"); // "02" is open by default as shown in image

  // Toggle FAQ open/close
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? "" : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
          Frequently Asked Questions
        </h1>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              number={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === faq.id}
              onClick={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
