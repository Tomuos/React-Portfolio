import React, { useEffect } from 'react';
import './Skills.css';

export const Skills = ({ className }) => {

  useEffect(() => {
    // Removed all Three.js code
  }, []);

  return (
    <section id="skills" className={className}>
      <div className="content-overlay">
        <h1>Skills</h1>
        <p>Your skills here.</p>
        <img src="images/java-script.png"/>
        <p>a year of Javascript</p>
        <img src="images/html-5.png"/>
        <p>few years of html</p>
        <img src="images/css-3.png"/>
        <p>few years of CSS</p>
        <img src="images/react.png"/>
        <p>6 months of react</p>
      </div>
    </section>
  );
};
