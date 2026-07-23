import { useState } from 'react'
import { Link } from 'react-router-dom'
import infoPecado from '../imports/Infografico_del_Estudio_Pecado_Oculto.png'
import infoMayordomo from '../imports/Infografia_El_Coraz_n_del_Mayordomo.png'
import infoPrincipe from '../imports/Infograf_a_Gu_a_de_Discernimiento_Prof_tico.png'

// ── CUESTIONARIO — Subiendo al Monte (opción múltiple) ───────────────
const quizSubiendo = [
  { q: '¿Cuál es la diferencia entre el valle y el monte según el estudio?', opts: ['El monte es más hermoso que el valle', 'El valle representa ruido, multitud y actividad; el monte representa separación, intimidad y voz', 'No hay diferencia, solo es geografía'], answer: 1, ref: 'Salmo 121:1-2' },
  { q: '¿Cuáles son las condiciones para subir al monte de Yahweh según el Salmo 24?', opts: ['Tener un título ministerial', 'Ser de Israel biológicamente', 'Limpio de manos y puro de corazón'], answer: 2, ref: 'Salmo 24:3-4' },
  { q: 'En el estudio sobre Moshé, ¿cuál es la diferencia entre conocer las obras y los caminos de Yahweh?', opts: ['Las obras son visibles; los caminos son ocultos', 'Las obras = lo que hace Yahweh; los caminos = Su carácter y corazón', 'No hay diferencia teológica relevante'], answer: 1, ref: 'Éxodo 33:13' },
  { q: 'El monte en la Escritura es principalmente...', opts: ['Un lugar de descanso físico', 'Un lugar de obediencia y rendición ante Yahweh', 'Un símbolo de poder político'], answer: 1, ref: 'Éxodo 3:1-5; 19:3' },
  { q: '¿Qué hizo que Eliyahu pudiera escuchar la voz de Yahweh en Horeb?', opts: ['Su experiencia profética previa', 'El retiro, la cueva y la voz apacible que restaura al siervo cansado', 'El fuego y el viento'], answer: 1, ref: '1 Reyes 19:11-12' },
  { q: '¿Qué representa el Monte Karmel en la narrativa de Eliyahu?', opts: ['Un lugar de paz y descanso', 'Un lugar de decisión y confrontación entre adoración verdadera y falsa mezcla', 'El hogar de Eliyahu'], answer: 1, ref: '1 Reyes 18:19-21' },
  { q: 'El efecto de la presencia de Yahweh en el creyente es...', opts: ['Una transformación visible que produce el fruto del Espíritu sin esfuerzo humano propio', 'El esfuerzo humano que produce fruto con ayuda divina', 'Solo visible en milagros externos'], answer: 0, ref: '2 Corintios 3:18' },
  { q: 'En la visión de la montaña del Rey, ¿qué representa el "descender del monte"?', opts: ['Perder la presencia de Yahweh', 'Llevar dirección y gloria del Padre a los demás', 'Terminar el ministerio'], answer: 1, ref: 'Éxodo 34:29-30' },
  { q: 'El Monte de los Olivos en la profecía final representa...', opts: ['Solo un lugar histórico', 'El gobierno mesiánico, la adoración establecida y el reino', 'La derrota de Israel'], answer: 1, ref: 'Zacarías 14:4; Hechos 1:11' },
  { q: 'El propósito final de "subir al monte" es...', opts: ['Cumplir con una práctica religiosa', 'Encontrarse con la Persona de Yahweh para ser transformado a Su imagen', 'Obtener visiones y revelaciones personales'], answer: 1, ref: 'Éxodo 24:12; 2 Corintios 3:18' },
]

