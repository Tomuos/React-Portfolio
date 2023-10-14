import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item);
    const target = document.getElementById(item);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setActiveItem('');
      } else {
        setActiveItem('home'); // Reset active item on larger screens
      }
    };

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-blue-600 p-4 text-white sticky top-0">
      <ul className="flex justify-around">
        <li>
          <a
            href="#home"
            className={`${
              activeItem === 'home' ? 'underline' : ''
            } sm:underline`}
            onClick={(e) => handleItemClick(e, 'home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${
              activeItem === 'about' ? 'underline' : ''
            } sm:underline`}
            onClick={(e) => handleItemClick(e, 'about')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`${
              activeItem === 'skills' ? 'underline' : ''
            } sm:underline`}
            onClick={(e) => handleItemClick(e, 'skills')}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`${
              activeItem === 'projects' ? 'underline' : ''
            } sm:underline`}
            onClick={(e) => handleItemClick(e, 'projects')}
          >
            My Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`${
              activeItem === 'contact' ? 'underline' : ''
            } sm:underline`}
            onClick={(e) => handleItemClick(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
