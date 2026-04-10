import './Button.css'

/**
 * Button — reusable button component
 *
 * Props:
 *   variant   — 'primary' | 'secondary' | 'outline'  (default: 'primary')
 *   size      — 'sm' | 'md' | 'lg'                   (default: 'md')
 *   onClick   — click handler
 *   type      — HTML button type                      (default: 'button')
 *   disabled  — boolean
 *   children  — button label / content
 */
function Button({ variant = 'primary', size = 'md', onClick, type = 'button', disabled = false, children }) {
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
