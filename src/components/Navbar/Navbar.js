// Navbar.js

import React from 'react';
import { smoothScroll } from '../../helpers/smoothScroll'; // Import the helper function

export const Navbar = () => {
    return (
        <nav>
            {/* Other code */}
            <ul>
                <li><a href="#home" onClick={smoothScroll}>Home</a></li>
                <li><a href="#about" onClick={smoothScroll}>About Me</a></li>
                <li><a href="#skills" onClick={smoothScroll}>Skills</a></li>
                <li><a href="#projects" onClick={smoothScroll}>My Projects</a></li>
                <li><a href="#contact" onClick={smoothScroll}>Contact</a></li>
                {/* Add more links here */}
            </ul>
            {/* Other code */}
        </nav>
    );
};
