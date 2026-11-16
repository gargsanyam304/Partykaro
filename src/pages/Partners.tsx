import { FormEvent, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Partners.css'

const benefits = [
  {
    title: 'Qualified celebration leads',
    copy: 'Guests come to Partykaro ready to book hotels, restaurants, and full arrangements.',
  },
  {
    title: 'Shared planning workspace',
    copy: 'Briefs, dates, and guest counts land in one place so you stop chasing WhatsApp threads.',
  },
  {
    title: 'Brand association',
    copy: 'Appear in our venue and dealer network as we expand city by city.',
  },
  {
    title: 'Flexible onboarding',
    copy: 'Join as a décor dealer, baker, entertainer, hotel, or restaurant — we tailor the fit.',
  },
]

const partnerTypes = [
  'Hotel',
  'Restaurant',
  'Décor / florist',
  'Baker / cake',
  'Entertainment',
  'Other dealer',
]

export default function Partners() {
  useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    business: '',
    contact: '',
    email: '',
    phone: '',
    city: '',
    type: 'Hotel',
    note: '',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="partners-page">
      <section className="partners-hero">
        <div className="partners-hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80"
            alt=""
          />
          <div className="partners-wash" />
        </div>
        <div className="container partners-hero-content">
          <p className="partners-brand">Partykaro Partners</p>
          <h1>Bring your craft to celebrations online</h1>
          <p>
            Dealers already run birthday parties offline. We’re building the layer
            that connects guests, hotels, restaurants, and specialists — and we’d
            like you on it.
          </p>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <div className="section-head reveal">
            <h2>Why partner with Partykaro</h2>
            <p>Grow private-party revenue without building your own booking brand.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((b, i) => (
              <article key={b.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <span>0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section apply">
        <div className="container apply-layout">
          <div className="reveal">
            <h2>Apply to the network</h2>
            <p>
              Tell us what you offer and where you operate. Our partnerships team
              reviews applications weekly and replies with next steps.
            </p>
            <ul className="apply-points">
              <li>Hotels & restaurants with private dining or banquet space</li>
              <li>Décor dealers, florists, and theme specialists</li>
              <li>Cake studios, entertainers, photographers</li>
            </ul>
          </div>

          <div className="apply-form-wrap reveal reveal-delay-1">
            {submitted ? (
              <div className="apply-success" role="status">
                <h3>Application received</h3>
                <p>
                  Thanks, {form.contact.split(' ')[0] || 'there'}. We’ll review{' '}
                  {form.business || 'your business'} and get back shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form className="apply-form" onSubmit={onSubmit}>
                <label>
                  Business name
                  <input
                    required
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                  />
                </label>
                <div className="field-row">
                  <label>
                    Contact person
                    <input
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    />
                  </label>
                  <label>
                    Partner type
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      {partnerTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="field-row">
                  <label>
                    Email
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </label>
                </div>
                <label>
                  City / region
                  <input
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </label>
                <label>
                  Tell us about your work
                  <textarea
                    rows={4}
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    placeholder="Venues, capacity, services, past celebrations…"
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Apply as a partner
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
