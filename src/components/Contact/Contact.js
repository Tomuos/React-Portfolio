import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

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
      <div className="contact-container"> {/* Use the new container class here */}
      <div className="gradient-heading-container">
        <h1 className="gradient-heading">Contact</h1>
      </div>
      <p>Here is my contact info and Resume</p>
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
    </section>
  );
};

export default Contact;
