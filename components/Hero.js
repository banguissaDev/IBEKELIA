import { useEffect, useRef } from 'react';
import { Anchor } from 'lucide-react';

const HERO_IMG = '/HERO%20IMAGE.jpeg';

const TRUST_POINTS = [
  {
    title: 'Départs quotidiens',
    text: 'Des rotations régulières pour vos trajets du jour.',
  },
  {
    title: 'Environ 5 heures',
    text: 'Une traversée claire, rapide et confortable entre les deux villes.',
  },
  {
    title: 'Réservation simple',
    text: 'En ligne, par téléphone ou directement à l’agence.',
  },
];

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const onScroll = () => {
      const y = window.scrollY;
      bg.style.transform = `translateY(${y * 0.38}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="accueil">
      <div className="hero__bg">
        <img ref={bgRef} src={HERO_IMG} alt="Navigation Ibekelia" />
      </div>

      <div className="hero__content">

        <h1 className="hero__title">
          Découvrez les horizons du Gabon <em>par les eaux</em>
        </h1>

        <p className="hero__subtitle">
          Une traversée plus sereine, plus rapide et plus élégante sur le fleuve Ogooué.
        </p>

        <div className="hero__actions">
          <a className="btn-primary" href="#reservation" id="hero-reserve-btn">
            Réserver maintenant →
          </a>
          <a className="btn-outline" href="#horaires" id="hero-schedule-btn">
            Voir les horaires
          </a>
        </div>

        <div className="hero__trust" aria-label="Points de confiance">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="hero__trust-item">
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Défiler</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
