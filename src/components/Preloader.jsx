import React from 'react';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div>
      <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white transition-all duration-500">
        <div className="relative flex items-center justify-center">
          {/* ----- outside ring ----------  */}
          <div className="w-20 h-20 border-4 border-gray-100 border-t-[#F59E0B] border-r-[#F59E0B] rounded-full animate-spin"></div>

          <div className="absolute w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center animate-pulse">
            <svg
              className="w-8 h-8 text-[#F59E0B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>

        {/* --------- preloader text ---------- */}
        <div className="mt-5 text-center">
          <h2 className="text-lg font-semibold text-gray-700 tracking-wider animate-pulse">
            Loading Deliciousness...
          </h2>
          <p className="text-xs text-gray-400 mt-1">Please wait a moment</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
