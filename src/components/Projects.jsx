import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../ComputerV2';
import './Projects.css';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Projects = () => {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section
      id="projects"
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
        Proyectos
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        <div style={{ position: 'relative', width: 600, height: 600 }}>
          <Canvas style={{ width: 600, height: 600 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 5, 2]} intensity={1.2} />
            <Model scale={1.7} position={[0, -1.5, 0]} />
            <OrbitControls enablePan={false} enableZoom={false} />
          </Canvas>
        </div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: 1000,
        margin: '0 auto'
      }}>
        {[1,2,3,4].map(i => (
          <div key={i} className="project-card">
            {/* Proyecto {i} vacío */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;