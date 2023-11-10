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
        <div className="skills-icons"> {/* Container for icons */}
          <div className="skill">
            <img src="images/java-script.png" alt="JS Logo"/>
            <h3>A year of Javascript</h3>
          </div>
          <div className="skill">
            <img src="images/html-5.png" alt="HTML Logo"/>
            <h3>Few years of html</h3>
          </div>
          <div className="skill">
            <img src="images/css-3.png" alt="CSS Logo"/>
            <h3>Few years of CSS</h3>
          </div>
          <div className="skill">
            <img src="images/react.png" alt="React Logo"/>
            <h3>6 months of react</h3>
          </div>
        </div>
      </div>
      <div className="content-overlay">
        <h3>Other Skills</h3>
        <div className="skills-icons other-skills">
          <div className="skill">
            <img src="images/adobe.png" alt="Adobe Suite"/>
            <h3>Adobe suite</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-designer-240.png" alt="Affinity designer"/>
            <h3>Alt to Illustrator</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-photo-240.png" alt="AffinityPhoto"/>
            <h3>Alt to Photoshop</h3>
          </div>
          <div className="skill">
            <img src="images/icons8-affinity-publisher-240.png" alt="Affinity Publisher"/>
            <h3>Alt to Publisher</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
