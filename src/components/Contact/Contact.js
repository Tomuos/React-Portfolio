import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Example for React Icons usage
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'; // Icon for PDF


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f2l4pyl', 'template_7dnm7pu', form.current, 'mHDzw8z6c4aFmP9je')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <div className="contact-container"> 
      <div className="gradient-heading-container">
        <h1 className="gradient-heading">Contact</h1>
      </div>
      
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" />
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
          <input type="submit" value="Send" />
        </form>
</div>
      <div className="contact-container">
        <div className="social-links">
          <a href="https://github.com/Tomuos" target="_blank" rel="noopener noreferrer">
            <FaGithub size={60} />
          </a>
          <a href="https://www.linkedin.com/in/tomulvlup/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={60} />
          </a>
          <a href="images/Tom BT CV 2023 Nov 16.pdf" download>
            <BsFillFileEarmarkPdfFill size={60} />
          </a>
        </div>
      </div> 
    </section>
  );
};

export default Contact;
