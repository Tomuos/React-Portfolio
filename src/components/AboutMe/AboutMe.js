// AboutMe.js

import React from 'react';
import './AboutMe.css'
// In AboutMe.js
export const AboutMe = ({ className }) => {
  return (
      <section id="about" className={className}>
          <h1>About Me</h1>
          <p>This is the About Me section.</p>
      </section>
  );
};

