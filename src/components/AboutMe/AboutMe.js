// AboutMe.js

import React from 'react';
import './AboutMe.css'
// In AboutMe.js
export const AboutMe = ({ className }) => {
  return (
      <section id="about" className={className}>
          <h1>About Me</h1>
          <h3>Coder & Tech Enthusiast 💻</h3>
          <p>This is the About Me section.</p>
      </section>
  );
};

