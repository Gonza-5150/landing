import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import Cartas from "../Assets/cartas.jpg"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={Cartas} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        ¿QUÉ ES UN ORÁCULO?
        </h1>
        <p className="primary-text">
        Un Oráculo es un portal a un sistema de conocimiento. 
        La función de los oráculos a lo largo de la historia de la humanidad, ha sido facilitar el ingreso a canales de conciencia no visibles, 
        como modo de dar sentido a la realidad visible y consciente.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About
