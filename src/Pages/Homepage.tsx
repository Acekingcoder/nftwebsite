import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Frame from "../assets/Frame (1).png";
import Frame2 from "../assets/Frame.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => {
  const [showCategories, setShowCategories] = useState(false);

  const categories = ["Category 1", "Category 2", "Category 3"];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-8 lg:mt-12 ">
        <div className="flex items-center">
          <div>
            <p className="text-white text-sm">NON FUNGIBLE TOKENS</p>
            <h1 className="text-white text-4xl">A new NFT</h1>
          </div>
          <img src={Frame} alt="Frame" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 lg:mt-8 ">
        <div className="flex items-center">
          <img src={Frame2} alt="Frame" />
          <div className="mx-2"></div>
          <h1 className="text-white text-4xl">Experience</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 lg:mt-8 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="items, collections, and creators | Category"
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 pr-10 block w-96 appearance-none leading-normal"
            onClick={toggleCategories}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={faAngleDown} className="text-black" />
          </div>
        </div>
        {showCategories && (
          <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-96">
            <div className="text-black p-2">Category</div>
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer text-black"
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
