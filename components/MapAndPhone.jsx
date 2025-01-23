"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const MapAndPhone = () => {
  const phoneNumber = "+91 9102302829"; // Replace with your actual phone number
  const mapLink = "https://g.co/kgs/rNwpjQH"; // Replace with your Google Maps link

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMapClick = () => {
    window.open(mapLink, "_blank");
  };

  return (
    <>
      {/* Phone Icon */}
      <div
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#E3AF45] text-white p-4 cursor-pointer mb-4"
        onClick={handlePhoneClick}
        title="Call Us"
      >
        <FaPhone size={20} />
      </div>

      {/* Map Icon */}
      <div
        className="fixed right-0 top-[calc(50%-85px)] bg-[#E3AF45] text-white p-4   cursor-pointer"
        onClick={handleMapClick}
        title="Find Us on the Map"
      >
        <FaMapMarkerAlt size={20} />
      </div>
    </>
  );
};

export default MapAndPhone;
