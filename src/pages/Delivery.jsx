import React from 'react';

const Delivery = () => {
  // Real-time food delivery options with your $2.00 flat charge
  const deliveryOptions = [
    {
      id: 1,
      title: 'Instant Home Delivery',
      area: 'Within Your City / Local Area',
      time: '30 - 45 Minutes',
      charge: '$2.00',
      description:
        'Hungry? Our riders are ready to dash. Get your favorite meals delivered fresh and piping hot straight to your doorstep.',
      icon: 'fa-solid fa-motorcycle',
    },
    {
      id: 2,
      title: 'Schedule Your Meal',
      area: 'Pre-order for Parties & Events',
      time: 'Your Chosen Time Slot',
      charge: '$2.00',
      description:
        'Planning a lunch meeting or a dinner party? Schedule your order ahead of time and we will deliver exactly when you want.',
      icon: 'fa-regular fa-clock',
    },
    {
      id: 3,
      title: 'Takeaway / Self-Pickup',
      area: 'Pick up from Saffrona Kitchen',
      time: 'Ready in 15 - 20 Minutes',
      charge: '$0.00', // Pickup is free
      description:
        'Skip the queue entirely. Order through the app, track the preparation, and collect your food directly from our station.',
      icon: 'fa-solid fa-bag-shopping',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-zinc-700 font-sans pt-28 pb-16 px-4 md:px-12 sm:px-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        {/* ================= Header Section ================= */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] font-medium">
            Fresh & Fast Logistics
          </p>
          <h1 className="text-3xl md:text-4xl font-light text-zinc-900 tracking-wide uppercase">
            Food Delivery
            <span className="font-semibold text-[#F59E0B] ml-1">Process</span>
          </h1>
          <div className="w-100 h-px bg-[#F59E0B] mx-auto mt-2"></div>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm leading-relaxed pt-2">
            We ensure your meals are prepared under strict hygiene standards and
            dispatched instantly. Check out our quick delivery methods and flat
            rates.
          </p>
        </div>

        {/* ================= Delivery Options Cards ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {deliveryOptions.map(option => (
            <div
              key={option.id}
              className="bg-white border border-zinc-200 rounded-none p-8 hover:shadow-xl hover:border-[#F59E0B] transition-all duration-300 flex flex-col justify-between group relative top-0 hover:-top-1"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-150 rounded-none border border-zinc-100">
                  <i className={`${option.icon} text-lg`}></i>
                </div>
                <div>
                  <span className="text-[10px] text-[#F59E0B] font-semibold tracking-widest uppercase">
                    {option.area}
                  </span>
                  <h3 className="text-lg font-medium text-zinc-900 tracking-wide mt-1 group-hover:text-red-950 transition-colors">
                    {option.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  {option.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-zinc-100 space-y-2.5">
                <div className="flex justify-between text-xs tracking-wider text-zinc-400">
                  <span>PREPARATION & TIME:</span>
                  <span className="text-zinc-800 font-medium">
                    {option.time}
                  </span>
                </div>
                <div className="flex justify-between text-xs tracking-wider text-zinc-400 items-center">
                  <span>DELIVERY FEE:</span>
                  <span className="text-[#F59E0B] font-semibold text-lg">
                    {option.charge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Step-by-Step Food Flow ================= */}
        <div className="border border-zinc-200 rounded-none p-8 md:p-12 space-y-10 mb-16 bg-zinc-50/50">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-light text-zinc-900 tracking-wide uppercase">
              How Your Food{' '}
              <span className="font-semibold text-red-950">Reaches You</span>
            </h2>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">
              From our hot kitchen pan to your dining table
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="space-y-3 relative">
              <div className="text-3xl font-extralight text-zinc-200 tracking-tighter">
                01
              </div>
              <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
                Order Accepted
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Once approved, your order is sent instantly to our kitchen
                display unit to begin live preparation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-3 relative">
              <div className="text-3xl font-extralight text-zinc-200 tracking-tighter">
                02
              </div>
              <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
                Hygiene Cooking
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Our professional chefs freshly cook your food using high-quality
                ingredients and seal it in thermal bags.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-3 relative">
              <div className="text-3xl font-extralight text-zinc-200 tracking-tighter">
                03
              </div>
              <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
                Rider Dispatch
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                The nearest delivery partner collects your warm food package and
                navigates the fastest route to you.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-3 relative">
              <div className="text-3xl font-extralight text-zinc-200 tracking-tighter">
                04
              </div>
              <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
                Enjoy Your Meal
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Receive your fresh box safely at your doorstep, verify the seal,
                and dive right into your hot meal!
              </p>
            </div>
          </div>
        </div>

        {/* ================= Important Notes ================= */}
        <div className="border-l-2 border-amber-400 bg-amber-400/10 pl-6 space-y-3 py-6 my-6">
          <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
            Important Delivery Notes:
          </h3>
          <ul className="list-disc pl-4 text-xs text-zinc-500 space-y-2 font-light leading-relaxed">
            <li>
              Saffrona charges a flat rate of
              <strong className="text-zinc-900 font-semibold">$2.00</strong> for
              all localized home deliveries.
            </li>
            <li>
              Delivery time might fluctuate slightly (10-15 mins) during peak
              lunch/dinner hours or heavy rain.
            </li>
            <li>
              Please ensure your active phone number is reachable so our rider
              can hand over your hot food smoothly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
