const GoldDivider = () => (
  <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)', margin: '2.5rem 0' }} />
)

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.08em', marginBottom: '1rem' }}>{title}</h2>
    {children}
    <GoldDivider />
  </div>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5', lineHeight: 1.85, marginBottom: '0.75rem' }}>{children}</p>
)

const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5', lineHeight: 1.8, marginBottom: '0.4rem' }}>
    <span style={{ color: '#c9a84c', marginRight: '0.5rem' }}>✦</span>{children}
  </li>
)

export default function Privacidad() {
  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>
      <section style={{ padding: '5rem 1.5rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c9a84c', marginBottom: '1.25rem' }}>✦ INFORMACIÓN LEGAL ✦</div>
        <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          Política de Privacidad
        </h1>
        <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#7a8a9a', marginBottom: '3rem' }}>
          Última actualización: 2026 — © Asamblea de Yahweh / Yahweh Assembly Online
        </p>

        <div style={{ background: 'linear-gradient(135deg, #142040, #1c2e50)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', padding: '3rem' }}>

          <Section title="1. Datos Recopilados">
            <P>Asamblea de Yahweh recopila únicamente los datos necesarios para operar el sitio y brindar sus servicios. Esto puede incluir:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
              {['Nombre y correo electrónico (formularios y suscripción)', 'Datos de pago procesados por el merchant externo (no almacenados por nosotros)', 'Información técnica básica del navegador (cookies funcionales)', 'Preferencias de idioma y navegación'].map((i) => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="2. Formularios y Registro">
            <P>Al completar formularios en este sitio (contacto, suscripción a recursos gratuitos, registro de cuenta), el usuario proporciona voluntariamente su información. Esta información se usa exclusivamente para:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
              {['Enviar los recursos solicitados', 'Gestionar el acceso a la cuenta o suscripción', 'Comunicaciones relacionadas con Asamblea de Yahweh', 'Enviar notificaciones sobre nuevos materiales (con consentimiento)'].map((i) => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="3. Email Marketing">
            <P>Si el usuario se suscribe a la newsletter o solicita recursos gratuitos, puede recibir comunicaciones por correo electrónico de Asamblea de Yahweh. Estas incluyen devocionales, novedades de la colección y anuncios de nuevos materiales.</P>
            <P>El usuario puede cancelar su suscripción al email marketing en cualquier momento usando el enlace de cancelación incluido en cada correo.</P>
          </Section>

          <Section title="4. Pagos Procesados por Terceros">
            <P>Los pagos son procesados por un merchant externo (Stripe, PayPal, Gumroad u otro por determinar). Asamblea de Yahweh no almacena directamente información de tarjetas de crédito, datos bancarios ni información de pago sensible.</P>
            <P>La política de privacidad del procesador de pago externo aplica en todas las transacciones financieras.</P>
          </Section>

          <Section title="5. Cookies">
            <P>Este sitio puede usar cookies funcionales esenciales para el correcto funcionamiento del sitio, la gestión de sesiones de usuario y las preferencias de idioma. No se utilizan cookies de seguimiento o publicidad sin consentimiento explícito del usuario.</P>
          </Section>

          <Section title="6. Seguridad">
            <P>Asamblea de Yahweh aplica medidas razonables de seguridad para proteger la información del usuario. Sin embargo, ninguna transmisión de datos por internet puede garantizarse como completamente segura. El usuario acepta este riesgo inherente al usar servicios digitales.</P>
          </Section>

          <Section title="7. Derechos del Usuario">
            <P>El usuario tiene derecho a:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
              {['Solicitar acceso a sus datos personales', 'Solicitar corrección de datos inexactos', 'Solicitar eliminación de sus datos (donde aplique)', 'Cancelar suscripciones de email en cualquier momento', 'Contactarnos para cualquier consulta sobre privacidad'].map((i) => <Li key={i}>{i}</Li>)}
            </ul>
            <P>Para ejercer estos derechos, puedes contactarnos a través del formulario disponible en la página de Contacto.</P>
          </Section>

          <Section title="8. Cambios a esta Política">
            <P>Asamblea de Yahweh puede actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta misma página con la fecha de última actualización. El uso continuado del sitio implica la aceptación de la política vigente.</P>
          </Section>

          <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#c9a84c' }}>
              © 2026 Asamblea de Yahweh / Yahweh Assembly Online. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
