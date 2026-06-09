import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);
  return (
    <div className='w-full max-w-300 m-auto lg:px-5'>
      {/* ======= FoodDisplay head line ========  */}
      <div>
        <h3 className="text-2xl mb-5 pl-3 text-[#4a3f3f]">
          Top dishes near you
        </h3>
      </div>

      {/* ========= food list ========  */}
      <div className='p-3 grid gap-4 sm:grid-cols-3 xl:grid-cols-4'>
        {foodList.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
