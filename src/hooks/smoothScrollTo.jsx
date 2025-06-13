import { gsap } from 'gsap';

export function smoothScrollTo(targetY, duration = 1.5) {
  gsap.to(window, {
    scrollTo: { y: targetY, autoKill: false },
    duration: duration, // segundos, pon 1.5 o 2 para más lento
    ease: "power2.inOut"
  });
}