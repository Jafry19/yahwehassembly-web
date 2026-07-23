import { Link } from 'react-router-dom'

const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

export default function Suscripcion() {
  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=700&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.1) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.25rem' }}>✦ PLAN DE ACCESO ✦</div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1rem' }}>
            Suscripción Mensual
          </h1>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1.05rem', color: '#a89870', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Accede a una biblioteca digital completa de formación bíblica profunda por solo $4.99 al mes.
          </p>
        </div>
      </section>

      {/* Plan card */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(145deg, #142040, #1c2e50)',
            border: '2px solid rgba(201,168,76,0.5)', borderRadius: '8px',
            padding: '3.5rem 3rem', textAlign: 'center', position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.05)',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #c9a84c, #f0dfa0, #e8c96a, #c9a84c)' }} />
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.25em', color: '#c9a84c', marginBottom: '0.75rem' }}>PLAN</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 900, color: '#f5edd8', marginBottom: '2rem' }}>
              Biblioteca de Estudio
            </h2>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '5rem', fontWeight: 900, color: '#c9a84c', lineHeight: 1 }}>$4.99</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', marginBottom: '2.5rem' }}>/ mes — Acceso completo</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem', textAlign: 'left' }}>
              {[
                'Libros digitales — Colección completa',
                'Estudios bíblicos profundos',
                'Prédicas escritas seleccionadas',
                'Videos de enseñanza',
                'Presentaciones y material visual',
                'Preguntas de reflexión y guías',
                'Recursos para grupos y discipulado',
                'Nuevos materiales añadidos mensualmente',
                'Cancela cuando quieras',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#a89870' }}>
                  <span style={{ color: '#c9a84c', flexShrink: 0, fontSize: '0.8rem' }}>✦</span> {f}
                </div>
              ))}
            </div>

            <a href="#merchant-coming-soon" style={{
              display: 'block', fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #f0dfa0)',
              padding: '1.1rem', borderRadius: '2px', textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(201,168,76,0.4)', transition: 'all 0.2s',
            }}>
              COMENZAR MI SUSCRIPCIÓN MENSUAL
            </a>

            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '2px' }}>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.78rem', color: '#7a8a9a' }}>
                ⚙ Integración de pago pendiente — Se conectará próximamente con Stripe, PayPal, Gumroad, Lemon Squeezy u otro procesador seleccionado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits comparison */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <GoldDivider label="✦ ACCESO INCLUIDO ✦" />
          <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '📖', title: 'Sin suscripción', items: ['Recursos gratuitos limitados', 'Muestra de Bereshit', 'Devocional gratuito'], highlight: false },
              { icon: '⭐', title: 'Con suscripción', items: ['Todos los libros digitales', 'Todos los estudios y prédicas', 'Videos completos', 'Presentaciones', 'Guías de discipulado', 'Acceso al archivo completo', 'Nuevos recursos mensuales'], highlight: true },
            ].map((col) => (
              <div key={col.title} style={{
                background: col.highlight ? 'linear-gradient(145deg, #1a2e50, #223060)' : 'linear-gradient(135deg, #0e1e35, #142040)',
                border: col.highlight ? '2px solid rgba(201,168,76,0.4)' : '1px solid rgba(201,168,76,0.1)',
                borderRadius: '4px', padding: '2rem 1.75rem', position: 'relative',
              }}>
                {col.highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #c9a84c, #f0dfa0, #c9a84c)' }} />}
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 700, color: col.highlight ? '#c9a84c' : '#7a8a9a', marginBottom: '1.25rem', letterSpacing: '0.08em' }}>{col.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontFamily: "'Lora', serif", fontSize: '0.85rem', color: col.highlight ? '#a89870' : '#5a6a80' }}>
                      <span style={{ color: col.highlight ? '#c9a84c' : '#3a4a60', flexShrink: 0 }}>{col.highlight ? '✦' : '—'}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ suscripción */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '720px', margin: '0 auto' }}>
        <GoldDivider label="✦ PREGUNTAS ✦" />
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { q: '¿Puedo cancelar en cualquier momento?', a: 'Sí. La suscripción es mensual y puedes cancelarla cuando desees. Al cancelar, el acceso se mantiene hasta el final del período pagado.' },
            { q: '¿Con qué procesadores de pago trabajan?', a: 'El procesador de pago está por determinar. Se integrará próximamente con Stripe, PayPal, Gumroad, Lemon Squeezy u otra plataforma confiable.' },
            { q: '¿Puedo compartir mi acceso con otros?', a: 'No. El acceso es personal e intransferible. Compartir accesos viola los términos de uso. Para grupos o congregaciones, contáctanos.' },
            { q: '¿Cuándo se añaden nuevos materiales?', a: 'Se agregan nuevos recursos periódicamente. Como suscriptor, accedes automáticamente a todo el material nuevo sin costo adicional.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(201,168,76,0.1)', paddingBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.88rem', fontWeight: 700, color: '#d4c4a0', marginBottom: '0.75rem' }}>{faq.q}</h3>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '0.88rem', color: '#7a8a9a', lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '2rem', color: '#f5edd8', marginBottom: '1rem' }}>
            Una biblioteca digital para crecer en madurez espiritual
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', lineHeight: 1.8, marginBottom: '2rem' }}>
            Comienza hoy por $4.99 al mes y accede a recursos de formación bíblica diseñados para arraigar la vida en la Palabra.
          </p>
          <a href="#merchant-coming-soon" style={{
            fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em',
            color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #f0dfa0)',
            padding: '1.1rem 2.75rem', borderRadius: '2px', textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(201,168,76,0.4)', display: 'inline-block',
          }}>
            COMENZAR MI SUSCRIPCIÓN — $4.99/MES
          </a>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/recursos-gratuitos" style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#7a8a9a', textDecoration: 'none' }}>
              ¿Quieres ver primero? Accede a los recursos gratuitos →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
