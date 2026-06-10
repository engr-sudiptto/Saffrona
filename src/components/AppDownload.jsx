import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div className='mt-5 w-full max-w-100 lg:max-w-150 m-auto lg:mt-20'>
        <h2 className="text-3xl text-center text-[#4a3f3f] lg:text-5xl">
          For Better Experience Download
        </h2>
        <h3 className="text-4xl text-center italic font-semibold text-[#4a3f3f] mt-2 mb-5 lg:text-6xl lg:font-normal">
          Saffrona App
        </h3>
        <div className='flex gap-3 sm:gap-5 lg:gap-10 px-5'>
          <img className='w-[50%] hover:scale-105 transition-all duration-200 cursor-pointer' src={assets.playStore} />
          <img className='w-[50%] hover:scale-105 transition-all duration-200 cursor-pointer' src={assets.appStore} />
        </div>
      </div>
    </div>
  );
}

export default AppDownload