import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Preguntas o dudas?</h1>
      <h1 className="primary-heading">Te podemos ayudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact
