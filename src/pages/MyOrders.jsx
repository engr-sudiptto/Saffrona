import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + '/api/order/userorders',
        {},
        { headers: { token } },
      );
      setData(response.data.data);
    } catch (error) {
      console.error('Orders load করতে সমস্যা হয়েছে:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  // প্রফেশনাল ডাইনামিক স্ট্যাটাস ব্যাজ (কালারসহ)
  const getStatusBadge = status => {
    const cleanStatus = status?.toLowerCase() || '';
    if (cleanStatus === 'delivered') {
      return 'bg-green-50 text-green-700 border-green-200';
    } else if (
      cleanStatus === 'processing' ||
      cleanStatus === 'food processing'
    ) {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    } else if (cleanStatus === 'out for delivery') {
      return 'bg-blue-50 text-blue-700 border-blue-200';
    }
    return 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <div className="w-full min-h-[70vh] bg-gray-50/50  max-w-250 m-auto mt-15 sm:mt-20 md:mt-30">
      <div className="max-w-6xl mx-auto">
        {/* ---- head line ------  */}
        <h2 className="text-2xl sm:text-3xl font-light text-gray-500 mb-8 tracking-tight">
          My Orders
        </h2>

        <div className="space-y-4">
          {data.length === 0 ? (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <p className="text-gray-400 text-lg">
                You haven't placed any orders yet.
              </p>
            </div>
          ) : (
            data.map((order, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* ----- icon and item count ------- */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-xl text-orange-500 shrink-0">
                    <i className="fa-solid fa-people-carry-box text-xl"></i>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                      Order Info
                    </span>
                    <span className="text-xs text-gray-400">
                      Items: {order.items.length}
                    </span>
                  </div>
                </div>

                {/* ------- all items name ------ */}
                <div className="md:col-span-4">
                  <p className="text-sm font-semibold text-gray-400 leading-relaxed">
                    {order.items.map((item, idx) => (
                      <span key={idx}>
                        {item.name}{' '}
                        <span className="text-orange-300 font-bold">
                          x {item.quantity}
                        </span>
                        {idx < order.items.length - 1 ? ' , ' : ''}
                      </span>
                    ))}
                  </p>
                </div>

                {/* ----- price ----- */}
                <div className="md:col-span-2 flex md:justify-center items-center">
                  <span className="text-lg font-bold text-green-500">
                    ${order.amount}.00
                  </span>
                </div>

                {/* ---- status & button ------ */}
                <div className="md:col-span-3 flex flex-row md:flex-col lg:flex-row items-center justify-between md:justify-end gap-3 w-full">
                  {/* ---- status ------ */}
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap ${getStatusBadge(order.status)}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span className="capitalize">
                      {order.status || 'Processing'}
                    </span>
                  </div>

                  <button
                    onClick={fetchOrders}
                    className="w-full md:w-auto bg-[#ff5a00] hover:bg-[#e04f00] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-95 whitespace-nowrap cursor-pointer"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
