import './InstructorCard.css'

/**
 * InstructorCard — displays instructor profile info.
 *
 * Props:
 *   instructor — { name, title, bio, avatar, courses, students }
 */
function InstructorCard({ instructor }) {
  const { name, title, bio, avatar, courses, students } = instructor

  return (
    <div className="instructor-card">
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="instructor-card__avatar"
        width={80}
        height={80}
      />
      <div className="instructor-card__info">
        <h3 className="instructor-card__name">{name}</h3>
        <p className="instructor-card__title">{title}</p>
        <p className="instructor-card__bio">{bio}</p>
        <div className="instructor-card__stats">
          <span>📚 {courses} courses</span>
          <span>👥 {students.toLocaleString()} students</span>
        </div>
      </div>
    </div>
  )
}

export default InstructorCard
