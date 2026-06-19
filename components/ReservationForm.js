import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { CheckCircle2, RefreshCw, CreditCard } from 'lucide-react';

const ROUTES = [
  { value: 'pg-lam', label: 'Port-Gentil → Lambaréné' },
  { value: 'lam-pg', label: 'Lambaréné → Port-Gentil' },
];

const CLASSES = [
  { value: 'eco', label: 'Place Éco - 18 000 XAF' },
  { value: 'vip', label: 'Place VIP - 23 000 XAF' },
];

export default function ReservationForm() {
  const [sectionRef, sectionVisible] = useInView();
  const [formRef, formVisible] = useInView();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    email: '',
    route: 'pg-lam',
    date: '',
    passagers: '1',
    classe: 'eco',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="reservation__inner">
          <div ref={sectionRef} className={`reservation__info reveal reveal-left${sectionVisible ? ' visible' : ''}`}>
            <span className="eyebrow eyebrow--gold">Réservation</span>
            <h2 className="reservation__title">
              Réservez votre <em>traversée</em> en quelques clics
            </h2>
            <p className="reservation__desc">
              Planifiez votre voyage sur le fleuve Ogooué en remplissant le formulaire ci-contre.
              Confirmation par SMS et e-mail sous 30 minutes.
            </p>

            <div className="reservation__highlights">
              <div className="reservation__highlight">
                <span className="reservation__highlight-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={20} />
                </span>
                <div>
                  <strong>Confirmation immédiate</strong>
                  <p>Recevez votre billet par SMS et e-mail.</p>
                </div>
              </div>
              <div className="reservation__highlight">
                <span className="reservation__highlight-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <RefreshCw size={20} />
                </span>
                <div>
                  <strong>Annulation gratuite</strong>
                  <p>Jusqu&apos;à 24h avant le départ, sans frais.</p>
                </div>
              </div>
              <div className="reservation__highlight">
                <span className="reservation__highlight-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={20} />
                </span>
                <div>
                  <strong>Paiement flexible</strong>
                  <p>Mobile Money, carte bancaire ou en agence.</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className={`reservation__form-wrap reveal reveal-right${formVisible ? ' visible' : ''}`}>
            <form className="reservation__form" onSubmit={handleSubmit}>
              <h3 className="reservation__form-title">Formulaire de réservation</h3>

              <div className="reservation__field-row">
                <div className="reservation__field">
                  <label htmlFor="res-nom">Nom complet</label>
                  <input
                    id="res-nom"
                    name="nom"
                    type="text"
                    placeholder="Jean Moussavou"
                    value={form.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="reservation__field">
                  <label htmlFor="res-telephone">Téléphone</label>
                  <input
                    id="res-telephone"
                    name="telephone"
                    type="tel"
                    placeholder="+241 07 00 00 00"
                    value={form.telephone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="reservation__field">
                <label htmlFor="res-email">E-mail</label>
                <input
                  id="res-email"
                  name="email"
                  type="email"
                  placeholder="jean@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="reservation__field">
                <label htmlFor="res-route">Itinéraire</label>
                <select id="res-route" name="route" value={form.route} onChange={handleChange}>
                  {ROUTES.map((route) => (
                    <option key={route.value} value={route.value}>
                      {route.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="reservation__field-row">
                <div className="reservation__field">
                  <label htmlFor="res-date">Date de départ</label>
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="reservation__field">
                  <label htmlFor="res-passagers">Passagers</label>
                  <select id="res-passagers" name="passagers" value={form.passagers} onChange={handleChange}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'passager' : 'passagers'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="reservation__field">
                <label htmlFor="res-classe">Classe</label>
                <select id="res-classe" name="classe" value={form.classe} onChange={handleChange}>
                  {CLASSES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="reservation__submit" id="reservation-submit-btn">
                Confirmer la réservation →
              </button>

              {submitted && (
                <p className="reservation__success" role="status">
                  Votre demande a bien été envoyée. Nous vous contacterons sous peu.
                </p>
              )}

              <p className="reservation__disclaimer">
                En réservant, vous acceptez nos conditions générales de vente.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
