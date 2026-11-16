import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import {
  celebrations,
  faqs,
  gallery,
  packages,
  steps,
  testimonials,
  venues,
} from '../data/content'
import './Home.css'

export default function Home() {
  useReveal()

  return (
    <main>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
          <div className="hero-wash" />
        </div>
        <div className="container hero-content">
          <p className="hero-brand">Partykaro</p>
          <h1>Celebrations, fully arranged</h1>
          <p className="hero-lead">
            We book the hotel or restaurant, style the room, and run every detail
            — so birthdays and nights that matter feel effortless.
          </p>
          <div className="hero-actions">
            <Link to="/book" className="btn btn-light">
              Plan a celebration
            </Link>
            <a href="#how" className="btn btn-ghost hero-ghost">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section className="promise section">
        <div className="container promise-grid">
          <div className="reveal">
            <h2>One team between you and the perfect night</h2>
          </div>
          <div className="reveal reveal-delay-1">
            <p>
              Dealers and venues already make celebrations happen offline. Partykaro
              brings that craft online — matching you with hotels, restaurants,
              décor, cake, and hosts under one plan.
            </p>
            <p>
              You choose the occasion. We orchestrate the rest: venue, theme,
              timeline, and on-site coordination until the last guest leaves.
            </p>
          </div>
        </div>
      </section>

      <section id="celebrations" className="celebrations section">
        <div className="container">
          <div className="section-head reveal">
            <h2>Occasions we stage</h2>
            <p>
              Birthdays first — and every gathering that deserves a beautiful
              room and a calm host.
            </p>
          </div>
          <div className="celeb-list">
            {celebrations.map((item, i) => (
              <article
                key={item.title}
                className={`celeb-row reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="celeb-copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <div className="celeb-image">
                  <img src={item.image} alt="" loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="how section">
        <div className="container">
          <div className="section-head reveal">
            <h2>How Partykaro works</h2>
            <p>Three clear steps from idea to a ready celebration.</p>
          </div>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.num} className={`reveal reveal-delay-${i + 1}`}>
                <span className="step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="venues section">
        <div className="container">
          <div className="section-head reveal">
            <h2>Venues that feel like yours</h2>
            <p>
              Hotels and restaurants curated for private parties — more partners
              joining every month.
            </p>
          </div>
          <div className="venue-strip">
            {venues.map((venue, i) => (
              <figure key={venue.name} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <img src={venue.image} alt="" loading="lazy" />
                <figcaption>
                  <strong>{venue.name}</strong>
                  <span>
                    {venue.type} · {venue.city}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="packages section">
        <div className="container">
          <div className="section-head reveal">
            <h2>Packages that scale with the night</h2>
            <p>Pick a starting point — every plan can be tailored to your guest list.</p>
          </div>
          <div className="package-grid">
            {packages.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`package reveal reveal-delay-${i + 1} ${pkg.featured ? 'featured' : ''}`}
              >
                <div className="package-top">
                  <span className="package-note">{pkg.note}</span>
                  <h3>{pkg.name}</h3>
                  <p className="package-price">
                    {pkg.price}
                    <span> {pkg.note === 'most loved' ? '' : pkg.note}</span>
                  </p>
                  <p className="package-guests">{pkg.guests}</p>
                </div>
                <ul>
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link to={`/book?package=${pkg.id}`} className="btn btn-primary">
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery section">
        <div className="container">
          <div className="section-head reveal">
            <h2>Moments we leave behind</h2>
            <p>A glimpse of nights styled across partner floors and dining rooms.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <div key={src} className={`gallery-item reveal reveal-delay-${(i % 3) + 1}`}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="voices section">
        <div className="container">
          <div className="section-head reveal">
            <h2>Words from nights well spent</h2>
          </div>
          <div className="voice-grid">
            {testimonials.map((t, i) => (
              <blockquote key={t.name} className={`reveal reveal-delay-${i + 1}`}>
                <p>“{t.quote}”</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-band">
        <div className="container partner-band-inner reveal">
          <div>
            <h2>Dealers & venues — grow with Partykaro</h2>
            <p>
              We’re opening our partner network for décor teams, bakers,
              entertainers, hotels, and restaurants. Get discovered by guests who
              are ready to celebrate.
            </p>
          </div>
          <Link to="/partners" className="btn btn-light">
            Become a partner
          </Link>
        </div>
      </section>

      <section className="faq section">
        <div className="container faq-layout">
          <div className="section-head reveal">
            <h2>Questions, answered</h2>
            <p>Everything people ask before they book their first Partykaro night.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <details key={item.q} className={`reveal reveal-delay-${(i % 3) + 1}`} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner reveal">
          <h2>Your next celebration starts with one brief</h2>
          <p>Share the occasion — we’ll design the night around it.</p>
          <Link to="/book" className="btn btn-light">
            Start planning
          </Link>
        </div>
      </section>
    </main>
  )
}
