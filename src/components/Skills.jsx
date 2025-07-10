
import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef();

  const skillsData = {
    'Programming Languages': [
      { name: 'Python', percentage: 90 },
      { name: 'Java', percentage: 85 },
      { name: 'JavaScript', percentage: 80 },
      { name: 'HTML/CSS', percentage: 90 }
    ],
    'Libraries/Frameworks/Tools': [
      { name: 'React', percentage: 85 },
      { name: 'Machine Learning', percentage: 80 },
      { name: 'MySQL', percentage: 85 },
      { name: 'Git, GitHub, GitHub Actions', percentage: 90 },
      { name: 'Linux', percentage: 80 },
      { name: 'Jenkins', percentage: 75 },
      { name: 'Chart.js', percentage: 70 }
    ],
    'Data & Analytics': [
      { name: 'Data Cleaning', percentage: 80 },
      { name: 'EDA', percentage: 80 },
      { name: 'NumPy', percentage: 85 },
      { name: 'Pandas', percentage: 85 },
      { name: 'Scikit Learn', percentage: 80 }
    ],
    'Soft Skills': [
      { name: 'Team Collaboration', percentage: 90 },
      { name: 'Problem Solving', percentage: 85 }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title fade-in">
  <span className="gradient-text">My Skills</span>
</h2>

        
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div 
              key={category} 
              className={`skill-category glass-dark hover-scale fade-in-delay-${categoryIndex + 1}`}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <SkillItem 
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill, isVisible, delay }) => {
  const [showPercentage, setShowPercentage] = useState(false);

  return (
    <div 
      className="skill-item"
      onMouseEnter={() => setShowPercentage(true)}
      onMouseLeave={() => setShowPercentage(false)}
    >
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className={`skill-percentage ${showPercentage ? 'visible' : ''}`}>
          {skill.percentage}%
        </span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{
            width: isVisible ? `${skill.percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        >
          <div className="skill-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
