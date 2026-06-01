import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Outpro.India</h3>
          <p>Building digital experiences that drive growth.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Outpro.India. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
