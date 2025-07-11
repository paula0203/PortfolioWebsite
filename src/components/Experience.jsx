import React from 'react';
import './Experience.css';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Experience = () => {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section
      id="experience"
      ref={ref}
      className={`section-fade${visible ? " visible" : ""}`}
      style={{ background: 'var(--bg-main)', padding: '80px 0' }}
    >
      <h2
        style={{
					fontFamily: "'Poppins', monospace",
					fontWeight: 800,
					fontSize: '3.5rem',
					color: 'var(--text-main)',
					letterSpacing: '0.1em',
					textTransform: 'uppercase',
					textAlign: 'center',
					margin: 0,
					marginBottom: 40,
				}}
      >
        MY EXPERIENCE
      </h2>
      <div className="timeline-container">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot actual"></div>
            <div className="timeline-content">
              <span className="timeline-date">Actualmente</span>
              <div className="timeline-title">Estudiando Ingeniería</div>
              <div className="timeline-desc">Grado en Ingeniería (en curso)</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2021</span>
              <div className="timeline-title">Bachillerato Tecnológico</div>
              <div className="timeline-desc">Finalizado en 2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;