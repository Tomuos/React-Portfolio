import React from 'react';
import './Skills.css';

export const Skills = () => {
  return (
    <section id="skills">
      <div className="content-overlay">
        <h1>Skills</h1>
        <h2>Front End</h2>
        <div className="skills-icons front-end-skills"> {/* Container for front-end skills icons */}
          <div className="skill">
            <img src="images/java-script.png" alt="JavaScript Logo"/>
            <h3>A year of Javascript</h3>
          </div>
          <div className="skill">
            <img src="images/html-5.png" alt="HTML5 Logo"/>
            <h3>Few years of HTML</h3>
          </div>
          <div className="skill">
            <img src="images/css-3.png" alt="CSS3 Logo"/>
            <h3>Few years of CSS</h3>
          </div>
          <div className="skill">
            <img src="images/react.png" alt="React Logo"/>
            <h3>6 months of React</h3>
          </div>
        </div>
      </div>

      <div className="content-overlay">
        <h2>Other Skills</h2>
        <div className="skills-icons design-skills"> {/* Container for design skills icons */}
          <div className="skill">
            <img src="images/adobe.png" alt="Adobe Suite Logo"/>
            <h3>Adobe Suite</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-designer-240.png" alt="Affinity Designer Logo"/>
            <h3>Affinity Designer</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-photo-240.png" alt="Affinity Photo Logo"/>
            <h3>Affinity Photo</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-publisher-240.png" alt="Affinity Publisher Logo"/>
            <h3>Affinity Publisher</h3>
          </div>
        </div>
      </div>

      
      <div className="content-overlay">
        <div className="skills-icons other-tools-skills"> {/* Container for other tools skills icons */}
          <div className="skill">
            <img src="images/icons8-docker-240.png" alt="Docker Logo"/>
            <h3>Docker</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-git-240.png" alt="Git Logo"/>
            <h3>Git</h3>
          </div>
          <div className="skill">
            <img src="images/trello.png" alt="Trello Logo"/>
            <h3>Trello</h3>
          </div>
        </div>
      </div>

      <div className="content-overlay">
        <div className="skills-icons photography-skills"> {/* Container for photography skills icons */}
          <div className="skill">
            <img src="images/camera.png" alt="Photography Logo"/>
            <h3>Photography</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-figma-240.png" alt="Figma Logo"/>
            <h3>Figma</h3>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
