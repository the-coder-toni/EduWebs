import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Button — reusable button component
 *
 * Props:
 *   variant   — 'primary' | 'secondary' | 'outline'  (default: 'primary')
 *   size      — 'sm' | 'md' | 'lg'                   (default: 'md')
 *   to        — if provided, renders as a <Link> instead of <button>
 *   onClick   — click handler
 *   type      — HTML button type                      (default: 'button')
 *   disabled  — boolean
 *   children  — button label / content
 */
function Button({ variant = 'primary', size = 'md', to, onClick, type = 'button', disabled = false, children }) {
  if (to) {
    return (
      <Link to={to} className={`btn btn--${variant} btn--${size}`}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
// This is important
export default Button
