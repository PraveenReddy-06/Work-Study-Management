import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='home-grid' style={{ backgroundColor: '#f5f7fb' }}>
      <header className='headerclass'>
        <NavBar />
      </header>

      <main className='contact-page'>
        {/* Top hero section */}
        <section className='contact-hero'>
          <div className='contact-hero-text'>
            <h1>Contact Us</h1>
            <p>
              The University Registrar’s Office (URO) supports and advances the University of Toronto academic
              and strategic goals by providing leadership and advice across all three campuses on areas such
              as student registration, student academic records, financial aid, awards, fee assessment,
              academic discipline and access to information.
            </p>
            <div className='contact-hero-buttons'>
              <button className='primary-btn'>Service Portal</button>
              <button className='secondary-btn'>Contact your divisional registrar&apos;s office</button>
            </div>
          </div>

          <div className='contact-hero-image'>
            {/* Put your image here with CSS rounded corners to match design */}
            <img src='/images/contact-hero.jpg' alt='Student at computer' />
          </div>
        </section>

        {/* Lower content grid */}
        <section className='contact-content'>
          <div className='contact-main-card'>
            <h2>Office of Convocation</h2>

            <div className='contact-subsection'>
              <h3>Mailing Address</h3>
              <p>Office of Convocation</p>
              <p>University of Toronto</p>
              <p>Enrolment Services</p>
              <p>172 St. George St.</p>
              <p>Toronto, ON M5R 0A3</p>
            </div>

            <div className='contact-subsection'>
              <h3>Hours of Operation</h3>
              <p>Monday: 10:00am to 4:30pm</p>
              <p>Tuesday: 1:00pm to 4:30pm</p>
              <p>Wednesday–Friday: 10:00am to 4:30pm</p>
              <p>
                Please note that the Office of Convocation is closed for Statutory, Civic, and University
                holidays.
              </p>
              <p>The Office of Convocation offers in-person services by appointment only.</p>
            </div>

            <div className='contact-subsection'>
              <h3>Contact by Phone</h3>
              <p>General Inquiry: (416) 978-3629</p>
              <p>Convocation Hotline: (416) 978-5940</p>
            </div>
          </div>

          <aside className='contact-side-card'>
            <h3>On this page</h3>
            <ul>
              <li>Client Services</li>
              <li>Convocation</li>
              <li>Accommodated Testing Services</li>
            </ul>
          </aside>
        </section>
      </main>

      <div className='footerclass'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
