import './ProgressBar.css'

/**
 * ProgressBar — visual progress indicator.
 *
 * Props:
 *   value  — number 0–100 representing percentage complete
 *   label  — accessible label describing what is being measured
 *   showLabel — whether to render the percentage text (default: true)
 */
function ProgressBar({ value = 0, label = 'Progress', showLabel = true }) {
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      {showLabel && (
        <div className="progress-bar__header">
          <span className="progress-bar__label">{label}</span>
          <span className="progress-bar__value">{clamped}%</span>
        </div>
      )}
      <div className="progress-bar__track">
        <div className="progress-bar__fill" style={{ width: `${clamped}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar
