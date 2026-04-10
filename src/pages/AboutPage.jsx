import InstructorCard from '../components/InstructorCard/InstructorCard'
import CallToAction from '../components/CallToAction/CallToAction'
import { instructors } from '../data/courses'
import './AboutPage.css'

/**
 * AboutPage — mission statement + instructor grid.
 */
function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="about-page__hero">
        <div className="container">
          <h1 className="about-page__title">About EduWeb</h1>
          <p className="about-page__subtitle">
            We believe anyone can learn to build the web — regardless of background or budget.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container about-page__mission">
          <div className="about-page__mission-text">
            <h2 className="section-title">Our Mission</h2>
            <p>
              EduWeb was founded by developers who remember how hard it was to find clear,
              beginner-friendly resources when they started learning. We set out to create
              a library of courses that are honest about difficulty, rich with hands-on exercises,
              and taught by instructors who genuinely care about your progress.
            </p>
            <p>
              We keep our beginner courses free because we believe access to foundational
              knowledge should never be a barrier. Advanced courses are priced fairly —
              your investment goes back into creating more content.
            </p>
          </div>
          <div className="about-page__mission-stats">
            <div className="about-page__stat">
              <span className="about-page__stat-value">10,000+</span>
              <span className="about-page__stat-label">Students enrolled</span>
            </div>
            <div className="about-page__stat">
              <span className="about-page__stat-value">6+</span>
              <span className="about-page__stat-label">Courses published</span>
            </div>
            <div className="about-page__stat">
              <span className="about-page__stat-value">3</span>
              <span className="about-page__stat-label">Expert instructors</span>
            </div>
            <div className="about-page__stat">
              <span className="about-page__stat-value">4.9★</span>
              <span className="about-page__stat-label">Average rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="section about-page__instructors-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Meet Your Instructors</h2>
            <p className="section-subtitle">
              Experienced developers who love teaching and helping others grow.
            </p>
          </div>
          <div className="about-page__instructors-grid">
            {instructors.map(instructor => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Start Learning?"
        subtitle="Browse our courses and take the first step toward becoming a web developer."
      />
    </div>
  )
}

export default AboutPage
