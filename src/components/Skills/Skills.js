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
      </div>
    </section>
  );
};
