
import React from 'react';
import './Participations.css';

const Participations = () => {
  const participationsData = [
    {
      name: "GreatAppSec Hackathon",
      date: "Aug 2024",
      project: "PhishNet: Combatting Social Engineering and Phishing Attacks",
      achievement: "Qualified for prototype round",
      role: "Team Leader",
      teamSize: 3,
      skills: ["Leadership", "Communication", "Presentation", "Cybersecurity"],
      description: "Led a team of 3 members in developing an innovative solution to combat phishing attacks. Emphasized strong communication and presentation skills throughout the competition."
    },
    {
      name: "Silicon Maze Hackathon",
      date: "Sep 2024",
      organizer: "Web Enthusiasts' Club, NITK",
      achievement: "Qualified for Round 2 of Algorithm solving",
      duration: "24-hour hybrid hackathon",
      skills: ["Algorithm Design", "Problem Solving", "Time Management", "Competitive Programming"],
      description: "Participated in an intensive 24-hour hackathon focusing on algorithmic challenges. Demonstrated fast thinking and algorithmic efficiency under extreme time constraints."
    }
  ];

  return (
    <section id="participations" className="section participations">
      <div className="container">
        <h2 className="section-title fade-in">
  <span className="gradient-text">Participatipns</span>
</h2>

        
        <div className="participations-grid">
          {participationsData.map((participation, index) => (
            <div key={index} className={`participation-card glass-dark hover-scale fade-in-delay-${index + 1}`}>
              <div className="participation-header">
                <div className="participation-badge">🏅 Hackathon</div>
                <div className="participation-date">{participation.date}</div>
              </div>
              
              <h3 className="participation-name">{participation.name}</h3>
              
              {participation.organizer && (
                <p className="participation-organizer">by {participation.organizer}</p>
              )}
              
              {participation.project && (
                <div className="participation-project">
                  <strong>Project:</strong> {participation.project}
                </div>
              )}
              
              <div className="participation-achievement">
                <span className="achievement-icon">🎯</span>
                {participation.achievement}
              </div>
              
              <p className="participation-description">{participation.description}</p>
              
              <div className="participation-details">
                {participation.role && (
                  <div className="detail-item">
                    <span className="detail-label">Role:</span>
                    <span className="detail-value">{participation.role}</span>
                  </div>
                )}
                {participation.teamSize && (
                  <div className="detail-item">
                    <span className="detail-label">Team Size:</span>
                    <span className="detail-value">{participation.teamSize}</span>
                  </div>
                )}
                {participation.duration && (
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{participation.duration}</span>
                  </div>
                )}
              </div>
              
              <div className="participation-skills">
                {participation.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participations;
