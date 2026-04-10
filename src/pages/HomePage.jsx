import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import CourseList from '../components/CourseList/CourseList'
import Testimonials from '../components/Testimonials/Testimonials'
import CallToAction from '../components/CallToAction/CallToAction'
import { courses } from '../data/courses'
import './HomePage.css'

/**
 * HomePage — the landing page.
 * Sections (top to bottom):
 *   1. Hero — headline + code window visual
 *   2. Features — "Why learn with us?"
 *   3. Featured Courses — the 4 courses marked featured: true
 *   4. Testimonials — student reviews
 *   5. CallToAction — final nudge to browse courses
 */
function HomePage() {
  const featuredCourses = courses.filter(c => c.featured)

  return (
    <div className="home-page">
      <Hero />

      <Features />

      {/* Featured courses section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-subtitle">
              Hand-picked courses to kickstart your web development journey.
            </p>
          </div>
          <CourseList courses={featuredCourses} />
        </div>
      </section>

      <Testimonials />

      <CallToAction />
    </div>
  )
}

export default HomePage
