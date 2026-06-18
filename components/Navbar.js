import { useEffect, useState } from 'react';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#flotte', label: 'Notre flotte' },
  { href: '#services', label: 'Services' },
  { href: '#horaires', label: 'Horaires' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a className="navbar__logo" href="#accueil" aria-label="Ibekelia - retour à l'accueil">
        IBEK<span>ELIA</span>
      </a>

      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      
      <button
        type="button"
        className="navbar__hamburger"
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="navbar-mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '' }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '' }} />
      </button>

      {menuOpen && (
        <div className="navbar__mobile-menu" id="navbar-mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="navbar__cta navbar__cta--mobile" href="#reservation" onClick={() => setMenuOpen(false)}>
            Réserver
          </a>
        </div>
      )}

      <style jsx>{`
        .navbar__mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(10, 31, 28, 0.97);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          padding: 80px 40px 40px;
        }
        .navbar__mobile-menu a {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 600;
          color: var(--white);
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .navbar__mobile-menu a:hover {
          color: var(--gold);
        }
      `}</style>
    </nav>
  );
}
