// "use client";
// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// const NavIcons = () => {
//   const address = "202, Santa Enclave,SBI Bank Gola road,Danapur, Patna-801503";
//   const email = "anandconstruction12@gmail.com";
//   const phoneNumber = "+917762975577";



//   return (
//     <div className="flex items-center justify-center text-white py-4 space-x-6">
//       {/* Address */}
//       <div className="flex items-center space-x-2">
//         <FaMapMarkerAlt className="text-[#E3AF45]" />
//         <span className="text-primary">{address}</span>
//       </div>

//       {/* Email */}
//       <div className="flex items-center space-x-2">
//         <FaEnvelope className="text-[#E3AF45]" />
//         <a
//           href={`mailto:${email}`}
//           className="hover:underline text-primary"
//           title="Send an Email"
//         >
//           {email}
//         </a>
//       </div>

//       {/* Phone */}
//       <div className="flex items-center space-x-2">
//         <FaPhone className="text-[#E3AF45]" />
//         <a
//           href={`tel:${phoneNumber}`}
//           className="hover:underline text-primary"
//           title="Call Us"
//         >
//           {phoneNumber}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NavIcons;

















"use client";
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const NavIcons = () => {
  const address = "202, Santa Enclave, SBI Bank Gola road, Danapur, Patna-801503";
  const email = "anandconstruction12@gmail.com";
  const phoneNumber = "+917762975577";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrolled(currentScroll > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-4 space-x-6">
      {/* Address */}
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-[#E3AF45]" />
        <span className={isScrolled ? "text-yellow-500" : "text-white"}>{address}</span>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-[#E3AF45]" />
        <a
          href={`mailto:${email}`}
          className={`hover:underline ${isScrolled ? "text-yellow-500" : "text-white"}`}
          title="Send an Email"
        >
          {email}
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center space-x-2">
        <FaPhone className="text-[#E3AF45]" />
        <a
          href={`tel:${phoneNumber}`}
          className={`hover:underline ${isScrolled ? "text-yellow-500" : "text-white"}`}
          title="Call Us"
        >
          {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export default NavIcons;

