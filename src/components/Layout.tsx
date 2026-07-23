import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Libro Bereshit', to: '/libro-bereshit' },
  { label: 'Colección', to: '/coleccion-devocionales' },
  { label: 'Biblioteca', to: '/biblioteca-de-estudio' },
  { label: 'Estudios', to: '/estudios-y-predicas' },
  { label: 'Recursos', to: '/recursos-gratuitos' },
  { label: 'Contacto', to: '/contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? 'rgba(10,22,40,0.97)'
          : 'linear-gradient(180deg,rgba(10,22,40,0.95) 0%,rgba(10,22,40,0) 100%)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.12em' }}>
              ASAMBLEA
            </span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', fontWeight: 400, color: '#a89870', letterSpacing: '0.2em' }}>
              DE YAHWEH
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: location.pathname === link.to ? '#c9a84c' : '#d4c4a0',
                  textDecoration: 'none',
                  padding: '0.4rem 0.7rem',
                  borderRadius: '2px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#e8c96a' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = location.pathname === link.to ? '#c9a84c' : '#d4c4a0' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              <span style={{ color: '#c9a84c', fontWeight: 700 }}>ES</span>
              <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
              <Link to="/en/coming-soon" style={{ color: '#6b7a90', textDecoration: 'none', fontWeight: 400 }}>EN</Link>
            </div>

            {/* CTA Button */}
            <Link
              to="/suscripcion"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#0a1628',
                background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                padding: '0.5rem 1.1rem',
                borderRadius: '2px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 12px rgba(201,168,76,0.3)',
                transition: 'all 0.2s',
              }}
              className="hidden-mobile"
            >
              SUSCRIBIRME
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#c9a84c' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(10,22,40,0.98)', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: 'block',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: location.pathname === link.to ? '#c9a84c' : '#d4c4a0',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(201,168,76,0.08)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/suscripcion"
            style={{
              display: 'block',
              marginTop: '1rem',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: '#0a1628',
              background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
              padding: '0.75rem',
              borderRadius: '2px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            SUSCRIBIRME — $4.99/MES
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 899px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#060f1e', borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.12em', marginBottom: '0.25rem' }}>
              ASAMBLEA DE YAHWEH
            </div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', color: '#a89870', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              YAHWEH ASSEMBLY ONLINE
            </div>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#8a9ab5', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Plataforma de formación bíblica profunda, centrada en la Palabra y la esperanza revelada en Yahushúa HaMashíaj.
            </p>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.8rem', color: '#c9a84c' }}>
              A la luz de Su Palabra.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              NAVEGACIÓN
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Inicio', to: '/' },
                { label: 'Libro Bereshit', to: '/libro-bereshit' },
                { label: 'Colección de Libros', to: '/coleccion-devocionales' },
                { label: 'Biblioteca de Estudio', to: '/biblioteca-de-estudio' },
                { label: 'Estudios y Prédicas', to: '/estudios-y-predicas' },
                { label: 'Recursos Gratuitos', to: '/recursos-gratuitos' },
              ].map((l) => (
                <Link key={l.to} to={l.to} style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#8a9ab5', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#c9a84c' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#8a9ab5' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              RECURSOS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Suscripción $4.99/mes', to: '/suscripcion' },
                { label: 'Sobre Nosotros', to: '/sobre-asamblea-de-yahweh' },
                { label: 'Contacto', to: '/contacto' },
                { label: 'Términos Legales', to: '/terminos-legales' },
                { label: 'Política de Privacidad', to: '/politica-de-privacidad' },
                { label: 'English — Coming Soon', to: '/en/coming-soon' },
              ].map((l) => (
                <Link key={l.to} to={l.to} style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#8a9ab5', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#c9a84c' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#8a9ab5' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              CONTACTO
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#8a9ab5' }}>
                📍 Panamá, República de Panamá
              </div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#8a9ab5' }}>
                🌐 yahwehassembly.online
              </div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#8a9ab5' }}>
                🌐 asambleadeyahweh.online
              </div>
            </div>
          </div>
        </div>

        {/* Legal notice */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1.5rem', marginBottom: '1rem' }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#5a6a80', lineHeight: 1.6 }}>
            Todos los libros, estudios, videos, presentaciones, preguntas, infografías y materiales disponibles en este sitio están protegidos por derechos de autor. Su uso está permitido únicamente conforme a los términos establecidos por Asamblea de Yahweh. Queda prohibida su venta, redistribución, modificación o reproducción no autorizada.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', color: '#5a6a80', letterSpacing: '0.05em' }}>
            © 2026 Asamblea de Yahweh / Yahweh Assembly Online. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/terminos-legales" style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#5a6a80', textDecoration: 'none' }}>Términos</Link>
            <Link to="/politica-de-privacidad" style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#5a6a80', textDecoration: 'none' }}>Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#0a1628' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
