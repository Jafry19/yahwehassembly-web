import { useState } from 'react'
import { Link } from 'react-router-dom'
import infoPecado from '../imports/Infografico_del_Estudio_Pecado_Oculto.png'
import infoMayordomo from '../imports/Infografia_El_Coraz_n_del_Mayordomo.png'
import infoPrincipe from '../imports/Infograf_a_Gu_a_de_Discernimiento_Prof_tico.png'

// ── CUESTIONARIO — Subiendo al Monte ──────────────────────────────────
const quiz = [
  {
    q: '¿Cuál es la diferencia entre el valle y el monte según el estudio?',
    opts: ['El monte es más hermoso que el valle', 'El valle representa ruido, multitud y actividad; el monte representa separación, intimidad y voz', 'No hay diferencia, solo es geografía'],
    answer: 1, ref: 'Salmo 121:1-2',
  },
  {
    q: '¿Cuáles son las condiciones para subir al monte de Yahweh según el Salmo 24?',
    opts: ['Tener un título ministerial', 'Ser de Israel biológicamente', 'Limpio de manos y puro de corazón'],
    answer: 2, ref: 'Salmo 24:3-4',
  },
  {
    q: 'En el estudio sobre Moshé, ¿cuál es la diferencia entre conocer las obras y los caminos de Yahweh?',
    opts: ['Las obras son visibles; los caminos son ocultos', 'Las obras = lo que hace Yahweh; los caminos = Su carácter y corazón', 'No hay diferencia teológica relevante'],
    answer: 1, ref: 'Éxodo 33:13',
  },
  {
    q: 'El monte en la Escritura es principalmente...',
    opts: ['Un lugar de descanso físico', 'Un lugar de obediencia y rendición ante Yahweh', 'Un símbolo de poder político'],
    answer: 1, ref: 'Éxodo 3:1-5; 19:3',
  },
  {
    q: '¿Qué hizo que Eliyahu pudiera escuchar la voz de Yahweh en Horeb?',
    opts: ['Su experiencia profética previa', 'El retiro, la cueva y la voz apacible que restaura al siervo cansado', 'El fuego y el viento'],
    answer: 1, ref: '1 Reyes 19:11-12',
  },
  {
    q: '¿Qué representa el Monte Karmel en la narrativa de Eliyahu?',
    opts: ['Un lugar de paz y descanso', 'Un lugar de decisión y confrontación entre adoración verdadera y falsa mezcla', 'El hogar de Eliyahu'],
    answer: 1, ref: '1 Reyes 18:19-21',
  },
  {
    q: 'El efecto de la presencia de Yahweh en el creyente es...',
    opts: ['Una transformación visible que produce el fruto del Espíritu sin esfuerzo humano propio', 'El esfuerzo humano que produce fruto con ayuda divina', 'Solo visible en milagros externos'],
    answer: 0, ref: '2 Corintios 3:18',
  },
  {
    q: 'En la visión de la montaña del Rey, ¿qué representa el "descender del monte"?',
    opts: ['Perder la presencia de Yahweh', 'Llevar dirección y gloria del Padre a los demás', 'Terminar el ministerio'],
    answer: 1, ref: 'Éxodo 34:29-30',
  },
  {
    q: 'El Monte de los Olivos en la profecía final representa...',
    opts: ['Solo un lugar histórico', 'El gobierno mesiánico, la adoración establecida y el reino', 'La derrota de Israel'],
    answer: 1, ref: 'Zacarías 14:4; Hechos 1:11',
  },
  {
    q: 'El propósito final de "subir al monte" es...',
    opts: ['Cumplir con una práctica religiosa', 'Encontrarse con la Persona de Yahweh para ser transformado a Su imagen', 'Obtener visiones y revelaciones personales'],
    answer: 1, ref: 'Éxodo 24:12; 2 Corintios 3:18',
  },
]

