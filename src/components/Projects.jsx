import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../ComputerV2';
import './Projects.css';

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-fade visible"
      style={{
        background: 'var(--bg-main)',
        padding: '80px 0',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1
        style={{
          fontFamily: "'Poppins', monospace",
          fontWeight: 800,
          fontSize: '3.5rem',
          color: 'var(--text-main)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: 0,
          marginBottom: 40
        }}
      >
        MY PROJECTS
      </h1>

      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: 1200,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40
      }}>
        <div style={{ flex: 1, paddingLeft: 40 }}>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: '2.2rem',
              color: 'var(--brand-main)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0
            }}
          >
            3D COMPUTER 
          </h2>
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 100,
              fontSize: '1.5rem',
              color: 'var(--text-secondary)',
              marginTop: 10
            }}
          >
            A Simple Desktop Computer Model
          </h3>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 100,
              fontSize: '1.2rem',
              color: 'var(--text-main)',
              marginTop: 18
            }}
          >
            This is my first 3D model created in Blender. It’s a simple desktop computer with a clean and minimal design. 
            I focused on using basic shapes to practice modeling, proportions, and applying materials. 
            Even though it’s a simple project, it was a great introduction to 3D modeling and helped me explore tools like Edit Mode, materials, and lighting. A small first step into the world of Blender!
          </p>
        </div>
        {/* DERECHA: Ordenador */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: 400, height: 400 }}>
            <Canvas style={{ width: 400, height: 400 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[2, 5, 2]} intensity={1.2} />
              <Model scale={0.8} position={[0, -1.5, 0]} />
              <OrbitControls enablePan={false} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;