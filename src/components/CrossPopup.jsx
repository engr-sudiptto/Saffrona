import React, { useEffect, useState } from 'react';

const CrossPopup = ({ isOpen, onClose, title, bio, buttonText }) => {
  const [animate, setAnimate] = useState(false);

  // পপআপ ওপেন হলে এনিমেশন শুরু করার জন্য ইফেক্ট
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-500 flex items-center justify-center p-4">
      {/* ------- bg blur when popup is open -------  */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* ------- main popup section -----------  */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all duration-300 scale-100 opacity-100 z-10 border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center justify-center w-24 h-24 bg-red-50 rounded-full border-2 border-red-100">
            <svg
              className={`w-12 h-12 text-red-500 transition-all duration-700 ease-out transform ${
                animate
                  ? 'rotate-180 scale-110 opacity-100'
                  : 'rotate-0 scale-50 opacity-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            {/* ---------- ping animation background ------------ */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-20 animate-ping pointer-events-none"></span>
          </div>
        </div>

        {/* ---------- popup text ----------- */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 px-2">
          {bio}
        </p>

        {/* ------- popup close button --------- */}
        <button
          onClick={onClose}
          className="w-full bg-[#F59E0B] hover:bg-[#d98a0a] text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-md tracking-wide cursor-pointer text-sm uppercase"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CrossPopup;
