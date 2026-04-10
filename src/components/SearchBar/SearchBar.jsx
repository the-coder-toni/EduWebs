import './SearchBar.css'

/**
 * SearchBar — text input + level filter for the courses page.
 *
 * Props:
 *   query       — current search string
 *   onQuery     — (value: string) => void
 *   level       — currently selected level filter ('All' | 'Beginner' | 'Intermediate' | 'Advanced')
 *   onLevel     — (value: string) => void
 */
function SearchBar({ query, onQuery, level, onLevel }) {
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  return (
    <div className="search-bar">
      {/* Text search */}
      <div className="search-bar__input-wrapper">
        <span className="search-bar__icon" aria-hidden="true">🔍</span>
        <input
          type="search"
          className="search-bar__input"
          placeholder="Search courses…"
          value={query}
          onChange={e => onQuery(e.target.value)}
          aria-label="Search courses"
        />
      </div>

      {/* Level filter */}
      <div className="search-bar__filters">
        {levels.map(l => (
          <button
            key={l}
            className={`search-bar__filter-btn ${level === l ? 'search-bar__filter-btn--active' : ''}`}
            onClick={() => onLevel(l)}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
