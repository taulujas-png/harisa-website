"use client"

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, BellRing, Hand } from 'lucide-react'
import Image from 'next/image'

const games = [
  { id: 'millionaire', title: 'Арабский Миллионер', short: 'Миллионер', skill: 'Вспоминаем и понимаем', description: 'На общей доске появляется вопрос. Один ученик отвечает, остальные включаются в раунд. Вспоминаем слова и учимся понимать вопросы на арабском.', action: 'Узнаём слово → выбираем ответ', answer: 'كِتَاب!' },
  { id: 'alias', title: 'Крокодил / Элиас', short: 'Элиас', skill: 'Превращаем слова в речь', description: 'Объясняем слово на арабском, а группа угадывает. Преподаватель подсказывает и помогает выразить мысль — даже если вы только начинаете.', action: 'Объясняем → угадываем вместе', answer: 'كِتَاب!' },
  { id: 'spy', title: 'Шпион', short: 'Шпион', skill: 'Слушаем и общаемся', description: 'Задаём друг другу вопросы о тайной локации и ищем шпиона. Чтобы его вычислить, нужно понять собеседника и самому ответить на арабском.', action: 'Спрашиваем → слушаем → отвечаем', answer: 'أَيْنَ نَحْنُ؟' },
]
const clamp = (value: number) => Math.max(0, Math.min(1, value))
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t) }
const windowed = (value: number, start: number, end: number) => smooth((value - start) / .08) * (1 - smooth((value - end) / .08))

