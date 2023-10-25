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
        
        <img src="images/java-script.png"/>
        <h3>A year of Javascript</h3>
        <img src="images/html-5.png"/>
        <h3>Few years of html</h3>
        <img src="images/css-3.png"/>
        <h3>Few years of CSS</h3>
        <img src="images/react.png"/>
        <h3>6 months of react</h3>
      </div>
    </section>
  );
};
