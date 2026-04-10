import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './NotFound.css'

/**
 * NotFound — 404 display shown when a route doesn't match.
 */
function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found__emoji" aria-hidden="true">🔭</span>
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Page Not Found</h2>
      <p className="not-found__message">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">Back to Home</Button>
      </Link>
    </div>
  )
}

export default NotFound
