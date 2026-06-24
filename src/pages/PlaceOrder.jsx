import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const PlaceOrder = () => {
  const { getTotalAmount, token, foodList, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    street:"",
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault()
    let orderItems = []
    foodList.map((item) => {
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    if (response.data.success) {
      const { sessionUrl } = response.data
      window.location.replace(sessionUrl)
    } else {
      alert("Error")
    }
  }

  return (
    <form onSubmit={placeOrder} className="w-full max-w-250 lg:min-h-125 content-center m-auto mt-15 sm:mt-20 md:mt-30">
      {/* ================ main div ==============  */}
      <div className="lg:grid lg:grid-cols-2 gap-5 px-5">
        {/* ------- place order left side ---------  */}
        <div className="p-5">
          <h3 className="text-2xl text-gray-700">Delivery Information</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
              type="text"
              placeholder="First name"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
            type="email"
            placeholder="Email address"
          />
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
            type="text"
            placeholder="Street"
          />
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
              type="text"
              placeholder="City"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              required
              name='zipcode'
              onChange={onChangeHandler}
              value={data.zipcode}
              className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
              type="text"
              placeholder="Zip code"
            />
            <input
              required
              name='country'
              onChange={onChangeHandler}
              value={data.country}
              className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            name='phone'
            onChange={onChangeHandler}
            value={data.phone}
            className="w-full h-10 border  rounded-lg mt-3 text-sm border-gray-300 outline-0 px-3 text-gray-600"
            type="text"
            placeholder="Phone"
          />
        </div>
        {/* ------- place order right side ---------  */}
        <div>
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
            <button type='submit' className="w-full h-10 bg-[#F59E0B] mt-10 rounded-lg text-sm tracking-wider text-white font-semibold cursor-pointer hover:bg-[#f3b014da]">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
