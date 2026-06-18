import { useEffect, useState } from 'react';

import { useInView } from '@/hooks/useInView';
import { useParallax } from '@/hooks/useParallax';

const IMAGE = '/IBEKELIA%20(12).jpeg';

const STATS = [
  { value: 1, suffix: '', label: 'Bateau en service' },
  { value: 15, suffix: 'k+', label: 'Passagers / an' },
  { value: 15, suffix: ' ans', label: "D'expérience" },
];

function AnimatedStat({ value, suffix, label, active, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let frameId;
    const startTime = performance.now() + delay;
    const duration = 1100;

    const tick = (now) => {
      if (now < startTime) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      const elapsed = Math.min(now - startTime, duration);
      const progress = elapsed / duration;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (elapsed < duration) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [active, delay, value]);

  return (
    <div className={`wide__stat${active ? ' wide__stat--visible' : ''}`}>
      <div className="wide__stat-num">
        {displayValue}
        <span>{suffix}</span>
      </div>
      <div className="wide__stat-label">{label}</div>
    </div>
  );
}

export default function WideSelection() {
  const [headerRef, headerVisible] = useInView();
  const [imgRef, imgVisible] = useInView();
  const parallaxRef = useParallax(0.2);

  return (
    <section className="wide">
      <div className="container">
        <div ref={headerRef} className={`wide__header reveal reveal-fade${headerVisible ? ' visible' : ''}`}>
          <div>
            <span className="eyebrow">Notre bateau</span>
            <h2 className="wide__title">Une vedette unique pour vos traversées sur l&apos;Ogooué</h2>
          </div>
          <p className="wide__desc">
            Nous exploitons une vedette unique, pensée pour les trajets Port-Gentil - Lambaréné.
            Vous profitez d&apos;un service régulier, confortable et direct sur le fleuve emblématique du Gabon.
          </p>
        </div>
      </div>

      <div
        ref={imgRef}
        className={`wide__image-block parallax-container reveal reveal-scale${imgVisible ? ' visible' : ''}`}
      >
        <img ref={parallaxRef} src={IMAGE} alt="Flotte Ibekelia" className="parallax-img" />

        <div className="wide__stats">
          {STATS.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              active={imgVisible}
              delay={index * 180}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