function QuizSection() {
  const [selected, setSelected] = useState<(number | null)[]>(Array(quiz.length).fill(null))
  const [revealed, setRevealed] = useState<boolean[]>(Array(quiz.length).fill(false))
  const [score, setScore] = useState<number | null>(null)

  const choose = (qi: number, oi: number) => {
    if (revealed[qi]) return
    const next = [...selected]; next[qi] = oi; setSelected(next)
  }
  const reveal = (qi: number) => {
    if (selected[qi] === null) return
    const next = [...revealed]; next[qi] = true; setRevealed(next)
  }
  const calcScore = () => {
    const s = quiz.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0)
    setScore(s); setRevealed(Array(quiz.length).fill(true))
  }
  const reset = () => { setSelected(Array(quiz.length).fill(null)); setRevealed(Array(quiz.length).fill(false)); setScore(null) }

  return (
    <div>
      {quiz.map((item, qi) => {
        const isRevealed = revealed[qi]; const sel = selected[qi]
        return (
          <div key={qi} style={{ marginBottom: '1.5rem', padding: '1.25rem', background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px' }}>
            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.88rem', color: '#d4c49a', fontWeight: 600, marginBottom: '0.85rem', lineHeight: 1.5 }}>
              <span style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c', fontSize: '0.72rem', marginRight: '0.5rem' }}>{qi + 1}.</span>{item.q}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.7rem' }}>
              {item.opts.map((opt, oi) => {
                let bg = 'rgba(255,255,255,0.02)', border = 'rgba(201,168,76,0.12)', color = '#8a9ab5'
                if (sel === oi && !isRevealed) { bg = 'rgba(201,168,76,0.1)'; border = 'rgba(201,168,76,0.5)'; color = '#f5edd8' }
                if (isRevealed && oi === item.answer) { bg = 'rgba(74,158,106,0.15)'; border = 'rgba(74,158,106,0.5)'; color = '#7ed4a4' }
                if (isRevealed && sel === oi && oi !== item.answer) { bg = 'rgba(180,60,60,0.1)'; border = 'rgba(180,60,60,0.4)'; color = '#e08080' }
                return (
                  <button key={oi} onClick={() => choose(qi, oi)}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.55rem 0.85rem', background: bg, border: `1px solid ${border}`, borderRadius: '3px', cursor: isRevealed ? 'default' : 'pointer', textAlign: 'left', transition: 'all 0.18s' }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', color, minWidth: '0.9rem', paddingTop: '2px', flexShrink: 0 }}>
                      {isRevealed ? (oi === item.answer ? '✓' : sel === oi ? '✗' : '○') : (sel === oi ? '●' : '○')}
                    </span>
                    <span style={{ fontFamily: "'Lora', serif", fontSize: '0.83rem', color, lineHeight: 1.45 }}>{opt}</span>
                  </button>
                )
              })}
            </div>
            {isRevealed && <p style={{ fontFamily: "'Lora', serif", fontSize: '0.73rem', color: '#5a8a6a', fontStyle: 'italic' }}>Referencia: {item.ref}</p>}
            {!isRevealed && sel !== null && (
              <button onClick={() => reveal(qi)} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#c9a84c', background: 'transparent', border: '1px solid rgba(201,168,76,0.3)', padding: '0.28rem 0.75rem', borderRadius: '2px', cursor: 'pointer' }}>VER RESPUESTA</button>
            )}
          </div>
        )
      })}
      {score !== null && (
        <div style={{ padding: '1.5rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', textAlign: 'center', marginBottom: '1.25rem' }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', color: '#c9a84c', marginBottom: '0.4rem' }}>Resultado: {score} / {quiz.length}</p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '0.83rem', color: '#8a9ab5' }}>
            {score === 10 ? '¡Excelente! Dominas el contenido de este estudio.' : score >= 7 ? 'Muy bien. Te recomendamos repasar las preguntas fallidas.' : 'Repasa el estudio y vuelve a intentarlo. ¡Cada repaso profundiza la comprensión!'}
          </p>
        </div>
      )}
      <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
        {!score && (
          <button onClick={calcScore} disabled={!selected.every(s => s !== null)}
            style={{ fontFamily: "'Cinzel', serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: selected.every(s => s !== null) ? '#0a1628' : '#4a5a70', background: selected.every(s => s !== null) ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : 'rgba(255,255,255,0.04)', border: 'none', padding: '0.6rem 1.4rem', borderRadius: '2px', cursor: selected.every(s => s !== null) ? 'pointer' : 'not-allowed' }}>
            VER PUNTUACIÓN FINAL
          </button>
        )}
        <button onClick={reset} style={{ fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.1em', color: '#8a9ab5', background: 'transparent', border: '1px solid rgba(138,154,181,0.25)', padding: '0.6rem 1.4rem', borderRadius: '2px', cursor: 'pointer' }}>REINICIAR</button>
      </div>
    </div>
  )
}

// ── REFLECTION ACCORDION ──────────────────────────────────────────────
function ReflexionAccordion({ questions }: { questions: string[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
      {questions.map((q, i) => (
        <div key={i} style={{ border: '1px solid rgba(201,168,76,0.13)', borderRadius: '3px', overflow: 'hidden' }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 1rem', background: open === i ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '0.75rem' }}>
            <span style={{ fontFamily: "'Lora', serif", fontSize: '0.84rem', color: '#c0b08a', lineHeight: 1.45 }}>
              <span style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c', fontSize: '0.67rem', marginRight: '0.45rem' }}>{i + 1}.</span>{q}
            </span>
            <span style={{ color: '#c9a84c', fontSize: '0.75rem', flexShrink: 0 }}>{open === i ? '▲' : '▼'}</span>
          </button>
          {open === i && (
            <div style={{ padding: '0.85rem 1rem', background: 'rgba(10,22,40,0.4)', borderTop: '1px solid rgba(201,168,76,0.07)' }}>
              <textarea placeholder="Escribe tu reflexión aquí…" rows={3}
                style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '2px', padding: '0.6rem', color: '#d4c49a', fontFamily: "'Lora', serif", fontSize: '0.84rem', lineHeight: 1.6, resize: 'vertical', boxSizing: 'border-box' }} />
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
  highlights: string[]; reflexiones?: string[]; hasQuiz?: boolean
}

function StudyCard({ study }: { study: Study }) {
  const [expanded, setExpanded] = useState(false)
  const [tab, setTab] = useState<'contenido' | 'reflexion' | 'cuestionario'>('contenido')

  const tabs = ['contenido', ...(study.reflexiones ? ['reflexion'] : []), ...(study.hasQuiz ? ['cuestionario'] : [])] as typeof tab[]
  const tabLabels: Record<string, string> = { contenido: 'CONTENIDO', reflexion: 'REFLEXIÓN', cuestionario: 'CUESTIONARIO' }

  return (
    <div style={{ background: 'linear-gradient(160deg,#0e1e35,#142040)', border: `1px solid ${expanded ? 'rgba(201,168,76,0.32)' : 'rgba(201,168,76,0.13)'}`, borderRadius: '6px', overflow: 'hidden', transition: 'border-color 0.25s' }}>
      {/* Header */}
      <div style={{ padding: '1.75rem 1.75rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.4rem' }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.58rem', letterSpacing: '0.18em', color: study.catColor, background: `${study.catColor}16`, padding: '0.22rem 0.65rem', borderRadius: '2px', border: `1px solid ${study.catColor}30` }}>{study.cat.toUpperCase()}</span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span style={{ fontFamily: "'Lora', serif", fontSize: '0.7rem', color: '#5a6a80' }}>⏱ {study.duration}</span>
            <span style={{ fontFamily: "'Lora', serif", fontSize: '0.7rem', color: '#5a6a80' }}>📊 {study.level}</span>
          </div>
        </div>
        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(0.93rem,2.5vw,1.13rem)', fontWeight: 700, color: '#f5edd8', lineHeight: 1.3, marginBottom: '0.35rem' }}>{study.title}</h3>
        <p style={{ fontFamily: "'Lora', serif", fontSize: '0.77rem', color: study.catColor, fontStyle: 'italic', marginBottom: '0.8rem' }}>{study.scripture}</p>
        <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#7a8a9a', lineHeight: 1.7 }}>{study.summary}</p>
      </div>

      {/* Infographic */}
      {study.image && (
        <div style={{ padding: '0 1.75rem 1rem' }}>
          <img src={study.image} alt={`Infografía — ${study.title}`}
            style={{ width: '100%', maxWidth: '400px', borderRadius: '4px', border: '1px solid rgba(201,168,76,0.18)', display: 'block' }} />
        </div>
      )}

      {/* Toggle */}
      <div style={{ padding: '0 1.75rem 1.5rem' }}>
        <button onClick={() => setExpanded(!expanded)}
          style={{ fontFamily: "'Cinzel', serif", fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', color: expanded ? '#0a1628' : '#c9a84c', background: expanded ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : 'transparent', border: expanded ? 'none' : '1px solid rgba(201,168,76,0.32)', padding: '0.5rem 1.2rem', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s' }}>
          {expanded ? '▲ CERRAR ESTUDIO' : '▼ VER ESTUDIO COMPLETO'}
        </button>
      </div>

      {/* Expanded */}
      {expanded && (
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(201,168,76,0.1)', background: 'rgba(10,22,40,0.4)' }}>
            {tabs.map((t) => (
              <button key={t} onClick={() => setTab(t)}
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.12em', color: tab === t ? '#c9a84c' : '#5a6a80', background: 'transparent', border: 'none', borderBottom: tab === t ? '2px solid #c9a84c' : '2px solid transparent', padding: '0.8rem 1.2rem', cursor: 'pointer', transition: 'color 0.2s' }}>
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
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.8rem', color: '#6a7a8a', marginBottom: '1.2rem', fontStyle: 'italic' }}>Responde en oración y con sinceridad. Estas preguntas son un punto de encuentro con Yahweh, no un examen.</p>
                <ReflexionAccordion questions={study.reflexiones} />
              </div>
            )}
            {tab === 'cuestionario' && study.hasQuiz && (
              <div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.8rem', color: '#6a7a8a', marginBottom: '1.4rem', fontStyle: 'italic' }}>Cuestionario de Evaluación Final — Selecciona la respuesta correcta para cada pregunta y verifica tu comprensión del estudio.</p>
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
    id: 'pecado-escondido',
    cat: 'Estudio Bíblico', catColor: '#9b7ec8',
    title: 'La Maldición en la Congregación por el Pecado Escondido',
    scripture: 'Josué 6:18 – 7:26 · La Lección de Acán',
    duration: '60 min', level: 'Intermedio',
    summary: 'El pecado oculto de Acán después de la conquista de Jericó trajo derrota, parálisis espiritual y muerte a toda la congregación de Israel. Este estudio expone el patrón progresivo del pecado escondido y sus consecuencias colectivas, con una llamada poderosa a la restauración.',
    image: infoPecado,
    highlights: [
      '<strong style="color:#d4c49a">El ciclo de la caída — Los 4 pasos de Acán:</strong> VER (los ojos se detienen en lo prohibido) → CODICIAR (el corazón desea, desplazando la obediencia) → TOMAR (la voluntad cruza el límite físico deliberadamente) → ESCONDER (la conciencia intenta ocultar el pecado en la "tienda" privada para mantener una apariencia externa).',
      '<strong style="color:#d4c49a">Impacto comunitario:</strong> El pecado individual de Acán resultó en la pérdida de autoridad espiritual de toda Israel, la derrota ante Hai (36 muertos), el terror colectivo del pueblo y la contaminación del ambiente congregacional. Nada queda en secreto ante Yahweh.',
      '<strong style="color:#d4c49a">Consecuencias del pecado oculto:</strong> Cuando el pecado se esconde en la congregación, la unción se retira, las oraciones no penetran el cielo (Josué 7:10-12), y la comunidad pierde la protección de Yahweh. El problema no era Hai — era Acán.',
      '<strong style="color:#d4c49a">La disciplina como amor:</strong> Yahweh disciplina a quien ama para producir un fruto apacible de justicia y santidad. La exposición del pecado oculto no es castigo, sino misericordia — Yahweh no abandona, sino que restaura con verdad.',
      '<strong style="color:#d4c49a">El llamado a la restauración:</strong> La sanidad comienza con la humildad, la confesión genuina y el abandono total del pecado. Solo entonces Yahweh vuelve a caminar al frente de Su pueblo.',
    ],
    reflexiones: [
      '¿Existe en mi vida algún área que estoy "escondiendo en mi tienda"? ¿Qué me ha impedido confesarla?',
      '¿Cómo ha afectado el pecado oculto —propio o ajeno— el ambiente espiritual de la congregación a la que pertenezco?',
      '¿Qué paso concreto tomaré esta semana hacia la confesión genuina y el abandono del pecado?',
      '¿Cómo reaccionas cuando Yahweh expone algo oculto en tu vida? ¿Lo recibes como disciplina de amor o como juicio?',
      '¿Hay alguien a quien debes pedir perdón o con quien necesitas restaurar una relación dañada por el pecado oculto?',
    ],
  },
  {
    id: 'ofrendas',
    cat: 'Sermón', catColor: '#4a9e6a',
    title: 'Honrando a Yahweh con Nuestros Recursos: El Corazón del Mayordomo',
    scripture: 'Malaquías 3:8-12 · 2 Corintios 9:6-8 · Proverbios 3:9-10',
    duration: '70 min', level: 'General',
    summary: 'Este sermón confronta la pregunta de Malaquías: "¿Robará el hombre a Elohim?" Más allá de los diezmos, explora la teología de la mayordomía: que todo lo que tenemos pertenece a Yahweh, y dar con generosidad no es obligación religiosa sino la expresión natural de un corazón transformado.',
    image: infoMayordomo,
    highlights: [
      '<strong style="color:#d4c49a">El principio de la mayordomía bíblica:</strong> No somos dueños, somos administradores. Yahweh es el propietario de todo — nuestra vida, tiempo, habilidades y recursos son una confianza sagrada que Él nos entrega para administrar con fidelidad.',
      '<strong style="color:#d4c49a">Malaquías 3:8-12 — El desafío de Yahweh:</strong> "¿Robará el hombre a Elohim?" Israel retenía lo que pertenecía a Yahweh. La promesa es radical: traer el diezmo completo al alfolí y probar a Yahweh — Él abrirá las ventanas del cielo y reprendería al devorador.',
      '<strong style="color:#d4c49a">2 Corintios 9:6-8 — El principio de la siembra:</strong> El que siembra escasamente cosechará escasamente; el que siembra abundantemente cosechará abundantemente. Yahweh ama al dador alegre — no el que da por compulsión o tristeza, sino de corazón libre.',
      '<strong style="color:#d4c49a">Proverbios 3:9-10 — Honrar con las primicias:</strong> Honrar a Yahweh con los primeros frutos, no con lo que sobra. La ofrenda de las primicias expresa confianza en Su provisión continua — es fe activa, no solo gratitud pasiva.',
      '<strong style="color:#d4c49a">La transformación del corazón:</strong> La generosidad no es una disciplina financiera — es un termómetro espiritual. Donde está tu tesoro, allí también estará tu corazón (Mateo 6:21). Un corazón transformado da libremente porque confía en Yahweh como su fuente.',
    ],
    reflexiones: [
      '¿Cómo defines en la práctica tu rol como mayordomo —no propietario— de los recursos que administras?',
      '¿Das de tus primicias o de lo que sobra? ¿Qué te dice eso sobre la postura de tu corazón ante Yahweh?',
      '¿Has "probado" a Yahweh en el área de la generosidad? ¿Cuál ha sido tu experiencia?',
      '¿Qué emociones surgen cuando escuchas enseñanzas sobre diezmos y ofrendas? ¿Qué te dice eso de ti mismo?',
      '¿Cuál es el área específica de mayordomía (tiempo, talento o tesoro) en la que sientes más resistencia? ¿Por qué?',
    ],
  },
  {
    id: 'principe',
    cat: 'Estudio Exhaustivo', catColor: '#c9a84c',
    title: 'El Príncipe que ha de Venir: Daniel 9 y la Profecía Mesiánica',
    scripture: 'Daniel 9:24-27 · Las 70 Semanas de Daniel',
    duration: '120 min', level: 'Avanzado',
    summary: 'Análisis exegético exhaustivo de la profecía de las 70 semanas de Daniel 9. Identifica con precisión hebrea quién es el "Naguid" (Príncipe), quién es el "Mashíaj", y cuál es la distinción crucial entre el que confirma el pacto y el que trae la desolación. Un estudio que separa el texto hebreo de las interpretaciones populares.',
    image: infoPrincipe,
    highlights: [
      '<strong style="color:#d4c49a">Los 5 términos hebreos clave:</strong> <em>Naguid</em> (נָגִיד) = gobernante designado, no un conquistador sino un gobernante legítimo. <em>Mashíaj</em> (מָשִׁיחַ) = el Ungido. <em>Karet</em> (כָּרַת) = cortado, separado violentamente. <em>Berit</em> (בְּרִית) = pacto/alianza. <em>Meshomem</em> (מְשֹׁמֵם) = el que causa desolación.',
      '<strong style="color:#d4c49a">La estructura de las 70 semanas:</strong> 7 semanas (reconstrucción de Jerusalén) + 62 semanas (hasta el Mashíaj Naguid) + 1 semana final (el período del pacto y la desolación). Cada semana representa 7 años — una unidad sabática de tiempo.',
      '<strong style="color:#d4c49a">El Mashíaj es cortado (Karet):</strong> Después de las 62 semanas, el Ungido es "cortado" no por su propia culpa sino "no para sí mismo". Este lenguaje apunta directamente a la muerte sustitutoria del Mashíaj en lugar del pueblo.',
      '<strong style="color:#d4c49a">Distinción crítica — el Naguid posterior:</strong> El versículo 26 introduce "el pueblo del príncipe que ha de venir" — este naguid es quien trae la desolación, distinto del Mashíaj Naguid del versículo 25. Esta distinción resuelve la principal confusión interpretativa del texto.',
      '<strong style="color:#d4c49a">El pacto y la abominación:</strong> En la semana 70, alguien confirma un pacto con "los muchos" por 7 años. A la mitad cesa el sacrificio y se establece la "abominación desoladora" — un acto de profanación en el lugar santo.',
      '<strong style="color:#d4c49a">Discernimiento profético:</strong> La guía de discernimiento invita a no interpretar toda señal política como cumplimiento profético, sino a examinar los textos hebreos con rigor, esperando el cumplimiento literal en los tiempos que Yahweh ha establecido.',
    ],
    reflexiones: [
      '¿Qué interpretación habías escuchado antes sobre Daniel 9? ¿En qué difiere del análisis presentado en este estudio?',
      '¿Cómo afecta el conocimiento del texto hebreo original tu comprensión de la profecía bíblica?',
      '¿Por qué es importante distinguir entre el Mashíaj Naguid y el Naguid que ha de venir en Daniel 9?',
      '¿Qué impacto tiene la profecía de las 70 semanas en tu fe y tu comprensión del plan soberano de Yahweh?',
      '¿Cómo puedes desarrollar mayor rigor en tu estudio de las profecías bíblicas, sin caer en especulación ni interpretaciones populares sin fundamento textual?',
    ],
  },
  {
    id: 'subiendo-monte',
    cat: 'Estudio Congregacional', catColor: '#5a9fd4',
    title: 'Subiendo al Monte: El Camino a la Presencia de Yahweh',
    scripture: 'Éxodo 24:12 · Salmo 24:3-4 · 1 Reyes 18-19 · Mateo 17',
    duration: '90 min', level: 'General',
    summary: 'Un estudio congregacional sobre el monte como imagen espiritual recurrente en las Escrituras: el lugar de encuentro entre el cielo y la tierra, donde Yahweh habla, transforma y da dirección. A través de figuras como Moshé, Eliyahu y el propio Yahushúa, descubrimos que subir al monte no es geografía sino postura del alma.',
    highlights: [
      '<strong style="color:#d4c49a">El Valle vs. el Monte:</strong> El valle representa el ruido, la multitud, la actividad frenética — donde la voz de Yahweh se pierde en la agenda humana. El monte representa separación, intimidad y escucha. El creyente maduro aprende a buscar el monte en medio de la vida en el valle.',
      '<strong style="color:#d4c49a">Las condiciones del monte — Salmo 24:</strong> "¿Quién subirá al monte de Yahweh? El limpio de manos y puro de corazón." No es una condición de perfección sino de dirección — un corazón orientado hacia Su presencia, alejado de la falsedad.',
      '<strong style="color:#d4c49a">Moshé en el Sinaí:</strong> Moshé pidió ver la gloria de Yahweh — no Sus obras, sino Sus caminos. Las obras son lo que hace Yahweh; los caminos son Su carácter, Su corazón. Conocer Sus obras es religión; conocer Sus caminos es relación.',
      '<strong style="color:#d4c49a">Eliyahu en el Karmel y en Horeb:</strong> El Monte Karmel fue el lugar de confrontación y decisión (1 Reyes 18). El Monte Horeb fue el lugar de restauración íntima — donde la voz apacible y delicada llegó al siervo agotado (1 Reyes 19:12). El silencio como lenguaje de Yahweh.',
      '<strong style="color:#d4c49a">La Transfiguración — Mateo 17:</strong> En la cumbre del monte, los discípulos vieron a Yahushúa transfigurado. La presencia de Yahweh transforma — no el esfuerzo humano, sino la exposición a Su gloria. "Somos transformados de gloria en gloria" (2 Co 3:18).',
      '<strong style="color:#d4c49a">El Monte Escatológico — Zacarías 14:</strong> El Monte de los Olivos como lugar del gobierno mesiánico final, la adoración establecida y el reino. Lo que comenzó en el Sinaí culminará en la consumación del gobierno de Yahweh sobre toda la tierra.',
    ],
    reflexiones: [
      '¿Qué caracteriza al "valle" en tu vida espiritual actualmente? ¿Hay ruido, multitud o distracción que te impide subir?',
      '¿Cuándo fue la última vez que buscaste activamente la presencia de Yahweh más allá de un culto o servicio?',
      '¿Qué "montaña" específica sientes que Yahweh te está llamando a subir esta temporada?',
      '¿Cómo ha cambiado tu comprensión de la adoración luego de este estudio?',
      '¿Qué área de tu vida necesita ser "subida" ante Yahweh para recibir dirección y transformación?',
      '¿De qué manera puedes hacer de la búsqueda de la presencia de Yahweh una práctica regular, no solo una experiencia ocasional?',
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
          <p style={{ fontFamily: "'Lora', serif", fontSize: '1.05rem', color: '#a89870', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Recursos de formación bíblica profunda para creyentes que desean arraigar su vida en la Palabra de Yahweh.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ padding: '2rem 1.5rem', background: '#060f1e', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ fontFamily: "'Cinzel', serif", fontSize: '0.64rem', fontWeight: 600, letterSpacing: '0.1em', color: activeCategory === cat ? '#0a1628' : '#a89870', background: activeCategory === cat ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : 'transparent', border: activeCategory === cat ? 'none' : '1px solid rgba(201,168,76,0.25)', padding: '0.48rem 1.05rem', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s' }}>
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
            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.8rem', color: '#6a7a8a', marginBottom: '1.4rem', fontStyle: 'italic' }}>Completa estas fichas de aplicación personal al finalizar el estudio "Subiendo al Monte".</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: '0.85rem' }}>
              {['Esta semana me comprometo a…', 'El área en la que necesito subir al monte es…', 'Mi mayor obstáculo para buscar Su presencia es… y lo enfrentaré…', 'Llevaré a alguien conmigo al monte esta semana:'].map((prompt, i) => (
                <div key={i} style={{ background: 'rgba(10,22,40,0.5)', border: '1px solid rgba(90,159,212,0.18)', borderRadius: '4px', padding: '1rem' }}>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: '0.77rem', color: '#7a9ab8', marginBottom: '0.6rem', lineHeight: 1.5 }}>{prompt}</p>
                  <textarea rows={2} placeholder="Escribe aquí…"
                    style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(90,159,212,0.14)', borderRadius: '2px', padding: '0.5rem', color: '#c9d8e8', fontFamily: "'Lora', serif", fontSize: '0.82rem', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ padding: '2rem', background: 'linear-gradient(135deg,#0e1e35,#142040)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '0.65rem' }}>✦ BIBLIOTECA DE ESTUDIO ✦</p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#8a9ab5', marginBottom: '1.25rem', lineHeight: 1.7 }}>
            Accede a presentaciones, materiales adicionales y el archivo completo de estudios con una suscripción mensual.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/suscripcion" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#0a1628', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', padding: '0.72rem 1.9rem', borderRadius: '2px', textDecoration: 'none' }}>SUSCRIBIRSE · $4.99/MES</Link>
            <Link to="/biblioteca-de-estudio" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.1em', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.35)', padding: '0.72rem 1.9rem', borderRadius: '2px', textDecoration: 'none' }}>VER BIBLIOTECA</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
