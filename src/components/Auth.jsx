import React, { useState, useEffect } from 'react';

const Auth = ({ showLogin, setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
  };

    // stop scrolling when popup is open
    useEffect(() => {
      if (showLogin) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

      // cleanup function
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [showLogin]);

  return (
    <div className="fixed inset-0 z-110 bg-black/50 flex justify-center items-center backdrop-blur-xs">
      {/* ======== main auth popup =========  */}
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-100 m-auto bg-amber-50 rounded-lg p-5 pb-8 relative"
      >
        {/* ------- Close Button ------- */}
        <button
          onClick={() => setShowLogin(false)}
          type="button"
          className="absolute top-3 right-3 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
        {/* ------- auth ppup title -------  */}
        <div>
          <h2 className="text-3xl text-center mt-3 text-[#5c4d4d]">
            {currentState}
          </h2>
        </div>

        {/* ------- auth inpute's -------  */}
        <div>
          {currentState === 'Login' ? (
            <></>
          ) : (
            <input
              className="w-full h-11 border border-[#5c4d4d50] rounded-lg px-2 text-sm tracking-wide mt-5 outline-0 text-[#5c4d4d] bg-transparent"
              type="text"
              placeholder="Your Name"
              required
            ></input>
          )}
          <input
            className="w-full h-11 border border-[#5c4d4d50] rounded-lg px-2 text-sm tracking-wide mt-3 outline-0 text-[#5c4d4d] bg-transparent"
            type="email"
            placeholder="Your Email"
            required
          />
          <div className="relative">
            <input
              className="w-full h-11 border border-[#5c4d4d50] rounded-lg px-2 text-sm tracking-wide mt-3 mb-3 outline-0 text-[#5c4d4d] bg-transparent"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-[#5c4d4d]"
            >
              {showPassword ? (
                <i className="fa-regular fa-eye-slash text-sm"></i>
              ) : (
                <i className="fa-regular fa-eye text-sm"></i>
              )}
            </button>
          </div>
        </div>

        {/* -------- auth button -------- */}
        <button className="w-full h-10 bg-[#F59E0B] rounded-lg text-sm text-white tracking-wide mb-3 cursor-pointer">
          {currentState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>

        {/* ----------- auth conditions ------  */}
        <div className="flex items-start gap-2 mt-1">
          <input
            type="checkbox"
            required
            id="terms"
            className="mt-0.5 accent-[#F59E0B] cursor-pointer w-3.5 h-3.5 bg-transparent"
            
          />
          <label
            htmlFor="terms"
            className="text-xs text-[#5c4d4d] leading-normal cursor-pointer select-none"
          >
            By continuing, I agree to the terms of the use & privacy policy.
          </label>
        </div>

        <div className="w-[95%] m-auto h-px bg-gray-300 mt-5 mb-2"></div>

        {/* ---------- auth switch ---------  */}
        {currentState === 'Login' ? (
          <p className="text-xs text-[#5c4d4d] text-center">
            Create a new account{' '}
            <span
              className="underline cursor-pointer"
              onClick={() => setCurrentState('Sign Up')}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-xs text-[#5c4d4d] text-center">
            Already have an account{' '}
            <span
              className="underline cursor-pointer"
              onClick={() => setCurrentState('Login')}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Auth;
