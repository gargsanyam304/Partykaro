import { FormEvent, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Book.css'

const occasionOptions = [
  'Birthday',
  'Anniversary',
  'Baby shower',
  'Kids party',
  'Corporate',
  'Festive dinner',
  'Other',
]

export default function Book() {
  useReveal()
  const [params] = useSearchParams()
  const initialPackage = params.get('package') ?? ''
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    date: '',
    guests: '',
    occasion: 'Birthday',
    packageId: initialPackage,
    notes: '',
  })

  const packageLabel = useMemo(() => {
    const map: Record<string, string> = {
      intimate: 'Intimate',
      signature: 'Signature',
      grand: 'Grand',
    }
    return map[form.packageId] ?? 'Not sure yet'
  }, [form.packageId])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="book-page">
      <section className="book-hero">
        <div className="container">
          <p className="eyebrow">Plan with Partykaro</p>
          <h1>Tell us about the celebration</h1>
          <p>
            Share a few details. A planner will reply with venue ideas, a rough
            timeline, and next steps — usually within one business day.
          </p>
        </div>
      </section>

      <section className="book-body section">
        <div className="container book-layout">
          <aside className="book-aside reveal">
            <h2>What happens next</h2>
            <ol>
              <li>We review your occasion, city, and budget.</li>
              <li>You get 2–3 venue and package options.</li>
              <li>We lock the plan and handle every arrangement.</li>
            </ol>
            <div className="aside-note">
              <strong>Prefer WhatsApp?</strong>
              <p>+91 98765 43210 · hello@partykaro.party</p>
            </div>
          </aside>

          <div className="book-form-wrap reveal reveal-delay-1">
            {submitted ? (
              <div className="book-success" role="status">
                <h2>Brief received</h2>
                <p>
                  Thanks, {form.name.split(' ')[0] || 'there'}. We’ve noted your{' '}
                  {form.occasion.toLowerCase()} for {form.city || 'your city'}
                  {form.date ? ` on ${form.date}` : ''}. A Partykaro planner will
                  reach out soon about the {packageLabel} plan.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another brief
                </button>
              </div>
            ) : (
              <form className="book-form" onSubmit={onSubmit}>
                <div className="field-row">
                  <label>
                    Full name
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                    />
                  </label>
                </div>

                <div className="field-row">
                  <label>
                    Phone
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 …"
                    />
                  </label>
                  <label>
                    City
                    <input
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Mumbai, Delhi…"
                    />
                  </label>
                </div>

                <div className="field-row">
                  <label>
                    Occasion
                    <select
                      value={form.occasion}
                      onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    >
                      {occasionOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Preferred package
                    <select
                      value={form.packageId}
                      onChange={(e) => setForm({ ...form, packageId: e.target.value })}
                    >
                      <option value="">Not sure yet</option>
                      <option value="intimate">Intimate</option>
                      <option value="signature">Signature</option>
                      <option value="grand">Grand</option>
                    </select>
                  </label>
                </div>

                <div className="field-row">
                  <label>
                    Date
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                  </label>
                  <label>
                    Guests
                    <input
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      placeholder="Approx. count"
                    />
                  </label>
                </div>

                <label>
                  Anything else?
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Theme ideas, venue preferences, must-haves…"
                  />
                </label>

                <button type="submit" className="btn btn-primary">
                  Submit celebration brief
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
