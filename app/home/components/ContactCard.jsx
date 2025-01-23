
import React from "react";

const ContactCard = ({
  icon,
  heading,
  bodyText,
  links = [], // Accept an array of links for the "LinkText" section
  iconBgColor = "",
}) => {
  return (
    <div className="flex flex-col items-start bg-customGray gap-4 text-start w-full p-6 max-w-[413px] h-auto max-h-[180px]  transition-all duration-300">
      {/* Icon Container */}
      <div className="flex gap-3">
        <div
          className={` ${iconBgColor} flex items-center justify-center transition-all duration-0`}
        >
          {icon}
        </div>

        {/* Heading */}
        <h3 className="text-[20px] text-headingText font-medium font-montserrat">
          {heading}
        </h3>
      </div>

      {/* Body Text */}
      <p className="text-[16px] text-bodyText font-montserrat font-regular">
        {bodyText}
      </p>

      {/* Links */}
      <div className="text-[16px] text-headingText font-montserrat font-regular flex flex-wrap gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-montserrat font-medium hover:underline"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
