import { useState, useEffect } from 'react';
import { getTeamMembers } from '../api';
import './About.css';

function About() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getTeamMembers().then(res => setTeam(res.data)).catch(console.error);
  }, []);

  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Outpro.India</h1>
        <p>Driving digital transformation with innovation, integrity, and impact.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To empower businesses with cutting-edge digital solutions that accelerate growth and create lasting value.</p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>To be the most trusted technology partner for businesses seeking digital excellence.</p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="grid">
          <div className="card"><h3>Innovation</h3><p>Constantly pushing boundaries.</p></div>
          <div className="card"><h3>Integrity</h3><p>Transparency in everything we do.</p></div>
          <div className="card"><h3>Impact</h3><p>Delivering measurable results.</p></div>
          <div className="card"><h3>Collaboration</h3><p>Working together for success.</p></div>
        </div>
      </section>

      {team.length > 0 && (
        <section className="team">
          <h2>Our Team</h2>
          <div className="grid">
            {team.map(member => (
              <div key={member._id} className="card team-card">
                {member.image && <img src={member.image} alt={member.name} />}
                <h3>{member.name}</h3>
                <p className="designation">{member.designation}</p>
                {member.bio && <p>{member.bio}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default About;
