import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function EnComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{ background: '#0a1628', paddingTop: '72px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <section style={{ position: 'relative', width: '100%', padding: '5rem 1.5rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&h=900&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.1) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.99) 100%)' }} />

        <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
          {/* Language toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', fontFamily: "'Cinzel', serif", fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            <Link to="/" style={{ color: '#7a8a9a', textDecoration: 'none' }}>ES</Link>
            <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
            <span style={{ color: '#c9a84c', fontWeight: 700 }}>EN</span>
          </div>

          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.5rem' }}>
            ✦ YAHWEH ASSEMBLY ONLINE ✦
          </div>

          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            English Version<br />
            <span style={{ background: 'linear-gradient(90deg, #c9a84c, #f0dfa0, #e8c96a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Coming Soon
            </span>
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: '1.1rem', color: '#a89870', lineHeight: 1.9, marginBottom: '1rem' }}>
            Our English resources are currently being prepared.
          </p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#7a8a9a', lineHeight: 1.9, marginBottom: '3rem' }}>
            Soon you will be able to access books, studies, videos and discipleship materials in English. Leave your email below to be notified when we launch.
          </p>

          {!submitted ? (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true) }}
              style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '0 auto 2rem', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: '1', minWidth: '220px',
                  fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#f5edd8',
                  background: 'rgba(20,32,64,0.8)', border: '1px solid rgba(201,168,76,0.3)',
                  padding: '0.85rem 1.25rem', borderRadius: '2px', outline: 'none',
                }}
              />
              <button type="submit" style={{
                fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                padding: '0.85rem 1.5rem', borderRadius: '2px', border: 'none', cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}>
                NOTIFY ME
              </button>
            </form>
          ) : (
            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(74,158,106,0.1)', border: '1px solid rgba(74,158,106,0.25)', borderRadius: '4px', maxWidth: '480px', margin: '0 auto 2rem' }}>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.9rem', color: '#8a9ab5' }}>
                ✅ Thank you! We'll notify you when the English version launches.
              </p>
            </div>
          )}

          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', margin: '2rem 0' }} />

          <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.9rem', color: '#5a6a80', marginBottom: '1.5rem' }}>
            In the meantime, explore our Spanish resources:
          </p>
          <Link to="/" style={{
            fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
            color: '#c9a84c', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.35)',
            padding: '0.7rem 1.75rem', borderRadius: '2px', display: 'inline-block',
          }}>
            ← VOLVER AL SITIO EN ESPAÑOL
          </Link>
        </div>
      </section>
    </div>
  )
}
