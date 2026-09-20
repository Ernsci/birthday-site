import { useState, useEffect } from 'react'
import heroImg from './assets/hero.jpg'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="birthday-page">
      <div className={`photo-section ${visible ? 'reveal' : ''}`} style={{ transitionDelay: '0s' }}>
        <div className="photo-frame">
          <img
            src={heroImg}
            alt="Photo celebrating her 18th birthday"
            className="birthday-photo"
          />
          <div className="photo-overlay" />
        </div>
      </div>

      <section className="messages-section">
        <div className={`short-message ${visible ? 'reveal' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <p className="short-greeting">Happy 18th</p>
          <h1 className="short-text">To My Everything</h1>
        </div>

        <div className={`long-message ${visible ? 'reveal' : ''}`} style={{ transitionDelay: '0.8s' }}>
          <p className="long-text">
            Eighteen years of laughter, love, and light — you have been the most
            beautiful chapter of my life. From the very first moment I saw you, I
            knew you were someone extraordinary. Your kindness, your strength,
            your radiant spirit — they inspire me every single day.
            <br /><br />
            Today is not just a birthday. It is a celebration of the incredible
            woman you have become. May this new year bring you all the joy your
            heart can hold, all the adventures your soul craves, and all the
            love you so generously give.
            <br /><br />
            I am so proud to be a part of your story. Here&rsquo;s to forever.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
