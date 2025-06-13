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
          color: 'var(--brand-main)',
          fontWeight: 700,
          fontSize: 32,
          marginBottom: 24,
          marginLeft: 40,
          textAlign: 'left'
        }}
      >
        Experiencia
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