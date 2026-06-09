import React, { useRef } from 'react';
import { assets } from '../assets/assets.js';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Header = () => {
  const containerRef = useRef(null);

  // hero text store in a variable
  const headingLine1 = 'Order your';
  const headingLine2 = 'favourite food here';
  const paragraphText =
    'Satisfy your daily cravings with the premium flavors of Saffrona. The finest dishes are now at your fingertips.';

  useGSAP(
    () => {
      // animation for h2 text
      gsap.fromTo(
        '.char-h2',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: {
            each: 0.03,
            from: 'random',
          },
        },
      );

      // animation for paragrapg tag
      gsap.fromTo(
        '.word-p',
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.08,
          delay: 0.5,
        },
      );

      // animation for button
      gsap.fromTo(
        '.btn-anim',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: 1.4,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div>
      <div
        ref={containerRef}
        className="w-full max-w-300 m-auto h-55 sm:h-65 md:h-80 lg:h-105 xl:h-125 relative mt-5 xl:mt-7"
      >
        <img
          className="w-[95%] h-full m-auto object-cover absolute inset-0 rounded-lg xl:rounded-3xl"
          src={assets.hero}
        />
        <div className="relative w-[95%] h-full m-auto content-center text-right pr-6 md:pr-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl text-[#4a3f3f] font-bold leading-tight flex flex-wrap justify-end overflow-hidden">
            {headingLine1.split('').map((char, index) => (
              <span
                key={index}
                className="char-h2 inline-block opacity-0"
                style={{ minWidth: char === ' ' ? '0.25em' : 'auto' }}
              >
                {char}
              </span>
            ))}
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl text-[#4a3f3f] font-bold leading-tight flex flex-wrap justify-end overflow-hidden">
            {headingLine2.split('').map((char, index) => (
              <span
                key={index}
                className="char-h2 inline-block opacity-0"
                style={{ minWidth: char === ' ' ? '0.25em' : 'auto' }}
              >
                {char}
              </span>
            ))}
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-[#5c4d4d] my-3 w-[75%] sm:w-[50%] ml-auto flex flex-wrap justify-end gap-x-1.5 overflow-hidden">
            {paragraphText.split(' ').map((word, index) => (
              <span key={index} className="word-p inline-block opacity-0">
                {word}
              </span>
            ))}
          </p>
          <div className="btn-anim flex justify-end md:mt-6 lg:mt-7">
            <button className=" block w-25 h-8 bg-[#F59E0B] text-white rounded-lg text-xs tracking-wider cursor-pointer md:w-30 md:h-8 lg:w-35 lg:h-10 lg:text-sm hover:bg-[#f58a10]">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
