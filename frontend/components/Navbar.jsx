import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full shadow-sm z-50 bg-white/40 backdrop-blur-md">
        <div className="flex justify-between items-center md:my-2 my-4 px-6 w-full">
          <div className="flex md:gap-10 gap-9 font-semibold">
            <div className=" cursor-pointer hover:scale-110 transition duration-300">
              <AnchorLink href="#home">Home</AnchorLink>
            </div>
            <div className="cursor-pointer hover:scale-110 transition duration-300">
              <AnchorLink href="#about">About Me</AnchorLink>
            </div>
            <div className="cursor-pointer hover:scale-110 transition duration-300">
              <AnchorLink href="#education">Education</AnchorLink>
            </div>
            <div className="cursor-pointer hover:scale-110 transition duration-300">
              <AnchorLink href="#skills">Skills</AnchorLink>
            </div>
            <div className="cursor-pointer hover:scale-110 transition duration-300 hidden md:block">
              <AnchorLink href="#projects">Projects</AnchorLink>
            </div>
          </div>
          <div
            className="text-white cursor-pointer mr-5 font-semibold
        rounded-3xl p-3 hidden md:block
        bg-gradient-to-r from-purple-700 via-pink-500 to-orange-600 hover:scale-105 transition duration-300"
          >
            <AnchorLink href="#connectme">Connect With me</AnchorLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
