import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../context/StoreContext';

const MenuFoodDetails = ({ food, onClose }) => {
  const { addToCart } = useContext(StoreContext);

  useEffect(() => {
    if (food) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [food]);

  if (!food) {
    return (
      <div className="text-center text-gray-500 py-10">
        Select a food item to see details.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto h-screen md:h-140 mt-14 sm:mt-20 md:mt-30 bg-white shadow-xl overflow-auto overflow-x-hidden border border-gray-100 my-8 transition-all duration-300 hover:shadow-2xl p-3 fixed inset-0 z-100 pb-15 md:p-2">
      <div className="flex flex-col md:flex-row relative w-full h-full">
        {/* ------- cross button ---------  */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 cursor-pointer w-6 h-6 bg-white/50 rounded-full flex justify-center items-center md:top-3 md:left-3"
        >
          <svg
            className={`w-4 h-4 text-gray-700 transition-all duration-700 ease-out`}
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
        </button>
        {/* ---------- food image --------- */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-75 bg-gray-100">
          <img src={food.image} className="w-full h-full object-cover" />

          {/* ------------ Chef Special badge if it is true ---------- */}
          {food.details?.chefSpecial && (
            <span className="absolute top-4 left-4 bg-linear-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md animate-pulse">
              ⭐ Chef's Special
            </span>
          )}

          {/* ---------- Veg / Non-Veg indicator --------- */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-2 border border-gray-200">
            <span
              className={`w-3 h-3 rounded-full inline-block ${food.details?.isVeg ? 'bg-green-500' : 'bg-red-500'}`}
            ></span>
            <span className="text-xs font-semibold text-gray-700">
              {food.details?.isVeg ? 'Pure Veg' : 'Non-Veg'}
            </span>
          </div>
        </div>

        {/* ------------- info of the food ----------- */}
        <div className="w-full md:w-1/2 p-6 md:p-5 md:pt-0 flex flex-col justify-between">
          <div>
            {/* ------- category & reating --------- */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold tracking-wider text-[#F59E0B] uppercase bg-orange-50 px-2.5 py-1 rounded-md">
                {food.category}
              </span>
              <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                <span className="text-[#F59E0B]">★</span>
                <span className="text-xs font-bold text-amber-800">
                  {food.rating}
                </span>
              </div>
            </div>

            {/* ------- name and price --------*/}
            <div className="flex justify-between items-start gap-4 mb-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                {food.name}
              </h1>
              <span className="text-2xl font-black text-[#F59E0B]">
                ${food.price}
              </span>
            </div>

            {/* ----- short description ------- */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {food.description}
            </p>

            {/* -------- nutrition and making info -------- */}
            <div className="grid grid-cols-3 gap-3 mb-6 bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-center">
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Calories
                </p>
                <p className="text-sm font-bold text-gray-700 mt-0.5">
                  {food.details?.calories || 'N/A'}
                </p>
              </div>
              <div className="border-x border-gray-200">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Prep Time
                </p>
                <p className="text-sm font-bold text-gray-700 mt-0.5">
                  {food.details?.prepTime || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Spicy Level
                </p>
                <p
                  className={`text-sm font-bold mt-0.5 ${
                    food.details?.spicyLevel === 'Hot'
                      ? 'text-red-500'
                      : 'text-gray-700'
                  }`}
                >
                  {food.details?.spicyLevel || 'N/A'}
                </p>
              </div>
            </div>

            {/* ----------- making ingredients -------- */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-800 mb-2.5 flex items-center gap-1.5">
                <span>🥗</span> Key Ingredients
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {food.details?.ingredients?.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-xl transition-colors duration-150"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --------- serving size & cta -------- */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-xs text-gray-400">Serving Size</p>
              <p className="text-sm font-bold text-gray-600">
                {food.details?.servingSize || '1 Portion'}
              </p>
            </div>
            <button
              onClick={() => addToCart(food._id)}
              className="flex-1 max-w-50 max-h-10 bg-[#F59E0B] hover:bg-[#f59f0bba] text-white font-bold py-3 px-6 rounded-lg text-sm shadow-md hover:shadow-orange-200 cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFoodDetails;
