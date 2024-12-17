'use client';
import { HeaderContext } from "@/app/context/HeaderContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const OtpLoginPopup = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const { isUserOpen, setisUserOpen } = useContext<any>(HeaderContext);
  
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // OTP integration logic goes here
    console.log("OTP sent to:", mobileNumber);
  };

  return (
    <div>
      {isUserOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          
          <div className="bg-white relative rounded-lg shadow-lg w-[90%] max-w-md flex flex-col h-auto overflow-hidden">
          <button
                onClick={() => setisUserOpen(false)}
                className="absolute -top-3 right-2 hover:scale-105 text-white hover:text-red-500 text-[40px]"
              >
                ×
              </button>
            {/* Header Section */}
            <div className="bg-blue-600 text-white p-6 flex flex-col items-center">
              <Image
                src="/full_logo.jpg"
                alt="Stile Sagio Logo"
                className="w-24 h-24 object-contain"
                height={200}
                width={200}
              />
              <h2 className="text-lg md:text-xl font-bold mt-4">Stile Sagio</h2>
              <p className="text-gray-300 text-center text-sm mt-2">
                Login to enjoy exclusive benefits:
              </p>
            </div>

            {/* Form Section */}
            <div className="p-6 flex flex-col">
              <h2 className="text-md md:text-lg font-semibold text-gray-800 text-center mb-4">
                Login with OTP
              </h2>
              <p className="text-gray-600 text-sm md:text-lg text-center mb-4">
                Enter your mobile number to receive an OTP for verification.
              </p>
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="text-sm md:text-md">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-gray-700 font-medium mb-1"
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
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  We will send an OTP to your registered mobile number for verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtpLoginPopup;
