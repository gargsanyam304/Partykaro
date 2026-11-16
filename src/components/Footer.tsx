import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-logo">Partykaro</p>
          <p>
            Celebrations at hotels and restaurants — planned, styled, and run so
            you only show up to celebrate.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="/#celebrations">Celebrations</a>
            </li>
            <li>
              <a href="/#packages">Packages</a>
            </li>
            <li>
              <Link to="/book">Book</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Talk to us</h4>
          <ul>
            <li>
              <a href="mailto:hello@partykaro.party">hello@partykaro.party</a>
            </li>
            <li>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>Mumbai · Delhi · Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Partykaro. All celebrations arranged.</span>
      </div>
    </footer>
  )
}
