import React, { useState } from 'react';
import './Navbar.css';
import { smoothScrollTo } from '../hooks/smoothScrollTo';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(document.body.getAttribute('data-theme') === 'light');

    const toggleTheme = () => {
      const newTheme = theme ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
      setTheme(!theme);
    };

    const handleMenuClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(y, 1); 
      }
      setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '1.1rem' }}>
                    <span style={{ color: 'var(--beige)' }}>&lt;</span>
                    <span style={{ color: 'var(--brand-main)' }}>PaulaRobles</span>
                    <span style={{ color: 'var(--beige)' }}>/&gt;</span>
                </div>
                <div className={`menu-icon${isOpen ? ' active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul
                  className={`nav-menu${isOpen ? ' active' : ''}`}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1rem',
                  }}
                >
                    <li>
                        <button className="nav-link-btn" onClick={() => handleMenuClick('about-me')}>//about me</button>
                    </li>
                    <li>
                        <button className="nav-link-btn" onClick={() => handleMenuClick('tools')}>//expertise</button>
                    </li>
                    <li>
                        <button className="nav-link-btn" onClick={() => handleMenuClick('projects')}>//work</button>
                    </li>
                    <li>
                        <button className="nav-link-btn" onClick={() => handleMenuClick('experience')}>//others</button>
                    </li>
                    <li>
                        <ThemeSwitch />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;