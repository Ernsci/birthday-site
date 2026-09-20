import { useState, useEffect, useRef } from 'react'
import heroImg from './assets/hero.jpg'
import './App.css'

function App() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [msgVisible, setMsgVisible] = useState(false)
  const heroRef = useRef(null)
  const msgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeroVisible(true) },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setMsgVisible(true) },
      { threshold: 0.1 }
    )
    if (msgRef.current) observer.observe(msgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="birthday-page">
      <section ref={heroRef} className={`photo-hero ${heroVisible ? 'reveal' : ''}`}>
        <img src={heroImg} alt="Me and my girlfriend" className="birthday-photo" />
        <div className="photo-gradient" />
        <div className={`hero-content ${heroVisible ? 'reveal' : ''}`}>
          <p className="short-greeting">Happy 18th</p>
          <h1 className="short-text">To My Everything</h1>
        </div>
        <div className="scroll-hint">
          <span>scroll</span>
        </div>
      </section>

      <section ref={msgRef} className={`messages-section ${msgVisible ? 'reveal' : ''}`}>
        <div className="ornament" />
        <div className="long-message">
          <p className="long-text">
            Hi babyyy, so uhm once again, I'm Chad Walter T. Brion, your boyfriend.
            So i wrote this message for your 18th birthday, I just wanna say HAPPY BIRTHDAYYYYY babyyyyy,
            I know this is not much pero I hope nindot siya na pag ka himo HEHEHEHE. I know babyy nga kung mag away ta kay
            dili ta mag ka sinabot, pero we can fix it naman dibaaaa, I know makalabad ko sa ulo nimo tungod saakong attitude and stuff
            like sige rakog overthink, soft hearted ko and all, Im sorry about that, I hope dili ka kapoyon saako hahaha.
            Its your birthday naman and I wish you a Good health and everything, I LOVE YOUUUU BABYYYYYYYYYYYYY!!!!!!
          </p>
        </div>
        <div className="ornament" />
      </section>
    </main>
  )
}

export default App
