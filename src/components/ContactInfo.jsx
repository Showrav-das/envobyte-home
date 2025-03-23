import React from "react";
import { Mail, ExternalLink } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
        Let us know what you think!
      </h2>

      <p className="text-lg text-white/80 mb-8">
        Got something on your mind? Share it with us! Drop a message, and we'll
        respond quickly to assist you
      </p>

      <div className="space-y-4">
        <a
          href="mailto:support@envobyte.com"
          className="contact-link group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Mail size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-white/70">Business:</div>
            <div className="font-medium flex items-center">
              support@envobyte.com
              <ExternalLink
                size={14}
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </a>

        <a
          href="https://wa.me/18677772477"
          className="contact-link group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6 6.32A7.85 7.85 0 0 0 12 4.02a7.94 7.94 0 0 0-7.96 7.96c0 1.4.37 2.77 1.07 3.97L4 20l4.14-1.08a7.9 7.9 0 0 0 3.86 1 7.94 7.94 0 0 0 7.96-7.96 7.85 7.85 0 0 0-2.36-5.64zM12 18.16a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 0 1-1.01-3.49A6.61 6.61 0 0 1 12 5.34a6.61 6.61 0 0 1 6.58 6.58c0 3.61-2.98 6.58-6.58 6.58v-.02z"
                fill="white"
              />
              <path
                d="M16.35 13.35c-.2-.1-1.16-.57-1.34-.64-.18-.06-.32-.1-.45.1-.13.2-.5.63-.62.76-.11.13-.23.15-.43.05a5.4 5.4 0 0 1-2.7-2.35c-.2-.35.2-.33.59-1.1a.37.37 0 0 0-.02-.35c-.04-.1-.44-1.06-.6-1.45-.16-.38-.33-.33-.45-.33-.11 0-.25-.03-.38-.03-.14 0-.35.05-.53.25-.18.2-.7.68-.7 1.65s.72 1.9.82 2.03c.1.14 1.43 2.18 3.46 3.06 1.23.53 1.76.6 2.4.5.38-.06 1.16-.47 1.33-.93.16-.46.16-.85.12-.93-.05-.1-.18-.15-.38-.25z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-sm text-white/70">Whatsapp</div>
            <div className="font-medium flex items-center">
              +1 (867) 777 2477
              <ExternalLink
                size={14}
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/company/envobyte"
          className="contact-link group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2"
                y="9"
                width="4"
                height="12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="4"
                cy="4"
                r="2"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-sm text-white/70">Linkedin</div>
            <div className="font-medium flex items-center">
              www.linkedin.com/company/envobyte
              <ExternalLink
                size={14}
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
