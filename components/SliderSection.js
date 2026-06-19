import { useEffect, useState } from 'react';

const SLIDES = [
  {
    src: '/img-silde (1).jpeg',
    alt: 'Navigation sur le fleuve Ogooué',
    label: 'Confort et modernité de notre navire',
  },
  {
    src: '/img-silde (2).jpeg',
    alt: 'Intérieur ou pont du bateau',
    label: 'Espace passagers climatisé et agréable',
  },
  {
    src: '/img-silde (3).jpeg',
    alt: 'Bateaux sur le fleuve',
    label: 'Navigation stable et sécurisée sur le fleuve Ogooué',
  },
  {
    src: '/img-silde (4).jpeg',
    alt: 'Vue extérieure de notre bateau',
    label: 'Équipements de dernière génération pour votre voyage',
  },
  {
    src: '/img-silde (5).jpeg',
    alt: 'Bateau en mouvement',
    label: 'Une expérience de traversée premium à chaque instant',
  },
];

export default function SliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-section">
      <div className="container slider-section__inner">
        <div className="slider-section__top">
          <h2>Aperçu de notre bateau</h2>
          <p className="slider-section__subtitle">Découvrez le design moderne, l’aménagement intérieur et la structure de notre navire.</p>
        </div>

        <div className="slider">
          <div className="slider__stage">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.src}
                className={`slider__slide${index === activeIndex ? ' active' : ''}`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="slider__image"
                />
                <div className="slider__overlay" />
                <div className="slider__caption">
                  <p>{slide.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="slider__dots">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider__dot${index === activeIndex ? ' active' : ''}`}
                aria-label={`Afficher la diapositive ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
