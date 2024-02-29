import React from "react";
import logo from "../assets/Logo.png";
import "tailwindcss/tailwind.css";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center space-x-4 flex-grow justify-center">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-white">
                  Auctions
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex items-center space-x-4">
            <li>
              <button className="bg-gray-800 text-white py-2 px-4 rounded">
                Contact
              </button>
            </li>
            <li>
              <button className="bg-purple-700 text-white py-2 px-4 rounded">
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
