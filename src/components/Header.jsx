import React from 'react'
import {assets} from '../assets/assets.js'

const Header = () => {
  return (
    <div>
      <div className="w-full max-w-300 m-auto h-55 sm:h-65 md:h-80 lg:h-105 xl:h-125 relative mt-5 xl:mt-7">
        <img
          className="w-[95%] h-full m-auto object-cover absolute inset-0 rounded-lg xl:rounded-3xl"
          src={assets.hero}
        />
        <div className="relative w-[95%] h-full m-auto content-center text-right pr-6 md:pr-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl text-[#4a3f3f] font-bold leading-tight">
            Order your <br /> favourite food here
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-[#5c4d4d] my-3 w-[70%] sm:w-[50%] ml-auto">
            Satisfy your daily cravings with the premium flavors of Saffrona.
            The finest dishes are now at your fingertips.
          </p>
          <div className="flex justify-end md:mt-6 lg:mt-7">
            <button className=" block w-25 h-8 bg-[#F59E0B] text-white rounded-lg text-xs tracking-wider cursor-pointer md:w-30 md:h-8 lg:w-35 lg:h-10 lg:text-sm hover:bg-[#f58a10]">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header