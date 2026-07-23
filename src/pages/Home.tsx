import { Link } from 'react-router-dom'

const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

export default function Home() {
  return (
    <div style={{ background: '#0a1628' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1800&h=1200&fit=crop&auto=format)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.18) saturate(0.6)',
        }} />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,22,40,0.98) 40%, rgba(10,22,40,0.75) 100%)' }} />
        {/* Gold glow */}
        <div style={{ position: 'absolute', top: '30%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '8rem 1.5rem 4rem', width: '100%' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '32px', height: '1px', background: '#c9a84c', display: 'inline-block' }} />
              ASAMBLEA DE YAHWEH — PANAMÁ
            </div>

            <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Devocionales y estudios bíblicos para una{' '}
              <span style={{ background: 'linear-gradient(90deg, #c9a84c, #f0dfa0, #e8c96a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                fe madura
              </span>
              , profunda y arraigada en la Palabra.
            </h1>

            <p style={{ fontFamily: "'Lora', serif", fontSize: '1.1rem', color: '#a89870', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
              Explora libros, estudios, prédicas, videos y recursos diseñados para formar creyentes que caminan bajo el gobierno de Yahweh y la esperanza revelada en Yahushúa HaMashíaj.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/libro-bereshit" style={{
                fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
                color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(201,168,76,0.35)', transition: 'all 0.2s',
              }}>
                COMPRAR BERESHIT
              </Link>
              <Link to="/suscripcion" style={{
                fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
                color: '#c9a84c', background: 'transparent',
                padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
                border: '1px solid rgba(201,168,76,0.5)', transition: 'all 0.2s',
              }}>
                SUSCRIBIRME — $4.99/MES
              </Link>
              <Link to="/biblioteca-de-estudio" style={{
                fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em',
                color: '#8a9ab5', background: 'transparent',
                padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
                border: '1px solid rgba(138,154,181,0.25)', transition: 'all 0.2s',
              }}>
                EXPLORAR BIBLIOTECA
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c' }}>DESPLAZAR</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)' }} />
        </div>
      </section>

      {/* ── PRESENTACIÓN ASAMBLEA ── */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <GoldDivider label="✦ NUESTRA MISIÓN ✦" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f5edd8', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Formación bíblica para creyentes que desean madurar en la fe
            </h2>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Asamblea de Yahweh nace con el propósito de formar creyentes maduros, arraigados en la Palabra, sensibles al Ruaj HaKadosh y centrados en la revelación de Yahweh a través de las Escrituras.
            </p>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', lineHeight: 1.9, marginBottom: '2rem' }}>
              No somos una plataforma de entretenimiento religioso. Somos una casa de estudio profundo, donde cada devocional, cada prédica y cada recurso ha sido cuidadosamente preparado para edificar la vida espiritual desde el fundamento de la Palabra.
            </p>
            <Link to="/sobre-asamblea-de-yahweh" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
              color: '#c9a84c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              CONOCER NUESTRA MISIÓN →
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)' }}>
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&h=500&fit=crop&auto=format"
                alt="Biblioteca de estudio bíblico antiguo con libros y pergaminos"
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block', filter: 'sepia(0.3) brightness(0.85)' }}
              />
            </div>
            <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)', padding: '1.25rem 1.5rem', borderRadius: '2px' }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 900, color: '#0a1628' }}>Sede</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#1c2e50', fontStyle: 'italic' }}>Panamá</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIBRO DESTACADO ── */}
      <section style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1e38 50%, #0a1628 100%)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <GoldDivider label="✦ LIBRO DESTACADO ✦" />
          <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Book mockup */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '260px', background: 'linear-gradient(145deg, #142040, #1c2e50)',
                border: '1px solid rgba(201,168,76,0.4)', borderRadius: '4px',
                padding: '2.5rem 2rem', boxShadow: '8px 8px 32px rgba(0,0,0,0.6), -2px -2px 8px rgba(201,168,76,0.1)',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #c9a84c, #f0dfa0, #c9a84c)' }} />
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌳</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.25em', color: '#a89870', marginBottom: '0.5rem' }}>COLECCIÓN</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 600, color: '#c9a84c', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                  DEVOCIONALES DE<br />MADUREZ ESPIRITUAL
                </div>
                <div style={{ height: '1px', background: 'rgba(201,168,76,0.3)', margin: '0.75rem 0' }} />
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.4rem', fontWeight: 900, color: '#f5edd8', marginBottom: '0.25rem' }}>BERESHIT</div>
                <div style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#a89870', marginBottom: '1rem' }}>El Libro de los Comienzos</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#7a8a9a' }}>VOLUMEN I</div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
              </div>
            </div>

            {/* Book info */}
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c9a84c', marginBottom: '1rem' }}>
                VOLUMEN I — DISPONIBLE AHORA
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f5edd8', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Bereshit: El Libro de los Comienzos
              </h2>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                Este primer volumen conduce al lector por un recorrido profundo, pastoral, doctrinal y confrontativo a través de Bereshit, desde la creación hasta la vida de Yosef. Cada semana revela el gobierno soberano de Yahweh, la gravedad del pecado, la fidelidad del pacto, la formación del carácter y la esperanza redentora.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {['70 devocionales profundos', '10 semanas de estudio', 'Mapas bíblicos', 'Cronologías espirituales', 'Árboles genealógicos', 'Infografías semanales'].map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#8a9ab5' }}>
                    <span style={{ color: '#c9a84c', fontSize: '0.7rem' }}>✦</span> {f}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link to="/libro-bereshit" style={{
                  fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                  padding: '0.85rem 1.75rem', borderRadius: '2px', textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(201,168,76,0.3)',
                }}>
                  COMPRAR BERESHIT
                </Link>
                <Link to="/libro-bereshit" style={{
                  fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
                  color: '#c9a84c', background: 'transparent',
                  padding: '0.85rem 1.75rem', borderRadius: '2px', textDecoration: 'none',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}>
                  VER MUESTRA GRATUITA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIBLIOTECA PREMIUM ── */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <GoldDivider label="✦ BIBLIOTECA PREMIUM ✦" />
        <div style={{ marginTop: '4rem', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#f5edd8', marginBottom: '1rem' }}>
            Acceso a una biblioteca digital de formación espiritual
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#a89870', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Por solo $4.99 al mes, accede a materiales exclusivos de estudio bíblico diseñados para crecer en madurez espiritual.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { icon: '📖', title: 'Libros Digitales', desc: 'Toda la colección Devocionales de Madurez Espiritual' },
            { icon: '🎓', title: 'Estudios Bíblicos', desc: 'Materiales profundos de enseñanza doctrinal y pastoral' },
            { icon: '🎙️', title: 'Prédicas Escritas', desc: 'Mensajes preparados para edificación personal y congregacional' },
            { icon: '🎬', title: 'Videos de Enseñanza', desc: 'Recursos visuales para estudio y discipulado' },
            { icon: '📊', title: 'Presentaciones', desc: 'Material visual para grupos de estudio y congregaciones' },
            { icon: '🔖', title: 'Guías de Estudio', desc: 'Preguntas de reflexión y aplicaciones prácticas' },
          ].map((item) => (
            <div key={item.title} style={{
              background: 'linear-gradient(135deg, #142040, #1c2e50)',
              border: '1px solid rgba(201,168,76,0.18)', borderRadius: '4px',
              padding: '1.75rem 1.5rem', transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.18)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>{item.title}</h3>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '0.83rem', color: '#7a8a9a', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #142040, #1c2e50)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', padding: '2rem 3rem', marginBottom: '1.5rem' }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '3rem', fontWeight: 900, color: '#c9a84c' }}>$4.99</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#a89870' }}>/mes — Acceso completo</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/suscripcion" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}>
              COMENZAR MI SUSCRIPCIÓN
            </Link>
            <Link to="/biblioteca-de-estudio" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em',
              color: '#c9a84c', background: 'transparent',
              padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.4)',
            }}>
              VER QUÉ INCLUYE
            </Link>
          </div>
        </div>
      </section>

      {/* ── ESTUDIOS Y PRÉDICAS ── */}
      <section style={{ background: '#060f1e', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <GoldDivider label="✦ ESTUDIOS Y PRÉDICAS ✦" />
          <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { cat: 'ESTUDIO BÍBLICO', title: 'El Pacto de Creación en Bereshit', desc: 'Un recorrido por el fundamento del gobierno de Yahweh desde el primer capítulo de las Escrituras.', level: 'Profundo', tag: 'Premium' },
              { cat: 'PRÉDICA', title: 'La Fidelidad de Yahweh en el Desierto', desc: 'Reflexión doctrinal sobre la provisión y el carácter de Yahweh durante la peregrinación de Israel.', level: 'Intermedio', tag: 'Gratis' },
              { cat: 'DEVOCIONAL', title: 'Yosef: El Hombre Formado en el Fuego', desc: 'Devocional profundo sobre el carácter, la paciencia y el propósito divino a través de la vida de Yosef.', level: 'Profundo', tag: 'Premium' },
            ].map((s) => (
              <div key={s.title} style={{
                background: 'linear-gradient(135deg, #0e1e35, #142040)',
                border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', overflow: 'hidden',
              }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.12), transparent)', padding: '1.75rem 1.5rem 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{s.cat}</span>
                    <span style={{
                      fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.12em',
                      color: s.tag === 'Gratis' ? '#4a9e6a' : '#c9a84c',
                      background: s.tag === 'Gratis' ? 'rgba(74,158,106,0.15)' : 'rgba(201,168,76,0.12)',
                      padding: '0.2rem 0.6rem', borderRadius: '2px',
                    }}>{s.tag.toUpperCase()}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.95rem', fontWeight: 700, color: '#f5edd8', lineHeight: 1.3, marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: '0.83rem', color: '#7a8a9a', lineHeight: 1.65, marginBottom: '1.25rem' }}>{s.desc}</p>
                </div>
                <div style={{ padding: '0 1.5rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#5a6a80' }}>Nivel: {s.level}</span>
                  <Link to="/estudios-y-predicas" style={{
                    fontFamily: "'Cinzel', serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                    color: '#c9a84c', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.35)',
                    padding: '0.4rem 1rem', borderRadius: '2px',
                  }}>
                    VER ESTUDIO
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/estudios-y-predicas" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
              color: '#c9a84c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              VER TODOS LOS ESTUDIOS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COLECCIÓN ── */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <GoldDivider label="✦ COLECCIÓN COMPLETA ✦" />
        <div style={{ marginTop: '4rem', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#f5edd8', marginBottom: '0.75rem' }}>
            Devocionales de Madurez Espiritual
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.95rem', color: '#a89870' }}>
            Desde Bereshit hasta Hitgalut — una serie completa de formación bíblica profunda
          </p>
        </div>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '1.25rem', paddingBottom: '1rem' }}>
          {[
            { vol: 'I', name: 'Bereshit', subtitle: 'El Libro de los Comienzos', color: '#c9a84c', symbol: '🌳', available: true },
            { vol: 'II', name: 'Shemot', subtitle: 'Redención y Liberación', color: '#c0392b', symbol: '🔥', available: false },
            { vol: 'III', name: 'Vayikra', subtitle: 'Santidad y Sacerdocio', color: '#8e44ad', symbol: '🕎', available: false },
            { vol: 'IV', name: 'Bamidbar', subtitle: 'Peregrinación y Prueba', color: '#d4a017', symbol: '🏔️', available: false },
            { vol: 'V', name: 'Devarim', subtitle: 'Palabra y Pacto', color: '#1a5276', symbol: '📜', available: false },
          ].map((book) => (
            <div key={book.vol} style={{
              minWidth: '180px', background: 'linear-gradient(145deg, #142040, #1c2e50)',
              border: `1px solid ${book.available ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)'}`,
              borderRadius: '4px', padding: '1.75rem 1.25rem', textAlign: 'center',
              opacity: book.available ? 1 : 0.6, position: 'relative', flexShrink: 0,
            }}>
              {book.available && (
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #c9a84c, #e8c96a)', padding: '0.2rem 0.75rem', borderRadius: '2px', fontFamily: "'Cinzel', serif", fontSize: '0.6rem', fontWeight: 700, color: '#0a1628', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                  DISPONIBLE
                </div>
              )}
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{book.symbol}</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: book.color, marginBottom: '0.25rem' }}>VOLUMEN {book.vol}</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.95rem', fontWeight: 700, color: '#f5edd8', marginBottom: '0.25rem' }}>{book.name}</div>
              <div style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.75rem', color: '#7a8a9a' }}>{book.subtitle}</div>
              {!book.available && <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.12em', color: '#5a6a80', marginTop: '0.75rem' }}>PRÓXIMAMENTE</div>}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/coleccion-devocionales" style={{
            fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em',
            color: '#c9a84c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            VER COLECCIÓN COMPLETA →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ position: 'relative', padding: '7rem 1.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=800&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.12) sepia(0.5)', }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.85) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.5rem' }}>
            ✦ COMIENZA HOY ✦
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#f5edd8', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Una biblioteca digital para crecer en madurez espiritual
          </h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1.05rem', color: '#a89870', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Recibe recursos bíblicos cada mes por solo $4.99. Accede a estudios, prédicas, devocionales y materiales de discipulado diseñados para arraigar la vida en la Palabra.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/suscripcion" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #f0dfa0)',
              padding: '1rem 2.25rem', borderRadius: '2px', textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(201,168,76,0.4)',
            }}>
              COMENZAR MI SUSCRIPCIÓN — $4.99/MES
            </Link>
            <Link to="/recursos-gratuitos" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
              color: '#c9a84c', background: 'transparent',
              padding: '1rem 2.25rem', borderRadius: '2px', textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.45)',
            }}>
              RECURSOS GRATUITOS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
