import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices, getTestimonials, getPortfolios } from '../api';
import './Home.css';

function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    getServices().then(res => setServices(res.data)).catch(console.error);
    getTestimonials().then(res => setTestimonials(res.data)).catch(console.error);
    getPortfolios().then(res => setPortfolios(res.data)).catch(console.error);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Outpro.India — Digital Excellence</span>
          <h1>Empowering Businesses with <span className="highlight">Digital Excellence</span></h1>
          <p>We build scalable, high-performance solutions that drive growth, transform ideas into reality, and position your brand at the forefront of the digital landscape.</p>
          <div className="hero-cta">
            <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-value">150+</span>
            <span className="metric-label">Projects Delivered</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">50+</span>
            <span className="metric-label">Happy Clients</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">99.9%</span>
            <span className="metric-label">Uptime Guaranteed</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">5+</span>
            <span className="metric-label">Years of Excellence</span>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <span className="section-tag">What We Do</span>
        <h2>Our Core Services</h2>
        <p className="section-desc">From strategy to execution, we deliver end-to-end digital solutions that help businesses thrive in a connected world.</p>
        <div className="grid">
          {services.slice(0, 6).map(service => (
            <Link to={`/services/${service.slug}`} key={service._id} className="card service-card">
              {service.icon && <span className="card-icon">{service.icon}</span>}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-link">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="why-us">
        <span className="section-tag">Why Outpro.India</span>
        <h2>Built Different. Built Better.</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>Performance First</h3>
            <p>Every solution is engineered for speed with load times under 2.5 seconds and 90+ PageSpeed scores.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>Security by Design</h3>
            <p>Enterprise-grade security with SSL, Helmet middleware, and data encryption from day one.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">📈</div>
            <h3>Scalable Architecture</h3>
            <p>Cloud-native infrastructure built to grow with your business — from startup to enterprise.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🤝</div>
            <h3>Dedicated Partnership</h3>
            <p>We don't just deliver projects — we become your long-term technology partner.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-preview">
        <span className="section-tag">Our Work</span>
        <h2>Featured Projects</h2>
        <p className="section-desc">Real results for real businesses. Explore how we've helped our clients achieve measurable growth.</p>
        <div className="grid">
          {portfolios.slice(0, 3).map(project => (
            <Link to={`/portfolio/${project.slug}`} key={project._id} className="card portfolio-card">
              {project.category && <span className="card-tag">{project.category}</span>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.kpis && project.kpis.length > 0 && (
                <div className="card-kpis">
                  {project.kpis.slice(0, 2).map((kpi, i) => (
                    <span key={i} className="kpi-badge">{kpi.value} {kpi.label}</span>
                  ))}
                </div>
              )}
              <span className="card-link">View Case Study →</span>
            </Link>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/portfolio" className="btn btn-outline-dark">View All Projects</Link>
        </div>
      </section>

      <section className="testimonials-preview">
        <span className="section-tag">Client Voices</span>
        <h2>What Our Clients Say</h2>
        <div className="grid">
          {testimonials.slice(0, 3).map(t => (
            <div key={t._id} className="card testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{t.name}</h4>
                  {t.designation && <span className="author-role">{t.designation}</span>}
                  {t.company && <span className="author-company">{t.company}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss how Outpro.India can help you achieve your digital goals.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          <Link to="/about" className="btn btn-outline">Learn About Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
