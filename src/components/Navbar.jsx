import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* ------- main menu -------  */}
      <div>
        <img src={assets.saffronaLogo} alt="main logo" />
      </div>

      {/* --------- navigation menu ---------  */}
      <nav>
        <ul>
          <Link>home</Link>
          <Link>menu</Link>
          <Link>mobile app</Link>
          <Link>contact us</Link>
        </ul>
      </nav>

      {/* ------- social media icons --------- */}
      <div>
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Link>
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </Link>
        <Link>sign up</Link>
      </div>
    </div>
  );
}

export default Navbar