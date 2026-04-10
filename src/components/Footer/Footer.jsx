import { Link } from 'react-router-dom'
import './Footer.css'

/**
 * Footer — site-wide footer with navigation links and tagline.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">📚 EduWeb</Link>
          <p className="footer__tagline">
            Empowering the next generation of web developers — one lesson at a time.
          </p>
        </div>

        {/* Links columns */}
        <div className="footer__columns">
          <div className="footer__col">
            <h4 className="footer__col-title">Learn</h4>
            <ul className="footer__col-links">
              <li><Link to="/courses">All Courses</Link></li>
              <li><Link to="/courses/html-fundamentals">HTML</Link></li>
              <li><Link to="/courses/css-essentials">CSS</Link></li>
              <li><Link to="/courses/javascript-basics">JavaScript</Link></li>
              <li><Link to="/courses/react-for-beginners">React</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {currentYear} EduWeb. All rights reserved.</p>
          <p>Built with React &amp; Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
