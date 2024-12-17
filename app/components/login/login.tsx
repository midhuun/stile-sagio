import Image from "next/image";
import React, { useState } from "react";

const OtpLoginPopup = ({isOpen}:{isOpen:Boolean}) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // OTP integration logic goes here
    console.log("OTP sent to:", mobileNumber);
  };

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl flex flex-col md:flex-row h-[500px] overflow-hidden">
            {/* Left Side */}
            <div className=" text-white p-8 md:w-1/2 flex flex-col items-center justify-center space-y-4">
              <Image
                src="/full_logo.jpg" 
                alt="Stile Sagio Logo"
                className="w-28 h-28 object-contain"
                height={200}
                width={200}
              />
              <h2 className="text-2xl font-bold">Stile Sagio</h2>
              <p className="text-gray-300 text-center text-sm">
                Login to enjoy exclusive benefits:
              </p>
              <ul className="text-gray-400 space-y-2 text-left">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Get access to
                  personalized offers.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Track orders
                  seamlessly.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> Avail exclusive
                  discounts.
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="p-8 md:w-1/2 flex flex-col ">
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">
                Unlock Super Discounts
              </h2>
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Login with OTP
              </h2>
              <form onSubmit={handleSendOtp} className="space-y-6">
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    maxLength={10}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md"
                >
                  Send OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtpLoginPopup;
