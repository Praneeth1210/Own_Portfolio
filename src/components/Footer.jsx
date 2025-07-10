
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/praneethreddy1976',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Praneeth1210',
      icon: '🐙'
    },
    {
      name: 'Email',
      url: 'mailto:praneethreddy2346@mail.com',
      icon: '📧'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleQuickLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape footer-shape1"></div>
          <div className="footer-shape footer-shape2"></div>
          <div className="footer-shape footer-shape3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo gradient-text">P Sai Praneeth Reddy</h3>
              <p className="footer-tagline">
                Building the future with code, one project at a time.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link glass hover-scale"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-links-title">Quick Links</h4>
              <ul className="footer-nav">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="footer-nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleQuickLinkClick(link.href);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4 className="footer-contact-title">Get In Touch</h4>
              <div className="footer-contact-info">
                <a href="mailto:praneethreddy2346@mail.com" className="contact-link">
                  praneethreddy2346@mail.com
                </a>
                <p className="contact-text">
                  Available for freelance opportunities and exciting projects.
                </p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} P Sai Praneeth Reddy. All rights reserved.</p>
            </div>
            
            <button className="scroll-to-top" onClick={scrollToTop}>
              <span className="scroll-arrow">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
