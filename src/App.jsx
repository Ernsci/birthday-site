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
      <section className={`photo-section ${visible ? 'reveal' : ''}`} style={{ transitionDelay: '0s' }}>
        <div className="photo-wrapper">
          <img
            src={heroImg}
            alt="Selfie of Chad and his girlfriend on her 18th birthday"
            className="birthday-photo"
          />
        </div>
        <div className="photo-overlay" />
      </section>

      <section className={`messages-section ${visible ? 'reveal' : ''}`} style={{ transitionDelay: '0.4s' }}>
        <div className="short-message">
          <p className="short-greeting">Happy 18th</p>
          <h1 className="short-text">To My Everything</h1>
        </div>

        <div className="long-message">
          <p className="long-text">
            Hi babyyy, so uhm once again, I'm Chad Walter T. Brion, your boyfriend.
            So i wrote this message for your 18th birthday, I just wanna say HAPPY BIRTHDAYYYYY babyyyyy,
            I know this is not muchpero I hope nindot siya na pag ka himo HEHEHEHE. I know babyy nga kung mag away ta kay
            dili ta mag ka sinabot, pero we can fix it naman dibaaaa, I know makalabad ko sa ulo nimo tungod saakong attitude and stuff
            like sige rakog overthink, soft hearted ko and all, Im sorry about that, I hope dili ka kapoyon saako hahaha.
            Its your birthday naman and I wish you a Good health and everything, I LOVE YOUUUU BABYYYYYYYYYYYYY!!!!!!
          </p>
        </div>
      </section>
    </main>
  )
}

export default App