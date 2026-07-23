import { useState } from 'react'
import { Link } from 'react-router-dom'

const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

export default function Recursos() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&h=700&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.1) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.25rem' }}>✦ SIN COSTO ✦</div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1rem' }}>
            Recursos Gratuitos
          </h1>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1.05rem', color: '#a89870', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Materiales introductorios gratuitos para conocer la profundidad de la enseñanza bíblica de Asamblea de Yahweh antes de suscribirte.
          </p>
        </div>
      </section>

      {/* Free resources */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <GoldDivider label="✦ ACCESO GRATUITO ✦" />
        <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              icon: '📖', title: 'Muestra del Libro Bereshit',
              desc: 'Accede a los primeros 3 devocionales del Volumen I — Bereshit de forma gratuita. Una muestra del recorrido completo por El Libro de los Comienzos.',
              cta: 'DESCARGAR MUESTRA GRATUITA', tag: 'PDF — 3 devocionales'
            },
            {
              icon: '🌿', title: 'Devocional Gratuito — La Creación',
              desc: 'Devocional completo sobre Bereshit 1:1-2:3. El gobierno soberano de Yahweh desde el primer versículo de las Escrituras.',
              cta: 'LEER DEVOCIONAL', tag: 'Lectura — 15 min'
            },
            {
              icon: '📄', title: 'Guía PDF Gratuita — Cómo Estudiar Bereshit',
              desc: 'Guía metodológica para aprovechar al máximo los devocionales. Instrucciones de lectura, meditación y aplicación práctica.',
              cta: 'DESCARGAR GUÍA', tag: 'PDF — Guía completa'
            },
          ].map((r) => (
            <div key={r.title} style={{
              background: 'linear-gradient(135deg, #142040, #1c2e50)',
              border: '1px solid rgba(201,168,76,0.25)', borderRadius: '4px',
              padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{ fontSize: '2.5rem' }}>{r.icon}</div>
              <div>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.15em', color: '#4a9e6a', background: 'rgba(74,158,106,0.12)', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>GRATIS</span>
              </div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.95rem', fontWeight: 700, color: '#f5edd8', lineHeight: 1.3 }}>{r.title}</h3>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '0.88rem', color: '#7a8a9a', lineHeight: 1.65, flex: 1 }}>{r.desc}</p>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#5a6a80', fontStyle: 'italic' }}>📁 {r.tag}</div>
              <button style={{
                fontFamily: "'Cinzel', serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                padding: '0.75rem', borderRadius: '2px', border: 'none', cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(201,168,76,0.25)',
              }}>
                {r.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Email signup */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <GoldDivider label="✦ RECIBIR RECURSOS ✦" />
          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.75rem', color: '#f5edd8', marginBottom: '1rem' }}>
              Recibe la muestra gratuita por email
            </h2>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#a89870', lineHeight: 1.8, marginBottom: '2rem' }}>
              Regístrate y recibe inmediatamente los primeros devocionales de Bereshit, la guía de estudio y novedades de la colección.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '460px', margin: '0 auto' }}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  style={{
                    fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#f5edd8',
                    background: 'rgba(20,32,64,0.8)', border: '1px solid rgba(201,168,76,0.3)',
                    padding: '0.85rem 1.25rem', borderRadius: '2px', outline: 'none',
                  }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  style={{
                    fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#f5edd8',
                    background: 'rgba(20,32,64,0.8)', border: '1px solid rgba(201,168,76,0.3)',
                    padding: '0.85rem 1.25rem', borderRadius: '2px', outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                  padding: '0.95rem', borderRadius: '2px', border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
                }}>
                  RECIBIR MUESTRA GRATUITA
                </button>
                <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.75rem', color: '#5a6a80' }}>
                  Sin spam. Puedes cancelar cuando quieras. Tu información es tratada con respeto y privacidad.
                </p>
              </form>
            ) : (
              <div style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(74,158,106,0.1), rgba(74,158,106,0.05))', border: '1px solid rgba(74,158,106,0.25)', borderRadius: '4px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', fontWeight: 700, color: '#f5edd8', marginBottom: '0.5rem' }}>
                  ¡Registro exitoso!
                </h3>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5' }}>
                  En breve recibirás la muestra gratuita de Bereshit en tu correo.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.75rem', color: '#f5edd8', marginBottom: '1rem' }}>
            ¿Quieres acceso completo?
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', lineHeight: 1.8, marginBottom: '2rem' }}>
            Por $4.99 al mes accedes a la biblioteca completa: libros, estudios, prédicas, videos, presentaciones y mucho más.
          </p>
          <Link to="/suscripcion" style={{
            fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em',
            color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #f0dfa0)',
            padding: '1rem 2.5rem', borderRadius: '2px', textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(201,168,76,0.4)',
          }}>
            ACCEDER A LA BIBLIOTECA — $4.99/MES
          </Link>
        </div>
      </section>
    </div>
  )
}
