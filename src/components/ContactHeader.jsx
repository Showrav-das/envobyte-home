"use client";
import React, { useEffect, useState } from "react";

const ContactHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-navy/80 backdrop-blur-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="relative">
          <svg
            width="160"
            height="32"
            viewBox="0 0 160 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.5 6L25 12.5L18.5 19L12 12.5L18.5 6Z" fill="white" />
            <path
              d="M7 20L13.5 26.5L7 33L0.5 26.5L7 20Z"
              fill="white"
              fillOpacity="0.5"
            />
            <path
              d="M30 20L36.5 26.5L30 33L23.5 26.5L30 20Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M46 12.6667H50.2222V24H54.1111V12.6667H58.3333V9.33333H46V12.6667Z"
              fill="white"
            />
            <path
              d="M66.2222 24L67.3333 20.6667H72.8889L74 24H78.1111L72.6667 9.33333H67.5556L62.1111 24H66.2222ZM68.4444 17.3333L70.1111 12.6667L71.7778 17.3333H68.4444Z"
              fill="white"
            />
            <path
              d="M84 9.33333L80.1111 24H84.2222L85.1111 20.3333H90L90.8889 24H95L91.1111 9.33333H84ZM85.7778 17.3333L87 12.6667L88.2222 17.3333H85.7778Z"
              fill="white"
            />
            <path
              d="M104.889 9.33333V18C104.889 18.5333 104.778 19 104.556 19.4C104.333 19.8 104.037 20.1333 103.667 20.4C103.296 20.6667 102.87 20.8667 102.389 21C101.926 21.1333 101.444 21.2 100.944 21.2C100.444 21.2 99.9556 21.1333 99.4889 21C99.0222 20.8667 98.6074 20.6667 98.2444 20.4C97.8815 20.1333 97.5852 19.8 97.3556 19.4C97.1259 19 97.0111 18.5333 97.0111 18V9.33333H93.1222V18C93.1222 19 93.3185 19.9 93.7111 20.7C94.1037 21.5 94.6296 22.1667 95.2889 22.7C95.9481 23.2333 96.7037 23.6333 97.5556 23.9C98.4074 24.1667 99.3074 24.3 100.256 24.3C101.204 24.3 102.111 24.1667 102.978 23.9C103.844 23.6333 104.607 23.2333 105.267 22.7C105.926 22.1667 106.452 21.5 106.844 20.7C107.237 19.9 107.433 19 107.433 18V9.33333H104.889Z"
              fill="white"
            />
            <path
              d="M124 17.2V9.33333H120.111V17.6667C120.111 18.0889 120.022 18.4667 119.844 18.8C119.667 19.1333 119.422 19.4222 119.111 19.6667C118.8 19.9111 118.444 20.1 118.044 20.2333C117.644 20.3667 117.222 20.4333 116.778 20.4333C116.333 20.4333 115.911 20.3667 115.511 20.2333C115.111 20.1 114.756 19.9111 114.444 19.6667C114.133 19.4222 113.889 19.1333 113.711 18.8C113.533 18.4667 113.444 18.0889 113.444 17.6667V9.33333H109.556V17.2C109.556 18.2 109.756 19.1222 110.156 19.9667C110.556 20.8111 111.106 21.5445 111.806 22.1667C112.506 22.7889 113.317 23.2778 114.239 23.6333C115.161 23.9889 116.133 24.1667 117.156 24.1667C118.156 24.1667 119.1 23.9889 119.989 23.6333C120.878 23.2778 121.65 22.7889 122.308 22.1667C122.967 21.5445 123.483 20.8111 123.856 19.9667C124.228 19.1222 124.4 18.2 124.356 17.2H124Z"
              fill="white"
            />
            <path
              d="M137.156 13.8C137.156 14.5556 137.022 15.2222 136.756 15.8C136.489 16.3778 136.133 16.8667 135.689 17.2667C135.244 17.6667 134.733 17.9778 134.156 18.2C133.578 18.4222 132.978 18.5333 132.356 18.5333H129.867V24H126.022V9.33333H132.356C132.978 9.33333 133.578 9.44444 134.156 9.66667C134.733 9.88889 135.244 10.2 135.689 10.6C136.133 11 136.489 11.4889 136.756 12.0667C137.022 12.6444 137.156 13.3111 137.156 14.0667V13.8Z"
              fill="white"
            />
            <path d="M144.111 24V9.33333H140.222V24H144.111Z" fill="white" />
            <path
              d="M158.422 16.6667C158.422 17.8222 158.222 18.8667 157.822 19.8C157.422 20.7333 156.878 21.5333 156.189 22.2C155.5 22.8667 154.7 23.3778 153.789 23.7333C152.878 24.0889 151.922 24.2667 150.922 24.2667C149.922 24.2667 148.967 24.0889 148.056 23.7333C147.145 23.3778 146.345 22.8667 145.656 22.2C144.967 21.5333 144.422 20.7333 144.022 19.8C143.622 18.8667 143.422 17.8222 143.422 16.6667C143.422 15.5111 143.622 14.4667 144.022 13.5333C144.422 12.6 144.967 11.8 145.656 11.1333C146.345 10.4667 147.145 9.95556 148.056 9.6C148.967 9.24444 149.922 9.06667 150.922 9.06667C151.922 9.06667 152.878 9.24444 153.789 9.6C154.7 9.95556 155.5 10.4667 156.189 11.1333C156.878 11.8 157.422 12.6 157.822 13.5333C158.222 14.4667 158.422 15.5111 158.422 16.6667ZM154.533 16.6667C154.533 16.1556 154.456 15.6778 154.3 15.2333C154.144 14.7889 153.922 14.4 153.633 14.0667C153.344 13.7333 153 13.4667 152.6 13.2667C152.2 13.0667 151.767 12.9667 151.3 12.9667C150.833 12.9667 150.4 13.0667 150 13.2667C149.6 13.4667 149.256 13.7333 148.967 14.0667C148.678 14.4 148.456 14.7889 148.3 15.2333C148.144 15.6778 148.067 16.1556 148.067 16.6667C148.067 17.1778 148.144 17.6556 148.3 18.1C148.456 18.5444 148.678 18.9333 148.967 19.2667C149.256 19.6 149.6 19.8667 150 20.0667C150.4 20.2667 150.833 20.3667 151.3 20.3667C151.767 20.3667 152.2 20.2667 152.6 20.0667C153 19.8667 153.344 19.6 153.633 19.2667C153.922 18.9333 154.144 18.5444 154.3 18.1C154.456 17.6556 154.533 17.1778 154.533 16.6667Z"
              fill="white"
            />
          </svg>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <a href="#" className="text-white font-medium">
            Contact
          </a>
        </nav>

        <button className="md:hidden text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default ContactHeader;
