import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full max-w-300 m-auto mt-15 bg-[#111111] text-gray-400 pt-16 pb-8 px-4 md:px-12 border-t border-zinc-800 sm:px-10">
      {/* ========= Main Footer Container ========= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 xl:pl-10">
        {/* ----- Part 1: Logo & Socials ----- */}
        <div className="flex flex-col gap-5">
          <div className="w-40">
            <img
              src={assets.saffronaLogo}
              alt="Saffrona Logo"
              className="w-full object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-gray-400">
            Discover the finest collection tailored just for you. Experience
            premium quality and seamless shopping with Saffrona.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <i className="fa-brands fa-twitter text-sm"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <i className="fa-brands fa-linkedin-in text-sm"></i>
            </a>
          </div>
        </div>

        {/* ----- Part 2: Quick Links ----- */}
        <div className="flex flex-col gap-4 md:pl-12 xl:pl-35">
          <h3 className="text-white text-lg font-medium tracking-wider uppercase border-b border-zinc-800 pb-2 w-max">
            Company
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li
              onClick={() => navigate('/')}
              className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-200"
            >
              Home
            </li>
            <li
              onClick={() => navigate('/about')}
              className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-200"
            >
              About us
            </li>
            <li
              onClick={() => navigate('/delivery')}
              className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-200"
            >
              Delivery
            </li>
            <li
              onClick={() => navigate('/privacy-policy')}
              className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-200"
            >
              Privacy policy
            </li>
          </ul>
        </div>

        {/* ----- Part 3: Get In Touch ----- */}
        <div className="flex flex-col gap-4 xl:pl-20">
          <h3 className="text-white text-lg font-medium tracking-wider uppercase border-b border-zinc-800 pb-2 w-max">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <p className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-200">
              <i className="fa-solid fa-phone mr-2 text-xs text-[#D4AF37]"></i>{' '}
              +1-212-4560-7890
            </p>
            <p className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-200">
              <i className="fa-solid fa-envelope mr-2 text-xs text-[#D4AF37]"></i>{' '}
              contact@saffrona.app
            </p>
          </div>
        </div>
      </div>

      {/* ========= Divider Line ========= */}
      <div className="max-w-7xl mx-auto my-8 border-t border-zinc-800"></div>

      {/* ========= Bottom Copyright ========= */}
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-500 tracking-wide">
        <p>
          Copyright 2026 <i className="fa-regular fa-copyright mx-0.5"></i>{' '}
          saffrona.app - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