function QuizSection() {
  const [selected, setSelected] = useState<(number | null)[]>(Array(quizSubiendo.length).fill(null))
  const [revealed, setRevealed] = useState<boolean[]>(Array(quizSubiendo.length).fill(false))
  const [score, setScore] = useState<number | null>(null)

  const choose = (qi: number, oi: number) => { if (revealed[qi]) return; const n = [...selected]; n[qi] = oi; setSelected(n) }
  const reveal = (qi: number) => { if (selected[qi] === null) return; const n = [...revealed]; n[qi] = true; setRevealed(n) }
  const calcScore = () => { setScore(quizSubiendo.reduce((a, q, i) => a + (selected[i] === q.answer ? 1 : 0), 0)); setRevealed(Array(quizSubiendo.length).fill(true)) }
  const reset = () => { setSelected(Array(quizSubiendo.length).fill(null)); setRevealed(Array(quizSubiendo.length).fill(false)); setScore(null) }

  return (
    <div>
      {quizSubiendo.map((item, qi) => {
        const isR = revealed[qi]; const sel = selected[qi]
        return (
          <div key={qi} style={{ marginBottom: '1.4rem', padding: '1.2rem', background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px' }}>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.87rem', color: '#d4c49a', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.5 }}>
              <span style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c', fontSize: '0.7rem', marginRight: '0.45rem' }}>{qi + 1}.</span>{item.q}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.65rem' }}>
              {item.opts.map((opt, oi) => {
                let bg = 'rgba(255,255,255,0.02)', border = 'rgba(201,168,76,0.12)', color = '#8a9ab5'
                if (sel === oi && !isR) { bg = 'rgba(201,168,76,0.1)'; border = 'rgba(201,168,76,0.5)'; color = '#f5edd8' }
                if (isR && oi === item.answer) { bg = 'rgba(74,158,106,0.15)'; border = 'rgba(74,158,106,0.5)'; color = '#7ed4a4' }
                if (isR && sel === oi && oi !== item.answer) { bg = 'rgba(180,60,60,0.1)'; border = 'rgba(180,60,60,0.4)'; color = '#e08080' }
                return (
                  <button key={oi} onClick={() => choose(qi, oi)} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', padding: '0.5rem 0.85rem', background: bg, border: `1px solid ${border}`, borderRadius: '3px', cursor: isR ? 'default' : 'pointer', textAlign: 'left', transition: 'all 0.18s' }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', color, minWidth: '0.9rem', paddingTop: '2px', flexShrink: 0 }}>{isR ? (oi === item.answer ? '✓' : sel === oi ? '✗' : '○') : (sel === oi ? '●' : '○')}</span>
                    <span style={{ fontFamily: "'Lora', serif", fontSize: '0.83rem', color, lineHeight: 1.45 }}>{opt}</span>
                  </button>
                )
              })}
            </div>
            {isR && <p style={{ fontFamily: "'Lora', serif", fontSize: '0.72rem', color: '#5a8a6a', fontStyle: 'italic' }}>Referencia: {item.ref}</p>}
            {!isR && sel !== null && <button onClick={() => reveal(qi)} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#c9a84c', background: 'transparent', border: '1px solid rgba(201,168,76,0.3)', padding: '0.27rem 0.72rem', borderRadius: '2px', cursor: 'pointer' }}>VER RESPUESTA</button>}
          </div>
        )
      })}
      {score !== null && (
        <div style={{ padding: '1.4rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', textAlign: 'center', marginBottom: '1.1rem' }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '1.05rem', color: '#c9a84c', marginBottom: '0.35rem' }}>Resultado: {score} / {quizSubiendo.length}</p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '0.82rem', color: '#8a9ab5' }}>{score === 10 ? '¡Excelente! Dominas este estudio.' : score >= 7 ? 'Muy bien. Repasa las preguntas fallidas.' : 'Repasa el estudio y vuelve a intentarlo.'}</p>
        </div>
      )}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
        {!score && <button onClick={calcScore} disabled={!selected.every(s => s !== null)} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', color: selected.every(s => s !== null) ? '#0a1628' : '#4a5a70', background: selected.every(s => s !== null) ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : 'rgba(255,255,255,0.04)', border: 'none', padding: '0.58rem 1.3rem', borderRadius: '2px', cursor: selected.every(s => s !== null) ? 'pointer' : 'not-allowed' }}>VER PUNTUACIÓN</button>}
        <button onClick={reset} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.67rem', letterSpacing: '0.1em', color: '#8a9ab5', background: 'transparent', border: '1px solid rgba(138,154,181,0.25)', padding: '0.58rem 1.3rem', borderRadius: '2px', cursor: 'pointer' }}>REINICIAR</button>
      </div>
    </div>
  )
}

