import { Link } from 'react-router-dom'
import './CourseCard.css'

/**
 * CourseCard — displays a summary card for a single course.
 *
 * Props:
 *   course — course object from data/courses.js
 *     { id, title, tagline, level, duration, lessons, price, thumbnail, color }
 */
function CourseCard({ course }) {
  const { id, title, tagline, level, duration, lessons, price, thumbnail, color } = course

  return (
    <Link to={`/courses/${id}`} className="course-card" aria-label={`View ${title} course`}>
      {/* Thumbnail */}
      <div className="course-card__thumbnail" style={{ backgroundColor: color }}>
        <span className="course-card__icon" aria-hidden="true">{thumbnail}</span>
      </div>

      {/* Body */}
      <div className="course-card__body">
        <div className="course-card__meta">
          <span className={`badge badge--${level.toLowerCase()}`}>{level}</span>
          <span className="course-card__duration">⏱ {duration}</span>
        </div>

        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__tagline">{tagline}</p>

        <div className="course-card__footer">
          <span className="course-card__lessons">📖 {lessons.length} lessons</span>
          <span className={`course-card__price ${price === 'Free' ? 'course-card__price--free' : ''}`}>
            {price}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
