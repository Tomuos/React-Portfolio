import React, { useState, useEffect } from 'react';
import './Navbar.css';
import debounce from 'lodash/debounce';


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
    const offset = 50; // You can adjust this value as needed
  
    const onScroll = () => {
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const topBound = element.offsetTop - offset;
          const bottomBound = topBound + element.offsetHeight;
          const scrollTop = window.scrollY;
          if (scrollTop >= topBound && scrollTop < bottomBound) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveItem(currentSection);
    };
  
    const debouncedScroll = debounce(onScroll, 10); // Debounce time can be adjusted
  
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);
  

  return (
    <nav className="navbar">
      {/* Wrap the logo in an anchor tag */}
      <a href="#home" onClick={(e) => handleItemClick(e, 'home')} className="logo-link">
        <img src="/images/logo3.png" alt="Comet Logo" className="logo" />
      </a>
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
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
