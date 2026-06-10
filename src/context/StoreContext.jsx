import { createContext, useEffect, useState } from 'react';
import { foodList } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProider = props => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = itemId => {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProider;
