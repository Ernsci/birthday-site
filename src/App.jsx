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
      <div className="container">
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
              I know this is not muchpero I hope nindot siya na pag ka himo HEHEHEHE.
            </p>
            <p className="message-body">
              We dated for a month now, and in that short time, you have already become the most
              meaningful person in my life. From the very first time we met, I felt an undeniable
              connection — your kindness, your laugh, the way you light up any room.
            </p>
            <p className="message-body">
              I know babyy nga kung mag away ta kay dili ta mag ka sinabot, pero we can fix it naman dibaaaa.
              I know makalabad ko sa ulo nimo tungod saakong attitude and stuff like sige rakog overthink,
              soft hearted ko and all, Im sorry about that, I hope dili ka kapoyon saako hahaha.
            </p>
            <p className="message-body">
              You have been the most beautiful chapter of my life, 18 years of laughter,
              love, and light. From the very first moment I saw you, I knew you were someone
              extraordinary. Your kindness, your strength, your radiant spirit — they inspire me
              every single day.
            </p>
            <p className="message-body">
              Today is not just a birthday. It is a celebration of the incredible woman you have
              become. May this new year bring you all the joy your heart can hold, all the
              adventures your soul craves, and all the love you so generously give.
            </p>
            <p className="message-body">
              I am so proud to be a part of your story. Here's to forever. I LOVE YOUUUU
              BABYYYYYYYYYYYYY!!!!!!
            </p>
            <div className="divider" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App