// ── FLASHCARDS — El Príncipe que ha de Venir ─────────────────────────
const flashcardsPrincipe = [
  { q: '¿Cuáles son los dos textos base principales del estudio?', a: 'Daniel 9:24-27 y Daniel 11:21-23.' },
  { q: 'En la Pirámide de Preparación Espiritual, ¿cuál es el elemento que sirve como "Fundamento"?', a: 'El Pacto.' },
  { q: '¿Qué significa que el Mesías fue cortado "sin tener nada para sí"?', a: 'Que murió no por sus propios pecados, sino en lugar de otros como sacrificio.' },
  { q: 'En la estructura de las 70 semanas, ¿cuántos años representan las primeras 69 semanas (7 + 62)?', a: '483 años.' },
  { q: '¿Por qué el estudio afirma que el Príncipe no debe confundirse con el Desolador?', a: 'Porque el Príncipe está ligado al Pacto (función positiva), mientras el Desolador está ligado a la abominación.' },
  { q: 'En el flujo del pacto, ¿cuál es la estación que sigue a la confirmación del pacto con muchos?', a: 'El Desolador se opone.' },
  { q: 'Según Daniel 12:1, ¿quién es el "Gran Príncipe" que se levanta a favor del pueblo en tiempo de angustia?', a: 'Mikael.' },
  { q: '¿Qué significa que el Mesías actúe como "Kohen Gadol"?', a: 'Significa que actúa como Sumo Sacerdote y mediador del Pacto.' },
  { q: 'El periodo de "tiempo, tiempos y medio tiempo" equivale a _____ años.', a: 'Tres y medio (3.5).' },
  { q: '¿Qué profeta menciona al "Mensajero del Pacto" que viene a su Templo?', a: 'Malaquías (en Malaquías 3:1).' },
  { q: '¿Cuál es la advertencia principal sobre el engaño del "Falso Mesías"?', a: 'Que vendrá con lenguaje religioso, señales poderosas y apariencia espiritual.' },
  { q: '¿Cuál es la consecuencia terrenal de que el dragón sea arrojado a la tierra en Apocalipsis 12?', a: 'El aumento de la persecución contra los que guardan los mandamientos y tienen el testimonio de Yahushúa.' },
  { q: 'En la Pirámide de Preparación Espiritual, el nivel que sigue al Arrepentimiento es el _____.', a: 'Discernimiento.' },
  { q: '¿A qué se refiere el nivel de "Arrepentimiento" en la Pirámide?', a: 'A los primeros pasos de purificación interna y compromiso con la realidad de las Escrituras.' },
  { q: 'De acuerdo con el estudio, ¿quién es la figura que se opone al Pacto y causa la abominación?', a: 'El Desolador.' },
  { q: 'Según Daniel 9:24, ¿cuántas semanas están determinadas sobre el pueblo de Daniel?', a: 'Setenta semanas.' },
  { q: 'Según el patrón profético, ¿qué figura confronta la idolatría y restaura el altar?', a: 'Eliyahu (Elías).' },
  { q: '¿Qué dos características definen la identidad del "Remanente Fiel" según Apocalipsis?', a: 'Guardar los mandamientos de Yahweh y tener el testimonio de Yahushúa.' },
  { q: 'Término: Berit', a: 'Pacto o relación sagrada establecida ante Yahweh, sostenida por promesa, sangre y fidelidad.' },
  { q: 'En el calendario profético de Daniel 9, una "Shavua" (semana) equivale a un periodo de _____ años.', a: 'Siete.' },
  { q: 'El estudio enfatiza que la profecía no fue dada para curiosidad carnal, sino para formar un _____.', a: 'Remanente fiel al Pacto.' },
  { q: 'Según el estudio, ¿qué tipo de pacto es el que se confirma "con muchos" en la última semana?', a: 'El Nuevo Pacto establecido por la sangre de Yahushúa.' },
  { q: '¿Cuál es la función principal del "Falso Profeta" dentro del sistema del engaño final?', a: 'Legitimar espiritualmente a la Bestia y dirigir la adoración hacia el sistema falso.' },
  { q: '¿Qué es la "abominación desoladora" en términos espirituales?', a: 'La contaminación de la adoración verdadera y la usurpación del lugar apartado por el Desolador.' },
  { q: '¿Cómo se define una congregación preparada según la "Señal 2" del estudio?', a: 'Discierne voces: no recibe todo mensaje solo porque suena espiritual.' },
  { q: '¿Qué significa el término hebreo "Karat" en el contexto de Daniel 9:26?', a: 'Significa "cortar", refiriéndose a que el Mesías sería cortado (moriría) como sacrificio del Pacto.' },
  { q: 'De acuerdo con el estudio, ¿cuál es el centro del conflicto final?', a: 'El Pacto (fidelidad del pueblo a Yahweh).' },
  { q: '¿Cuál es la primera estación en la línea histórica del "Flujo del Pacto"?', a: 'Pacto con Avraham.' },
  { q: '¿Qué figura profética es descrita como el "Poder político mundial" de dominio y persecución?', a: 'La Bestia.' },
  { q: '¿Cuál es el segundo nivel de la Pirámide, situado sobre el Fundamento?', a: 'Amor a la Verdad.' },
  { q: 'En Apocalipsis 12, ¿contra quién combate Mikael en el cielo?', a: 'Contra el dragón (Satán) y sus mensajeros.' },
  { q: '¿Qué relación tiene Mikael con el pueblo de Daniel según Daniel 10:21?', a: 'Es identificado como "vuestro príncipe" o el príncipe defensor del pueblo.' },
  { q: '¿Cuál es la diferencia interpretativa clave entre "hacer" un pacto y "confirmar" un pacto en Daniel 9:27?', a: 'Confirmar implica ratificar un pacto que ya existe, como el Nuevo Pacto sellado por Yahushúa.' },
  { q: 'En el pensamiento hebreo, el término "Mashíaj" significa _____.', a: 'Ungido.' },
  { q: 'De acuerdo con el estudio, ¿qué representa el Arca en el patrón de los testigos de Yahweh?', a: 'La predicación de justicia y la advertencia antes del juicio (asociada a Noaj).' },
  { q: 'En la pirámide, ¿cuál es el paso previo a alcanzar la Fidelidad Final (cima)?', a: 'Mandamientos de Yahweh (obediencia activa a la Torá).' },
  { q: 'Concepto: El espíritu del anticristo', a: 'Un sistema de oposición que busca negar al verdadero Mesías o sustituirlo por una imagen falsa.' },
  { q: '¿Qué evento histórico del año 70 d.C. se relaciona con el "pueblo del príncipe" que destruye la ciudad?', a: 'La destrucción de Jerusalén y el Templo por los romanos.' },
  { q: '¿Cuál es el riesgo de predicar "perdón sin santidad" según la aplicación espiritual del estudio?', a: 'Produce creyentes vulnerables al engaño final al tener una imagen incompleta del Mesías.' },
  { q: '¿Cuál es la "Señal 7" de una congregación preparada?', a: 'Resiste la presión del mundo y no dobla rodilla ante Babilonia.' },
  { q: 'La frase "sangre derramada por muchos" de Yahushúa conecta con la expresión "_____ el Pacto con muchos" de Daniel 9:27.', a: 'Confirmará.' },
  { q: '¿Cuál es la distinción gramatical importante sobre quién destruye la ciudad en Daniel 9:26?', a: 'El texto especifica que es el pueblo del Príncipe, no el Príncipe mismo.' },
  { q: 'Según Daniel 9:24, uno de los propósitos de las 70 semanas es "ungir al _____".', a: 'Lugar Santísimo.' },
  { q: 'Término: Naguid', a: 'Príncipe, gobernante o líder designado con autoridad y dirección, no necesariamente un rey coronado.' },
  { q: 'En Daniel 9, la expresión "Mashíaj Naguid" une dos dimensiones del Mesías. ¿Cuáles son?', a: 'La dimensión sacerdotal/sacrificial (Mashíaj) y la dimensión real/gubernamental (Naguid).' },
  { q: 'En la interpretación propuesta, ¿qué figura representa el juicio que se derrama sobre el destructor?', a: 'Lo determinado derramado sobre el Desolador.' },
  { q: 'El estudio asocia a Yahujanan (Juan el Bautista) con la función profética de _____.', a: 'Preparar el camino del Mesías.' },
  { q: '¿Durante cuántos días profetizan los dos testigos de Apocalipsis 11?', a: '1260 días.' },
  { q: '¿Qué nivel se encuentra en la "Cima" de la Pirámide de Preparación Espiritual?', a: 'Fidelidad Final.' },
  { q: 'En el patrón de los testigos, ¿quién representa la confrontación contra el imperio y la entrega de la Torá?', a: 'Moshé (Moisés).' },
  { q: '¿Qué elemento purificador menciona Malaquías 3 que acompaña la venida del Mensajero del Pacto?', a: 'El fuego refinador.' },
  { q: '¿Cuál es el propósito principal de las 70 semanas relacionado con la transgresión y el pecado?', a: 'Terminar la transgresión y poner fin al pecado.' },
  { q: '¿Qué evento profético marca el final de las primeras 69 semanas según Daniel 9:25?', a: 'La aparición del Mashíaj Naguid.' },
  { q: 'A la mitad de la última semana profética, el texto indica que cesará el _____ y la _____.', a: 'Sacrificio y ofrenda.' },
  { q: 'En Daniel 11:22, ¿cómo se denomina a la figura contra la cual se levanta el "hombre despreciable"?', a: 'El Príncipe del Pacto.' },
]

