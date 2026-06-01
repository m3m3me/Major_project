import { useState } from 'react';
import { submitLead } from '../api';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitLead(form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      console.error('Submit error:', err.response?.data || err.message);
      setStatus(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Let's discuss how we can help your business grow.</p>
      </section>

      <section className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" value={form.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
          {typeof status === 'string' && status !== 'success' && status !== '' && <p className="error-msg">{status}</p>}
        </form>
      </section>
    </div>
  );
}

export default Contact;
