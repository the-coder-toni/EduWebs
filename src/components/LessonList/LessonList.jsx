import LessonItem from '../LessonItem/LessonItem'
import './LessonList.css'

/**
 * LessonList — renders the full curriculum for a course.
 *
 * Props:
 *   lessons — array of { id, title, duration }
 */
function LessonList({ lessons }) {
  return (
    <div className="lesson-list">
      <h3 className="lesson-list__heading">Course Curriculum</h3>
      <p className="lesson-list__count">{lessons.length} lessons</p>
      <div className="lesson-list__items">
        {lessons.map((lesson, index) => (
          <LessonItem key={lesson.id} lesson={lesson} index={index} />
        ))}
      </div>
    </div>
  )
}

export default LessonList
