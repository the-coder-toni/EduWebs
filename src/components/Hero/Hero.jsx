import Button from '../Button/Button'
import './Hero.css'

/**
 * Hero — large landing banner shown at the top of the home page.
 *
 * Props:
 *   title      — main headline
 *   subtitle   — supporting text
 *   ctaLabel   — primary button label
 *   ctaLink    — primary button destination
 *   ctaLabel2  — secondary button label (optional)
 *   ctaLink2   — secondary button destination (optional)
 */
function Hero({
  title = 'Learn Web Development from Scratch',
  subtitle = 'Expert-led courses on HTML, CSS, JavaScript, React, and more. Start learning for free today.',
  ctaLabel = 'Browse Courses',
  ctaLink = '/courses',
  ctaLabel2,
  ctaLink2 = '/about',
}) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">🚀 Start your journey</span>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>

          <div className="hero__actions">
            <Button variant="primary" size="lg" to={ctaLink}>{ctaLabel}</Button>
            {ctaLabel2 && (
              <Button variant="outline" size="lg" to={ctaLink2}>{ctaLabel2}</Button>
            )}
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">6+</span>
              <span className="hero__stat-label">Courses</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">10k+</span>
              <span className="hero__stat-label">Students</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">3</span>
              <span className="hero__stat-label">Expert Instructors</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__code-window">
            <div className="hero__code-titlebar">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
              <span className="hero__code-filename">index.html</span>
            </div>
            <pre className="hero__code-body">
              <code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Welcome to EduWeb 🎉</p>
  </body>
</html>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
