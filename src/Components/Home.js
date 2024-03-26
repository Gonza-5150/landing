import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/tarot.png"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
    <Navbar/>
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Oraculo de autoconocimiento y reconexión
          </h1>
          <p className="primary-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;