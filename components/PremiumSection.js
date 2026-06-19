import { useInView } from '@/hooks/useInView';
import { Sofa, Utensils, Wifi, Luggage } from 'lucide-react';

const MAIN_IMG = '/IBEKELIA%20(2).jpeg';
const SIDE_IMG = '/IBEKELIA%20(3).jpeg';

const FEATURES = [
  { icon: <Sofa size={24} />, title: 'Cabines climatisées', desc: 'Sièges confortables et espace détente pour tous.' },
  { icon: <Utensils size={24} />, title: 'Restauration à bord', desc: 'Plats chauds et boissons fraîches pendant la traversée.' },
  { icon: <Wifi size={24} />, title: 'Wi-Fi à bord', desc: 'Connexion internet haut débit sur toute la ligne.' },
  { icon: <Luggage size={24} />, title: 'Bagages inclus', desc: "Jusqu'à 30 kg de bagages inclus dans votre billet." },
];

export default function PremiumSection() {
  const [headerRef, headerVisible] = useInView();
  const [mediaRef, mediaVisible] = useInView();
  const [layoutRef, layoutVisible] = useInView();

  return (
    <section className="premium">
      <div className="container">
        <div ref={headerRef} className="premium__headers">
          <div className={`premium__row reveal reveal-up${headerVisible ? ' visible' : ''}`}>
            <h3 className="premium__row-title">Une navigation fiable sur l&apos;Ogooué</h3>
            <p className="premium__row-desc">
              Départs quotidiens garantis toute l&apos;année, horaires respectés et équipages certifiés :
              Ibekelia est le partenaire de confiance pour vos déplacements sur le fleuve.
            </p>
          </div>

          <div className={`premium__row reveal reveal-up delay-2${headerVisible ? ' visible' : ''}`}>
            <h3 className="premium__row-title">Le passager au centre de tout</h3>
            <p className="premium__row-desc">
              Chaque détail est pensé pour vous — de l&apos;accueil à l&apos;embarquement jusqu&apos;à l&apos;arrivée
              à destination. Un service humain, attentif et disponible à chaque étape du voyage.
            </p>
          </div>
        </div>

        <div ref={mediaRef} className={`premium__media-intro reveal reveal-up${mediaVisible ? ' visible' : ''}`}>
          <span className="eyebrow eyebrow--muted eyebrow--plain">À bord</span>
          <h3 className="premium__media-title">Confort, sécurité et rapidité à chaque traversée</h3>
          <p className="premium__media-desc">
            Cabines climatisées, restauration à bord, Wi-Fi et bagages inclus : une expérience fluide,
            agréable et rassurante du départ à l&apos;arrivée.
          </p>
        </div>

        <div ref={layoutRef} className={`premium__images-layout reveal reveal-scale${layoutVisible ? ' visible' : ''}`}>
          <div className="premium__img-small">
            <img src={SIDE_IMG} alt="Service à bord" loading="lazy" />
          </div>
          <div className="premium__img-large">
            <img src={MAIN_IMG} alt="Confort voyage" loading="lazy" />
          </div>
        </div>

        <div className="premium__features premium__features--list">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="premium__feature">
              <div className="premium__feature-icon">{feature.icon}</div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
