import { useState, useEffect, useRef } from 'react'
import heroImg from './assets/hero.jpg'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="birthday-page">
      <section className="hero-section ${visible ? 'reveal' : ''}" style={{ transitionDelay: '0s' }}>
        <div className="hero-container">
          <img
            src={heroImg}
            alt="Selfie celebrating her 18th birthday"
            className="hero-photo"
          />
          <div className="hero-overlay" />
          <div className="hero-caption">
            <p className="hero-greeting">Happy 18th</p>
            <h1 className="hero-title">To My Everything</h1>
          </div>
        </div>
      </section>

      <section className="message-section ${visible ? 'reveal' : ''}" style={{ transitionDelay: '0.5s' }}>
        <div className="message-content">
          <p className="message-intro">
            Hi babyyy, so uhm once again, I'm Chad Walter T. Brion, your boyfriend.
          </p>
          <p className="message-body">
            So i wrote this message for your 18th birthday, I just wanna say HAPPY BIRTHDAYYYYY babyyyyy,
            I know this is not much pero I hope nindot siya na pag ka himo HEHEHEHE.
          </p>
          <p className="message-continue">
            I know babyy nga kung mag away ta kay dili ta mag ka sinabot, pero we can fix it naman dibaaaa.
          </p>
          <p className="message-closing">
            Its your birthday naman and I wish you a Good health and everything,
          </p>
          <p className="message-signoff">
            I LOVE YOUUUU BABYYYYYYYYYYYYY!!!!!!
          </p>
        </div>
      </section>
    </main>
  )
}

export default App