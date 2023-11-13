import React from 'react';
import './Skills.css';

export const Skills = () => {
  return (
    <section id="skills">
    <div className='white-block'>
      <div className="content-overlay">
      <div className="gradient-heading-container">
        <h1 className="gradient-heading">Skills</h1>
        </div>
        <h2>Front End</h2>
        <div className="skills-icons front-end-skills"> {/* Container for front-end skills icons */}
          <div className="skill">
            <img src="images/react.png" alt="React Logo"/>
            <h4>6 months of React</h4>
          </div>
          <div className="skill">
            <img src="images/java-script.png" alt="JavaScript Logo"/>
            <h4>A year of Javascript</h4>
          </div>
          <div className="skill">
            <img src="images/html-5.png" alt="HTML5 Logo"/>
            <h4>Few years of HTML</h4>
          </div>
          <div className="skill">
            <img src="images/css-3.png" alt="CSS3 Logo"/>
            <h4>Few years of CSS</h4>
          </div>
        </div>
      </div>

      <div className="content-overlay">
        <h2>Other Skills</h2>
        <div className="skills-icons design-skills"> {/* Container for design skills icons */}
          <div className="skill">
            <img src="images/adobe.png" alt="Adobe Suite Logo"/>
            <h4>Adobe Suite</h4>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-designer-240.png" alt="Affinity Designer Logo"/>
            <h4>Affinity Designer</h4>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-photo-240.png" alt="Affinity PhotoLogo"/>
            <h4>Affinity Photo</h4>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-publisher-240.png" alt="Affinity Publisher Logo"/>
            <h4>Affinity Publisher</h4>
          </div>
        </div>
      </div>

      
      <div className="content-overlay">
        <div className="skills-icons other-tools-skills"> {/* Container for other tools skills icons */}
          <div className="skill">
            <img src="images/icons8-docker-240.png" alt="Docker Logo"/>
            <h4>Docker</h4>
          </div>
          <div className="skill">
            <img src="images/icons8-git-240.png" alt="Git Logo"/>
            <h4>Git</h4>
          </div>
          <div className="skill">
            <img src="images/trello.png" alt="Trello Logo"/>
            <h4>Trello</h4>
          </div>
        </div>
      </div>

      <div className="content-overlay">
        <div className="skills-icons photography-skills"> {/* Container for photography skills icons */}
          <div className="skill">
            <img src="images/camera.png" alt="Photography Logo"/>
            <h4>Photography</h4>
          </div>
          <div className="skill">
            <img src="images/icons8-figma-240.png" alt="Figma Logo"/>
            <h4>Figma</h4>
          </div>
        </div>
      </div>
</div>
    </section>
  );
};

export default Skills;
