import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/#celebrations', label: 'Celebrations' },
  { to: '/#how', label: 'How it works' },
  { to: '/#packages', label: 'Packages' },
  { to: '/partners', label: 'Partners' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location])

  return (
    <header className={`nav ${scrolled || !isHome ? 'nav-solid' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label="Partykaro home">
          Partykaro
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map((link) =>
            link.to.startsWith('/#') ? (
              <a key={link.to} href={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ) : (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ),
          )}
          <Link to="/book" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Plan a celebration
          </Link>
        </nav>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
