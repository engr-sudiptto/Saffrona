import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MobileApp from './pages/MobileApp';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Navbar from './components/Navbar';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Auth setShowLogin={setShowLogin} /> : <></>}
      <Router>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Menu />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