const PAGE_SIZE = 10

function FlashcardSection() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [page, setPage] = useState(0)
  const total = flashcardsPrincipe.length
  const totalPages = Math.ceil(total / PAGE_SIZE)
  const start = page * PAGE_SIZE
  const cards = flashcardsPrincipe.slice(start, start + PAGE_SIZE)

  const toggle = (i: number) => {
    const abs = start + i
    setRevealed(prev => { const n = new Set(prev); n.has(abs) ? n.delete(abs) : n.add(abs); return n })
  }
  const resetAll = () => { setRevealed(new Set()); setPage(0) }

  return (
    <div>
      {/* Progress bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', color: '#c9a84c', letterSpacing: '0.1em' }}>{revealed.size} / {total} REVISADAS</span>
        <div style={{ flex: 1, height: '3px', background: 'rgba(201,168,76,0.12)', margin: '0 1rem', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(revealed.size / total) * 100}%`, background: 'linear-gradient(90deg,#c9a84c,#e8c96a)', transition: 'width 0.3s', borderRadius: '2px' }} />
        </div>
        <button onClick={resetAll} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.1em', color: '#7a8a9a', background: 'transparent', border: '1px solid rgba(122,138,154,0.2)', padding: '0.22rem 0.65rem', borderRadius: '2px', cursor: 'pointer' }}>REINICIAR</button>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.4rem' }}>
        {cards.map((card, i) => {
          const abs = start + i; const isOpen = revealed.has(abs)
          return (
            <div key={abs} style={{ border: `1px solid ${isOpen ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0.12)'}`, borderRadius: '4px', overflow: 'hidden', transition: 'border-color 0.2s' }}>
              <button onClick={() => toggle(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', padding: '0.9rem 1rem', background: isOpen ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#c0b08a', lineHeight: 1.45, flex: 1 }}>
                  <span style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c', fontSize: '0.65rem', marginRight: '0.45rem' }}>{abs + 1}.</span>{card.q}
                </span>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', color: isOpen ? '#7ed4a4' : '#c9a84c', flexShrink: 0, paddingTop: '2px' }}>{isOpen ? '▲ OCULTAR' : '▼ VER'}</span>
              </button>
              {isOpen && (
                <div style={{ padding: '0.85rem 1rem 1rem', background: 'rgba(10,22,40,0.45)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: '0.87rem', color: '#a8d4b4', lineHeight: 1.65, margin: 0 }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', color: '#7ed4a4', marginRight: '0.45rem', letterSpacing: '0.1em' }}>R:</span>{card.a}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', color: page === 0 ? '#3a4a5a' : '#c9a84c', background: 'transparent', border: `1px solid ${page === 0 ? 'rgba(58,74,90,0.2)' : 'rgba(201,168,76,0.3)'}`, padding: '0.35rem 0.85rem', borderRadius: '2px', cursor: page === 0 ? 'not-allowed' : 'pointer' }}>← ANTERIOR</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i)} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', color: page === i ? '#0a1628' : '#8a9ab5', background: page === i ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : 'transparent', border: page === i ? 'none' : '1px solid rgba(138,154,181,0.2)', padding: '0.35rem 0.65rem', borderRadius: '2px', cursor: 'pointer', minWidth: '1.8rem' }}>{i + 1}</button>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', color: page === totalPages - 1 ? '#3a4a5a' : '#c9a84c', background: 'transparent', border: `1px solid ${page === totalPages - 1 ? 'rgba(58,74,90,0.2)' : 'rgba(201,168,76,0.3)'}`, padding: '0.35rem 0.85rem', borderRadius: '2px', cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer' }}>SIGUIENTE →</button>
        </div>
      )}
    </div>
  )
}

// ── REFLECTION ACCORDION ──────────────────────────────────────────────
function ReflexionAccordion({ questions }: { questions: string[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      {questions.map((q, i) => (
        <div key={i} style={{ border: '1px solid rgba(201,168,76,0.13)', borderRadius: '3px', overflow: 'hidden' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.78rem 1rem', background: open === i ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '0.7rem' }}>
            <span style={{ fontFamily: "'Lora', serif", fontSize: '0.84rem', color: '#c0b08a', lineHeight: 1.45 }}>
              <span style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c', fontSize: '0.65rem', marginRight: '0.4rem' }}>{i + 1}.</span>{q}
            </span>
            <span style={{ color: '#c9a84c', fontSize: '0.73rem', flexShrink: 0 }}>{open === i ? '▲' : '▼'}</span>
          </button>
          {open === i && (
            <div style={{ padding: '0.8rem 1rem', background: 'rgba(10,22,40,0.4)', borderTop: '1px solid rgba(201,168,76,0.07)' }}>
              <textarea placeholder="Escribe tu reflexión aquí…" rows={3} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '2px', padding: '0.58rem', color: '#d4c49a', fontFamily: "'Lora', serif", fontSize: '0.84rem', lineHeight: 1.6, resize: 'vertical', boxSizing: 'border-box' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ── STUDY CARD ────────────────────────────────────────────────────────
type Study = {
  id: string; cat: string; catColor: string; title: string; scripture: string
  duration: string; level: string; summary: string; image?: string
  highlights: string[]; reflexiones?: string[]
  hasQuiz?: boolean; hasFlashcards?: boolean
}

function StudyCard({ study }: { study: Study }) {
  const [expanded, setExpanded] = useState(false)
  const [tab, setTab] = useState<'contenido' | 'reflexion' | 'cuestionario'>('contenido')

  const tabs = [
    'contenido',
    ...(study.reflexiones ? ['reflexion'] : []),
    ...(study.hasQuiz || study.hasFlashcards ? ['cuestionario'] : []),
  ] as typeof tab[]
  const tabLabels: Record<string, string> = { contenido: 'CONTENIDO', reflexion: 'REFLEXIÓN', cuestionario: 'CUESTIONARIO' }

  return (
    <div style={{ background: 'linear-gradient(160deg,#0e1e35,#142040)', border: `1px solid ${expanded ? 'rgba(201,168,76,0.32)' : 'rgba(201,168,76,0.13)'}`, borderRadius: '6px', overflow: 'hidden', transition: 'border-color 0.25s' }}>
      <div style={{ padding: '1.75rem 1.75rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.72rem', flexWrap: 'wrap', gap: '0.4rem' }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.18em', color: study.catColor, background: `${study.catColor}16`, padding: '0.22rem 0.65rem', borderRadius: '2px', border: `1px solid ${study.catColor}30` }}>{study.cat.toUpperCase()}</span>
          <div style={{ display: 'flex', gap: '0.7rem' }}>
            <span style={{ fontFamily: "'Lora', serif", fontSize: '0.7rem', color: '#5a6a80' }}>⏱ {study.duration}</span>
            <span style={{ fontFamily: "'Lora', serif", fontSize: '0.7rem', color: '#5a6a80' }}>📊 {study.level}</span>
          </div>
        </div>
        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(0.92rem,2.5vw,1.12rem)', fontWeight: 700, color: '#f5edd8', lineHeight: 1.3, marginBottom: '0.33rem' }}>{study.title}</h3>
        <p style={{ fontFamily: "'Lora', serif", fontSize: '0.76rem', color: study.catColor, fontStyle: 'italic', marginBottom: '0.78rem' }}>{study.scripture}</p>
        <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#7a8a9a', lineHeight: 1.7 }}>{study.summary}</p>
      </div>

      {study.image && (
        <div style={{ padding: '0 1.75rem 1rem' }}>
          <img src={study.image} alt={`Infografía — ${study.title}`} style={{ width: '100%', maxWidth: '400px', borderRadius: '4px', border: '1px solid rgba(201,168,76,0.18)', display: 'block' }} />
        </div>
      )}

      <div style={{ padding: '0 1.75rem 1.5rem' }}>
        <button onClick={() => setExpanded(!expanded)} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: expanded ? '#0a1628' : '#c9a84c', background: expanded ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : 'transparent', border: expanded ? 'none' : '1px solid rgba(201,168,76,0.32)', padding: '0.5rem 1.2rem', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s' }}>
          {expanded ? '▲ CERRAR ESTUDIO' : '▼ VER ESTUDIO COMPLETO'}
        </button>
      </div>

      {expanded && (
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(201,168,76,0.1)', background: 'rgba(10,22,40,0.4)' }}>
            {tabs.map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.59rem', letterSpacing: '0.12em', color: tab === t ? '#c9a84c' : '#5a6a80', background: 'transparent', border: 'none', borderBottom: tab === t ? '2px solid #c9a84c' : '2px solid transparent', padding: '0.78rem 1.15rem', cursor: 'pointer', transition: 'color 0.2s' }}>
                {tabLabels[t]}
              </button>
            ))}
          </div>
          <div style={{ padding: '1.75rem' }}>
            {tab === 'contenido' && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {study.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#c9a84c', fontSize: '0.6rem', paddingTop: '5px', flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: "'Lora', serif", fontSize: '0.86rem', color: '#a8b8c8', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: h }} />
                  </li>
                ))}
              </ul>
            )}
            {tab === 'reflexion' && study.reflexiones && (
              <div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.8rem', color: '#6a7a8a', marginBottom: '1.15rem', fontStyle: 'italic' }}>Responde en oración y con sinceridad. Estas preguntas son un punto de encuentro con Yahweh, no un examen.</p>
                <ReflexionAccordion questions={study.reflexiones} />
              </div>
            )}
            {tab === 'cuestionario' && study.hasFlashcards && (
              <div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.8rem', color: '#6a7a8a', marginBottom: '1.3rem', fontStyle: 'italic' }}>
                  Repaso de comprensión — {flashcardsPrincipe.length} preguntas. Haz clic en cada tarjeta para revelar la respuesta y verificar tu comprensión del estudio.
                </p>
                <FlashcardSection />
              </div>
            )}
            {tab === 'cuestionario' && study.hasQuiz && (
              <div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.8rem', color: '#6a7a8a', marginBottom: '1.3rem', fontStyle: 'italic' }}>Cuestionario de Evaluación Final — Selecciona la respuesta correcta y verifica tu comprensión.</p>
                <QuizSection />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ── DATA ──────────────────────────────────────────────────────────────
const studies: Study[] = [
  {
    id: 'pecado-escondido', cat: 'Estudio Bíblico', catColor: '#9b7ec8',
    title: 'La Maldición en la Congregación por el Pecado Escondido',
    scripture: 'Josué 6:18 – 7:26 · La Lección de Acán',
    duration: '60 min', level: 'Intermedio',
    summary: 'El pecado oculto de Acán después de la conquista de Jericó trajo derrota, parálisis espiritual y muerte a toda la congregación de Israel. Este estudio expone el patrón progresivo del pecado escondido y sus consecuencias colectivas, con una llamada poderosa a la restauración.',
    image: infoPecado,
    highlights: [
      '<strong style="color:#d4c49a">El ciclo de la caída — Los 4 pasos de Acán:</strong> VER (los ojos se detienen en lo prohibido) → CODICIAR (el corazón desea, desplazando la obediencia) → TOMAR (la voluntad cruza el límite físico deliberadamente) → ESCONDER (la conciencia intenta ocultar el pecado para mantener apariencia externa).',
      '<strong style="color:#d4c49a">Impacto comunitario:</strong> El pecado individual de Acán resultó en la pérdida de autoridad espiritual de toda Israel, la derrota ante Hai (36 muertos), el terror colectivo del pueblo y la contaminación del ambiente congregacional.',
      '<strong style="color:#d4c49a">Consecuencias del pecado oculto:</strong> Cuando el pecado se esconde, la unción se retira, las oraciones no penetran el cielo (Josué 7:10-12), y la comunidad pierde la protección de Yahweh.',
      '<strong style="color:#d4c49a">La disciplina como amor:</strong> Yahweh disciplina a quien ama para producir un fruto apacible de justicia y santidad. La exposición del pecado oculto no es castigo, sino misericordia.',
      '<strong style="color:#d4c49a">El llamado a la restauración:</strong> La sanidad comienza con la humildad, la confesión genuina y el abandono total del pecado. Solo entonces Yahweh vuelve a caminar al frente de Su pueblo.',
    ],
    reflexiones: [
      '¿Existe en mi vida algún área que estoy "escondiendo en mi tienda"? ¿Qué me ha impedido confesarla?',
      '¿Cómo ha afectado el pecado oculto —propio o ajeno— el ambiente espiritual de la congregación a la que pertenezco?',
      '¿Qué paso concreto tomaré esta semana hacia la confesión genuina y el abandono del pecado?',
      '¿Cómo reaccionas cuando Yahweh expone algo oculto en tu vida? ¿Lo recibes como disciplina de amor?',
      '¿Hay alguien a quien debes pedir perdón o con quien necesitas restaurar una relación dañada?',
    ],
  },
  {
    id: 'ofrendas', cat: 'Sermón', catColor: '#4a9e6a',
    title: 'Honrando a Yahweh con Nuestros Recursos: El Corazón del Mayordomo',
    scripture: 'Malaquías 3:8-12 · 2 Corintios 9:6-8 · Proverbios 3:9-10',
    duration: '70 min', level: 'General',
    summary: 'Este sermón confronta la pregunta de Malaquías: "¿Robará el hombre a Elohim?" Explora la teología de la mayordomía: todo lo que tenemos pertenece a Yahweh, y dar con generosidad no es obligación religiosa sino la expresión natural de un corazón transformado.',
    image: infoMayordomo,
    highlights: [
      '<strong style="color:#d4c49a">El principio de la mayordomía bíblica:</strong> No somos dueños, somos administradores. Yahweh es el propietario de todo — nuestra vida, tiempo, habilidades y recursos son una confianza sagrada.',
      '<strong style="color:#d4c49a">Malaquías 3:8-12:</strong> "¿Robará el hombre a Elohim?" La promesa es radical: traer el diezmo completo al alfolí y probar a Yahweh — Él abrirá las ventanas del cielo y reprendería al devorador.',
      '<strong style="color:#d4c49a">2 Corintios 9:6-8 — El principio de la siembra:</strong> El que siembra escasamente cosechará escasamente. Yahweh ama al dador alegre — no el que da por compulsión, sino de corazón libre.',
      '<strong style="color:#d4c49a">Proverbios 3:9-10 — Honrar con las primicias:</strong> Honrar a Yahweh con los primeros frutos, no con lo que sobra. Es fe activa, no solo gratitud pasiva.',
      '<strong style="color:#d4c49a">La transformación del corazón:</strong> La generosidad es un termómetro espiritual. Donde está tu tesoro, allí también estará tu corazón (Mateo 6:21).',
    ],
    reflexiones: [
      '¿Cómo defines en la práctica tu rol como mayordomo —no propietario— de los recursos que administras?',
      '¿Das de tus primicias o de lo que sobra? ¿Qué te dice eso sobre la postura de tu corazón ante Yahweh?',
      '¿Has "probado" a Yahweh en el área de la generosidad? ¿Cuál ha sido tu experiencia?',
      '¿Qué emociones surgen cuando escuchas enseñanzas sobre diezmos y ofrendas? ¿Qué te dice eso de ti mismo?',
      '¿Cuál es el área de mayordomía (tiempo, talento o tesoro) en la que sientes más resistencia? ¿Por qué?',
    ],
  },
  {
    id: 'principe', cat: 'Estudio Exhaustivo', catColor: '#c9a84c',
    title: 'El Príncipe que ha de Venir: Daniel 9 y la Profecía Mesiánica',
    scripture: 'Daniel 9:24-27 · Daniel 11:21-23 · Las 70 Semanas',
    duration: '120 min', level: 'Avanzado',
    summary: 'Análisis exegético exhaustivo de la profecía de las 70 semanas. Identifica con precisión hebrea quién es el "Naguid" (Príncipe), quién es el "Mashíaj", y cuál es la distinción crucial entre el que confirma el pacto y el que trae la desolación. Un estudio que separa el texto hebreo de las interpretaciones populares.',
    image: infoPrincipe,
    highlights: [
      '<strong style="color:#d4c49a">Los términos hebreos clave:</strong> <em>Naguid</em> = gobernante designado (no un conquistador). <em>Mashíaj</em> = el Ungido. <em>Karat</em> = cortado violentamente (muerte sustitutoria). <em>Berit</em> = pacto sagrado por promesa y sangre. <em>Meshomem</em> = el que causa desolación.',
      '<strong style="color:#d4c49a">La estructura de las 70 semanas:</strong> 7 semanas (reconstrucción) + 62 semanas (hasta el Mashíaj Naguid) = 69 semanas (483 años) + 1 semana final. Una "Shavua" = 7 años.',
      '<strong style="color:#d4c49a">El Mashíaj es cortado (Karat):</strong> El Ungido es cortado "no para sí mismo" — muerte sustitutoria en lugar del pueblo. El Nuevo Pacto es confirmado "con muchos", conectando con las palabras de la Última Cena.',
      '<strong style="color:#d4c49a">Distinción crítica — Naguid vs. Desolador:</strong> El Príncipe del versículo 25 está ligado al Pacto (función positiva). El pueblo del príncipe del versículo 26 trae destrucción — es el Desolador, distinto del Mashíaj Naguid.',
      '<strong style="color:#d4c49a">Pirámide de Preparación Espiritual:</strong> Fundamento (El Pacto) → Amor a la Verdad → Arrepentimiento → Discernimiento → Mandamientos → Testimonio de Yahushúa → Fidelidad Final (Cima).',
      '<strong style="color:#d4c49a">El centro del conflicto final:</strong> La fidelidad al Pacto. El Remanente Fiel se define en Apocalipsis por dos características: guardar los mandamientos de Yahweh y tener el testimonio de Yahushúa.',
    ],
    reflexiones: [
      '¿Qué interpretación habías escuchado sobre Daniel 9? ¿En qué difiere del análisis presentado?',
      '¿Cómo afecta el conocimiento del texto hebreo original tu comprensión de la profecía bíblica?',
      '¿Por qué es importante distinguir entre el Mashíaj Naguid y el Naguid que ha de venir?',
      '¿Qué impacto tiene la profecía de las 70 semanas en tu fe y tu comprensión del plan soberano de Yahweh?',
      '¿Cómo puedes desarrollar mayor rigor en el estudio de profecías, sin caer en especulación ni interpretaciones populares sin fundamento textual?',
    ],
    hasFlashcards: true,
  },
  {
    id: 'subiendo-monte', cat: 'Estudio Congregacional', catColor: '#5a9fd4',
    title: 'Subiendo al Monte: El Camino a la Presencia de Yahweh',
    scripture: 'Éxodo 24:12 · Salmo 24:3-4 · 1 Reyes 18-19 · Mateo 17',
    duration: '90 min', level: 'General',
    summary: 'Un estudio congregacional sobre el monte como imagen espiritual recurrente en las Escrituras: el lugar de encuentro entre el cielo y la tierra, donde Yahweh habla, transforma y da dirección. A través de Moshé, Eliyahu y Yahushúa, descubrimos que subir al monte no es geografía sino postura del alma.',
    highlights: [
      '<strong style="color:#d4c49a">El Valle vs. el Monte:</strong> El valle representa el ruido, la multitud, la actividad frenética. El monte representa separación, intimidad y escucha. El creyente maduro busca el monte en medio de la vida en el valle.',
      '<strong style="color:#d4c49a">Las condiciones del monte — Salmo 24:</strong> "¿Quién subirá al monte de Yahweh? El limpio de manos y puro de corazón." No perfección, sino dirección — un corazón orientado hacia Su presencia.',
      '<strong style="color:#d4c49a">Moshé en el Sinaí:</strong> Moshé pidió ver Sus caminos, no solo Sus obras. Las obras son lo que hace Yahweh; los caminos son Su carácter. Conocer Sus obras es religión; conocer Sus caminos es relación.',
      '<strong style="color:#d4c49a">Eliyahu en el Karmel y en Horeb:</strong> El Karmel fue confrontación y decisión (1 Reyes 18). El Horeb fue restauración íntima — donde la voz apacible llegó al siervo agotado (1 Reyes 19:12).',
      '<strong style="color:#d4c49a">La Transfiguración — Mateo 17:</strong> En la cumbre, los discípulos vieron a Yahushúa transfigurado. La presencia de Yahweh transforma — "somos transformados de gloria en gloria" (2 Co 3:18).',
      '<strong style="color:#d4c49a">El Monte Escatológico — Zacarías 14:</strong> El Monte de los Olivos como lugar del gobierno mesiánico final y la adoración establecida. Lo que comenzó en el Sinaí culminará en la consumación del reino.',
    ],
    reflexiones: [
      '¿Qué caracteriza al "valle" en tu vida espiritual actualmente? ¿Hay ruido o distracción que te impide subir?',
      '¿Cuándo fue la última vez que buscaste activamente la presencia de Yahweh más allá de un culto o servicio?',
      '¿Qué "montaña" específica sientes que Yahweh te está llamando a subir esta temporada?',
      '¿Cómo ha cambiado tu comprensión de la adoración luego de este estudio?',
      '¿Qué área de tu vida necesita ser "subida" ante Yahweh para recibir dirección y transformación?',
      '¿De qué manera puedes hacer de la búsqueda de la presencia de Yahweh una práctica regular?',
      '¿A quién puedes invitar a "subir al monte" contigo esta semana?',
    ],
    hasQuiz: true,
  },
]

const categories = ['Todos', 'Estudio Bíblico', 'Sermón', 'Estudio Exhaustivo', 'Estudio Congregacional']

// ── PAGE ──────────────────────────────────────────────────────────────
export default function Estudios() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const filtered = activeCategory === 'Todos' ? studies : studies.filter((s) => s.cat === activeCategory)
  const showFichas = activeCategory === 'Todos' || activeCategory === 'Estudio Congregacional'

  return (
    <div style={{ background: '#0a1628', paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&h=700&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.08) sepia(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,22,40,0.97) 0%,rgba(10,22,40,0.88) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', marginBottom: '1.25rem' }}>✦ CONTENIDO DE FORMACIÓN ✦</div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#f5edd8', lineHeight: 1.1, marginBottom: '1rem' }}>Estudios y Prédicas</h1>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1.05rem', color: '#a89870', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>Recursos de formación bíblica profunda para creyentes que desean arraigar su vida en la Palabra de Yahweh.</p>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ padding: '2rem 1.5rem', background: '#060f1e', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', color: activeCategory === cat ? '#0a1628' : '#a89870', background: activeCategory === cat ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : 'transparent', border: activeCategory === cat ? 'none' : '1px solid rgba(201,168,76,0.25)', padding: '0.47rem 1rem', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s' }}>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Studies */}
      <section style={{ padding: '3.5rem 1.5rem 5rem', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {filtered.map((study) => <StudyCard key={study.id} study={study} />)}

        {/* Fichas de Compromiso */}
        {showFichas && (
          <div style={{ background: 'linear-gradient(135deg,#0e1e35,#142040)', border: '1px solid rgba(90,159,212,0.2)', borderRadius: '6px', padding: '2rem 1.75rem' }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#5a9fd4', marginBottom: '0.65rem' }}>✦ FICHAS DE COMPROMISO · SUBIENDO AL MONTE ✦</div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', color: '#f5edd8', marginBottom: '0.45rem' }}>Mi Compromiso Personal</h3>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.79rem', color: '#6a7a8a', marginBottom: '1.3rem', fontStyle: 'italic' }}>Completa estas fichas de aplicación personal al finalizar el estudio "Subiendo al Monte".</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: '0.85rem' }}>
              {['Esta semana me comprometo a…', 'El área en la que necesito subir al monte es…', 'Mi mayor obstáculo para buscar Su presencia es… y lo enfrentaré…', 'Llevaré a alguien conmigo al monte esta semana:'].map((prompt, i) => (
                <div key={i} style={{ background: 'rgba(10,22,40,0.5)', border: '1px solid rgba(90,159,212,0.17)', borderRadius: '4px', padding: '1rem' }}>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: '0.76rem', color: '#7a9ab8', marginBottom: '0.58rem', lineHeight: 1.5 }}>{prompt}</p>
                  <textarea rows={2} placeholder="Escribe aquí…" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(90,159,212,0.13)', borderRadius: '2px', padding: '0.48rem', color: '#c9d8e8', fontFamily: "'Lora', serif", fontSize: '0.82rem', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ padding: '2rem', background: 'linear-gradient(135deg,#0e1e35,#142040)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.67rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '0.65rem' }}>✦ BIBLIOTECA DE ESTUDIO ✦</p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5', marginBottom: '1.2rem', lineHeight: 1.7 }}>Accede a presentaciones, materiales adicionales y el archivo completo de estudios con una suscripción mensual.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/suscripcion" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#0a1628', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', padding: '0.7rem 1.85rem', borderRadius: '2px', textDecoration: 'none' }}>SUSCRIBIRSE · $4.99/MES</Link>
            <Link to="/biblioteca-de-estudio" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.1em', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.35)', padding: '0.7rem 1.85rem', borderRadius: '2px', textDecoration: 'none' }}>VER BIBLIOTECA</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
