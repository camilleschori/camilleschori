import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Find current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="CS-Soft Logo" className="brand-logo" />
          <div className="brand-content">
            <span className="brand-text">CS-SOFT</span>
            <span className="brand-subtitle">For Software Solutions</span>
          </div>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          {isMobileMenuOpen && (
            <button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              ×
            </button>
          )}
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`navbar-item ${activeSection === item.id ? 'navbar-item-active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>


        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'mobile-menu-toggle-open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
