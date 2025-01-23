// main navbar
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logoImg.svg";
import Link from "next/link";

import { IoCloseSharp } from "react-icons/io5";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State for navbar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track last scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset; // Get current scroll position

      // Hide navbar when scrolling down, show it when scrolling up
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setIsNavbarVisible(false); // Scroll down
      } else {
        setIsNavbarVisible(true); // Scroll up
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset; // Get current scroll position

      // Hide navbar when scrolling down, show it when scrolling up
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setIsNavbarVisible(false); // Scroll down
      } else {
        setIsNavbarVisible(true); // Scroll up
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll

      // Change navbar background and text color based on scroll position
      const navbar = document.querySelector(".navbar");
      const links = document.querySelectorAll(".navbar-link");

      if (currentScroll > 100) {
        navbar.classList.add("bg-white/70", "backdrop-blur-md");
        links.forEach((link) => link.classList.add("text-primary"));
      } else {
        navbar.classList.remove("bg-white/70", "backdrop-blur-md");
        links.forEach((link) => link.classList.remove("text-primary"));
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" w-full flex items-center  justify-center">
      <div
        className={` navbar w-full  border-b-[#DFDFDF] flex hover:text-primary   h-[90px] items-center justify-center px-4 sm:px-6 lg:px-8 fixed top-0 py-6  z-50 transition-transform duration-300 ${
          isNavbarVisible
            ? "translate-y-0  "
            : "-translate-y-[104px] text-black "
        }`}
      >
        <div className="w-full text-white bg- max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              width={120}
              height={100}
              alt="Anandam Construction Logo"
            />
          </Link>

          {/* Links for large screens */}
          <div className="hidden py-4 md:flex flex-col text-headingText items-end  w-full max-w-[1168px] justify-end ">
            <NavIcons />
            <div className="hidden border-t-2 py-4 lg:flex text-headingText items-center  w-full max-w-[1168px] justify-end gap-5">
              <div className="flex items-center justify-between gap-[36px]">
                <Link
                  href="/"
                  onClick={handleClick}
                  className={`font-medium font-manrope transition duration-300 ease-in-out text-base leading-tight ${
                    isScrolled ? "text-primary" : "text-headingText"
                  }`}
                >

                  Home
                </Link>
                <Link
                  href="#projects"
                  onClick={handleClick}
                  className={`font-medium font-manrope transition duration-300 ease-in-out text-base leading-tight ${
                    isScrolled ? "text-primary" : "text-headingText"
                  }`}
                >
                  Projects
                </Link>
                <Link
                 onClick={handleClick}
                  href="#services"
                  className={`font-medium font-manrope transition duration-300 ease-in-out text-base leading-tight ${
                    isScrolled ? "text-primary" : "text-headingText"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  onClick={handleClick}
                  className={`font-medium font-manrope transition duration-300 ease-in-out text-base leading-tight ${
                    isScrolled ? "text-primary" : "text-headingText"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="#contact"
                  onClick={handleClick}
                  className={`font-medium font-manrope transition duration-300 ease-in-out text-base leading-tight ${
                    isScrolled ? "text-primary" : "text-headingText"
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Buttons for large screens */}
          {/* <div className="hidden lg:flex items-center justify-between gap-4">
            <Link href="/contact">
              <button className="max-w-[150px] font-montserrat h-[45px] bg-primary font-medium flex items-center justify-center text-white w-full py-4 px-4 ">
                CONTACT US
              </button>
            </Link>
          </div> */}

          <div className="lg:hidden flex  justify-between items-center">
            <button onClick={toggleMenu} className="text-headingText">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden absolute top-0 left-0 right-0 bottom-0 bg-white  flex-col items-start justify-start gap-8  transition-all h-screen ease-in-out duration-500`}
        >
          {/* Logo and Close Button */}
          <div className=" flex absolute w-full top-0 p-6 justify-between items-center">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  width={100}
                  height={80}
                  alt="Nxtzengroup Logo"
                />
              </Link>
            </div>
            <div>
              <button onClick={toggleMenu} className="text-headingText">
                <IoCloseSharp size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="flex items-start p-6 top-[100px] flex-col w-full h-auto gap-6 justify-start relative "
            onClick={toggleMenu}
          >
            <div>
              <Link
                href="/"
                onClick={handleClick}
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
               onClick={handleClick}
                href="/solutions"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Projects
              </Link>
            </div>
            <div>
              <Link
               onClick={handleClick}
                href="/portfolio"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
               onClick={handleClick}
                href="/pricings"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                href="#contact"
                onClick={handleClick}
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col w-full p-6  gap-4 justify-center items-start relative mt-[56px]">
            <button
              onClick={() => {
                window.location.href = "#contact"; // Replace with your desired path
              }}
              className="md:max-w-[216px] font-montserrat h-[45px] bg-primary font-medium flex items-center justify-center text-white w-full py-6 px-6"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
