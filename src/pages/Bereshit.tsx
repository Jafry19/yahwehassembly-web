import { useState } from 'react'
import { Link } from 'react-router-dom'

const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

const faqs = [
  { q: '¿En qué formato está disponible el libro?', a: 'El libro está disponible en formato PDF digital, optimizado para lectura en tablet, computadora y dispositivos móviles.' },
  { q: '¿Puedo acceder al libro con mi suscripción mensual?', a: 'Sí. Con la suscripción de $4.99/mes tienes acceso a este y otros materiales de la Biblioteca de Estudio.' },
  { q: '¿Hay una muestra gratuita disponible?', a: 'Sí. Puedes acceder a una muestra gratuita del Volumen I — Bereshit en nuestra sección de Recursos Gratuitos.' },
  { q: '¿Cuándo estarán disponibles los siguientes volúmenes?', a: 'Los próximos volúmenes (Shemot, Vayikra, Bamidbar y Devarim) están en desarrollo. Suscríbete para recibir notificaciones.' },
]

export default function Bereshit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero del libro */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&h=800&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.12) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,22,40,0.98) 50%, rgba(10,22,40,0.85) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c9a84c', marginBottom: '1rem' }}>
            <Link to="/coleccion-devocionales" style={{ color: '#7a8a9a', textDecoration: 'none' }}>Colección</Link>
            {' / '}Volumen I
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Book cover */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '280px', background: 'linear-gradient(145deg, #142040, #1c2e50)',
                border: '2px solid rgba(201,168,76,0.5)', borderRadius: '6px',
                padding: '3rem 2.5rem', boxShadow: '12px 12px 48px rgba(0,0,0,0.7), -4px -4px 16px rgba(201,168,76,0.08)',
                textAlign: 'center', position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #c9a84c, #f0dfa0, #e8c96a, #c9a84c)' }} />
                <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>🌳</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', letterSpacing: '0.3em', color: '#a89870', marginBottom: '0.5rem' }}>COLECCIÓN DEVOCIONALES</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', fontWeight: 600, color: '#c9a84c', lineHeight: 1.4, marginBottom: '1rem' }}>
                  DE MADUREZ ESPIRITUAL
                </div>
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', margin: '0.75rem 0' }} />
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '2rem', fontWeight: 900, color: '#f5edd8', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>BERESHIT</div>
                <div style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.9rem', color: '#a89870', marginBottom: '1.25rem' }}>El Libro de los Comienzos</div>
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)', margin: '0.75rem 0' }} />
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#7a8a9a' }}>VOLUMEN I — PDF DIGITAL</div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
              </div>
            </div>

            {/* Info */}
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.25em', color: '#c9a84c', marginBottom: '0.75rem' }}>COLECCIÓN DEVOCIONALES DE MADUREZ ESPIRITUAL</div>
              <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                BERESHIT
              </h1>
              <h2 style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontWeight: 400, fontSize: '1.3rem', color: '#c9a84c', marginBottom: '1.5rem' }}>
                El Libro de los Comienzos
              </h2>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', lineHeight: 1.9, marginBottom: '2rem' }}>
                Este primer volumen conduce al lector por un recorrido profundo, pastoral, doctrinal y confrontativo a través de Bereshit, desde la creación hasta la vida de Yosef. Cada semana revela el gobierno soberano de Yahweh, la gravedad del pecado, la fidelidad del pacto, la formación del carácter y la esperanza redentora que apunta a Yahushúa HaMashíaj.
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '2.5rem', fontWeight: 900, color: '#c9a84c' }}>$14.99</span>
                <span style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#a89870' }}>— Libro digital PDF + materiales</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <a href="#merchant-coming-soon" style={{
                  fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                  padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
                }}>
                  COMPRAR AHORA
                </a>
                <Link to="/recursos-gratuitos" style={{
                  fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em',
                  color: '#c9a84c', background: 'transparent',
                  padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}>
                  VER MUESTRA GRATUITA
                </Link>
              </div>
              <div>
                <Link to="/suscripcion" style={{
                  fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem',
                  color: '#8a9ab5', textDecoration: 'none',
                }}>
                  ¿Prefieres acceso mensual? → Suscríbete por $4.99/mes
                </Link>
              </div>
              <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#c9a84c' }}>📦</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.1em', color: '#a89870' }}>
                  Incluye: PDF del libro · Video · Presentación · Preguntas de reflexión
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <GoldDivider label="✦ QUÉ INCLUYE ✦" />
        <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '📖', num: '70', label: 'Devocionales profundos' },
            { icon: '🗓️', num: '10', label: 'Semanas de estudio' },
            { icon: '🗺️', num: '✦', label: 'Mapas bíblicos' },
            { icon: '📅', num: '✦', label: 'Cronologías espirituales' },
            { icon: '🌳', num: '✦', label: 'Árboles genealógicos' },
            { icon: '📊', num: '✦', label: 'Infografías semanales' },
            { icon: '🙏', num: '✦', label: 'Oraciones y declaraciones' },
            { icon: '📝', num: '✦', label: 'Preguntas de reflexión' },
            { icon: '📜', num: '✦', label: 'Epílogo doctrinal de Bereshit' },
            { icon: '➡️', num: '✦', label: 'Transición hacia Shemot' },
          ].map((item) => (
            <div key={item.label} style={{
              background: 'linear-gradient(135deg, #142040, #1c2e50)',
              border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px',
              padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                {item.num !== '✦' && <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.25rem', fontWeight: 900, color: '#c9a84c' }}>{item.num}</div>}
                <div style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#a89870' }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Descripción editorial */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <GoldDivider label="✦ DESCRIPCIÓN EDITORIAL ✦" />
          <div style={{ marginTop: '3rem', padding: '3rem', background: 'linear-gradient(135deg, #0e1e35, #142040)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
            <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#c9a84c', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              "Desde la creación hasta la vida de Yosef, cada devocional te lleva a encontrarte con el Yahweh que gobierna, llama, prueba, forma y redime."
            </p>
            <div style={{ height: '1px', background: 'rgba(201,168,76,0.2)', margin: '1.5rem 0' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', textAlign: 'center' }}>
              {[
                { label: 'Para uso personal', icon: '👤' },
                { label: 'Estudio familiar', icon: '👨‍👩‍👧' },
                { label: 'Grupos congregacionales', icon: '⛪' },
              ].map((u) => (
                <div key={u.label}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{u.icon}</div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.1em', color: '#a89870' }}>{u.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Colección preview */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <GoldDivider label="✦ PRÓXIMOS VOLÚMENES ✦" />
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          {[
            { vol: 'II', name: 'Shemot', color: '#c0392b', symbol: '🔥' },
            { vol: 'III', name: 'Vayikra', color: '#8e44ad', symbol: '🕎' },
            { vol: 'IV', name: 'Bamidbar', color: '#d4a017', symbol: '🏔️' },
            { vol: 'V', name: 'Devarim', color: '#1a5276', symbol: '📜' },
          ].map((b) => (
            <div key={b.vol} style={{
              minWidth: '150px', background: 'linear-gradient(145deg, #142040, #1c2e50)',
              border: '1px solid rgba(201,168,76,0.08)', borderRadius: '4px',
              padding: '1.5rem 1rem', textAlign: 'center', opacity: 0.5, flexShrink: 0,
            }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{b.symbol}</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.15em', color: b.color, marginBottom: '0.25rem' }}>VOL. {b.vol}</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 700, color: '#d4c4a0' }}>{b.name}</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', letterSpacing: '0.12em', color: '#5a6a80', marginTop: '0.5rem' }}>PRÓXIMAMENTE</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <GoldDivider label="✦ PREGUNTAS FRECUENTES ✦" />
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'linear-gradient(135deg, #0e1e35, #142040)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 600, color: '#d4c4a0' }}>{faq.q}</span>
                  <span style={{ color: '#c9a84c', fontSize: '1.2rem', flexShrink: 0, marginLeft: '1rem' }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem' }}>
                    <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.75rem', color: '#f5edd8', marginBottom: '1rem' }}>
            Comienza hoy tu recorrido por Bereshit
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', lineHeight: 1.8, marginBottom: '2rem' }}>
            70 devocionales profundos. 10 semanas de estudio. Un encuentro con el Yahweh que crea, llama, sostiene y redime.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#merchant-coming-soon" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}>
              COMPRAR VOLUMEN I — BERESHIT
            </a>
            <Link to="/suscripcion" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em',
              color: '#c9a84c', background: 'transparent',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.4)',
            }}>
              SUSCRIBIRME POR $4.99/MES
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
