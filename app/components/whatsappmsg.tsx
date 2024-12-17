'use client';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const Whatsappmsg = () => {
    const sendWhatsAppMsg = ()=>{
        const phoneNumber = "9677966333";
        const message = "Hello! I'm interested in your products.";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappURL, "_blank");
      };
  return (
   <>
 <button onClick={sendWhatsAppMsg} className="fixed z-[100] bottom-10 flex justify-center items-center right-6 rounded-full bg-white border h-9 w-9 md:h-14 md:w-14">
        <FaWhatsapp className="text-green-500 text-xl md:text-3xl"   />
        </button>
   </>
  )
}

export default Whatsappmsg