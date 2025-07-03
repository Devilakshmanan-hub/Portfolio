import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
       <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className="bi bi-list"></i> {/* Hamburger icon */}
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li><a href="#about"><i className="bi bi-person-fill"></i> About</a></li>
        <li><a href="#skills"><i className="bi bi-tools"></i> Skills</a></li>
        <li><a href="#projects"><i className="bi bi-kanban-fill"></i> Projects</a></li>
        <li><a href="#contact"><i className="bi bi-envelope-fill"></i> Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;