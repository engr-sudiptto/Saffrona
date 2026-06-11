import React, { useContext, useEffect } from 'react';

const MenuFoodDetails = ({ food, onClose }) => {
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
          <div></div>
      </div>
    </div>
  );
};

export default MenuFoodDetails;
