import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Frame from "../assets/Frame (1).png";
import Square02 from "../assets/Square 02.png";
import Frame2 from "../assets/Frame.png";
import Image from "../assets/Image.png";
import Bird from "../assets/Bird.png";
import Imagenew from "../assets/Image new.png";
import Fish from "../assets/Fish.png";
import RitterSport from "../assets/Ritter Sport.png";
import Nike from "../assets/Nike.png";
import imageCard from "../assets/Imagecard.png";
import Adidas from "../assets/Adidas.png";
import NewHolland from "../assets/New Holland.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => {
  const [showCategories, setShowCategories] = useState(false);

  const categories = ["Auction", "NFTs", "Roadmaps"];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  //Sorry i am still working on my TailwindCSS skills, i am not so comfortable with it yet considering the amount of time given to complete the task.

  return (
    <div>
      <Navbar />
      <div>
        <img
          src={Square02}
          alt="Square"
          className=" float-left mr-4 lg:mr-14 w-1/10 lg:w-1/12"
          style={{ marginTop: "6rem" }}
        />
      </div>

      <div className="flex justify-center items-center mt-8 lg:mt-12 ">
        <div className="flex items-center justify-start ml-4 !important">
          <div>
            <p className="text-white text-sm ml-4">NON FUNGIBLE TOKENS</p>

            <h1 className="text-white text-4xl">A new NFT</h1>
          </div>
          <img src={Frame} alt="Frame" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 lg:mt-8 ">
        <div className="flex items-center ml-4">
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
      <div>
        <img
          src={Image}
          alt="Image"
          className="float-right mr-4 lg:mr-14 w-1/8 lg:w-1/10"
          style={{ marginTop: "-13rem" }}
        />
      </div>
      <div>
        <img
          src={Imagenew}
          alt="Imagenew"
          className="float-right mr-4 lg:mr-14 w-1/20 lg:w-24"
          style={{ marginRight: "48rem", marginTop: "-200px" }}
        />
      </div>
      <div>
        <img
          src={Bird}
          alt="Bird"
          className="w-1/20 lg:w-1/24"
          style={{ marginLeft: "64rem", marginTop: "-10px" }}
        />
      </div>
      <div>
        <img
          src={Fish}
          alt="Fish"
          className="  w-1/20 lg:w-1/24"
          style={{ marginLeft: "-8rem", marginTop: "-5rem" }}
        />
      </div>
      <div className="flex space-x-9 pt-10" style={{ marginLeft: "24rem" }}>
        <img
          src={RitterSport}
          alt="RitterSport"
          className="w-1/8 lg:w-1/10 mx-0.5"
        />
        <img src={Nike} alt="Nike" className="w-1/8 lg:w-1/10 mx-0.5" />
        <img src={Adidas} alt="Adidas" className="w-1/8 lg:w-1/10 mx-0.5" />
        <img
          src={NewHolland}
          alt="NewHolland"
          className="w-1/8 lg:w-1/10 mx-0.5"
        />
      </div>
      <h2 className="text-white mt-12 ">Latest Live auctions</h2>

      <div className="bg-white rounded shadow-md p-2">
        <img
          src={imageCard}
          alt="imageCard"
          className="w-32 h-auto rounded-t"
        />
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <span className="text-white font-bold">
              Dui Accumsan sfs ddhdgtdg
            </span>
            <span className="text-white">1.1 ETH</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-white">Clock</span>
            <span className="text-white">22:59 min left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
