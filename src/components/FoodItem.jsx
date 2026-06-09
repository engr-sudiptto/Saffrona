import React, { useState } from 'react'
import { assets } from '../assets/assets';

const FoodItem = ({ id, name, price, description, image, rating }) => {
  const [itemCount, setItemCount] = useState(0)
  return (
    <div>
      <div className="rounded-xl overflow-hidden hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:shadow-xl hover:bg-gray-50">
        {/* ------ food image -------  */}
        <div className="w-full h-60 sm:h-40 lg:h-60 xl:h-50 relative">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="food image"
          />
          {!itemCount ? (
            <div
              onClick={() => setItemCount(prev => prev + 1)}
              title="Add to Cart"
              className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-amber-50 text-2xl flex justify-center items-center hover:bg-[#F59E0B] hover:text-white"
            >
              +
            </div>
          ) : (
            <div className="absolute bottom-2 right-2 bg-amber-50 w-6 flex flex-col justify-center items-center rounded-full py-1 gap-1">
              <div onClick={()=>setItemCount(prev=>prev-1)} className="w-5 h-5 m-auto flex justify-center items-center bg-red-400/50 rounded-full text-2xl pb-1.5">
                -
              </div>
              <p>{itemCount}</p>
              <div onClick={()=>setItemCount(prev=>prev+1)} className="w-5 h-5 m-auto flex justify-center items-center bg-green-400/50 rounded-full text-xl">
                +
              </div>
            </div>
          )}
        </div>
        {/* ---------- food info ---------  */}
        <div className="mt-3 mx-3 flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[#4a3f3f]">{name}</h3>
          {/* ----- star rating -----  */}
          <div className="flex gap-1">
            <img className="w-4 h-4 object-cover" src={assets.star} />
            <p className="text-sm text-[#F59E0B]">{rating}</p>
          </div>
        </div>

        <p className="text-sm text-[#757575] ml-3">{description}</p>
        <p className="mt-2 ml-3 mb-3 text-lg font-semibold text-[#F59E0B]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem