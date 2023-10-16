import React from 'react';
import './AboutMe.css';



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
            <a href="https://www.meetup.com/brum_js/" className="img-container">
              <img src="../../../public/assets/images/brumjslogo.webp" alt="Brum.js Logo" width="450" height="250" />
            </a>
          </li>
          <li>
            <a href="https://conf.techmids.io/" className="img-container">
              <img src="../../../public/assets/images/Techmidslogo.png" alt="Techmids Logo" width="450" height="250" />
            </a>
          </li>
        </ul>
      </div>
      <div id="familySection">
            <h3>Family Man 👨‍👦‍👦</h3>
            <p>Dad to two young boys. We love exploring the great outdoors.</p>
            <div className="container">
                <div className="box portrait">
                    <img src="../../../public/assets/images/Ben fishing.jpg" alt="Ben fishing"/>
                    <span>Fishing</span>
                </div>
                <div className="box landscape">
                    <img src="../../../public/assets/images/ducks.jpg" alt="Boys and ducks"/>
                    <span>Feeding time</span>
                </div>
                <div className="box landscape">
                    <img src="../../../public/assets/images/the boys.jpg" alt="The boys in the woods"/>
                    <span>The woods</span>
                </div>
                <div className="box portrait">
                    <img src="../../../public/assets/images/Sunflower boys.jpg" alt="Boys with sunflowers"/>
                    <span>Sunflowers</span>
                </div>
            </div>
        </div>
    </section>
  );
};
