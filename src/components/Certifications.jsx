
import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      name: "Python Certification",
      issuer: "Infosys Springboard",
      icon: "🐍"
    },
    {
      name: "Python for Beginners",
      issuer: "Scalar",
      icon: "📚"
    },
    {
      name: "AI Foundation",
      issuer: "Hexart",
      icon: "🤖"
    },
    {
      name: "NCAT All India Certification",
      issuer: "Naukri",
      icon: "🏆"
    },
    {
      name: "Internship Completion Certificates",
      issuer: "Various Companies",
      icon: "📜"
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title fade-in">
  <span className="gradient-text">Certifications</span>
</h2>

        
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className={`certification-card glass hover-scale fade-in-delay-${(index % 3) + 1}`}>
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-badge">Certified</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
