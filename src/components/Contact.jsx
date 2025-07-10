
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'praneethreddy2346@mail.com',
      link: 'mailto:praneethreddy2346@mail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/praneethreddy1976',
      link: 'https://linkedin.com/in/praneethreddy1976'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/Praneeth1210',
      link: 'https://github.com/Praneeth1210'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title gradient-text fade-in">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info fade-in-delay-1">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation. Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.link}
                  className="contact-method glass hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container fade-in-delay-2">
            <form className="contact-form glass-dark" onSubmit={handleSubmit}>
              <h3 className="form-title">Send me a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
