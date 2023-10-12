import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Galaxy } from './components/Galaxy/Galaxy';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills'; 
import { MyProjects } from './components/MyProjects/MyProjects'; 
import { Contact } from './components/Contact/Contact';
import { initIntersectionObserver } from './helpers/intersectionObserver';
import './tailwind.css'

function App() {
  useEffect(() => {
    initIntersectionObserver();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Galaxy />
      <AboutMe className="hidden" />
      <Skills className="hidden" /> 
      <MyProjects className="hidden" /> 
      <Contact className="hidden" />
    </div>
  );
}

export default App;
