import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

/**
 * Navbar — top navigation bar
 * Uses NavLink so the active page link gets an "active" class automatically.
 * Includes a hamburger menu that toggles on mobile.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/',        label: 'Home'    },
    { to: '/courses', label: 'Courses' },
    { to: '/about',   label: 'About'   },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">📚</span>
          <span className="navbar__logo-text">EduWeb</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <div className="navbar__cta">
          <Link to="/courses" className="navbar__btn">
            Browse Courses
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className={`navbar__hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`navbar__hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`navbar__hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="navbar__mobile-menu" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/courses" className="navbar__btn navbar__btn--mobile" onClick={() => setMenuOpen(false)}>
            Browse Courses
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
