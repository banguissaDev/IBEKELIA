import { useInView } from '@/hooks/useInView';

const DESTINATIONS = [
  {
    title: 'Hôpital Albert Schweitzer',
    desc: "Un lieu historique fondé à Lambaréné, empreint de paix et d'histoire médicale au cœur de la forêt.",
    img: '/hopital_albert_schweitzer.png',
  },
  {
    title: 'Fleuve Ogooué',
    desc: 'Naviguez sur la plus majestueuse voie fluviale du Gabon, véritable artère vitale et sauvage.',
    img: '/fleuve_ogooue.png',
  },
  {
    title: 'Lac Zilé',
    desc: 'Un écosystème paisible et préservé, offrant des panoramas spectaculaires pour les amoureux de la nature.',
    img: '/lac_zile.png',
  },
  {
    title: 'Villages de pêcheurs',
    desc: 'Imprégnez-vous de la vie authentique et des traditions des communautés locales du Moyen-Ogooué.',
    img: '/villages_pecheurs_moyen_ogooue.png',
  },
  {
    title: 'Îles et chenaux',
    desc: 'Explorez le fascinant labyrinthe aquatique formé par le réseau complexe de l\'Ogooué.',
    img: '/iles_chenaux_ogooue.png',
  },
  {
    title: 'Couchers de soleil',
    desc: 'Vivez des moments magiques inoubliables où le ciel gabonais s\'embrase sur les eaux calmes.',
    img: '/coucher_soleil_ogooue.png',
  },
];

export default function DestinationsSection() {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section className="destinations" id="decouverte">
      <div className="container">
        <div
          ref={headerRef}
          className={`destinations__header reveal reveal-up${headerVisible ? ' visible' : ''}`}
        >
          <span className="eyebrow eyebrow--gold">À la découverte du Moyen-Ogooué</span>
          <h2 className="destinations__title">Lieux incontournables</h2>
          <p className="destinations__subtitle">
            Plongez au cœur d'un environnement riche, où la nature et l'histoire se rencontrent le long de nos traversées.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`destinations__grid reveal reveal-fade${gridVisible ? ' visible' : ''}`}
        >
          {DESTINATIONS.map((dest, i) => (
            <div key={i} className="destination-card">
              <div className="destination-card__img-wrap">
                <img src={dest.img} alt={dest.title} className="destination-card__img" loading="lazy" />
              </div>
              <div className="destination-card__content">
                <h3 className="destination-card__title">{dest.title}</h3>
                <p className="destination-card__desc">{dest.desc}</p>
                <a href="#reservation" className="destination-card__link">
                  Découvrir <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="destinations__footer">
          <a href="#reservation" className="btn-primary">
            Planifier votre voyage
          </a>
        </div>
      </div>
    </section>
  );
}
