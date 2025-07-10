
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: "Software Engineer Intern",
      company: "Workcohol",
      period: "Jan 2025 – Apr 2025",
      description: "Collaborated in a team environment to design and build a full-featured mentorship booking platform. Developed dynamic role-based UI components using React, focusing on user flows, dashboard integration, and frontend logic. Improved team efficiency through reusable design patterns and version control with Git.",
      skills: ["React", "JavaScript", "Team Collaboration", "Git", "UI/UX Design"]
    },
    {
      title: "Front-End Developer Intern",
      company: "Octanet Services",
      period: "Nov 2024 – Dec 2024",
      description: "Worked on a responsive landing page displaying sports news. Focused on layout design, user engagement, and clean UI/UX using HTML, CSS, and JavaScript. Delivered a real-time experience with smooth scrolling and section transitions.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title gradient-text fade-in">Work Experience</h2>
        
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className={`timeline-item fade-in-delay-${index + 1}`}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="experience-card glass-dark hover-scale">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company gradient-text">{exp.company}</h4>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
