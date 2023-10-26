import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MyProjects.css';

export const MyProjects = ({ className }) => {
  const projects = [
    {
      id: "kindr",
      title: "Kindr",
      description: "I worked with a wonderful group of people at the School of Code to create a community-driven app called Kindr.",
      links: [
        { type: "github", url: "https://github.com/jsonandthearguments/kindr" },
        { type: "app", url: "https://kindr.netlify.app/" },
        { type: "presentation", url: "https://github.com/Tomuos/Tomuos/assets/110429174/14af227d-5a52-4cb9-9636-5d1de81f07af" }
      ],
      image: "images/bg1.png"
    }
    // ... Add other projects in a similar manner if needed
  ];
  
  const [selectedId, setSelectedId] = useState(null);
  const [selectedProject, ] = useState(null);

  return (
    <section id="projects" className={className}>
      <h1>Projects</h1>
      <div>
        <div className="motion-div">
          <p>{projects[0].description}</p>

          <a href={projects[0].links.find(link => link.type === "app").url} target="_blank" rel="noopener noreferrer">
            <img src={projects[0].image} alt="Kindr Logo" className="project-image link-icon" /> 
            App Link
          </a>

          <div style={{marginTop: "20px"}}>
            <iframe 
              title="Kindr Presentation"
              src={projects[0].links.find(link => link.type === "presentation").url}
              className="project-video"
              width="400"
              height="auto"
              frameborder="0" 
              allowfullscreen>
            </iframe>
          </div>

          <a href={projects[0].links.find(link => link.type === "github").url} target="_blank" rel="noopener noreferrer" style={{display: "block", margin: "10px"}}>
            <img src="images/github.png" alt="GitHub Logo" className="link-icon" style={{width: "150px"}}/> 
            GitHub
          </a>
        </div>
      </div>






    

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h3>{selectedProject.title}</motion.h3>
            <motion.p>{selectedProject.description}</motion.p>
            <motion.a href={selectedProject.links.find(link => link.type === "github").url}>GitHub</motion.a>
            <motion.a href={selectedProject.links.find(link => link.type === "app").url}>App Link</motion.a>
            <motion.a href={selectedProject.links.find(link => link.type === "presentation").url}>Video Presentation</motion.a>
            <motion.button className="motion-button" onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
