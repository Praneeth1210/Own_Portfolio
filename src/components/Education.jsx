
import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "JB Institute of Engineering and Technology, Hyderabad",
      gpa: "8.36",
      period: "Nov 2021 – Present",
      type: "Engineering"
    },
    {
      institution: "Sri Chaitanya Jr. College, Hyderabad",
      gpa: "9.5",
      period: "June 2020 – March 2021",
      type: "Intermediate"
    },
    {
      institution: "Sri Chaitanya Techno School, Hyderabad",
      gpa: "9.7",
      period: "June 2018 – April 2019",
      type: "Secondary"
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title fade-in">
  <span className="gradient-text">Education</span>
</h2>


        
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className={`education-card glass-dark hover-scale fade-in-delay-${index + 1}`}>
              <div className="education-type">{edu.type}</div>
              <h3 className="education-institution">{edu.institution}</h3>
              <div className="education-details">
                <div className="education-gpa">
                  <span className="gpa-label">GPA:</span>
                  <span className="gpa-value gradient-text">{edu.gpa}</span>
                </div>
                <div className="education-period">{edu.period}</div>
              </div>
              <div className="education-icon">🎓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
