import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={handleScrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'var(--brand-main)',
        color: 'var(--white)',
        border: 'none',
        borderRadius: '50%',
        width: 48,
        height: 48,
        fontSize: 28,
        cursor: 'pointer',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
        transition: 'background 0.2s'
      }}
      aria-label="Ir arriba"
    >
      ↑
    </button>
  ) : null;
};

export default ScrollToTopButton;