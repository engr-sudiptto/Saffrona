import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MobileApp from './pages/MobileApp';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Preloader from './components/Preloader';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Delivery from './pages/Delivery';
import AboutUs from './pages/AboutUs';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {showLogin ? (
        <Auth showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <></>
      )}
      <Router>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
