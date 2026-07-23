const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

export default function Sobre() {
  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1600&h=800&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.12) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.25rem' }}>✦ QUIÉNES SOMOS ✦</div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Sobre Asamblea de Yahweh
          </h1>
          <blockquote style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '1.15rem', color: '#c9a84c', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            "Asamblea de Yahweh nace con el propósito de formar creyentes maduros, arraigados en la Palabra, sensibles al Ruaj HaKadosh y centrados en la revelación de Yahweh a través de las Escrituras."
          </blockquote>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            {
              icon: '🎯', title: 'Misión',
              text: 'Formar creyentes bíblicamente maduros a través de recursos de estudio profundo, doctrinal y pastoral, que ayuden a cada persona a crecer en el conocimiento de Yahweh y en la aplicación de Su Palabra en cada área de la vida.'
            },
            {
              icon: '👁️', title: 'Visión',
              text: 'Ser una plataforma digital de referencia para el estudio bíblico profundo en español e inglés, publicando una colección completa de devocionales, estudios y recursos que acompañen al creyente desde Bereshit hasta Hitgalut.'
            },
            {
              icon: '⚖️', title: 'Valores',
              text: 'Fidelidad a las Escrituras. Profundidad doctrinal. Excelencia editorial. Reverencia hacia Yahweh. Integridad en la enseñanza. Seriedad espiritual. Compromiso con la madurez del creyente sobre el entretenimiento religioso.'
            },
          ].map((item) => (
            <div key={item.title} style={{
              background: 'linear-gradient(135deg, #142040, #1c2e50)',
              border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px',
              padding: '2.5rem 2rem',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 700, color: '#c9a84c', marginBottom: '1rem', letterSpacing: '0.08em' }}>{item.title}</h2>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '0.92rem', color: '#8a9ab5', lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enfoque bíblico */}
      <section style={{ background: '#060f1e', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <GoldDivider label="✦ ENFOQUE BÍBLICO ✦" />
          <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.75rem', color: '#f5edd8', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Una identidad mesiánica, bíblica y seria
              </h2>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#a89870', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                No somos una iglesia genérica ni una plataforma de contenido religioso superficial. Asamblea de Yahweh es una comunidad centrada en el estudio riguroso y reverente de las Escrituras, desde Bereshit hasta Hitgalut.
              </p>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#a89870', lineHeight: 1.9 }}>
                Nuestro enfoque mesiánico reconoce la continuidad del Tanaj y el Brit Hadasha, la autoridad del Nombre de Yahweh, y el cumplimiento de la promesa del pacto en Yahushúa HaMashíaj.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Centrados en el Nombre de Yahweh',
                'Fundados en el Tanaj y el Brit Hadasha',
                'Comprometidos con la enseñanza profunda',
                'Enfocados en la madurez espiritual',
                'Serios en la identidad mesiánica',
                'Con sede en Panamá, alcance global',
              ].map((v) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#a89870' }}>
                  <span style={{ color: '#c9a84c', flexShrink: 0 }}>✦</span> {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <GoldDivider label="✦ NUESTRO COMPROMISO ✦" />
        <div style={{ marginTop: '3rem', padding: '3rem', background: 'linear-gradient(135deg, #142040, #1c2e50)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
          <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#c9a84c', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            "Recursos diseñados para arraigar la vida en la Palabra. Para formar creyentes que no solo conocen la Escritura, sino que viven bajo su autoridad."
          </p>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: '#a89870' }}>
            — ASAMBLEA DE YAHWEH, PANAMÁ
          </div>
        </div>
      </section>
    </div>
  )
}
