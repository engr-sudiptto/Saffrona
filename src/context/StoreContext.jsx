import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
// import { foodList } from '../assets/assets';
import { foodMenuDetails } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProider = props => {
  const [cartItems, setCartItems] = useState({});
  const url = 'https://saffrona-backend.onrender.com';
  const [token, setToken] = useState("")

  const [foodList, setFoodList] = useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo =
          foodList.find(product => product._id === item) ||
          foodMenuDetails.find(product => product._id === item);

        if (itemInfo && itemInfo.price) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }

  const localCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
    setCartItems(response.data.cartData)
    
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList()
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await localCartData(localStorage.getItem("token"))
      }
    }
    loadData()
  },[])

  const contextValue = {
    foodList,
    foodMenuDetails,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProider;
