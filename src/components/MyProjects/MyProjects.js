import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MyProjects.css';

export const MyProjects = ({ className }) => {
  const projects = [
    {
      id: '1',
      title: 'Kindr',
      description: 'I worked with a wonderful group of people at the School of Code to create a community-driven app called Kindr.',
      githubLink: 'https://github.com/jsonandthearguments/kindr',
      appLink: 'https://kindr.netlify.app/',
      videoLink: 'https://github.com/Tomuos/Tomuos/assets/110429174/14af227d-5a52-4cb9-9636-5d1de81f07af'
    }
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={className}>
      <h1>Projects</h1>
      
      <div>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id}
            onClick={() => {
              setSelectedId(project.id);
              setSelectedProject(project);
            }}
          >
            <motion.h3>{project.title}</motion.h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h3>{selectedProject.title}</motion.h3>
            <motion.p>{selectedProject.description}</motion.p>
            <motion.a href={selectedProject.githubLink}>GitHub</motion.a>
            <motion.a href={selectedProject.appLink}>App Link</motion.a>
            <motion.a href={selectedProject.videoLink}>Video Presentation</motion.a>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
