// Navbar.js
import React, { useState } from 'react';
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

    return (
        <nav className="bg-blue-600 p-4 text-white">
            <ul className="flex justify-around">
                <li><a href="#home" className={activeItem === 'home' ? 'underline' : ''} onClick={(e) => handleItemClick(e, 'home')}>Home</a></li>
                <li><a href="#about" className={activeItem === 'about' ? 'underline' : ''} onClick={(e) => handleItemClick(e, 'about')}>About Me</a></li>
                <li><a href="#skills" className={activeItem === 'skills' ? 'underline' : ''} onClick={(e) => handleItemClick(e, 'skills')}>Skills</a></li>
                <li><a href="#projects" className={activeItem === 'projects' ? 'underline' : ''} onClick={(e) => handleItemClick(e, 'projects')}>My Projects</a></li>
                <li><a href="#contact" className={activeItem === 'contact' ? 'underline' : ''} onClick={(e) => handleItemClick(e, 'contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};