export function ThreeGames() {
  const track = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const intro = useRef<HTMLDivElement>(null)
  const panels = useRef<(HTMLDivElement | null)[]>([])
  const activeRef = useRef(-1)
  const [active, setActive] = useState(-1)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const element = track.current
    const viewport = stage.current
    if (!element || !viewport) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let top = 0
    let travel = 1
    const measure = () => {
      top = parseFloat(getComputedStyle(viewport).top) || 0
      travel = element.offsetHeight - viewport.offsetHeight
    }
    const draw = () => {
      frame = 0
      if (motion.matches) return
      const rect = element.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      const progress = clamp((top - rect.top) / Math.max(1, travel))
      element.dataset.progress = progress.toFixed(4)
      const introIn = smooth((progress + .025) / .09)
      const introOut = smooth((progress - .17) / .105)
      intro.current?.style.setProperty('--intro-opacity', `${introIn * (1 - introOut)}`)
      intro.current?.style.setProperty('--intro-y', `${(1 - introIn) * 32 - introOut * 65}px`)
      intro.current?.style.setProperty('--intro-scale', `${1 - introOut * .045}`)
      const chapter = (progress - .265) / .235
      const next = progress < .235 ? -1 : Math.min(2, Math.max(0, Math.floor(chapter + .08)))
      if (activeRef.current !== next) { activeRef.current = next; setActive(next) }
      panels.current.forEach((panel, index) => {
        if (!panel) return
        const local = chapter - index
        const enter = index === 0 ? smooth((progress - .205) / .08) : smooth((local + .14) / .28)
        const leave = index === 2 ? 0 : smooth((local - .86) / .28)
        const opacity = enter * (1 - leave)
        panel.style.visibility = opacity > 0 ? 'visible' : 'hidden'
        if (opacity <= 0) return
        panel.style.setProperty('--panel-opacity', `${opacity}`)
        panel.style.setProperty('--copy-y', `${(1 - enter) * 44 - leave * 32}px`)
        panel.style.setProperty('--board-y', `${(1 - enter) * (index === 0 ? 70 : 26) - leave * 28}px`)
        panel.style.setProperty('--board-x', `${(1 - enter) * (index === 1 ? 45 : index === 2 ? -25 : 0)}px`)
        panel.style.setProperty('--board-scale', `${1 - (1 - enter) * (index === 2 ? .1 : .045) - leave * .025}`)
        panel.style.setProperty('--board-rotate', `${(1 - enter) * (index === 1 ? 2 : index === 2 ? -2 : 0)}deg`)
        panel.style.setProperty('--people-y', `${(1 - smooth((local + .07) / .25)) * 22}px`)
        panel.style.setProperty('--hand', `${windowed(local, .15, .39)}`)
        panel.style.setProperty('--call', `${windowed(local, .32, .48)}`)
        panel.style.setProperty('--speech', `${windowed(local, .5, .7)}`)
        panel.style.setProperty('--clap', `${windowed(local, .74, .93)}`)
        panel.style.setProperty('--ring', `${windowed(local, .45, .73)}`)
        panel.style.setProperty('--chapter-fill', `${clamp(local)}`)
      })
    }
    const update = () => { if (!frame) frame = requestAnimationFrame(draw) }
    const resize = () => { measure(); update() }
    const motionChanged = () => { setReducedMotion(motion.matches); if (motion.matches) panels.current.forEach(panel => { if (panel) panel.style.visibility = 'visible' }); resize() }
    const observer = new ResizeObserver(resize)
    observer.observe(viewport)
    observer.observe(element)
    setReducedMotion(motion.matches)
    measure()
    draw()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', resize)
    motion.addEventListener('change', motionChanged)
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', resize); motion.removeEventListener('change', motionChanged) }
  }, [])

  const goTo = (index: number) => {
    const element = track.current
    const viewport = stage.current
    if (!element || !viewport) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { panels.current[index]?.scrollIntoView({ block: 'center' }); return }
    const top = parseFloat(getComputedStyle(viewport).top) || 0
    const position = element.getBoundingClientRect().top + window.scrollY - top + (element.offsetHeight - viewport.offsetHeight) * (.265 + index * .235 + .06)
    window.scrollTo({ top: position, behavior: 'instant' })
  }

  return <section ref={track} id="lesson-games" aria-labelledby="lesson-story-title">
    <div ref={stage} className="lesson-story-stage">
      <div ref={intro} className="lesson-story-intro" aria-hidden={!reducedMotion && active !== -1}>
        <p className="story-eyebrow">УЧИМСЯ ЧЕРЕЗ ИГРУ</p>
        <h2 id="lesson-story-title">Групповая практика —<br /><span>часть нашей методики.</span></h2>
        <p className="story-intro-text">В играх на общей доске вы слушаете, объясняете и отвечаете на арабском — вместе с группой и при поддержке преподавателя.</p>
        <span className="story-scroll-cue"><ArrowDown size={16} />Листайте — заглянем на урок</span>
      </div>
      {games.map((game, index) => <div key={game.id} ref={el => { panels.current[index] = el }} className={`lesson-story-panel story-game-${index}`} aria-hidden={!reducedMotion && active !== index} inert={!reducedMotion && active !== index} data-active={reducedMotion || active === index}>
        <div className="story-copy">
          <p className="story-eyebrow">ИГРЫ НА ЖИВОМ УРОКЕ · 0{index + 1} / 03</p>
          <p className="story-skill">{game.skill}</p>
          <h3>{game.title}</h3>
          <p className="story-description">{game.description}</p>
          <p className="story-action">{game.action}</p>
          <nav className="story-navigation" aria-label="Перейти к игре">{games.map((item, i) => <button type="button" key={item.id} onClick={() => goTo(i)} aria-current={index === i ? 'step' : undefined} aria-label={`Игра ${i + 1}: ${item.short}`}><span className="story-nav-track"><span style={{ transform: `scaleX(${i < index ? 1 : i === index ? 'var(--chapter-fill)' : 0})` }} /></span><span>{item.short}</span></button>)}</nav>
        </div>
        <div className="story-board">
          <Image src={`/images/games/v8/${game.id}-board.png`} alt={`Доска игры «${game.title}» с учебным заданием`} width={900} height={900} sizes="(max-width: 767px) 85vw, (max-width: 1023px) 45vw, 470px" draggable={false} />
          <div className="story-call" aria-hidden="true"><BellRing size={15} />Вас вызывает учитель</div>
        </div>
        <div className="story-people" aria-label="Участники примера урока">
          <div className="story-person"><div className="story-avatar story-ahmad">А</div><span>Ахмад</span><small>учитель</small></div>
          <div className="story-person"><div className="story-avatar story-omar">О<span className="story-ring" /><span className="story-reaction story-hand"><Hand size={16} /></span></div><span>Омар</span><div className="story-speech" lang="ar" dir="rtl">{game.answer}</div></div>
          <div className="story-person"><div className="story-avatar story-ali">А<span className="story-reaction story-clap">👏</span></div><span>Али</span></div>
        </div>
        <p className="story-disclosure">Пример урока · учебные данные и участники</p>
      </div>)}
    </div>
    <style jsx global>{`
      #lesson-games { position:relative; height:460svh; background:#fff; overflow-x:clip; }
      #lesson-games .lesson-story-stage { position:sticky; top:80px; height:calc(100svh - 80px); min-height:480px; max-width:1152px; margin:auto; }
      #lesson-games .lesson-story-intro { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:32px 24px; text-align:center; opacity:var(--intro-opacity,1); transform:translateY(var(--intro-y,0px)) scale(var(--intro-scale,1)); pointer-events:none; }
      #lesson-games .story-eyebrow { font-size:10px; font-weight:600; letter-spacing:.14em; color:#2563eb; margin-bottom:22px; }
      #lesson-games h2 { font-size:clamp(38px,5.8vw,78px); line-height:1.12; font-weight:600; letter-spacing:-.045em; color:#0f172a; }
      #lesson-games h2 span { color:#2563eb; }
      #lesson-games .story-intro-text { max-width:520px; margin-top:28px; color:#64748b; font-size:18px; line-height:1.7; }
      #lesson-games .story-scroll-cue { display:flex; align-items:center; gap:9px; margin-top:38px; font-size:12px; color:#94a3b8; }
      #lesson-games .lesson-story-panel { position:absolute; inset:0; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,470px) 58px; grid-template-rows:auto 24px; column-gap:16px; align-content:center; align-items:center; padding:28px 40px; opacity:var(--panel-opacity,0); pointer-events:none; }
      #lesson-games .lesson-story-panel[data-active=true] { pointer-events:auto; }
      #lesson-games .story-copy { transform:translateY(var(--copy-y,44px)); min-width:0; }
      #lesson-games .story-copy .story-eyebrow { font-size:9px; margin-bottom:20px; }
      #lesson-games .story-skill { font-size:14px; color:#2563eb; font-weight:500; margin-bottom:10px; }
      #lesson-games h3 { font-size:clamp(25px,3vw,38px); font-weight:600; line-height:1.15; letter-spacing:-.035em; color:#0f172a; margin-bottom:20px; }
      #lesson-games .story-description { font-size:17px; line-height:1.7; color:#64748b; max-width:410px; }
      #lesson-games .story-action { margin-top:20px; font-size:13px; color:#2563eb; }
      #lesson-games .story-navigation { display:flex; gap:12px; margin-top:32px; }
      #lesson-games .story-navigation button { flex:1; min-width:0; text-align:left; font-size:10px; color:#94a3b8; padding:8px 0; }
      #lesson-games .story-navigation button[aria-current] { color:#2563eb; }
      #lesson-games .story-navigation button:focus-visible { outline:2px solid #2563eb; outline-offset:4px; border-radius:3px; }
      #lesson-games .story-nav-track { display:block; height:2px; width:100%; background:#e2e8f0; margin-bottom:9px; overflow:hidden; }
      #lesson-games .story-nav-track>span { display:block; height:100%; width:100%; transform-origin:left; background:#2563eb; }
      #lesson-games .story-board { width:100%; max-width:min(470px,63svh); aspect-ratio:1; position:relative; justify-self:end; transform:translate(var(--board-x,0px),var(--board-y,40px)) scale(var(--board-scale,.95)) rotate(var(--board-rotate,0deg)); }
      #lesson-games .story-board img { display:block; width:100%; height:100%; object-fit:contain; border-radius:24px; box-shadow:0 4px 12px rgb(15 23 42 / .025),0 24px 48px -16px rgb(37 99 235 / .14),0 48px 80px -32px rgb(15 23 42 / .16); pointer-events:none; user-select:none; }
      #lesson-games .story-people { display:flex; flex-direction:column; gap:32px; align-items:center; transform:translateY(var(--people-y,22px)); }
      #lesson-games .story-person { display:flex; flex-direction:column; align-items:center; position:relative; }
      #lesson-games .story-avatar { position:relative; width:58px; height:58px; display:flex; justify-content:center; align-items:center; border-radius:50%; border:2px solid white; box-shadow:0 5px 16px #0f172a10; font-size:23px; font-weight:500; color:#334155; }
      #lesson-games .story-ahmad { background:linear-gradient(135deg,#ede9fe,#c4b5fd); }
      #lesson-games .story-omar { background:linear-gradient(135deg,#fef3c7,#fbbf24); }
      #lesson-games .story-ali { background:linear-gradient(135deg,#e0f2fe,#7dd3fc); }
      #lesson-games .story-person>span { font-size:11px; margin-top:7px; color:#475569; }
      #lesson-games .story-person small { font-size:9px; color:#94a3b8; }
      #lesson-games .story-ring { position:absolute; inset:-5px; border:2px solid #10b981; border-radius:50%; opacity:var(--ring,0); transform:scale(calc(.96 + var(--ring,0) * .08)); }
      #lesson-games .story-reaction { position:absolute; right:-7px; bottom:0; width:26px; height:26px; display:flex; justify-content:center; align-items:center; border-radius:50%; background:white; box-shadow:0 3px 12px #0f172a14; color:#d97706; font-size:17px; }
      #lesson-games .story-hand { opacity:var(--hand,0); transform:translateY(calc(10px - var(--hand,0) * 10px)) rotate(calc(-20deg + var(--hand,0) * 20deg)); }
      #lesson-games .story-clap { opacity:var(--clap,0); transform:scale(calc(.6 + var(--clap,0) * .4)) rotate(calc(-15deg + var(--clap,0) * 15deg)); }
      #lesson-games .story-speech { position:absolute; right:calc(100% + 12px); top:6px; padding:8px 14px; border-radius:12px 12px 2px 12px; background:white; box-shadow:0 4px 20px #0f172a14; color:#2563eb; font-size:23px; white-space:nowrap; opacity:var(--speech,0); transform:translateY(calc(8px - var(--speech,0) * 8px)); }
      #lesson-games .story-call { position:absolute; top:12px; left:50%; transform:translate(-50%,calc(10px - var(--call,0) * 10px)); opacity:var(--call,0); display:flex; align-items:center; gap:7px; width:max-content; max-width:95%; padding:10px 13px; border-radius:12px; background:#2563ebf2; box-shadow:0 6px 22px #2563eb20; color:white; font-size:11px; pointer-events:none; }
      #lesson-games .story-disclosure { grid-column:2; text-align:center; font-size:9px; color:#94a3b8; margin-top:14px; }
      @media(max-width:1023px) and (min-width:768px) { #lesson-games .lesson-story-panel { padding:24px; gap:12px; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr) 54px; } #lesson-games .story-avatar { width:46px; height:46px; font-size:20px; } #lesson-games .story-description { font-size:15px; } }
      @media(max-width:767px) {
        #lesson-games { height:450svh; }
        #lesson-games .lesson-story-stage { top:76px; height:calc(100svh - 76px); min-height:580px; }
        #lesson-games h2 { font-size:clamp(35px,8.8vw,58px); }
        #lesson-games .story-intro-text { max-width:360px; font-size:15px; margin-top:22px; }
        #lesson-games .story-eyebrow { font-size:9px; }
        #lesson-games .lesson-story-panel { grid-template-columns:minmax(0,1fr); grid-template-rows:auto auto auto auto; gap:14px; padding:18px 22px; align-content:center; }
        #lesson-games .story-copy { grid-row:1; }
        #lesson-games .story-copy .story-eyebrow { font-size:8px; margin-bottom:9px; }
        #lesson-games .story-skill { font-size:10px; margin-bottom:5px; }
        #lesson-games h3 { font-size:25px; margin-bottom:10px; }
        #lesson-games .story-description { font-size:13px; line-height:1.6; max-width:100%; }
        #lesson-games .story-action { display:none; }
        #lesson-games .story-navigation { margin-top:10px; gap:14px; }
        #lesson-games .story-navigation button { font-size:9px; padding:6px 0; }
        #lesson-games .story-nav-track { margin-bottom:5px; }
        #lesson-games .story-people { grid-row:2; margin-bottom:-6px; flex-direction:row; justify-content:center; gap:34px; }
        #lesson-games .story-avatar { width:42px; height:42px; font-size:18px; }
        #lesson-games .story-person>span { margin-top:4px; font-size:9px; }
        #lesson-games .story-person small { position:absolute; top:56px; font-size:7px; }
        #lesson-games .story-reaction { width:21px; height:21px; font-size:14px; right:-6px; }
        #lesson-games .story-board { grid-row:3; max-width:min(340px,40svh); justify-self:center; }
        #lesson-games .story-disclosure { grid-row:4; grid-column:1; font-size:8px; margin-top:0; }
        #lesson-games .story-speech { top:6px; right:auto; left:calc(100% + 7px); font-size:18px; padding:6px 9px; }
        #lesson-games .story-call { padding:8px 10px; font-size:9px; top:8px; }
      }
      @media(max-height:720px) and (min-width:768px) { #lesson-games .lesson-story-stage { min-height:300px; } #lesson-games .story-board { max-width:65svh; } #lesson-games h3 { font-size:27px; margin-bottom:12px; } #lesson-games .story-description { font-size:12px; } #lesson-games .story-people { gap:20px; } #lesson-games .story-avatar { width:44px; height:44px; font-size:19px; } #lesson-games .story-navigation { margin-top:16px; } }
      @media(max-height:740px) and (max-width:767px) { #lesson-games .lesson-story-stage { min-height:480px; } #lesson-games .lesson-story-panel { gap:10px; padding:12px 20px; } #lesson-games h3 { font-size:22px; margin-bottom:7px; } #lesson-games .story-description { font-size:11px; } #lesson-games .story-board { max-width:35svh; } #lesson-games .story-copy .story-eyebrow { margin-bottom:6px; } }
      @media(max-height:540px) and (max-width:767px) {
        #lesson-games .lesson-story-stage { min-height:0; }
        #lesson-games .lesson-story-panel { grid-template-columns:minmax(0,1fr) minmax(0,1fr); grid-template-rows:auto auto auto; gap:7px 24px; padding:12px 24px; }
        #lesson-games .story-copy { grid-column:1; grid-row:1 / 4; }
        #lesson-games .story-people { grid-column:2; grid-row:1; gap:20px; }
        #lesson-games .story-avatar { width:29px; height:29px; font-size:13px; }
        #lesson-games .story-person>span { font-size:8px; margin-top:2px; }
        #lesson-games .story-person small { display:none; }
        #lesson-games .story-board { grid-column:2; grid-row:2; max-width:calc(100svh - 175px); }
        #lesson-games .story-disclosure { grid-column:2; grid-row:3; font-size:6px; }
        #lesson-games h3 { font-size:21px; }
        #lesson-games .story-description { font-size:11px; }
        #lesson-games .story-intro-text { font-size:12px; margin-top:14px; }
        #lesson-games h2 { font-size:35px; }
        #lesson-games .story-scroll-cue { margin-top:14px; }
        #lesson-games .story-eyebrow { margin-bottom:12px; }
      }
      @media(prefers-reduced-motion:reduce) {
        #lesson-games { height:auto; }
        #lesson-games .lesson-story-stage { position:relative; top:auto; height:auto; min-height:0; }
        #lesson-games .lesson-story-intro { position:relative; min-height:calc(100svh - 80px); opacity:1; transform:none; }
        #lesson-games .lesson-story-panel { position:relative; min-height:calc(100svh - 80px); opacity:1; pointer-events:auto; }
        #lesson-games .story-copy, #lesson-games .story-board, #lesson-games .story-people { transform:none; }
        #lesson-games .story-navigation { display:none; }
        #lesson-games .story-reaction, #lesson-games .story-speech, #lesson-games .story-ring, #lesson-games .story-call { display:none; }
      }
    `}</style>
  </section>
}
