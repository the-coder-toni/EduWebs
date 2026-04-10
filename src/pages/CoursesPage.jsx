import { useState } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import CourseList from '../components/CourseList/CourseList'
import { courses } from '../data/courses'
import './CoursesPage.css'

/**
 * CoursesPage — shows all courses with live search + level filter.
 *
 * State:
 *   query — text the user types in the search box
 *   level — selected difficulty filter ('All' | 'Beginner' | 'Intermediate' | 'Advanced')
 */
function CoursesPage() {
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('All')

  const filtered = courses.filter(course => {
    const matchesQuery = course.title.toLowerCase().includes(query.toLowerCase())
    const matchesLevel = level === 'All' || course.level === level
    return matchesQuery && matchesLevel
  })

  return (
    <div className="courses-page">
      {/* Page hero banner */}
      <div className="courses-page__hero">
        <div className="container">
          <h1 className="courses-page__title">All Courses</h1>
          <p className="courses-page__subtitle">
            {courses.length} courses covering everything from HTML basics to advanced React.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container courses-page__body">
        <SearchBar
          query={query}
          onQuery={setQuery}
          level={level}
          onLevel={setLevel}
        />

        <p className="courses-page__result-count">
          {filtered.length} course{filtered.length !== 1 ? 's' : ''} found
        </p>

        <CourseList courses={filtered} />
      </div>
    </div>
  )
}

export default CoursesPage
