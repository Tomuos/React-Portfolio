import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // For GitHub and LinkedIn icons
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'; // For PDF icon

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f2l4pyl', 'template_7dnm7pu', form.current, 'mHDzw8z6c4aFmP9je')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    
    // Check if all fields are filled out to enable the submit button
    setIsSubmitDisabled(
      !formData.user_name || !formData.user_email || !formData.message
    );
  };

  return (
    <section id="contact">
      <div className="contact-container"> 
        <div className="gradient-heading-container">
          <h1 className="gradient-heading">Contact</h1>
        </div>
      
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" onChange={handleInputChange} />
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" onChange={handleInputChange} />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" onChange={handleInputChange} />
          <input type="submit" value="Send" disabled={isSubmitDisabled} />
        </form>
      </div>
      <div className="contact-container">
        <div className="gradient-heading-container">
          <h1 className="gradient-heading">Links</h1>
          </div>
        <div className="social-links">
          <a href="https://github.com/Tomuos" target="_blank" rel="noopener noreferrer">
            <FaGithub size={60} />
          </a>
            <span className="sr-only">GitHub</span>
          <a href="https://www.linkedin.com/in/tomulvlup/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={60} />
          </a>
            <span className="sr-only">LinkedIn</span>
            <a href="/images/Tom27thNovCVstars.pdf" target="_blank" rel="noopener noreferrer">
              <BsFillFileEarmarkPdfFill size={60} />
            </a>

            <span className="sr-only">CV</span>
        </div>
      </div> 
      

    </section>
  );
};

export default Contact;
