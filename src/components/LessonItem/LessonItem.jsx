import './LessonItem.css'

/**
 * LessonItem — a single row in the course curriculum list.
 *
 * Props:
 *   lesson  — { id, title, duration }
 *   index   — lesson number (0-based, displayed as 1-based)
 */
function LessonItem({ lesson, index }) {
  return (
    <div className="lesson-item">
      <span className="lesson-item__number">{index + 1}</span>
      <span className="lesson-item__title">{lesson.title}</span>
      <span className="lesson-item__duration">⏱ {lesson.duration}</span>
    </div>
  )
}

export default LessonItem
