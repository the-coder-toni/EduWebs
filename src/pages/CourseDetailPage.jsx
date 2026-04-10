import { useParams, Link } from 'react-router-dom'
import LessonList from '../components/LessonList/LessonList'
import InstructorCard from '../components/InstructorCard/InstructorCard'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import CallToAction from '../components/CallToAction/CallToAction'
import NotFound from '../components/NotFound/NotFound'
import { courses } from '../data/courses'
import './CourseDetailPage.css'

/**
 * CourseDetailPage — full detail view for a single course.
 * Reads the :id URL param and finds the matching course from mock data.
 *
 * Sections:
 *   - Course header (title, level, duration, price)
 *   - Description
 *   - What you'll learn
 *   - Lesson curriculum (LessonList)
 *   - Instructor bio (InstructorCard)
 *   - Progress bar (demo, static at 0%)
 *   - CallToAction footer
 */
function CourseDetailPage() {
  const { id } = useParams()
  const course = courses.find(c => c.id === id)

  if (!course) {
    return <NotFound />
  }

  const { title, tagline, level, duration, lessons, price, thumbnail, color, description, instructor } = course

  const learningPoints = [
    'Understand core concepts through clear explanations',
    'Practice with hands-on exercises and mini projects',
    'Build real things you can add to your portfolio',
    'Ask questions and get community support',
  ]

  return (
    <div className="course-detail">
      {/* Hero banner */}
      <div className="course-detail__hero" style={{ backgroundColor: color }}>
        <div className="container course-detail__hero-inner">
          <div className="course-detail__hero-text">
            {/* Breadcrumb */}
            <nav className="course-detail__breadcrumb" aria-label="Breadcrumb">
              <Link to="/courses">Courses</Link>
              <span aria-hidden="true"> / </span>
              <span>{title}</span>
            </nav>

            <span className={`badge badge--${level.toLowerCase()}`}>{level}</span>
            <h1 className="course-detail__title">{title}</h1>
            <p className="course-detail__tagline">{tagline}</p>

            <div className="course-detail__meta">
              <span>⏱ {duration}</span>
              <span>📖 {lessons.length} lessons</span>
              <span>👤 {instructor.name}</span>
            </div>

            <div className="course-detail__price-row">
              <span className={`course-detail__price ${price === 'Free' ? 'course-detail__price--free' : ''}`}>
                {price}
              </span>
              <button className="course-detail__enroll-btn">
                {price === 'Free' ? 'Start for Free' : 'Enroll Now'}
              </button>
            </div>
          </div>

          <div className="course-detail__hero-icon" aria-hidden="true">
            {thumbnail}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container course-detail__body">
        <div className="course-detail__main">
          {/* Description */}
          <section className="course-detail__section">
            <h2 className="course-detail__section-title">About This Course</h2>
            <p className="course-detail__description">{description}</p>
          </section>

          {/* What you'll learn */}
          <section className="course-detail__section">
            <h2 className="course-detail__section-title">What You'll Learn</h2>
            <ul className="course-detail__learn-list">
              {learningPoints.map((point, i) => (
                <li key={i} className="course-detail__learn-item">
                  <span className="course-detail__check" aria-hidden="true">✅</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Lesson list */}
          <section className="course-detail__section">
            <LessonList lessons={lessons} />
          </section>

          {/* Instructor */}
          <section className="course-detail__section">
            <h2 className="course-detail__section-title">Your Instructor</h2>
            <InstructorCard instructor={instructor} />
          </section>
        </div>

        {/* Sidebar */}
        <aside className="course-detail__sidebar">
          <div className="course-detail__sidebar-card">
            <div className="course-detail__sidebar-icon" aria-hidden="true">{thumbnail}</div>
            <h3 className="course-detail__sidebar-title">{title}</h3>

            <ProgressBar value={0} label="Your progress" />

            <ul className="course-detail__sidebar-info">
              <li><span>Level</span>         <strong>{level}</strong></li>
              <li><span>Duration</span>      <strong>{duration}</strong></li>
              <li><span>Lessons</span>       <strong>{lessons.length}</strong></li>
              <li><span>Instructor</span>    <strong>{instructor.name}</strong></li>
              <li><span>Price</span>         <strong className={price === 'Free' ? 'price-free' : ''}>{price}</strong></li>
            </ul>

            <button className="course-detail__enroll-btn course-detail__enroll-btn--full">
              {price === 'Free' ? '🚀 Start for Free' : `💳 Enroll for ${price}`}
            </button>
          </div>
        </aside>
      </div>

      <CallToAction
        title="Explore More Courses"
        subtitle="Keep building your skills with our other web development courses."
        btnLabel="View All Courses"
        btnLink="/courses"
      />
    </div>
  )
}

export default CourseDetailPage
