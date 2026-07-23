import { useState } from 'react'

const GoldDivider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '400px' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
    {label && <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c' }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
  </div>
)

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#f5edd8',
    background: 'rgba(20,32,64,0.8)', border: '1px solid rgba(201,168,76,0.25)',
    padding: '0.85rem 1.25rem', borderRadius: '2px', outline: 'none', width: '100%',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=700&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.1) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.25rem' }}>✦ CONTÁCTANOS ✦</div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1rem' }}>
            Contacto
          </h1>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '1.05rem', color: '#a89870', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
            "Estamos aquí para acompañarte en tu recorrido por la Palabra. Escríbenos con tus preguntas, inquietudes o solicitudes."
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.25rem', color: '#f5edd8', marginBottom: '2rem' }}>
              Información de contacto
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: '📍', label: 'Sede', value: 'Panamá, República de Panamá' },
                { icon: '🌐', label: 'Sitio principal', value: 'yahwehassembly.online' },
                { icon: '🌐', label: 'Sitio alternativo', value: 'asambleadeyahweh.online' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem', marginTop: '0.1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c9a84c', marginBottom: '0.2rem' }}>{item.label.toUpperCase()}</div>
                    <div style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#a89870' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <GoldDivider />
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', marginBottom: '1rem' }}>REDES SOCIALES</h3>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#7a8a9a', lineHeight: 1.7 }}>
                Nuestras redes sociales estarán disponibles próximamente. Suscríbete a la newsletter para recibir novedades.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {!submitted ? (
              <>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.25rem', color: '#f5edd8', marginBottom: '2rem' }}>
                  Envíanos un mensaje
                </h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div>
                    <label style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#a89870', display: 'block', marginBottom: '0.4rem' }}>NOMBRE *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre completo"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#a89870', display: 'block', marginBottom: '0.4rem' }}>CORREO ELECTRÓNICO *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@correo.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#a89870', display: 'block', marginBottom: '0.4rem' }}>ASUNTO</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="libro">Consulta sobre el libro Bereshit</option>
                      <option value="suscripcion">Consulta sobre suscripción</option>
                      <option value="estudios">Sobre estudios y prédicas</option>
                      <option value="grupos">Uso para grupos o congregaciones</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#a89870', display: 'block', marginBottom: '0.4rem' }}>MENSAJE *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Escribe tu mensaje aquí..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" style={{
                    fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
                    color: '#0a1628', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                    padding: '1rem', borderRadius: '2px', border: 'none', cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(201,168,76,0.35)', transition: 'all 0.2s',
                  }}>
                    ENVIAR MENSAJE
                  </button>
                </form>
              </>
            ) : (
              <div style={{ padding: '3rem', background: 'linear-gradient(135deg, rgba(74,158,106,0.1), rgba(74,158,106,0.05))', border: '1px solid rgba(74,158,106,0.25)', borderRadius: '4px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>✅</div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 700, color: '#f5edd8', marginBottom: '0.75rem' }}>
                  ¡Mensaje enviado!
                </h3>
                <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.92rem', color: '#8a9ab5', lineHeight: 1.7 }}>
                  Gracias por escribirnos. Responderemos tu mensaje en los próximos días. Que Yahweh te guarde.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
