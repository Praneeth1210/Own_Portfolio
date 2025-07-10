
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      if (heroRef.current) {
        heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    // Create a dummy download link
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'P_Sai_Praneeth_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>
      </div>
      
      <div className="hero-container" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text fade-in">
             <h2 className="section-title fade-in">
  <span className="gradient-text">P. Sai Praneeth Reddy</span>
</h2>
            
            <div className="hero-titles fade-in-delay-1">
              <div className="title-item">MERN Stack Web Developer</div>
              <div className="title-item">ML Developer</div>
              <div className="title-item">DevOps Enthusiast</div>
            </div>
            
            <p className="hero-tagline fade-in-delay-2">
              "Building AI Agents for Work Flow Optimization"
            </p>
            
            <div className="hero-buttons fade-in-delay-3">
              <button className="btn-primary" onClick={handleDownloadResume}>
                Download Resume
              </button>
              <button className="btn-secondary" onClick={handleContactMe}>
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="hero-visual fade-in-delay-2">
            <div className="profile-container">
              <div className="profile-circle">
                <div className="profile-inner">
                  <div className="code-lines">
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
