import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";

const Header = () => {
  const today = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-black text-white w-full py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="hidden md:flex font-semibold items-center">
            Popular
          </span>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-purple-500"></span>
            <span className="font-medium text-sm md:text-base">
              {/* TODO: Make this dynamic from server data */}
              Style Tips Every Woman Should Know
            </span>
          </div>
        </div>

        {/* Right Section */}

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTiktok size={20} />
          </a>

          <span className="font-medium text-sm md:text-base text-end">
            {today}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
