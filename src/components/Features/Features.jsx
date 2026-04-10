import FeatureCard from '../FeatureCard/FeatureCard'
import { features } from '../../data/courses'
import './Features.css'

/**
 * Features — "Why learn with us?" section.
 * Renders a grid of FeatureCards from the mock data.
 */
function Features() {
  return (
    <section className="features section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Learn with EduWeb?</h2>
          <p className="section-subtitle">
            Everything you need to go from beginner to job-ready developer.
          </p>
        </div>
        <div className="features__grid">
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
