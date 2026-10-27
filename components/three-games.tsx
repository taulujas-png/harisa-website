"use client"

import { useEffect, useRef, useState } from 'react'
import { BellRing, Hand } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Reveal } from './reveal'

const games = [
  {
    id: 'millionaire', title: 'Арабский Миллионер', short: 'Миллионер',
    description: 'Отвечайте на вопросы по арабскому. Пока один игрок выбирает ответ, остальные тоже участвуют в раунде.',
    question: 'Как будет «книга»?', answer: 'كِتَاب!',
  },
  {
    id: 'alias', title: 'Крокодил / Элиас', short: 'Элиас',
    description: 'Объясняйте слово на арабском, а группа попробует его угадать. Новые слова сразу идут в речь.',
    question: 'Омар, объясни слово', answer: 'كِتَاب!',
  },
  {
    id: 'spy', title: 'Шпион 2.0', short: 'Шпион',
    description: 'Задавайте вопросы о тайной локации и попробуйте вычислить шпиона. Практика слушания и живого разговора.',
    question: 'Омар, твой вопрос', answer: 'أَيْنَ نَحْنُ؟',
  },
]

function Participant({ name, teacher, color, className, speaking, hand, reaction, speech, arabic = false }: {
  name: string; teacher?: boolean; color: string; className: string; speaking: boolean; hand?: boolean; reaction?: string; speech?: string; arabic?: boolean
}) {
  return (
    <div className={`lesson-person ${className}`}>
      <div className={`lesson-avatar ${speaking ? 'is-speaking' : ''}`} style={{ background: color }}>
        <span>{name[0]}</span>
        {speaking && <span className="lesson-speaking-ring" aria-hidden="true" />}
        {(hand || reaction) && <span className="lesson-reaction" aria-label={hand ? 'Поднята рука' : undefined}>{hand ? <Hand size={17} className="text-amber-600" /> : reaction}</span>}
      </div>
      <span className="lesson-person-name">{name}</span>
      <span className="lesson-person-role">{teacher ? 'преподаватель' : 'ученик'}</span>
      <div className="lesson-speech-slot">{speech && <span className={`lesson-speech ${arabic ? 'lesson-speech-arabic' : ''}`} lang={arabic ? 'ar' : 'ru'} dir={arabic ? 'rtl' : undefined}>{speech}</span>}</div>
    </div>
  )
}

