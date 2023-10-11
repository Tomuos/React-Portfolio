import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Galaxy } from './components/Galaxy/Galaxy';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills'; 
import { MyProjects } from './components/MyProjects/MyProjects'; 
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Galaxy />
      <AboutMe />
      <Skills /> {/* Add the Skills component */}
      <MyProjects /> {/* Add the MyProjects component */}
      <Contact/>
    </div>
  );
}

export default App;
