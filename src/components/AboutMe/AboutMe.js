import React from 'react';
import './AboutMe.css';
import Brumjs from '../../assets/images/brumjslogo.webp'; // Import the first image
import TechmidsLogo from '../../assets/images/Techmidslogo.png'; // Import the second image

export const AboutMe = () => {
  return (
    <section id="about" className="hidden">
      <h1>About Me</h1>
      <h3>Coder & Tech Enthusiast 💻</h3>
      <p>
        Passionate about solving problems through coding. Becoming a regular at Tech meetups such as Brum.js and with a bit of luck Techmids in October
      </p>
      <div className="gallery">
        <ul>
          <li>
            <a href="https://www.meetup.com/brum_js/" className="img-container"> {/* Apply the CSS class */}
              <img src={Brumjs} alt="Brum.js Logo" width="300" height="150" />
            </a>
          </li>
          <li>
            <a href="https://conf.techmids.io/" className="img-container"> {/* Apply the CSS class */}
              <img src={TechmidsLogo} alt="Techmids Logo" width="300" height="150" />
            </a>
          </li>
        </ul>
      </div>

      {/* Rest of your "About Me" content goes here... */}
    </section>
  );
};
