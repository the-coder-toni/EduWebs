import { useState } from 'react'
import Button from '../components/Button/Button'
import './ContactPage.css'

/**
 * ContactPage — contact form (UI only, no backend submission).
 * Demonstrates controlled form inputs to students.
 */
function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app you would send `form` to your API here.
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <div className="contact-page__hero">
        <div className="container">
          <h1 className="contact-page__title">Contact Us</h1>
          <p className="contact-page__subtitle">
            Have a question about a course, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container contact-page__body">
        {/* Info cards */}
        <div className="contact-page__info">
          <div className="contact-page__info-card">
            <span className="contact-page__info-icon" aria-hidden="true">📧</span>
            <h3>Email Us</h3>
            <p>hello@eduweb.example</p>
          </div>
          <div className="contact-page__info-card">
            <span className="contact-page__info-icon" aria-hidden="true">💬</span>
            <h3>Community Forum</h3>
            <p>Ask questions &amp; get help from fellow learners</p>
          </div>
          <div className="contact-page__info-card">
            <span className="contact-page__info-icon" aria-hidden="true">🕐</span>
            <h3>Response Time</h3>
            <p>We typically reply within 24 hours</p>
          </div>
        </div>

        {/* Form */}
        <div className="contact-page__form-wrapper">
          {submitted ? (
            <div className="contact-page__success">
              <span aria-hidden="true">🎉</span>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out, {form.name}. We'll get back to you shortly.</p>
              <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                Send Another
              </Button>
            </div>
          ) : (
            <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
              <h2 className="contact-page__form-title">Send a Message</h2>

              <div className="contact-page__row">
                <div className="contact-page__field">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Doe" value={form.name} onChange={handleChange} />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="jane@example.com" value={form.email} onChange={handleChange} />
                </div>
              </div>

              <div className="contact-page__field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required placeholder="Question about JavaScript course" value={form.subject} onChange={handleChange} />
              </div>

              <div className="contact-page__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required placeholder="Tell us how we can help…" value={form.message} onChange={handleChange} />
              </div>

              <Button type="submit" variant="primary" size="lg">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
