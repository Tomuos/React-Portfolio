import React, { useState, useEffect } from 'react';
import './Navbar.css';


export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item);
    setBurgerOpen(false); // Close burger menu on item click
    const target = document.getElementById(item);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setActiveItem('');
        setBurgerOpen(false); // Close burger menu on resize
      } else {
        setActiveItem('home');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
    <img src="/images/cometLogo.png" alt="Comet Logo" className="logo" />
      <div className="burger" onClick={toggleBurger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${burgerOpen ? 'open' : ''}`}>
        <li>
          <a
            href="#home"
            className={activeItem === 'home' ? 'active' : ''}
            onClick={(e) => handleItemClick(e, 'home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeItem === 'about' ? 'active' : ''}
            onClick={(e) => handleItemClick(e, 'about')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeItem === 'projects' ? 'active' : ''}
            onClick={(e) => handleItemClick(e, 'projects')}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeItem === 'projects' ? 'active' : ''}
            onClick={(e) => handleItemClick(e, 'projects')}
          >
            My Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeItem === 'contact' ? 'active' : ''}
            onClick={(e) => handleItemClick(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
