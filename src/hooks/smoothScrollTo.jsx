import { gsap } from 'gsap';

export function smoothScrollTo(targetY, duration = 1) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start;

  function step(timestamp) {
    if (!start) start = timestamp;
    const time = Math.min(1, (timestamp - start) / (duration * 1000));
    window.scrollTo(0, startY + diff * easeInOutQuad(time));
    if (time < 1) {
      requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(step);
}