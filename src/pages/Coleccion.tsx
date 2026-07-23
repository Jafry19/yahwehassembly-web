import { Link } from 'react-router-dom'

const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

const books = [
  {
    vol: 'I', name: 'Bereshit', subtitle: 'El Libro de los Comienzos',
    color: '#c9a84c', symbol: '🌳', available: true,
    desc: 'Desde la creación hasta la vida de Yosef: 70 devocionales que revelan el gobierno soberano de Yahweh, la fidelidad del pacto y la esperanza redentora.',
    themes: ['Creación', 'Pacto', 'Raíz', 'Fundamento'],
    to: '/libro-bereshit',
  },
  {
    vol: 'II', name: 'Shemot', subtitle: 'Redención y Liberación',
    color: '#c0392b', symbol: '🔥', available: false,
    desc: 'El éxodo de Egipto y el llamado de Moshé. Yahweh revela Su nombre, rescata a Su pueblo y establece los fundamentos del tabernáculo.',
    themes: ['Redención', 'Liberación', 'Fuego', 'Llamado'],
    to: '#',
  },
  {
    vol: 'III', name: 'Vayikra', subtitle: 'Santidad y Sacerdocio',
    color: '#8e44ad', symbol: '🕎', available: false,
    desc: 'El corazón del Torá: instrucciones sobre la santidad, las ofrendas, el sacerdocio y el llamado de un pueblo consagrado a Yahweh.',
    themes: ['Santidad', 'Sacerdocio', 'Altar', 'Consagración'],
    to: '#',
  },
  {
    vol: 'IV', name: 'Bamidbar', subtitle: 'Peregrinación y Prueba',
    color: '#d4a017', symbol: '🏔️', available: false,
    desc: 'Israel en el desierto: el censo, las pruebas, las rebeliones y la fidelidad de Yahweh que sostiene a Su pueblo en la peregrinación.',
    themes: ['Peregrinación', 'Prueba', 'Dependencia', 'Dirección'],
    to: '#',
  },
  {
    vol: 'V', name: 'Devarim', subtitle: 'Palabra y Pacto',
    color: '#1a5276', symbol: '📜', available: false,
    desc: 'El discurso final de Moshé antes de entrar a la tierra prometida: memoria, pacto, obediencia y la advertencia de un pueblo que debe elegir.',
    themes: ['Palabra', 'Pacto', 'Obediencia', 'Memoria'],
    to: '#',
  },
]

export default function Coleccion() {
  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&h=700&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.1) sepia(0.5)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.85) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.25rem' }}>
            ✦ SERIE COMPLETA ✦
          </div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1rem' }}>
            Colección Devocionales<br />de Madurez Espiritual
          </h1>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#a89870', marginBottom: '0.5rem' }}>
            Desde Bereshit hasta Hitgalut
          </p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#7a8a9a', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
            Una serie completa de formación bíblica profunda que recorre todo el Tanaj y el Brit Hadasha, diseñada para formar creyentes arraigados en la Palabra de Yahweh.
          </p>
        </div>
      </section>

      {/* Books grid */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {books.map((book, i) => (
            <div key={book.vol} style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr',
              gap: '2.5rem', alignItems: 'center',
              background: 'linear-gradient(135deg, #142040, #1c2e50)',
              border: `1px solid ${book.available ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.1)'}`,
              borderRadius: '6px', padding: '2.5rem', position: 'relative', overflow: 'hidden',
              opacity: book.available ? 1 : 0.75,
            }}>
              {/* Volume badge */}
              <div style={{
                width: '100px', textAlign: 'center', flexShrink: 0,
                background: `linear-gradient(135deg, rgba(${book.color === '#c9a84c' ? '201,168,76' : book.color === '#c0392b' ? '192,57,43' : book.color === '#8e44ad' ? '142,68,173' : book.color === '#d4a017' ? '212,160,23' : '26,82,118'},0.15), transparent)`,
                border: `1px solid ${book.color}30`, borderRadius: '4px', padding: '1.5rem 1rem',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{book.symbol}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', letterSpacing: '0.2em', color: book.color, marginBottom: '0.25rem' }}>VOLUMEN</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 900, color: book.color }}>{book.vol}</div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 900, color: '#f5edd8', margin: 0 }}>{book.name}</h2>
                  {book.available ? (
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0a1628', background: 'linear-gradient(90deg, #c9a84c, #e8c96a)', padding: '0.2rem 0.7rem', borderRadius: '2px' }}>DISPONIBLE</span>
                  ) : (
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.12em', color: '#5a6a80', border: '1px solid rgba(90,106,128,0.3)', padding: '0.2rem 0.7rem', borderRadius: '2px' }}>PRÓXIMAMENTE</span>
                  )}
                </div>
                <div style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '1rem', color: book.color, marginBottom: '1rem' }}>{book.subtitle}</div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5', lineHeight: 1.7, marginBottom: '1.25rem' }}>{book.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {book.themes.map((t) => (
                    <span key={t} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.12em', color: book.color, border: `1px solid ${book.color}30`, padding: '0.2rem 0.7rem', borderRadius: '2px' }}>{t}</span>
                  ))}
                </div>
                {book.available ? (
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <Link to={book.to} style={{
                      fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                      color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                      padding: '0.7rem 1.5rem', borderRadius: '2px', textDecoration: 'none',
                    }}>
                      COMPRAR BERESHIT
                    </Link>
                    <Link to="/recursos-gratuitos" style={{
                      fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
                      color: '#c9a84c', background: 'transparent',
                      padding: '0.7rem 1.5rem', borderRadius: '2px', textDecoration: 'none',
                      border: '1px solid rgba(201,168,76,0.4)',
                    }}>
                      VER MUESTRA
                    </Link>
                  </div>
                ) : (
                  <Link to="/suscripcion" style={{
                    fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
                    color: '#7a8a9a', background: 'transparent',
                    padding: '0.7rem 1.5rem', borderRadius: '2px', textDecoration: 'none',
                    border: '1px solid rgba(90,106,128,0.25)',
                  }}>
                    NOTIFICARME AL LANZAR
                  </Link>
                )}
              </div>

              {i % 2 === 1 && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', background: `linear-gradient(180deg, transparent, ${book.color}50, transparent)` }} />}
            </div>
          ))}
        </div>
      </section>

      {/* Future volumes */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <GoldDivider label="✦ EN DESARROLLO ✦" />
          <div style={{ marginTop: '3rem', padding: '2.5rem', background: 'linear-gradient(135deg, #0e1e35, #142040)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', fontWeight: 700, color: '#f5edd8', marginBottom: '0.75rem' }}>
              La colección continúa
            </h3>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#8a9ab5', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              La serie Devocionales de Madurez Espiritual continuará desde Bereshit hasta Hitgalut / Apocalipsis, cubriendo cada libro del Tanaj y el Brit Hadasha con la misma profundidad doctrinal, pastoral y confrontativa.
            </p>
            <Link to="/suscripcion" style={{
              fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em',
              color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              padding: '0.85rem 2rem', borderRadius: '2px', textDecoration: 'none',
            }}>
              SUSCRIBIRME PARA RECIBIR NOVEDADES
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
