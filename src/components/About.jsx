
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
         <h2 className="section-title fade-in">
  <span className="gradient-text">About Me</span>
</h2>
        
        <div className="about-content">
          <div className="about-text fade-in-delay-1">
            <div className="glass-dark about-card">
              <p>
                Enthusiastic and detail-oriented developer with strong academic grounding 
                and practical exposure through internships. Skilled in Python, Java, and 
                Data Structures with a solid foundation in OOP and DBMS.
              </p>
              
              <p>
                I'm passionate about coding, building scalable web systems, automating 
                infrastructure using DevOps tools, and developing AI agents to solve 
                real-world problems. I'm a fast learner who thrives on problem-solving, 
                team collaboration, and delivering efficient solutions.
              </p>
              
              <div className="passion-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <span>Scalable Web Systems</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <span>AI & Machine Learning</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚙️</div>
                  <span>DevOps & Automation</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🧠</div>
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual fade-in-delay-2">
            <div className="stats-container">
              <div className="stat-item glass hover-scale">
                <div className="stat-number gradient-text">6</div>
                <div className="stat-label">Months Internship Experience</div>
              </div>
              <div className="stat-item glass hover-scale">
                <div className="stat-number gradient-text">6+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item glass hover-scale">
                <div className="stat-number gradient-text">5+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-item glass hover-scale">
                <div className="stat-number gradient-text">2</div>
                <div className="stat-label">Hackathons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
