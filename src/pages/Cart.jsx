import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import CrossPopup from '../components/CrossPopup';

const Cart = () => {
  const { foodList, cartItems, removeFromCart, getTotalAmount } =
    useContext(StoreContext);
  const isCartEmpty = !foodList.some(item => cartItems[item._id] > 0);

    const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const title = 'Nothing to Checkout';
  const bio = 'Your cart is empty! Please add some items to your cart before proceeding to checkout.'
  const buttonText = 'Continue Shopping';

  const handleCheckout = () => {
    if (getTotalAmount() === 0) {
      setShowPopup(true);
    } else {
      navigate('/order'); 
    }
  };

  return (
    <div className="w-full max-w-250 xl:min-h-125 m-auto mt-15 sm:mt-20 md:mt-30">
      {/* ------------ cross popup -----------  */}
      <CrossPopup isOpen={showPopup} onClose={() => setShowPopup(false)} title={title} bio={bio} buttonText={buttonText} />;
      {/* ====== main cart section is here =======  */}
      <div>
        {/* ------ cart items title -------  */}
        <div className="grid grid-cols-6 text-gray-500 p-3 text-xs sm:text-sm">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="text-center">Remove</p>
        </div>
        <div className="w-full h-px bg-gray-300 "></div>

        {/* -------- food itmes -------  */}
        {isCartEmpty ? (
          <div>
            <p className="text-lg text-center text-gray-400 mt-5">
              No item available in the cart right now
            </p>
          </div>
        ) : (
          foodList.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="grid grid-cols-6 items-center p-3 text-xs sm:text-sm">
                    <img
                      className="w-10 h-10 lg:w-15 lg:h-15"
                      src={item.image}
                      alt=""
                    />
                    <p className="text-gray-400">{item.name}</p>
                    <p className="text-gray-400">${item.price}</p>
                    <p className="text-gray-400">{cartItems[item._id]}</p>
                    <p className="text-gray-400">
                      ${item.price * cartItems[item._id]}
                    </p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="text-gray-400 cursor-pointer text-[10px] text-center"
                    >
                      <i class="fa-solid fa-x"></i>
                    </p>
                  </div>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>
              );
            }
            return null;
          })
        )}

        {/* ---------- cart total & promo code section ------------  */}
        <div className="grid grid-cols-1 gap-0 mt-10 lg:grid-cols-2 lg:gap-20">
          {/* ------ cart total ------  */}
          <div className="p-5 order-2 lg:order-1">
            <h3 className="text-2xl text-gray-700 mb-3">Cart Totals</h3>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <div className="w-full h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Delivery Fee</p>
              <span>${getTotalAmount() === 0 ? 0 : 2}</span>
            </div>
            <div className="w-full h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between items-center font-bold text-gray-600">
              <p>Total</p>
              <p>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
            </div>
            <button onClick = { handleCheckout } className="w-full h-10 bg-[#F59E0B] mt-10 rounded-lg text-sm tracking-wider text-white font-semibold cursor-pointer hover:bg-[#f3b014da]">
              PROCEED TO CHECKOUT
            </button>
          </div>
          {/* ------ promo code ------  */}
          <div className="p-5 lg:mt-10 lg:pl-10 order-1 lg:order-2">
            <p className="lg:text-right text-gray-500">
              If you have a promo code, Enter it here
            </p>
            <div className="flex items-center justify-between mt-5">
              <input
                className="basis-[70%] w-full h-11 border border-gray-300 rounded-l-lg border-r-0 px-3 outline-0 text-gray-500"
                type="text"
              />
              <button className="basis-[30%] w-full h-11 bg-[#F59E0B] hover:bg-[#f3b014da] text-center content-center tracking-wide rounded-r-lg text-white cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart