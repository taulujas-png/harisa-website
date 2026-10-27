"use client"

import { useEffect, useRef, useState } from 'react'
import { BellRing, Hand, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const games = [
  { id: 'millionaire', title: 'Арабский Миллионер', short: 'Миллионер', skill: 'Вспоминаем и понимаем', description: 'Преподаватель запускает вопрос на общей доске. Один ученик отвечает, остальные включаются в раунд — вспоминаем слова и учимся понимать вопросы на арабском.', question: 'Как будет «книга»?', answer: 'كِتَاب!' },
  { id: 'alias', title: 'Крокодил / Элиас', short: 'Элиас', skill: 'Начинаем говорить', description: 'Объясняем слово на арабском, а одногруппники угадывают. Преподаватель помогает — новые слова сразу превращаются в собственные фразы.', question: 'Омар, объясни слово', answer: 'كِتَاب!' },
  { id: 'spy', title: 'Шпион', short: 'Шпион', skill: 'Слушаем и задаём вопросы', description: 'У группы есть тайная локация. Задаём друг другу вопросы на арабском и ищем шпиона: нужно и понять собеседника, и самому ответить.', question: 'Омар, твой вопрос', answer: 'أَيْنَ نَحْنُ؟' },
]

function Participant({ name, teacher, color, speaking, reaction, speech, arabic, onReact }: {
  name: string; teacher?: boolean; color: string; speaking: boolean; reaction?: string; speech?: string; arabic?: boolean; onReact: () => void
}) {
  return <div className="lesson-person">
    <button type="button" onClick={onReact} aria-label={`Поприветствовать: ${name}`} className={`lesson-avatar ${speaking ? 'is-speaking' : ''}`} style={{ background: color }}>
      <span>{name[0]}</span>
      {speaking && <span className="lesson-speaking-ring" aria-hidden="true" />}
      {reaction && <span key={reaction} className="lesson-reaction" aria-hidden="true">{reaction === 'hand' ? <Hand size={16} /> : reaction}</span>}
    </button>
    <span className="lesson-person-name">{name}</span>
    {teacher && <span className="lesson-person-role">учитель</span>}
    {speech && <span className={`lesson-speech ${arabic ? 'is-arabic' : ''}`} lang={arabic ? 'ar' : 'ru'} dir={arabic ? 'rtl' : undefined}>{speech}</span>}
  </div>
}

export function ThreeGames() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [entered, setEntered] = useState(false)
  const [step, setStep] = useState(0)
  const [reaction, setReaction] = useState<{ person: number; tick: number } | null>(null)
  const section = useRef<HTMLElement>(null)
  const scene = useRef<HTMLDivElement>(null)
  const scrollIndex = useRef(-1)
  const game = games[currentIndex]

  useEffect(() => {
    const element = scene.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => { setVisible(entry.isIntersecting); if (entry.isIntersecting) setEntered(true) }, { threshold: .35 })
    observer.observe(element)
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const track = section.current
        if (!track) return
        const rect = track.getBoundingClientRect()
        const travel = track.offsetHeight - element.offsetHeight - 80
        const progress = Math.max(0, Math.min(1, (80 - rect.top) / Math.max(1, travel)))
        const next = Math.min(2, Math.floor(progress * 3))
        // Manual selection stays put until scrolling reaches another game chapter.
        if (next !== scrollIndex.current) { scrollIndex.current = next; setCurrentIndex(next) }
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  useEffect(() => {
    setStep(0)
    if (!visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timers = [1300, 2800, 4900, 7100].map((delay, index) => setTimeout(() => setStep(index + 1), delay))
    return () => timers.forEach(clearTimeout)
  }, [visible, currentIndex])
  useEffect(() => { if (!reaction) return; const timer = setTimeout(() => setReaction(null), 1800); return () => clearTimeout(timer) }, [reaction])

  return <section ref={section} id="lesson-games" className={`lesson-track ${entered ? 'has-entered' : ''}`}>
    <div ref={scene} id="lesson-scene" className="lesson-stage" data-step={step}>
      <div className="lesson-layout">
        <div className="lesson-copy lesson-enter">
          <p className="lesson-eyebrow">ВМЕСТЕ С ПРЕПОДАВАТЕЛЕМ</p>
          <h2>Арабский оживает <br />на уроке</h2>
          <p className="lesson-intro">Это игры на общей доске прямо во время занятия. Вы говорите, слушаете и учитесь вместе с группой.</p>
          <div className="lesson-tabs" role="group" aria-label="Выберите игру урока">{games.map((item, index) => <button type="button" key={item.id} aria-pressed={currentIndex === index} aria-controls="lesson-detail" onClick={() => setCurrentIndex(index)}>{item.short}</button>)}</div>
          <div key={game.id} id="lesson-detail" className="lesson-detail">
            <p className="lesson-skill">0{currentIndex + 1} / {game.skill}</p>
            <h3>{game.title}</h3><p>{game.description}</p>
          </div>
          <span className="lesson-scroll-hint"><ArrowDown size={13} />Листайте — покажем ещё игры</span>
        </div>
        <div className="lesson-live lesson-enter">
          <div className="lesson-people" aria-label="Участники примера урока">
            <Participant name="Ахмад" teacher color="linear-gradient(135deg,#ede9fe,#c4b5fd)" speaking={visible && (step === 0 || step === 2)} reaction={reaction?.person === 0 ? '👋' : undefined} speech={step === 2 ? 'Омар, твоя очередь' : undefined} onReact={() => setReaction({ person: 0, tick: Date.now() })} />
            <Participant name="Омар" color="linear-gradient(135deg,#fef3c7,#fbbf24)" speaking={visible && step === 3} reaction={reaction?.person === 1 ? '👋' : step === 1 || step === 2 ? 'hand' : undefined} speech={step === 3 ? game.answer : undefined} arabic onReact={() => setReaction({ person: 1, tick: Date.now() })} />
            <Participant name="Али" color="linear-gradient(135deg,#e0f2fe,#7dd3fc)" speaking={false} reaction={reaction?.person === 2 ? '👋' : step === 4 ? '👏' : undefined} onReact={() => setReaction({ person: 2, tick: Date.now() })} />
          </div>
          <div className="lesson-board-wrap">
            {games.map((item, index) => <Image key={item.id} src={`/images/games/v8/${item.id}-board.png`} alt={`Доска игры «${item.title}» с учебным заданием`} width={900} height={900} sizes="(max-width: 767px) 78vw, (max-width: 1023px) 43vw, 440px" className={`lesson-board ${index === currentIndex ? 'is-active' : ''}`} aria-hidden={index !== currentIndex} draggable={false} />)}
            {step === 2 && <div className="lesson-callout" aria-hidden="true"><BellRing size={16} />Вас вызывает учитель</div>}
          </div>
          <p className="lesson-disclosure">Пример урока · учебные данные и участники</p>
        </div>
      </div>
    </div>
    <style jsx global>{`
      #lesson-games { position:relative; background:white; height:190svh; padding:0 24px; }
      #lesson-games .lesson-stage { position:sticky; top:80px; height:calc(100svh - 80px); min-height:520px; display:flex; align-items:center; max-width:1152px; margin:auto; }
      #lesson-games .lesson-layout { display:grid; grid-template-columns:minmax(0,.92fr) minmax(0,1.25fr); gap:48px; width:100%; align-items:center; }
      #lesson-games .lesson-eyebrow { font-size:11px; letter-spacing:.12em; color:#2563eb; font-weight:600; margin-bottom:14px; }
      #lesson-games h2 { font-size:clamp(28px,3.1vw,40px); line-height:1.15; font-weight:600; color:#0f172a; letter-spacing:-.025em; }
      #lesson-games .lesson-intro { font-size:15px; line-height:1.65; color:#64748b; margin:16px 0 22px; max-width:390px; }
      #lesson-games .lesson-tabs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:24px; }
      #lesson-games .lesson-tabs button { font-size:12px; padding:9px 13px; border-radius:99px; color:#64748b; border:1px solid #e2e8f0; transition:background .2s,color .2s,border-color .2s; }
      #lesson-games .lesson-tabs button[aria-pressed=true] { background:#2563eb; color:white; border-color:#2563eb; }
      #lesson-games button:focus-visible { outline:2px solid #2563eb; outline-offset:5px; }
      #lesson-games .lesson-detail { min-height:166px; animation:lesson-copy-in .4s ease both; }
      #lesson-games .lesson-skill { font-size:10px; font-weight:600; color:#2563eb; margin-bottom:8px; }
      #lesson-games h3 { font-size:21px; font-weight:600; color:#0f172a; margin-bottom:10px; }
      #lesson-games .lesson-detail>p:last-child { font-size:14px; line-height:1.7; color:#64748b; max-width:400px; }
      #lesson-games .lesson-scroll-hint { display:flex; align-items:center; gap:7px; margin-top:16px; font-size:11px; color:#94a3b8; }
      #lesson-games .lesson-live { display:grid; grid-template-columns:62px minmax(0,1fr); gap:12px 22px; align-items:center; width:100%; max-width:530px; justify-self:end; }
      #lesson-games .lesson-people { display:flex; flex-direction:column; justify-content:center; gap:28px; }
      #lesson-games .lesson-person { position:relative; display:flex; flex-direction:column; align-items:center; }
      #lesson-games .lesson-avatar { width:56px; height:56px; position:relative; display:flex; align-items:center; justify-content:center; border:2px solid white; border-radius:50%; box-shadow:0 5px 14px #0f172a12; color:#334155; font-size:23px; font-weight:600; cursor:pointer; transition:transform .2s; }
      #lesson-games .lesson-avatar:hover { transform:translateY(-3px); }
      #lesson-games .lesson-avatar:active { transform:scale(.94); }
      #lesson-games .is-speaking { border-color:#10b981; }
      #lesson-games .lesson-speaking-ring { position:absolute; inset:-5px; border:1px solid #10b981; border-radius:50%; animation:lesson-speaking 2s ease-in-out infinite; }
      #lesson-games .lesson-person-name { font-size:11px; margin-top:7px; color:#475569; font-weight:500; }
      #lesson-games .lesson-person-role { font-size:9px; color:#94a3b8; }
      #lesson-games .lesson-reaction { position:absolute; right:-8px; bottom:-2px; width:25px; height:25px; border-radius:50%; background:white; box-shadow:0 3px 10px #0f172a14; display:flex; align-items:center; justify-content:center; font-size:16px; color:#d97706; animation:lesson-reaction-in .45s cubic-bezier(.2,.8,.3,1.4) both; }
      #lesson-games .lesson-speech { position:absolute; top:6px; left:calc(100% + 8px); z-index:4; width:116px; padding:9px; border-radius:12px 12px 12px 2px; background:white; box-shadow:0 4px 22px #0f172a15; color:#475569; font-size:11px; line-height:1.4; animation:lesson-copy-in .3s both; }
      #lesson-games .lesson-speech.is-arabic { font-size:22px; color:#2563eb; width:auto; min-width:86px; text-align:center; }
      #lesson-games .lesson-board-wrap { position:relative; width:100%; max-width:min(440px,57svh); aspect-ratio:1; justify-self:end; }
      #lesson-games .lesson-board { position:absolute; inset:0; width:100%; height:100%; object-fit:contain; border-radius:22px; opacity:0; transform:translateY(8px) scale(.985); transition:opacity .35s,transform .45s; pointer-events:none; user-select:none; }
      #lesson-games .lesson-board.is-active { opacity:1; transform:none; }
      #lesson-games .lesson-callout { position:absolute; top:12px; left:50%; transform:translateX(-50%); width:max-content; max-width:95%; display:flex; align-items:center; gap:7px; padding:10px 13px; border-radius:14px; color:white; background:#2563ebf2; box-shadow:0 6px 24px #2563eb30; font-size:11px; animation:lesson-notice .35s both; pointer-events:none; }
      #lesson-games .lesson-disclosure { grid-column:2; text-align:center; font-size:9px; color:#94a3b8; }
      #lesson-games .lesson-enter { opacity:0; transform:translateY(20px); transition:opacity .65s,transform .65s cubic-bezier(.2,.7,.2,1); }
      #lesson-games.has-entered .lesson-enter { opacity:1; transform:none; }
      #lesson-games .lesson-live.lesson-enter { transition-delay:.12s; }
      @media(max-width:1023px) { #lesson-games .lesson-layout { gap:24px; } #lesson-games .lesson-live { gap:12px; grid-template-columns:54px minmax(0,1fr); } #lesson-games .lesson-avatar { width:48px; height:48px; } }
      @media(max-width:767px) {
        #lesson-games { padding:0 18px; height:calc(190svh + 100px); }
        #lesson-games .lesson-stage { top:72px; height:calc(100svh - 72px); min-height:640px; }
        #lesson-games .lesson-layout { grid-template-columns:1fr; gap:20px; padding:18px 0; }
        #lesson-games .lesson-eyebrow { margin-bottom:8px; font-size:9px; }
        #lesson-games h2 { font-size:28px; } #lesson-games h2 br { display:none; }
        #lesson-games .lesson-intro { margin:10px 0 14px; font-size:13px; max-width:100%; }
        #lesson-games .lesson-tabs { margin-bottom:14px; }
        #lesson-games .lesson-tabs button { padding:8px 12px; font-size:11px; }
        #lesson-games .lesson-detail { min-height:127px; }
        #lesson-games .lesson-skill { margin-bottom:5px; font-size:9px; }
        #lesson-games h3 { font-size:18px; margin-bottom:6px; }
        #lesson-games .lesson-detail>p:last-child { font-size:12px; line-height:1.6; max-width:100%; }
        #lesson-games .lesson-scroll-hint { display:none; }
        #lesson-games .lesson-live { width:100%; max-width:430px; justify-self:center; grid-template-columns:48px minmax(0,1fr); gap:8px 12px; }
        #lesson-games .lesson-people { gap:17px; }
        #lesson-games .lesson-avatar { width:43px; height:43px; font-size:19px; }
        #lesson-games .lesson-person-name { margin-top:4px; font-size:10px; }
        #lesson-games .lesson-person-role { font-size:8px; }
        #lesson-games .lesson-board-wrap { max-width:min(330px,38svh); justify-self:center; }
        #lesson-games .lesson-disclosure { font-size:8px; }
        #lesson-games .lesson-speech { width:100px; font-size:10px; }
        #lesson-games .lesson-callout { font-size:9px; padding:8px; gap:5px; }
      }
      @media(max-height:700px) { #lesson-games { height:auto; padding-top:45px; padding-bottom:45px; } #lesson-games .lesson-stage { position:relative; top:auto; height:auto; min-height:0; } #lesson-games .lesson-scroll-hint { display:none; } }
      @keyframes lesson-copy-in { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
      @keyframes lesson-speaking { 0%,100% { opacity:.25; transform:scale(1); } 50% { opacity:.7; transform:scale(1.1); } }
      @keyframes lesson-reaction-in { from { opacity:0; transform:translateY(7px) rotate(-15deg) scale(.5); } to { opacity:1; transform:none; } }
      @keyframes lesson-notice { from { opacity:0; margin-top:8px; } to { opacity:1; margin-top:0; } }
      @media(prefers-reduced-motion:reduce) { #lesson-games *, #lesson-games *::before { animation:none!important; transition:none!important; } #lesson-games .lesson-enter { opacity:1; transform:none; } }
    `}</style>
  </section>
}
