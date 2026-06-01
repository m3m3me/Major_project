import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPortfolios } from '../api';
import './Portfolio.css';

function Portfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    getPortfolios().then(res => setPortfolios(res.data)).catch(console.error);
  }, []);

  const categories = ['All', ...new Set(portfolios.map(p => p.category).filter(Boolean))];

  const filtered = activeFilter === 'All'
    ? portfolios
    : portfolios.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <span className="hero-badge">Case Studies</span>
        <h1>Our Portfolio</h1>
        <p>Showcasing our best work and the impact we've delivered for businesses across industries.</p>
      </section>

      {categories.length > 1 && (
        <section className="portfolio-filters">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="portfolio-list">
        <div className="grid">
          {filtered.map(project => (
            <Link to={`/portfolio/${project.slug}`} key={project._id} className="card portfolio-card">
              {project.category && <span className="card-tag">{project.category}</span>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.client && <span className="card-client">Client: {project.client}</span>}
              {project.kpis && project.kpis.length > 0 && (
                <div className="card-kpis">
                  {project.kpis.map((kpi, i) => (
                    <span key={i} className="kpi-badge">
                      <strong>{kpi.value}</strong> {kpi.label}
                    </span>
                  ))}
                </div>
              )}
              <span className="card-link">View Case Study →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="portfolio-cta">
        <h2>Want Results Like These?</h2>
        <p>Let's discuss how we can deliver similar outcomes for your business.</p>
        <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
      </section>
    </div>
  );
}

export default Portfolio;
