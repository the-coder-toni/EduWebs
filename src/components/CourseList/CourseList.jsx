import CourseCard from '../CourseCard/CourseCard'
import './CourseList.css'

/**
 * CourseList — renders a responsive grid of CourseCards.
 *
 * Props:
 *   courses — array of course objects to display
 */
function CourseList({ courses }) {
  if (courses.length === 0) {
    return (
      <div className="course-list__empty">
        <span aria-hidden="true">🔍</span>
        <p>No courses found. Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CourseList
