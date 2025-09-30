import React from 'react';
import '../styles/Footer.css';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp,
  FaHeart
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Enterprise Systems',
    'API Development',
    'Database Design',
    'UI/UX Design'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com/in/camilleschori',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/camilleschori',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/camilleschori',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/camilleschori',
      color: '#e4405f'
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://facebook.com/camilleschori',
      color: '#1877f2'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/9647729444377',
      color: '#25d366'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="brand-name">Camille Schori</h3>
            <p className="brand-tagline">Full-Stack Developer</p>
            <p className="brand-description">
              Building exceptional digital experiences with modern technologies.
              Passionate about creating solutions that make a difference.
            </p>
            <div className="footer-contact">
              <a href="mailto:info@camilleschori.com" className="footer-contact-item">
                <MdEmail />
                <span>info@camilleschori.com</span>
              </a>
              <a href="tel:+9647729444377" className="footer-contact-item">
                <MdPhone />
                <span>+964 772 944 4377</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="social-description">
              Follow me for updates on latest projects and tech insights.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Camille Schori. All rights reserved.
            </p>
          </div>
          <div className="footer-made-with">
            <p>
              Made with <FaHeart className="heart-icon" /> in Iraq
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
