import TestimonialCard from '../TestimonialCard/TestimonialCard'
import { testimonials } from '../../data/courses'
import './Testimonials.css'

/**
 * Testimonials — section displaying student reviews.
 */
function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Real feedback from real learners who changed their careers with EduWeb.
          </p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
