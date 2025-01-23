"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const whatsappNumber = "7762975577"; // Replace with your WhatsApp number in international format (without '+')

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="fixed bottom-5 z-[100] right-5 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer animate-pulse hover:animate-none"
      onClick={handleClick}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppIcon;
