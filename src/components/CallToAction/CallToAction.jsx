import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './CallToAction.css'

/**
 * CallToAction — full-width banner urging the user to take an action.
 *
 * Props:
 *   title    — headline
 *   subtitle — supporting copy
 *   btnLabel — button text
 *   btnLink  — destination URL
 */
function CallToAction({
  title = 'Ready to Start Learning?',
  subtitle = 'Join thousands of students already building their web development skills.',
  btnLabel = 'Browse All Courses',
  btnLink = '/courses',
}) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__title">{title}</h2>
        <p className="cta__subtitle">{subtitle}</p>
        <Link to={btnLink}>
          <Button variant="secondary" size="lg">{btnLabel}</Button>
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
