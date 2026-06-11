import React, { useState } from 'react';
import { assets, foodMenuDetails, menuList } from '../assets/assets';
import MenuFoodDetails from '../components/MenuFoodDetails';

const Menu = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className="w-full max-w-250 m-auto mt-15 sm:mt-20 md:mt-30">
      {/* ====== explore menu header =========  */}
      <div className="px-3 py-5">
        <h2 className="text-3xl text-[#4a3f3f] sm:text-4xl">
          Explore our menu
        </h2>
        <p className="text-sm text-[#757575] mt-2 sm:w-2/3 xl:text-base">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise to satisfy
          your cravings.
        </p>
      </div>

      {/* ========== menu list section ============  */}
      <div className="flex gap-8 overflow-x-auto no-scrollbar py-2 px-4">
        {menuList.map((item, index) => (
          <div
            onClick={() =>
              setCategory(perv =>
                perv === item.menuName ? 'All' : item.menuName,
              )
            }
            key={index}
            className="flex flex-col items-center shrink-0 cursor-pointer"
          >
            <img
              className={`w-15 h-15 rounded-full object-cover ${category === item.menuName ? 'border-3 border-[#F59E0B]' : ''}`}
              src={item.menuImage}
              alt="menu image"
            />
            <p className="mt-2 text-xs text-[#4a3f3f] font-medium">
              {item.menuName}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[95%] m-auto mt-8 mb-5 bg-[#acacac80] h-px"></div>

      {/* ====== food items =======  */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-3 items-center justify-center">
        {foodMenuDetails.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <div
                onClick={() => setSelectedFood(item)}
                key={index}
                className="flex flex-col items-center w-full h-35 relative bg-amber-50 pb-2 rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 duration-200"
              >
                <img className="w-full h-25 object-cover" src={item.image} />
                <p className="absolute top-2 right-2 bg-white/80 text-xs px-2 rounded-lg">
                  {item.category}
                </p>
                <h3 className="text-gray-600 text-sm px-1 pt-1">{item.name}</h3>
                <div className="flex w-[80%] m-auto justify-between pl-1 pr-2">
                  <div className="flex items-center">
                    <img className="w-3 h-3 object-cover" src={assets.star} />
                    <span className="text-xs text-[#F59E0B]">
                      {item.rating}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">${item.price}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <MenuFoodDetails/>
    </div>
  );
};

export default Menu;
