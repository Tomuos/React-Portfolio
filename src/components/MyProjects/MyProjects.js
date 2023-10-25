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
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={className}>
      <h1>Projects</h1>
      
      <div>
      {projects.map(project => (
  <motion.div 
      key={project.id} 
      layoutId={project.id} 
      onClick={() => {
        setSelectedId(project.id);
        setSelectedProject(project);
      }}
      className="motion-div"
  >
    <motion.img src={project.image} alt={project.title} />
    <motion.h5>{project.subtitle}</motion.h5>
  </motion.div>
))}


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
