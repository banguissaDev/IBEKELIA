import { useEffect, useRef } from 'react';

/**
 * useParallax – Applies a parallax translateY to a ref element
 * @param {number} speed – Parallax speed factor (0 = none, 1 = full scroll speed)
 * @returns {ref} – Attach to the element you want to move
 */
export function useParallax(speed = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.parentElement.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const offset = (progress - 0.5) * speed * 200;
      el.style.transform = `translateY(${offset}px) scale(1.05)`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [speed]);

  return ref;
}
