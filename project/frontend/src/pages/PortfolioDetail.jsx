import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPortfolioBySlug } from '../api';
import './PortfolioDetail.css';

function PortfolioDetail() {
  const { slug } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    getPortfolioBySlug(slug).then(res => setPortfolio(res.data)).catch(console.error);
  }, [slug]);

  if (!portfolio) return <div className="loading">Loading...</div>;

  return (
    <div className="portfolio-detail">
      <section className="portfolio-hero-detail">
        {portfolio.category && <span className="hero-badge">{portfolio.category}</span>}
        <h1>{portfolio.title}</h1>
        <p>{portfolio.description}</p>
        {portfolio.client && <p className="client">Client: {portfolio.client}</p>}
      </section>

      <section className="project-overview">
        <div className="overview-content">
          <h2>Project Overview</h2>
          <p>{portfolio.description}</p>
          <div className="overview-meta">
            {portfolio.category && (
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-value">{portfolio.category}</span>
              </div>
            )}
            {portfolio.client && (
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-value">{portfolio.client}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {portfolio.images && portfolio.images.length > 0 && (
        <section className="portfolio-images">
          <h2>Project Gallery</h2>
          <div className="image-grid">
            {portfolio.images.map((img, i) => (
              <img key={i} src={img} alt={`${portfolio.title} ${i + 1}`} />
            ))}
          </div>
        </section>
      )}

      {portfolio.kpis && portfolio.kpis.length > 0 && (
        <section className="portfolio-kpis">
          <h2>Key Results</h2>
          <div className="kpi-grid">
            {portfolio.kpis.map((kpi, i) => (
              <div key={i} className="kpi-card">
                <span className="kpi-value">{kpi.value}</span>
                <span className="kpi-label">{kpi.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="portfolio-cta">
        <h2>Want Similar Results?</h2>
        <p>Let's discuss how we can deliver these outcomes for your business.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Start a Project</Link>
          <Link to="/portfolio" className="btn btn-outline-dark">View All Projects</Link>
        </div>
      </section>
    </div>
  );
}

export default PortfolioDetail;
