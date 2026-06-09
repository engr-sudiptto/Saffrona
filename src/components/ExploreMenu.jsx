import React from 'react'
import {menuList} from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="w-full max-w-300 m-auto sm:px-5 xl:pt-3">
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
    </div>
  );
}

export default ExploreMenu