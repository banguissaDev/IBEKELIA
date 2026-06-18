import { useInView } from '@/hooks/useInView';

const IMAGES = [
  '/IBEKELIA%20(12).jpeg',
  '/IBEKELIA%20(13).jpeg',
  '/IBEKELIA%20(15).jpeg',
  '/IBEKELIA%20(16).jpeg',
];

export default function FleetSection() {
  const [headerRef, headerVisible] = useInView();
  const [galleryRef, galleryVisible] = useInView();

  return (
    <section className="fleet" id="services">
      <div className="container">
        <div
          ref={headerRef}
          className={`fleet__header reveal reveal-up${headerVisible ? ' visible' : ''}`}
        >
          <span className="eyebrow">L&apos;expérience à bord</span>
          <h2 className="fleet__title">
            Découvrez le cœur de notre navigation fluviale sur l&apos;Ogooué
          </h2>
        </div>

        <div
          ref={galleryRef}
          className={`fleet__showcase-new reveal reveal-up${galleryVisible ? ' visible' : ''}`}
        >
          <div className="fleet__left-col">
            <div className="fleet__main-image-wrap">
              <img src={IMAGES[0]} alt="Express Ogooué - Vue principale" />
            </div>
            <div className="fleet__price-tag">
              <span>À partir de 18 000 XAF</span>
            </div>
          </div>

          <div className="fleet__right-col">
            <div className="fleet__desc-row">
              <p className="fleet__desc-text">
                Notre vedette assure chaque jour la liaison Port-Gentil - Lambaréné sur le fleuve Ogooué.
                Une alliance claire entre confort, sécurité et ponctualité pour tous vos déplacements.
              </p>
              <a href="#reservation" className="fleet__see-more">
                Réserver un trajet →
              </a>
            </div>

            <div className="fleet__side-images">
              <div className="fleet__side-img-tall">
                <img src={IMAGES[2]} alt="Intérieur vedette" />
              </div>
              <div className="fleet__side-img-wide">
                <img src={IMAGES[3]} alt="Navigation fleuve" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
