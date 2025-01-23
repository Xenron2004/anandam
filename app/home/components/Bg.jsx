import React from "react";
import Link from "next/link";

const Bg = () => {
  return (
    <div className="flex max-w-[1280px] text-[#666D80] mt-8  pt-2 w-full items-start justify-between text-mainBodytext text-sm font-montserrat font-medium ">
      <div>
        Powered by{" "}
        <Link
          href="https://www.reevij.com"
          className="text-mainBodytext duration-300 ease-in-out hover:underline text-sm font-manrope  text-primary font-medium  "
        >
          Reevij Solutions
        </Link>
      </div>
      <div>© Anandam Construction 2025. All Rights Reserved.</div>

      {/* <div className="flex gap-4 items-center justify-between">
        <Link
          href="/privacy-policy"
          className="text-mainBodytext duration-300 ease-in-out hover:text-bodyText text-sm font-montserrat font-medium  "
        >
          Privacy Policy
        </Link>
      </div> */}
    </div>
  );
};

export default Bg;

// © Reevij Solutions 2025. All Rights Reserved.