export function ThreeGames() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(0)
  const scene = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const game = games[currentIndex]

  useEffect(() => {
    const element = scene.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setStep(0)
    if (!visible || reducedMotion) return
    // A short, silent demonstration plays only while this scene is on screen.
    const timers = [1400, 3000, 5400, 7800].map((delay, index) => setTimeout(() => setStep(index + 1), delay))
    return () => timers.forEach(clearTimeout)
  }, [visible, currentIndex, reducedMotion])

  return (
    <section id="lesson-games" className="overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal><div className="mb-7 text-center"><h2 className="mb-3 text-2xl font-semibold text-text-primary md:text-3xl">Игры на живом уроке</h2><p className="mx-auto max-w-xl text-base text-text-muted md:text-lg">Преподаватель задаёт темп, группа включается в разговор.</p></div></Reveal>
        <div className="mb-6 flex justify-center gap-2" role="group" aria-label="Выберите игру урока">
          {games.map((item, index) => <button type="button" key={item.id} aria-pressed={currentIndex === index} aria-controls="lesson-scene" onClick={() => setCurrentIndex(index)} className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary sm:px-6 ${currentIndex === index ? 'border-blue-primary bg-blue-primary text-white' : 'border-slate-200 bg-white text-text-muted hover:border-blue-300 hover:text-blue-primary'}`}>{item.short}</button>)}
        </div>
        <div ref={scene} id="lesson-scene" className={`lesson-scene ${visible ? 'is-visible' : ''}`} data-step={step}>
          <Participant name="Ахмад" teacher color="linear-gradient(135deg, #f5f3ff, #ddd6fe)" className="lesson-teacher" speaking={visible && (step === 0 || step === 2)} reaction={step === 4 ? '👍' : undefined} speech={step === 0 ? game.question : step === 2 ? 'Омар, твоя очередь' : step === 4 ? 'Отлично!' : undefined} />
          <Participant name="Омар" color="linear-gradient(135deg, #fffbeb, #fde68a)" className="lesson-omar" speaking={visible && step === 3} hand={step === 1 || step === 2} reaction={step === 4 ? '😊' : undefined} speech={step === 3 ? game.answer : undefined} arabic />
          <Participant name="Али" color="linear-gradient(135deg, #f0f9ff, #bae6fd)" className="lesson-ali" speaking={false} reaction={step === 4 ? '👏' : undefined} />
          <div className="lesson-board-wrap">
            <a href={`/images/games/v8/${game.id}-board.png`} target="_blank" rel="noopener noreferrer" className="lesson-board-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary" aria-label={`Рассмотреть доску игры «${game.title}»`}>
              <Image key={game.id} src={`/images/games/v8/${game.id}-board.png`} alt={`Настоящий интерфейс игры «${game.title}» с учебным заданием`} width={900} height={900} sizes="(max-width: 767px) 88vw, 560px" className="h-full w-full object-contain" />
            </a>
            {step === 2 && <div className="lesson-callout" aria-hidden="true"><span className="lesson-callout-glow" /><span className="lesson-callout-message"><BellRing size={19} className="shrink-0" />Вас вызывает учитель</span></div>}
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-xl text-center"><h3 className="mb-2 text-lg font-semibold text-text-primary">{game.title}</h3><p className="min-h-16 text-sm leading-relaxed text-text-muted">{game.description}</p></div>
        <p className="mt-2 text-center text-xs text-text-muted">Пример урока с учебными данными и участниками.</p>
      </div>
      <style jsx global>{`
        #lesson-games .lesson-scene { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-areas: "teacher omar ali" "board board board"; gap: 5px 8px; max-width: 960px; margin: auto; padding: 22px 12px 14px; border-radius: 28px; background: #f6f8fc; border: 1px solid #eef1f6; }
        #lesson-games .lesson-person { display: flex; flex-direction: column; align-items: center; min-width: 0; position: relative; align-self: center; }
        #lesson-games .lesson-teacher { grid-area: teacher; }
        #lesson-games .lesson-omar { grid-area: omar; }
        #lesson-games .lesson-ali { grid-area: ali; }
        #lesson-games .lesson-avatar { position: relative; display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; border: 2px solid #fff; border-radius: 50%; box-shadow: 0 5px 12px #0f172a12; color: #334155; font-size: 21px; font-weight: 700; transition: border-color .3s; }
        #lesson-games .is-speaking { border-color: #10b981; }
        #lesson-games .lesson-speaking-ring { position: absolute; inset: -5px; border: 2px solid #10b981; border-radius: 50%; animation: lesson-speaking 2s ease-in-out infinite; }
        #lesson-games .lesson-reaction { position: absolute; bottom: -4px; right: -7px; width: 27px; height: 27px; display: flex; align-items: center; justify-content: center; border: 1px solid #e2e8f0; border-radius: 50%; background: white; font-size: 16px; box-shadow: 0 3px 8px #0f172a0a; animation: lesson-pop .3s ease-out; }
        #lesson-games .lesson-person-name { margin-top: 8px; color: #334155; font-size: 12px; font-weight: 600; }
        #lesson-games .lesson-person-role { color: #94a3b8; font-size: 9px; }
        #lesson-games .lesson-speech-slot { height: 46px; display: flex; align-items: center; justify-content: center; width: 100%; }
        #lesson-games .lesson-speech { position: relative; z-index: 2; padding: 5px 7px; border-radius: 10px; border: 1px solid #e2e8f0; background: white; color: #475569; text-align: center; font-size: 10px; line-height: 1.4; box-shadow: 0 3px 8px #0f172a05; animation: lesson-pop .3s ease-out; }
        #lesson-games .lesson-speech-arabic { color: #1d4ed8; font-size: 19px; }
        #lesson-games .lesson-board-wrap { grid-area: board; position: relative; min-width: 0; width: 100%; aspect-ratio: 1; align-self: center; border-radius: 22px; box-shadow: 0 16px 35px #2563eb12; }
        #lesson-games .lesson-board-link { display: block; width: 100%; height: 100%; overflow: hidden; border-radius: inherit; background: white; }
        #lesson-games .lesson-callout { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; display: flex; align-items: flex-start; justify-content: center; padding: 16px 8px; }
        #lesson-games .lesson-callout-glow { position: absolute; inset: 0; border-radius: inherit; box-shadow: inset 0 0 90px #3b82f670; animation: lesson-glow 1.5s ease-in-out infinite; }
        #lesson-games .lesson-callout-message { position: relative; display: flex; align-items: center; gap: 8px; background: #2563ebed; color: white; border: 1px solid #ffffff40; border-radius: 14px; padding: 10px 14px; font-size: 12px; font-weight: 600; box-shadow: 0 8px 20px #2563eb30; animation: lesson-pop .3s ease-out; }
        @media (min-width: 768px) {
          #lesson-games .lesson-scene { grid-template-columns: 110px minmax(0, 560px) 110px; grid-template-rows: 1fr 1fr; grid-template-areas: "teacher board omar" "teacher board ali"; justify-content: center; gap: 12px 24px; padding: 32px 24px; }
          #lesson-games .lesson-avatar { width: 72px; height: 72px; font-size: 27px; }
          #lesson-games .lesson-person-name { font-size: 13px; }
          #lesson-games .lesson-person-role { font-size: 10px; }
          #lesson-games .lesson-speech { font-size: 11px; }
          #lesson-games .lesson-speech-arabic { font-size: 22px; }
          #lesson-games .lesson-callout-message { font-size: 14px; padding: 12px 18px; }
        }
        @keyframes lesson-speaking { 0%, 100% { transform: scale(1); opacity: .3; } 50% { transform: scale(1.12); opacity: .7; } }
        @keyframes lesson-glow { 0%, 100% { opacity: .65; } 50% { opacity: 1; } }
        @keyframes lesson-pop { from { opacity: 0; transform: translateY(5px) scale(.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @media (prefers-reduced-motion: reduce) { #lesson-games .lesson-speaking-ring, #lesson-games .lesson-reaction, #lesson-games .lesson-speech, #lesson-games .lesson-callout-glow, #lesson-games .lesson-callout-message { animation: none; } }
      `}</style>
    </section>
  )
}
