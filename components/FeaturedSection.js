import { useInView } from '@/hooks/useInView';
import { useParallax } from '@/hooks/useParallax';

const IMAGE = '/IBEKELIA%20(15).jpeg';

export default function FeaturedSection() {
  const [topRef, topVisible] = useInView();
  const [titleRef, titleVisible] = useInView();
  const [imgRef, imgVisible] = useInView();
  const parallaxRef = useParallax(0.22);

  return (
    <section className="featured" id="flotte">
      <div className="container">

        <h2
          ref={titleRef}
          className={`featured__title reveal reveal-up${titleVisible ? ' visible' : ''}`}
        >
          Nouveaux horizons de navigation sur le fleuve Ogooué
        </h2>
      </div>

      <div
        ref={imgRef}
        className={`featured__image-block parallax-container reveal reveal-scale${imgVisible ? ' visible' : ''}`}
      >
        <img
          ref={parallaxRef}
          src={IMAGE}
          alt="Bateau Ibekelia sur l'Ogooué"
          className="parallax-img"
        />

        <div className="featured__image-badge">
          <span>Départ quotidien</span>
          <strong>Port-Gentil ↔ Lambaréné</strong>
        </div>
      </div>
    </section>
  );
}
