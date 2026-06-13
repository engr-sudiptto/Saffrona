import React from 'react';
import { assets } from '../assets/assets';

const MobileApp = () => {
  return (
    <div className="w-full max-w-250 m-auto mt-15 sm:mt-16 md:mt-16 ">
      <div className="w-full grid items-center justify-center bg-linear-to-br from-amber-50 to-orange-100 p-8 gap-10 lg:grid-cols-2 lg:py-15 xl:px-10 xl:pl-15">
        {/* ------- left part -----  */}
        <div>
          <span className="text-sm font-semibold tracking-wider text-orange-600 uppercase">
            SEAMLESS EXPERIENCE
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
            Download the <span className="text-orange-600 mx-1">Saffrona</span>
            Mobile App
          </h3>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Get the best deals, track your orders in real-time, and enjoy a
            faster shopping experience tailored just for you. Available now on
            iOS and Android.
          </p>
          <div className="grid grid-cols-2 gap-5 mt-5 w-full sm:w-100 m-auto">
            <img className="w-full cursor-pointer" src={assets.playStore} />
            <img className="w-full cursor-pointer" src={assets.appStore} />
          </div>
        </div>
        {/* ------- right part -----  */}
        <div>
          <div className="w-full flex justify-center items-center relative">
            <div className="absolute w-64 h-64 bg-orange-200 rounded-full blur-2xl opacity-60"></div>
            <div className="relative border-[6px] border-gray-900 rounded-[2.5rem] w-56 h-105 bg-white shadow-2xl overflow-hidden flex flex-col transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-gray-900 rounded-b-xl z-20"></div>

              {/*--------- inside app preview --------- */}
              <div className="p-4 pt-8 flex-1 flex flex-col justify-between bg-linear-to-b from-white to-amber-50">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-gray-800">
                    Saffrona
                  </span>
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 text-orange-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* ---------- dummy ui ----------  */}
                <div className="space-y-2 my-auto">
                  <div className="h-28 w-full bg-orange-100 rounded-xl overflow-hidden relative flex items-center justify-center">
                    <span className="text-xs font-semibold text-orange-700">
                      Premium Collection
                    </span>
                  </div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="h-16 bg-white border border-gray-100 rounded-lg shadow-sm"></div>
                    <div className="h-16 bg-white border border-gray-100 rounded-lg shadow-sm"></div>
                  </div>
                </div>

                <div className="h-10 w-full bg-orange-600 rounded-xl flex items-center justify-center text-white text-xs font-medium shadow-md">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
