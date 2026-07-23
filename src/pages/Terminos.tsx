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

export default function Terminos() {
  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>
      <section style={{ padding: '5rem 1.5rem', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c9a84c', marginBottom: '1.25rem' }}>✦ INFORMACIÓN LEGAL ✦</div>
        <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          Términos y Condiciones Legales
        </h1>
        <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#7a8a9a', marginBottom: '3rem' }}>
          Última actualización: 2026 — © Asamblea de Yahweh / Yahweh Assembly Online
        </p>

        <div style={{ background: 'linear-gradient(135deg, #142040, #1c2e50)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px', padding: '3rem' }}>

          <Section title="1. Derechos de Autor">
            <P>Todos los materiales publicados por Asamblea de Yahweh están protegidos por derechos de autor. Esto incluye, sin limitarse a:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
              {['Libros digitales y devocionales', 'Estudios bíblicos y prédicas escritas', 'Videos y presentaciones', 'Preguntas de reflexión y guías de estudio', 'Mapas, cronologías, árboles genealógicos e infografías', 'Diseños, imágenes y logotipos', 'Todo contenido escrito publicado en este sitio'].map((i) => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="2. Uso Permitido">
            <P>El usuario puede utilizar el contenido de Asamblea de Yahweh para los siguientes propósitos, siempre conservando el crédito correspondiente:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
              {['Lectura y estudio personal', 'Estudio familiar', 'Discipulado individual', 'Grupos de estudio bíblico', 'Enseñanza congregacional autorizada'].map((i) => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="3. Uso Prohibido">
            <P>Queda estrictamente prohibido sin autorización expresa y escrita de Asamblea de Yahweh:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
              {['Revender materiales en cualquier forma', 'Redistribuir PDFs o archivos digitales', 'Subir archivos a otras plataformas o sitios web', 'Modificar, editar o alterar el contenido', 'Presentar el material como propio', 'Extraer imágenes o infografías para otros proyectos', 'Compartir accesos de suscripción con terceros', 'Copiar o reproducir contenido de la biblioteca premium sin suscripción activa'].map((i) => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="4. Suscripción Mensual">
            <P>El acceso premium a la Biblioteca de Estudio requiere una suscripción mensual activa de $4.99. Al suscribirte, aceptas los siguientes términos:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
              {['El acceso es personal e intransferible', 'La suscripción se renueva automáticamente cada mes', 'Si la suscripción se cancela, el acceso premium se desactiva al final del período pagado', 'Asamblea de Yahweh se reserva el derecho de modificar los contenidos disponibles'].map((i) => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="5. Política de Descargas">
            <P>Los materiales completos solo podrán descargarse o visualizarse según el nivel de acceso permitido. Los documentos están diseñados para uso personal conforme a los términos establecidos. Asamblea de Yahweh se reserva el derecho de limitar, suspender o modificar el acceso a materiales digitales sin previo aviso.</P>
          </Section>

          <Section title="6. Política de Reembolsos">
            <P>La política de reembolsos estará disponible próximamente, una vez que el procesador de pago sea seleccionado e integrado. En principio, los materiales digitales entregados no son reembolsables salvo en circunstancias excepcionales a criterio de Asamblea de Yahweh.</P>
          </Section>

          <Section title="7. Procesamiento de Pagos">
            <P>Los pagos serán procesados por un merchant externo por determinar (Stripe, PayPal, Gumroad, Lemon Squeezy u otro). Asamblea de Yahweh no almacena directamente información sensible de tarjetas de crédito ni datos bancarios de los usuarios.</P>
          </Section>

          <Section title="8. Aviso Legal General">
            <P>Al acceder a este sitio web y utilizar cualquiera de sus recursos, el usuario acepta los presentes términos. Asamblea de Yahweh se reserva el derecho de actualizar estos términos en cualquier momento. El uso continuado del sitio implica la aceptación de los términos vigentes.</P>
            <P>Cualquier violación de estos términos puede resultar en la suspensión inmediata del acceso sin derecho a reembolso.</P>
          </Section>

          <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#c9a84c' }}>
              © 2026 Asamblea de Yahweh / Yahweh Assembly Online. Todos los derechos reservados.
            </p>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#5a6a80', marginTop: '0.25rem' }}>
              A la luz de Su Palabra.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
