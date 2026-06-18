import { useInView } from '@/hooks/useInView';

const SCHEDULE = [
  { depart: '06:00', arrivee: '09:00', route: 'Port-Gentil → Lambaréné', jours: 'Lun - Ven' },
  { depart: '09:30', arrivee: '12:30', route: 'Port-Gentil → Lambaréné', jours: 'Lun - Ven' },
  { depart: '14:00', arrivee: '17:00', route: 'Lambaréné → Port-Gentil', jours: 'Lun - Ven' },
  { depart: '16:30', arrivee: '19:30', route: 'Lambaréné → Port-Gentil', jours: 'Lun - Ven' },
];

const IMAGES = [
  {
    src: '/PORT-GENTIL.jpg',
    label: 'Départ',
    city: 'Port-Gentil',
    desc: 'Terminal maritime · Quai Nord',
  },
  {
    src: '/LAMABARENE.jpg',
    label: 'Destination',
    city: 'Lambaréné',
    desc: "Rive droite de l'Ogooué",
  },
];

export default function RoutesSection() {
  const [leftRef, leftVisible] = useInView();
  const [rightRef, rightVisible] = useInView();
  const [imagesRef, imagesVisible] = useInView();

  return (
    <section className="routes" id="horaires">
      <div className="container">
        <div className="routes__top">
          <div ref={leftRef} className={`reveal reveal-left${leftVisible ? ' visible' : ''}`}>
            <span className="eyebrow">Disponible du lundi au vendredi</span>
            <h2 className="routes__title">Service Port-Gentil - Lambaréné du lundi au vendredi</h2>
            <p className="routes__desc">
              Pour vos déplacements professionnels et trajets planifiés, notre ligne fluviale circule
              du lundi au vendredi avec des départs réguliers sur le fleuve Ogooué.
            </p>
            <a href="#contact" className="routes__cta-link">
              Contactez-nous <span>→</span>
            </a>
          </div>

          <div ref={rightRef} className={`reveal reveal-right${rightVisible ? ' visible' : ''}`}>
            <div className="routes__schedule">
              <div className="routes__schedule-title">
                Horaires des traversées
              </div>
              {SCHEDULE.map((schedule, i) => (
                <div key={i} className="routes__schedule-row">
                  <div>
                    <strong>{schedule.depart}</strong>
                    <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>→</span>
                    <strong>{schedule.arrivee}</strong>
                  </div>
                  <span>{schedule.route}</span>
                  <span style={{ color: 'var(--teal)', fontWeight: 600 }}>{schedule.jours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={imagesRef} className="routes__images">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`routes__img-wrap reveal reveal-up${imagesVisible ? ' visible' : ''} delay-${i * 2 + 1}`}
            >
              <img src={img.src} alt={img.city} loading="lazy" />
              <div className="routes__img-label">
                <p>{img.label}</p>
                <h4>{img.city}</h4>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
                  {img.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
