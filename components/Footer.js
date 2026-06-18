export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__upper">
        <div>
          <p className="footer__contact-label">Contactez-nous</p>
          <div className="footer__contact-info">
            <h3>+241 077 00 00 00</h3>
            <p>
              Terminal maritime, Quai Nord
              <br />
              Port-Gentil, Gabon
              <br />
              contact@ebekelia.ga
            </p>
          </div>
        </div>
        <div className="footer__big-brand">IBEKELIA</div>
      </div>

      <div className="footer__grid">
        <div>
          <div className="footer__logo">
            IBEK<span>ELIA</span>
          </div>
          <p className="footer__tagline">
            Navigation fluviale entre Port-Gentil et Lambaréné.
            Voyagez en toute sérénité sur le fleuve Ogooué depuis 2009.
          </p>
        </div>

        <div>
          <h4 className="footer__col-title">Navigation</h4>
          <div className="footer__col-links">
            <a href="#accueil">Accueil</a>
            <a href="#flotte">Notre flotte</a>
            <a href="#services">Services</a>
            <a href="#horaires">Horaires</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="footer__col-title">Services</h4>
          <div className="footer__col-links">
            <a href="#reservation">Réserver un billet</a>
            <a href="#services">Service premium</a>
            <a href="#reservation">Groupes et événements</a>
            <a href="#reservation">Fret et marchandises</a>
            <a href="#reservation">Abonnements</a>
          </div>
        </div>

        <div>
          <h4 className="footer__col-title">Informations</h4>
          <div className="footer__col-links">
            <a href="#flotte">À propos</a>
            <a href="#horaires">FAQ</a>
            <a href="#contact">Conditions générales</a>
            <a href="#contact">Politique de confidentialité</a>
            <a href="#contact">Recrutement</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© {new Date().getFullYear()} Ibekelia. Tous droits réservés.</p>
        <div className="footer__social" style={{ display: 'flex', gap: '12px' }}>
          <a href="#" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a href="#" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="#" aria-label="Twitter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
          </a>
          <a href="#" aria-label="WhatsApp" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
