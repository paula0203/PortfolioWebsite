import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const BulbSwitcher = () => {
  const [on, setOn] = useState(true);
  const bulbRef = useRef(null);
  const cableRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', on ? 'dark' : 'light');
  }, [on]);

  useEffect(() => {
    const bulb = bulbRef.current;
    const cable = cableRef.current;

    Draggable.create(bulb, {
      type: 'x,y',
      inertia: true,
      onDrag() {
        const y = this.y;
        gsap.to(cable, {
          scaleY: 1 + y / 120,
          transformOrigin: 'top center',
          duration: 0.1
        });
        gsap.to(containerRef.current, {
          rotation: gsap.utils.clamp(-10, 10, this.x / 10),
          transformOrigin: 'top center',
          duration: 0.1
        });
      },
      onRelease() {
        gsap.to(cable, {
          scaleY: 1,
          duration: 0.4,
          ease: 'elastic.out(1, 0.3)'
        });
        gsap.to(bulb, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)'
        });
        gsap.to(containerRef.current, {
          rotation: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)'
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 60,
        zIndex: 2000,
        width: 120,
        height: 260,
        pointerEvents: 'auto',
        userSelect: 'none',
        transformOrigin: 'top center'
      }}
    >
      {/* Cable */}
      <div
        ref={cableRef}
        style={{
          width: 4,
          height: 100,
          background: '#222',
          margin: '0 auto',
          borderRadius: 2,
          transition: 'height 0.2s'
        }}
      />
      {/* Bombilla */}
      <div
        ref={bulbRef}
        style={{
          width: 120,
          height: 140,
          margin: '0 auto',
          position: 'relative',
          cursor: 'grab',
          overflow: 'visible',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center'
        }}
        onClick={() => setOn(v => !v)}
        title="Haz clic para encender/apagar"
        tabIndex={0}
        aria-label="Interruptor de tema"
        role="button"
      >
        <svg width="140" height="180" viewBox="0 0 140 180">
          {/* HALO */}
          {on && (
            <>
              <ellipse
                cx="60"
                cy="90"
                rx="32"
                ry="24"
                fill="#ffe066"
                opacity="0.13"
                filter="url(#haloBlurBig)"
              />
              <ellipse
                cx="60"
                cy="90"
                rx="18"
                ry="12"
                fill="#fffbe6"
                opacity="0.10"
                filter="url(#haloBlur)"
              />
            </>
          )}
          <defs>
            <filter id="haloBlurBig" x="-70%" y="-70%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="32" />
            </filter>
            <filter id="haloBlur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
            <radialGradient id="bulbGlass" cx="60%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#fff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#e0e0d0" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          {/* Base metálica */}
          <rect x="52" y="20" width="16" height="12" rx="3" fill="#bbb" stroke="#888" strokeWidth="2" />
          <rect x="54" y="32" width="12" height="5" rx="2" fill="#888" />
          {/* Forma de bombilla */}
          <path
            d="M60 36 
              C75 36, 84 50, 84 70 
              C84 90, 72 104, 60 108 
              C48 104, 36 90, 36 70 
              C36 50, 45 36, 60 36 Z"
            fill={on ? 'url(#bulbGlass)' : 'none'}
            stroke={on ? '#E85002' : '#3A8DFF'}
            strokeWidth="3"
            style={{ transition: 'fill 0.3s' }}
          />
          {/* Filamento */}
          <path
            d="M54 72 Q60 78 66 72"
            stroke={on ? '#E85002' : '#3A8DFF'}
            strokeWidth="2.5"
            fill="none"
          />
          {/* Soporte del filamento */}
          <rect x="58" y="72" width="4" height="10" rx="2" fill="#e0c080" opacity="0.7" />
          {/* Brillos */}
          <ellipse cx="52" cy="60" rx="6" ry="2.5" fill="#fff" opacity={on ? 0.25 : 0.12} />
          <ellipse cx="60" cy="46" rx="8" ry="3" fill="#fff" opacity={on ? 0.13 : 0.06} />
        </svg>
      </div>
    </div>
  );
};

export default BulbSwitcher;