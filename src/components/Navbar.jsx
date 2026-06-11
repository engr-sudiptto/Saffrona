import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  // mobile menu functionality
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalAmount } = useContext(StoreContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // stop scrolling when nav bar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="overflow-x-clip">
      <div className="flex justify-between fixed bg-white top-0 left-0 right-0 z-101 w-full max-w-300 m-auto items-center px-3 py-2 lg:px-5 lg:py-4">
        {/* ------- main menu -------  */}
        <Link to="/" className="w-22 h-10 sm:w-28 sm:h-12 xl:w-30 xl:h-14">
          <img
            className="w-full h-full object-cover"
            src={assets.saffronaLogo}
            alt="main logo"
          />
        </Link>

        {/* --------- navigation menu ---------  */}
        <nav>
          <div
            onClick={toggleMenu}
            className={`${isMenuOpen ? 'visible opacity-100' : 'hidden opacity-0'} w-full h-screen fixed bg-black/30 top-0 left-0 z-99 backdrop-blur-sm transition-all duration-700 lg:hidden`}
          ></div>
          <ul
            className={`w-65 h-screen fixed top-0 ${isMenuOpen ? 'right-0' : '-right-65'} bg-linear-to-r from-[#F59E0B] to-[#FCD34D] flex flex-col gap-10 pt-10 pl-10 transition-all duration-700 z-100 lg:static lg:flex-row lg:gap-10 lg:p-0 lg:bg-none lg:w-auto lg:h-auto`}
          >
            <button
              onClick={toggleMenu}
              className="cursor-pointer mb-5 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold lg:font-normal ${isActive ? 'underline lg:text-[#11182780]' : 'lg:text-[#F59E0B]'}`
              }
            >
              home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `font-bold lg:font-normal  ${isActive ? 'underline lg:text-[#11182780]' : 'lg:text-[#F59E0B]'}`
              }
            >
              menu
            </NavLink>
            <NavLink
              to="/mobileapp"
              className={({ isActive }) =>
                `font-bold lg:font-normal ${isActive ? 'underline lg:text-[#11182780]' : 'lg:text-[#F59E0B]'}`
              }
            >
              mobile app
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `font-bold lg:font-normal ${isActive ? 'underline lg:text-[#11182780]' : 'lg:text-[#F59E0B]'}`
              }
            >
              contact us
            </NavLink>
          </ul>
        </nav>

        {/* ------- search & cart icon --------- */}
        <div className="flex gap-3 items-center sm:gap-5">
          <Link to="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#F59E0B]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>
          <Link to="/cart" title="cart" className="relative">
            {getTotalAmount() === 0 ? (
              <div className="absolute -top-0.75 -right-1 w-2 h-2 rounded-full bg-pink-700/50"></div>
            ) : (
              ''
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#F59E0B]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
          <button
            onClick={() => setShowLogin(true)}
            title="sign up"
            className="w-20 h-7 border rounded-lg border-[#F59E0B] text-[#F59E0B] text-center sm:w-24 hover:bg-[#F59E0B] hover:text-white"
          >
            sign up
          </button>
        </div>

        {/* ------------ mobile menu button --------- */}
        <button onClick={toggleMenu} className="cursor-pointer lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6 text-[#F59E0B]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
