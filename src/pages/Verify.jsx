import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import CrossPopup from '../components/CrossPopup'; 

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + '/api/order/verify', {
        success,
        orderId,
      });

      if (response.data.success) {
        navigate('/myorders');
      } else {
        setIsPopupOpen(true);
      }
    } catch (error) {
      console.error('Verification Error:', error);
      setIsPopupOpen(true);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  // ------- popup close btn -----------
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    navigate('/');
  };

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center m-auto mt-15 sm:mt-20 md:mt-30">
      {/* -------- spinner effect ---------  */}
      {!isPopupOpen && (
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#F59E0B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 font-medium">
            Verifying your payment, please wait...
          </p>
        </div>
      )}

      {/* ----- show popup when payment success = false ----- */}
      <CrossPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="Payment Failed"
        bio="Your transaction could not be processed or was canceled. Please try again or contact support if the issue persists."
        buttonText="Back to Home"
      />
    </div>
  );
};

export default Verify;
