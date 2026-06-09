import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MobileApp from './pages/MobileApp';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Menu/>} />
        <Route path="/auth" element={<Menu/>} />
      </Routes>
    </Router>
  );
}

export default App;
