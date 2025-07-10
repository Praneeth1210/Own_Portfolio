
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Battery Efficiency for Electric Buses",
      date: "Mar 2025",
      description: "A machine learning system to optimize battery selection for electric buses. Aims to reduce operational costs, improve energy efficiency, and support eco-friendly transitions.",
      tech: ["Python", "Machine Learning", "HTML", "CSS", "Flask"],
      github: "#",
      live: "#"
    },
    {
      title: "AI-Driven Crop Recommendation System",
      date: "Dec 2024",
      description: "An ML-based system using Random Forest to predict the best crop for cultivation based on agricultural parameters. Prevents overfitting and ensures accuracy.",
      tech: ["Python", "Machine Learning"],
      github: "#",
      live: "#"
    },
    {
      title: "Personal Portfolio Website",
      date: "2024",
      description: "A fully responsive and animated website showcasing personal projects, skills, experience, and contact details. Built entirely in React with dynamic sections, hover effects, smooth scrolling, and futuristic styling.",
      tech: ["React", "JavaScript", "CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Sports World – Dynamic Landing Page",
      date: "2024",
      description: "An internship project featuring a responsive, real-time landing page showing the latest sports news with user-friendly navigation.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Mentorship Booking Platform",
      date: "2024",
      description: "Frontend for a role-based mentorship booking app using React. Includes dashboards for students and faculty, login/signup pages, session booking, payment UI, and chat features. Emphasized reusability and protected routes.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Responsive Restaurant Website",
      date: "2024",
      description: "A modern food-themed website with image sliders, animated UI, category filtering, scroll-triggered animations, and responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Swiper.js", "GSAP"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title fade-in">
  <span className="gradient-text">My Projects</span>
</h2>

        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`project-card glass-dark hover-scale fade-in-delay-${(index % 3) + 1}`}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-date">{project.date}</span>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      <div className="project-links">
        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
          <div className="link-icon">↗</div>
        </a>
        <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
          <span>Live Demo</span>
          <div className="link-icon">↗</div>
        </a>
      </div>
      
      <div className="project-overlay"></div>
    </div>
  );
};

export default Projects;
