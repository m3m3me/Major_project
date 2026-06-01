import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../api';
import './ServiceDetail.css';

function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    getServiceBySlug(slug).then(res => setService(res.data)).catch(console.error);
  }, [slug]);

  if (!service) return <div className="loading">Loading...</div>;

  return (
    <div className="service-detail">
      <section className="service-hero">
        {service.icon && <span className="service-icon">{service.icon}</span>}
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </section>

      {service.details && (
        <section className="service-details">
          <div className="details-content">
            <p>{service.details}</p>
          </div>
        </section>
      )}

      <section className="service-features">
        <h2>What You Get</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Custom Solution</h3>
            <p>Tailored specifically to your business requirements — no cookie-cutter templates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>Agile development with weekly sprints and transparent progress updates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Quality Assured</h3>
            <p>Rigorous testing, code reviews, and performance audits before launch.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📞</div>
            <h3>Ongoing Support</h3>
            <p>Post-launch maintenance, monitoring, and continuous improvement included.</p>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <h2>Interested in {service.title}?</h2>
        <p>Let's discuss how this service can help your business grow.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Get a Free Consultation</Link>
          <Link to="/services" className="btn btn-outline-dark">View All Services</Link>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
