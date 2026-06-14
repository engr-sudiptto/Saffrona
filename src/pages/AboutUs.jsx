import React from 'react';

const AboutUs = () => {
  // Highlights or Core Values of Saffrona
  const coreValues = [
    {
      id: 1,
      title: 'Premium Ingredients',
      description:
        'We source only the freshest, hand-picked herbs, organic vegetables, and premium meats to craft culinary perfection.',
      icon: 'fa-solid fa-wheat-awn',
    },
    {
      id: 2,
      title: '5-Star Hygiene',
      description:
        'Our kitchens maintain absolute cleanliness. Every meal is safely prepared and sealed under strict safety protocols.',
      icon: 'fa-solid fa-shuttle-space', // Clean room / hygiene vibe
    },
    {
      id: 3,
      title: 'Master Chefs',
      description:
        'Saffrona dishes are curated by experienced culinary artists who bring authentic flavors and innovation together.',
      icon: 'fa-solid fa-utensils',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-zinc-700 font-sans pt-28 pb-16 px-4 md:px-12 sm:px-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        {/* ================= Header Section ================= */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] font-medium">
            The Saffrona Story
          </p>
          <h1 className="text-3xl md:text-4xl font-light text-zinc-900 tracking-wide uppercase">
            About{' '}
            <span className="font-semibold text-[#F59E0B]">Our Kitchen</span>
          </h1>
          <div className="w-80 h-px bg-[#F59E0B] mx-auto mt-2"></div>
        </div>

        {/* ================= Vision & Mission Split Section ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 md:pr-6">
            <h2 className="text-2xl font-light text-zinc-900 uppercase tracking-wide">
              Crafting Flawless
              <span className="font-semibold text-[#F59E0B] ml-1">
                Culinary Art
              </span>
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              Founded with a deep passion for fine dining and quick logistics,
              <strong>Saffrona</strong> brings the sophistication of a luxury
              restaurant straight to your cozy dining space. We don't just
              deliver packages; we deliver piping hot satisfaction.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              Our journey started with a simple belief:
              <em>Premium food shouldn't lose its essence during transit.</em>
              That's why we engineered custom thermal packaging workflows and a
              highly synchronized localized delivery grid to keep flavors
              pristine.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-10 flex flex-col justify-center space-y-6">
            <div className="border-l-2 border-[#F59E0B] pl-4">
              <h4 className="text-xs uppercase tracking-widest text-[#F59E0B] font-semibold">
                Our Mission
              </h4>
              <p className="text-sm text-zinc-800 mt-1 font-medium">
                To eliminate the gap between fine-dining luxury kitchen quality
                and instant doorstep home delivery systems.
              </p>
            </div>
            <div className="border-l-2 border-[#F59E0B] pl-4">
              <h4 className="text-xs uppercase tracking-widest text-[#F59E0B] font-semibold">
                Our Vision
              </h4>
              <p className="text-sm text-zinc-800 mt-1 font-medium">
                To transform the gourmet community infrastructure across modern
                urban spaces by setting uncompromised standards in food tech
                hygiene.
              </p>
            </div>
          </div>
        </div>

        {/* ================= Core Values Grid ================= */}
        <div className="space-y-12 mb-20">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl md:text-2xl font-light text-zinc-900 tracking-wide uppercase">
              Why Choose
              <span className="font-semibold text-[#F59E0B] ml-1">
                Saffrona
              </span>
            </h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">
              Uncompromised standards in every gourmet box
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map(value => (
              <div
                key={value.id}
                className="bg-white border border-zinc-200 rounded-none p-8 hover:shadow-xl hover:border-[#F59E0B] transition-all duration-500 flex flex-col space-y-5 group relative top-0 hover:-top-1"
              >
                <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-300 rounded-none border border-zinc-100">
                  <i className={`${value.icon} text-lg`}></i>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-zinc-600 uppercase tracking-wider group-hover:text-[#F59E0B] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Bottom Call To Action Banner ================= */}
        <div className="border border-zinc-200 p-8 md:p-12 text-center bg-zinc-50/50 space-y-4">
          <h3 className="text-lg md:text-xl font-light text-zinc-900 uppercase tracking-wide">
            Experience Gourmet In
            <span className="font-semibold text-[#F59E0B] ml-1">
              30 Minutes
            </span>
          </h3>
          <p className="text-xs text-zinc-500 max-w-lg mx-auto font-light leading-relaxed">
            Ready to explore our fresh menu card? Treat your cravings with
            chef-crafted delicacies prepared and delivered right away.
          </p>
          <div className="pt-2">
            <a
              href="/menu"
              className="inline-block bg-[#F59E0B] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 border hover:bg-transparent hover:text-[#F59E0B] transition-all duration-300"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
