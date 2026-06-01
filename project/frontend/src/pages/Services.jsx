import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices } from '../api';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(res => setServices(res.data)).catch(console.error);
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero">
        <span className="hero-badge">Our Expertise</span>
        <h1>Services We Offer</h1>
        <p>Comprehensive digital solutions tailored to your business needs. From ideation to deployment, we've got you covered.</p>
      </section>

      <section className="services-list">
        <div className="grid">
          {services.map(service => (
            <Link to={`/services/${service.slug}`} key={service._id} className="card service-card">
              <div className="card-header">
                {service.icon && <span className="card-icon">{service.icon}</span>}
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              {service.details && <p className="card-preview">{service.details.substring(0, 120)}...</p>}
              <span className="card-link">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="process-section">
        <span className="section-tag">Our Process</span>
        <h2>How We Work</h2>
        <p className="section-desc">A proven methodology that ensures quality, transparency, and results at every stage.</p>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Discovery</h3>
            <p>We start by understanding your business goals, challenges, and target audience through in-depth workshops and research.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Strategy & Design</h3>
            <p>We craft a tailored strategy and create wireframes, prototypes, and design systems aligned with your brand identity.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Development</h3>
            <p>Our engineers build your solution using modern tech stacks with agile sprints, ensuring quality and speed.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Launch & Grow</h3>
            <p>We deploy, monitor, and optimize your product post-launch with continuous support and data-driven improvements.</p>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <h2>Not Sure Which Service You Need?</h2>
        <p>Let's have a conversation. We'll help you identify the right solution for your business.</p>
        <Link to="/contact" className="btn btn-primary">Talk to Our Team</Link>
      </section>
    </div>
  );
}

export default Services;
