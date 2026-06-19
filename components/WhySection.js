import { useInView } from '@/hooks/useInView';

const WHY_ITEMS = [
  {
    title: 'Rapidité et ponctualité',
    desc: "Nos bateaux partent à l'heure. La traversée Port-Gentil - Lambaréné dure environ 5 heures.",
  },
  {
    title: 'Sécurité garantie',
    desc: 'Flotte homologuée, équipages certifiés et équipements de sauvetage de dernière génération.',
  },
  {
    title: 'Confort à bord',
    desc: 'Sièges climatisés, restauration, Wi-Fi à bord et espaces détente pour un voyage agréable.',
  },
  {
    title: 'Tarifs accessibles',
    desc: 'Des prix compétitifs avec des offres spéciales pour les familles, étudiants et abonnements.',
  },
  {
    title: 'Escales multiples',
    desc: 'Plusieurs arrêts le long du fleuve Ogooué pour desservir les communautés riveraines.',
  },
];

export default function WhySection() {
  const [leftRef, leftVisible] = useInView();
  const [rightRef, rightVisible] = useInView();

  return (
    <section className="why">
      <div className="container">
        <div className="why__inner">
          <div ref={leftRef} className={`reveal reveal-left${leftVisible ? ' visible' : ''}`}>
            <span className="eyebrow">Pourquoi nous choisir</span>
            <h2 className="why__title">Pourquoi voyager avec Ibekelia ?</h2>
            <div className="section-divider" />
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginTop: 8 }}>
              Ibekelia est votre partenaire de confiance pour la navigation fluviale au Gabon.
              Nous connectons Port-Gentil à Lambaréné avec rapidité, sécurité et confort.
            </p>
          </div>

          <div ref={rightRef} className={`why__right reveal reveal-right${rightVisible ? ' visible' : ''}`}>
            <p className="why__right-text">
              Notre flotte moderne et nos équipes dédiées assurent chaque jour des traversées
              sûres et confortables sur le fleuve Ogooué. Rejoignez les milliers de voyageurs
              qui nous font confiance pour leurs déplacements quotidiens ou leurs escapades.
            </p>

            <ul className="why__list">
              {WHY_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className={`why__item reveal reveal-fade${rightVisible ? ' visible' : ''} delay-${i + 1}`}
                >
                  <div className="why__item-icon">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
