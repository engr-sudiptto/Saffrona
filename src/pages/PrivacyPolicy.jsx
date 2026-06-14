import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = 'June 14, 2026';

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans w-full max-w-250 m-auto mt-15 sm:mt-20 md:mt-30">
      {/* Header Section */}
      <div className="bg-linear-to-r from-amber-400/70 to-amber-600/70 text-gray-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Last Updated: {lastUpdated}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          URL:
          <a
            href="https://saffrona.netlify.app/"
            className="underline hover:text-white"
          >
            https://saffrona.netlify.app/
          </a>
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-6 sm:p-10 space-y-8">
          <div>
            <p className="text-gray-600 leading-relaxed">
              At <strong>Saffrona</strong>, accessible from
              <a
                href="https://saffrona.netlify.app/"
                className="text-amber-500 hover:underline mx-1"
              >
                https://saffrona.netlify.app/
              </a>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Saffrona and how we use it.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>
                <strong>Account Information:</strong> Name, email address, phone
                number, and credentials if you register an account.
              </li>
              <li>
                <strong>Communications:</strong> If you contact us directly, we
                may receive additional information about you such as your name,
                email address, phone number, the contents of the message and/or
                attachments you may send us.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, for customer service, updates, and marketing purposes
              </li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              3. Log Files & Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Saffrona follows a standard procedure of using log files and
              cookies. These files log visitors when they visit websites. The
              information collected by log files includes internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              4. Third-Party Privacy Policies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Saffrona's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              5. GDPR & CCPA Data Protection Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>
                <strong>The right to access</strong> - You have the right to
                request copies of your personal data.
              </li>
              <li>
                <strong>The right to rectification</strong> - You have the right
                to request that we correct any information you believe is
                inaccurate.
              </li>
              <li>
                <strong>The right to erasure</strong> - You have the right to
                request that we erase your personal data, under certain
                conditions.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Contact Section */}
          <section className="space-y-3 text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at:
            </p>
            <div className="mt-4 p-4 bg-amber-50 inline-block rounded-md text-sm text-amber-900 font-medium">
              Email:
              <a
                href="mailto:support@saffrona.com"
                className="underline text-amber-500 hover:text-indigo-800 ml-1"
              >
                contact@saffrona.app
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
