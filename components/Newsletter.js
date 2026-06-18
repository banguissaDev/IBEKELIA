import { useInView } from '@/hooks/useInView';
import { useParallax } from '@/hooks/useParallax';

const BG_IMG = '/IBEKELIA%20(6).jpeg';

export default function Newsletter() {
  const [contentRef, contentVisible] = useInView();
  const parallaxRef = useParallax(0.18);

  return (
    <section className="newsletter">
      <div className="newsletter__bg">
        <img ref={parallaxRef} src={BG_IMG} alt="Fleuve Ogooué" />
      </div>

      <div
        ref={contentRef}
        className={`newsletter__content reveal reveal-up${contentVisible ? ' visible' : ''}`}
      >
        <span className="eyebrow eyebrow--gold">Restez informé</span>
        <h2 className="newsletter__title">
          Recevez nos <em>offres exclusives</em> et actualités
        </h2>

        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="newsletter__input"
            type="email"
            placeholder="Votre adresse e-mail"
            id="newsletter-email"
            aria-label="Adresse e-mail"
          />
          <button className="newsletter__btn" type="submit" id="newsletter-submit-btn">
            S&apos;inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
