import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      {/* All routes share the Navbar + Footer via the Layout wrapper */}
      <Route element={<Layout />}>
        <Route path="/"            element={<HomePage />} />
        <Route path="/courses"     element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/about"       element={<AboutPage />} />
        <Route path="/contact"     element={<ContactPage />} />
        <Route path="*"            element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
