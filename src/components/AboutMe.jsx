import React from 'react';
import './AboutMe.css';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const AboutMe = () => {
  const [ref, visible] = useFadeInOnScroll();
  return (
    <section
      id="about-me"
      ref={ref}
      className={`section-fade${visible ? " visible" : ""}`}
      style={{
        textAlign: 'center',
        padding: '140px 0 60px 0',
        background: 'var(--bg-main)',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '6rem',
          color: 'var(--text-main)',
          letterSpacing: '0.05em',
          margin: 0
        }}
      >
        HEY! IT'S PAULA
      </h1>
      <p
        style={{
          marginTop: 32,
          maxWidth: 540,
          color: 'var(--text-main)',
          fontFamily: "'Roboto', Arial, sans-serif",
          fontSize: '1.35rem',
          fontWeight: 400,
          lineHeight: 1.5
        }}
      > 
        ICT Engineering student at La Salle University, Barcelona. Currently exploring web design and development.
      </p>

      <div className="social-buttons">
        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button linkedin"
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button github"
        >
          <i className="fab fa-github"></i>
          GitHub
        </a>
        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button cv"
        >
          <i className="fas fa-file-alt"></i>
          CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;