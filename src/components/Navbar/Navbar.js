import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item);
    setBurgerOpen(false);
    const target = document.getElementById(item);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    const onScroll = () => {
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const topBound = element.offsetTop;
          const bottomBound = topBound + element.offsetHeight;
          const scrollTop = window.scrollY;
          // Check if the section is in view
          if (scrollTop >= topBound && scrollTop < bottomBound) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeItem === item ? 'active' : ''}
              onClick={(e) => handleItemClick(e, item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize the first letter */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
