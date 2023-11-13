import React, { useState } from 'react';
import './Contact.css';

export const Contact = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission.
    // For instance, sending the data to your backend or a third-party email service.
    console.log(formData); // For now, we'll just log the data to the console.
  };

  return (
    <section id="contact" className={className}>
    
    <div className="gradient-heading-container">
      <h1 className='gradient-heading' >Contact</h1>
      </div>
      <p>Here is my contact info and Resume</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
