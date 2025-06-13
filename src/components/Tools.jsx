import React from 'react';
import './Tools.css';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const tools = [
  { name: 'C', icon: '/assets/icons/c-icon.png' },
  { name: 'JavaScript', icon: '/assets/icons/js-icon.png' },
  { name: 'Java', icon: '/assets/icons/java-icon.png' },
  { name: 'Swing', icon: '/assets/icons/swing-icon.png' },
  { name: 'Figma', icon: '/assets/icons/figma-icon.png' },
  { name: 'Adobe Photoshop', icon: '/assets/icons/photoshop-icon.png' },
  { name: 'Adobe Illustrator', icon: '/assets/icons/illustrator-icon.png' },
  { name: 'Blender', icon: '/assets/icons/blender-icon.png' },
  { name: 'Vite', icon: '/assets/icons/vite-icon.png' },
  { name: 'React', icon: '/assets/icons/react-icon.png' },
];

const Tools = () => {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section
      id="tools"
      ref={ref}
      className={`section-fade${visible ? " visible" : ""}`}
      style={{ background: 'var(--bg-main)', padding: '5px 0 60px 0' }}
    > 
      <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: '1.2rem',           
            color: 'var(--text-main)',
            letterSpacing: '0.1em',
            margin: 0,
            textAlign: 'center',          
            opacity: 0.4                  
          }}
        >
          MY EXPERTISE
        </h1>
      <div className="tools-marquee" style={{ marginTop: 10 }}>
        <div className="tools-track">
          {[...tools, ...tools].map((tool, idx) => (
            <div className="tool-item" key={tool.name + idx}>
              <img
                src={tool.icon}
                alt={tool.name}
                className="tool-icon"
              />
              <span
                className="tool-label"
                style={{ fontFamily: "'JetBrains Mono', monospace" , fontSize: '0.9rem'}}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;