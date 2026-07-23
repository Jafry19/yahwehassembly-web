import { Link } from 'react-router-dom'

const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

export default function Biblioteca() {
  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=700&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.1) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.25rem' }}>
            ✦ ACCESO PREMIUM MENSUAL ✦
          </div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1rem' }}>
            Biblioteca de Estudio
          </h1>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1.1rem', color: '#a89870', marginBottom: '0.75rem' }}>
            Una biblioteca digital para estudiar, meditar y crecer bajo el gobierno de Yahweh.
          </p>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '2.5rem', fontWeight: 900, color: '#c9a84c', margin: '1.5rem 0 0.5rem' }}>$4.99</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#a89870', marginBottom: '2rem' }}>al mes — Acceso completo</div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/suscripcion" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}>
              COMENZAR MI SUSCRIPCIÓN
            </Link>
            <a href="#que-incluye" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
              color: '#c9a84c', background: 'transparent',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.4)',
            }}>
              VER QUÉ INCLUYE
            </a>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="que-incluye" style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <GoldDivider label="✦ QUÉ INCLUYE ✦" />
        <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: '📖', title: 'Libros Digitales', desc: 'Acceso a toda la Colección Devocionales de Madurez Espiritual en formato PDF.' },
            { icon: '🎓', title: 'Estudios Bíblicos', desc: 'Materiales profundos de enseñanza doctrinal, pastoral y confrontativa.' },
            { icon: '🎙️', title: 'Prédicas Escritas', desc: 'Mensajes preparados para edificación personal, familiar y congregacional.' },
            { icon: '🎬', title: 'Videos de Enseñanza', desc: 'Recursos audiovisuales para un estudio más profundo y dinámico.' },
            { icon: '📊', title: 'Presentaciones', desc: 'Material visual preparado para grupos, líderes y maestros bíblicos.' },
            { icon: '🔖', title: 'Preguntas de Reflexión', desc: 'Guías de meditación y aplicación práctica de cada estudio.' },
            { icon: '📋', title: 'Guías de Estudio', desc: 'Recursos estructurados para discipulado personal y congregacional.' },
            { icon: '🆕', title: 'Nuevos Recursos', desc: 'Material fresco añadido periódicamente. La biblioteca crece cada mes.' },
          ].map((item) => (
            <div key={item.title} style={{
              background: 'linear-gradient(135deg, #142040, #1c2e50)',
              border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px',
              padding: '2rem 1.5rem', transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.45)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.18)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>{item.title}</h3>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#7a8a9a', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <GoldDivider label="✦ CÓMO FUNCIONA ✦" />
          <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Suscríbete', desc: 'Regístrate y activa tu suscripción mensual de $4.99 con tu método de pago preferido.' },
              { step: '02', title: 'Accede', desc: 'Inicia sesión en tu cuenta y navega por la biblioteca completa de materiales premium.' },
              { step: '03', title: 'Estudia', desc: 'Lee, visualiza y trabaja con los estudios, prédicas, devocionales y recursos disponibles.' },
              { step: '04', title: 'Crece', desc: 'Recibe nuevos materiales cada mes y avanza en tu formación bíblica profunda.' },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '3rem', fontWeight: 900, color: 'rgba(201,168,76,0.2)', marginBottom: '0.5rem' }}>{s.step}</div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.88rem', color: '#7a8a9a', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceso restringido notice */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #0e1e35, #142040)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', padding: '2.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒</div>
          <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', fontWeight: 700, color: '#f5edd8', marginBottom: '1rem' }}>
            Contenido protegido
          </h3>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Los materiales disponibles en esta biblioteca están protegidos por derechos de autor y son para uso personal, familiar, congregacional o de estudio, según los términos establecidos. El acceso completo requiere una suscripción mensual activa.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/suscripcion" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              padding: '0.85rem 2rem', borderRadius: '2px', textDecoration: 'none',
            }}>
              SUSCRIBIRME — $4.99/MES
            </Link>
            <Link to="/recursos-gratuitos" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
              color: '#c9a84c', background: 'transparent',
              padding: '0.85rem 2rem', borderRadius: '2px', textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.4)',
            }}>
              VER RECURSOS GRATUITOS
            </Link>
          </div>
        </div>
      </section>

      {/* Plan */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <GoldDivider label="✦ PLAN DE SUSCRIPCIÓN ✦" />
          <div style={{ marginTop: '3rem', background: 'linear-gradient(145deg, #142040, #1c2e50)', border: '2px solid rgba(201,168,76,0.4)', borderRadius: '6px', padding: '3rem 2.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #c9a84c, #f0dfa0, #c9a84c)' }} />
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '0.5rem' }}>PLAN</div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.25rem', fontWeight: 900, color: '#f5edd8', marginBottom: '1.5rem' }}>
              Biblioteca de Estudio
            </h3>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '4rem', fontWeight: 900, color: '#c9a84c', lineHeight: 1 }}>$4.99</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#a89870', marginBottom: '2rem' }}>/ mes</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', textAlign: 'left' }}>
              {[
                'Acceso a todos los libros digitales',
                'Estudios bíblicos profundos',
                'Prédicas escritas',
                'Videos de enseñanza',
                'Presentaciones y guías',
                'Preguntas de reflexión',
                'Nuevos recursos mensuales',
                'Cancela cuando quieras',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: "'Lora', serif", fontSize: '0.88rem', color: '#a89870' }}>
                  <span style={{ color: '#c9a84c', flexShrink: 0 }}>✦</span> {f}
                </div>
              ))}
            </div>
            <Link to="/suscripcion" style={{
              display: 'block', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              padding: '1rem', borderRadius: '2px', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}>
              COMENZAR MI SUSCRIPCIÓN MENSUAL
            </Link>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.78rem', color: '#5a6a80', marginTop: '1rem' }}>
              Integración de pago pendiente — próximamente disponible.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
