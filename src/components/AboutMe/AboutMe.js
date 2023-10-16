// Example: In your src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';

export const AboutMe = () => {
  return (
    <section id="about" className="hidden">
    <div className="content">
      <h1>About Me</h1>
      <h3>Coder & Tech Enthusiast 💻</h3>
      <p>
        I'm a full-stack developer with a passion for creating beautiful, functional and accessible web applications. I have a keen interest in the latest technologies and enjoy learning new skills.
      </p>
      <div className="gallery">
        <ul>
          <li>
            <a href="https://www.meetup.com/brum_js/" className="img-container">
              <img src="images/brumjslogo.webp" alt="Brum.js Logo" width="450" height="250" />
            </a>
          </li>
          <li>
            <a href="https://conf.techmids.io/" className="img-container">
              <img src="images/Techmidslogo.png" alt="Techmids Logo" width="450" height="250" />
            </a>
          </li>
        </ul>
      </div>
      <div id="familySection">
        <h3>Family Man 👨‍👦‍👦</h3>
        <p>Dad to two young boys. We love exploring the great outdoors.</p>
        <div className="container">
          <div className="box portrait">
              <img src="images/benFishing.jpg" alt="Ben fishing"/>
              <span>Fishing</span>
          </div>
          <div className="box landscape">
              <img src="images/ducks.jpg" alt="Boys and ducks"/>
              <span>Feeding time</span>
          </div>
          <div className="box landscape">
              <img src="images/theBoys.jpg" alt="The boys in the woods"/>
              <span>The woods</span>
          </div>
          <div className="box portrait">
              <img src="images/sunflowerBoys.jpg" alt="Boys with sunflowers"/>
              <span>Sunflowers</span>
          </div>
        </div>
          <p>The boys love the outdoors and occasionally they become right posers</p>
        </div>
      </div>
    </section>
  );
};
