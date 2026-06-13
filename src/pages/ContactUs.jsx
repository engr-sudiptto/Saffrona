import React, { useState } from 'react'

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="w-full max-w-250 m-auto mt-15 sm:mt-20 md:mt-30">
      {/* -------- contact section title --------  */}
      <div className="p-6">
        <span className="text-sm font-semibold tracking-wider text-[#F59E0B]">
          GET IN TOUCH
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-600 mt-2">
          We'd Love to Hear From You
        </h3>
        <p className="text-gray-400 mt-3 text-base sm:text-lg">
          Have a question about our menu, catering, or want to book a special
          event? Drop us a line or directly secure your spot by reserving a
          table below.
        </p>
      </div>

      {/* ----------- 2 in 1 button ------------  */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1.5 rounded-2xl flex items-center shadow-inner border border-gray-200/50">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#F59E0B] text-white shadow-md'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => setActiveTab('reserve')}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer ${
              activeTab === 'reserve'
                ? 'bg-[#F59E0B] text-white shadow-md'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* --------- contact us form ---------  */}
      <div>
        <form>
          <div className='flex flex-col w-full max-w-200 m-auto'>
            <label className="text-sm text-gray-600">Full name</label>
            <input placeholder='Your name' className='mb-5 mt-2 w-full h-10 border rounded-lg border-[#F59E0B] outline-0 px-3 text-gray-500 text-[15px]' type="text" />
            <label className="text-sm text-gray-600">Email</label>
            <input placeholder='name@example.com' className='mb-5 mt-2 w-full h-10 border rounded-lg border-[#F59E0B] outline-0 px-3 text-gray-500 text-[15px]' type="text" />
            <label className="text-sm text-gray-600">Phone number</label>
            <input placeholder='(555) 123-4567' className='mb-5 mt-2 w-full h-10 border rounded-lg border-[#F59E0B] outline-0 px-3 text-gray-500 text-[15px]' type="text" />
            <label className="text-sm text-gray-600">Your message</label>
            <textarea placeholder='Write your questions or suggestions here...' className='mt-2 pt-3 w-full h-50 border rounded-lg border-[#F59E0B] outline-0 px-3 text-gray-500 text-[15px] resize-none'></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs