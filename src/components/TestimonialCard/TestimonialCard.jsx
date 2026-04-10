import './TestimonialCard.css'

/**
 * TestimonialCard — student quote card.
 *
 * Props:
 *   testimonial — { text, name, role, avatar }
 */
function TestimonialCard({ testimonial }) {
  const { text, name, role, avatar } = testimonial

  return (
    <div className="testimonial-card">
      <span className="testimonial-card__quote-mark" aria-hidden="true">"</span>
      <p className="testimonial-card__text">{text}</p>
      <div className="testimonial-card__author">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="testimonial-card__avatar"
          width={44}
          height={44}
        />
        <div>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
