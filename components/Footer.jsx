import React from "react";

import Logo from "../public/logoImg.svg";
import Image from "next/image";
import Bg from "../app/home/components/Bg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import Bg from "./Bg";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex items-start mt-[80px] py-4 justify-center bg-dark">
      <div className="flex flex-wrap  max-w-[1280px] items-start  gap-8  w-11/12 py-8 justify-between">
        <div className="flex flex-col items-start justify-between">
          {/* Logo section */}
          <Link href="/">
            <Image src={Logo} width={100} height={80} alt="project icon" />{" "}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-6 max-w-[700px] w-full    items-start justify-between">
          {/* Links */}

          <div className="flex flex-col gap-2 ">
            {/* company */}
            <h3 className="text-headingText font-medium font-montserrat  text-[16px]  mb-3">
              Company
            </h3>
            <ul className="space-y-3 text-start font-montserrat font-normal text-gray-600">
              {" "}
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <IoMdMail width={16} color="#E3AF45" height={16} />
                  </div>
                  <div className="font-manrope font-normal text-bodyText hover:text-headingText text-[15px]">
                    anandamconstruction12@gmail.com
                  </div>
                </div>
              </li>{" "}
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <FaPhoneAlt width={16} color="#E3AF45" height={16} />
                  </div>
                  <div className="font-montserrat font-normal text-bodyText hover:text-headingText text-[15px]">
                    +91 7762975577
                  </div>
                </div>
              </li>{" "}
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <div className="">
                    <FaLocationDot width={16} color="#E3AF45" height={16} />
                  </div>
                  <div className="font-montserrat font-normal text-bodyText hover:text-headingText text-[15px]">
                    202, Santa Enclave,SBI Bank Gola road, Devrani Jethani saree
                    collection, Danapur,  Patna-801503
                  </div>
                </div>
              </li>{" "}
            </ul>
          </div>

          <div className="flex justify-between w-full gap-x-14">
            <div className="flex flex-col gap-2">
              {/* resources */}
              <h3 className="text-headingText  font-montserrat  font-medium text-start mb-3">
                Links
              </h3>
              <ul className="space-y-3 text-start text-gray-600">
                <li>
                  <a
                    href=""
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>

            {/* support */}
            <div className="flex flex-col gap-2">
              <h3
                className="text-headingText transition duration-300 ease-in-out font-montserrat text-[17px]  text-start font-medium
              mb-3"
              >
                Support
              </h3>
              <ul className="space-y-3 text-start text-gray-600 ">
                <li>
                  <Link
                    href="/help-center"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help-center"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-bodyText text-start transition duration-300 ease-in-out text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-bodyText duration-300 ease-in-out text-start text-mainBodytext text-[15px] font-montserrat font-normal"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 max-w-[162px] w-full items-start">
          {/* social Links */}
          <div className="text-headingText font-montserrat text-[17px]  text-start font-medium  mb-3">
            Social Links
          </div>
          <div className="flex flex-row  gap-4 justify-between ">
            <Link href="https://www.facebook.com/share/1BEAFC2iSB/">
              <FaFacebookF
                size={20}
                className="hover:text-[#4A91F7] duration-300 ease-in-out text-mainBodytext cursor-pointer"
              />
            </Link>
            <Link href="https://youtube.com/@anandamconstruction?si=tJngObqcCm3RqVwa">
              <FaYoutube
                size={20}
                className="hover:text-[#FF70A6] duration-300 ease-in-out  text-mainBodytext cursor-pointer"
              />
            </Link>

            <Link href="https://www.instagram.com/anandamconstruction?igsh=MWFyZHJ0YTZ0OWJmdg==">
              <FaInstagram
                size={20}
                className="hover:text-[#FF709E] duration-300 ease-in-out text-mainBodytext cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Bg />
      </div>
    </footer>
  );
};

export default Footer;
