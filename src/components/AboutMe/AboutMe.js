// Example: In your src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';

export const AboutMe = () => {
  return (
    <section id="about" className="hidden">
    <div className="content">
      <h1>About Me</h1>
      <section id="about-me" className="about-me-section">
      
      <div className="about-me-content">
        
        <div className="about-me-text">
          <p>
            Hello, I'm Tom! I'm a developer with a focus on front-end technologies like React, HTML, and CSS. 
            I have a deep-rooted passion for coding and love taking on new challenges to expand my skill set.
          </p>
          <p>
            When I'm not coding, you can find me building computers, attending tech meetups like TechMids, or 
            spending quality time outdoors with my family. I also love hosting pizza parties and gaming — 
            the new Zelda game TOTK is my current favorite!
          </p>
          <p>
            I'm currently looking for new job opportunities where I can bring my unique blend of skills and 
            passion to a forward-thinking company.
          </p>
        </div>
        
        <div className="about-me-image">
  <img src="/images/Tom.jpg" alt="Tom" className="cover-image"/>
  <img src="/images/nobgboys.png" alt="Hover Image" className="hover-image"/>
</div>

        
      </div>
    </section>
  

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
