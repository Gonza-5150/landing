import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Acerca de mi</p>
        <h1 className="primary-heading">¿QUIÉN HIZO EL ORÁCULO?</h1>
        <p className="primary-text">
        El Oráculo de Autoconocimiento y Reconexión fue ideado y desarrollado por la Dra. 
        Ruth Rajchenberg, Psicóloga, Profesora en Psicología, Especialista en Arte Terapia y Doctora en Teoría Comparada de las Artas. 
        Canceriana de sol, curiosa y buscadora de conexiones, movimientos, pensamientos y misterios.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Dra. Ruth Rajchenberg</h2>
      </div>
    </div>
  );
};

export default Testimonial;