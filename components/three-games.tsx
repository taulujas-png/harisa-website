"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import { BellRing, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Reveal } from './reveal'

const games = [
  {
    number: "01",
    title: "Арабский Миллионер",
    description: "Отвечайте на вопросы по арабскому. Пока один игрок выбирает ответ, остальные тоже участвуют в раунде.",
    image: "/images/games/millionaire.png",
    width: 1280,
    height: 800
  },
  {
    number: "02",
    title: "Крокодил / Элиас",
    description: "Объясняйте слово с заданным условием, а команда попробует его угадать. Практика слов в живой речи.",
    image: "/images/games/v2/crocodile.png",
    width: 650,
    height: 650
  },
  {
    number: "03",
    title: "Шпион 2.0",
    description: "Задавайте друг другу вопросы о тайной локации и попробуйте вычислить шпиона. Нужно и слушать, и говорить.",
    image: "/images/games/v2/spy.png",
    width: 650,
    height: 650
  }
]

export function ThreeGames() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [calledOut, setCalledOut] = useState(false)
  const calloutTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const lockRef = useRef(false)

  useEffect(() => () => {
    if (calloutTimer.current) clearTimeout(calloutTimer.current)
  }, [])

  const showCallout = () => {
    if (calloutTimer.current) clearTimeout(calloutTimer.current)
    setCalledOut(true)
    calloutTimer.current = setTimeout(() => setCalledOut(false), 3000)
  }

  const scrollToIndex = useCallback((i: number) => {
    const rail = railRef.current
    if (!rail) return
    const clamped = (i + games.length) % games.length
    const card = rail.children[clamped] as HTMLElement | undefined
    if (!card) return
    lockRef.current = true
    rail.scrollTo({ left: card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2, behavior: 'smooth' })
    setCurrentIndex(clamped)
    window.setTimeout(() => { lockRef.current = false }, 450)
  }, [])

  const goToPrevious = useCallback(() => {
    scrollToIndex(currentIndex === 0 ? games.length - 1 : currentIndex - 1)
  }, [currentIndex, scrollToIndex])

  const goToNext = useCallback(() => {
    scrollToIndex(currentIndex === games.length - 1 ? 0 : currentIndex + 1)
  }, [currentIndex, scrollToIndex])

  // Dots follow the swipe: nearest card to rail center wins
  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    let raf = 0
    const onScroll = () => {
      if (lockRef.current) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const center = rail.scrollLeft + rail.clientWidth / 2
        let best = 0
        let bestDist = Infinity
        Array.from(rail.children).forEach((child, i) => {
          const el = child as HTMLElement
          const dist = Math.abs(el.offsetLeft + el.clientWidth / 2 - center)
          if (dist < bestDist) { bestDist = dist; best = i }
        })
        setCurrentIndex((prev) => (prev === best ? prev : best))
      })
    }
    rail.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      rail.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-3">
            Игры на живом уроке
          </h2>
          <p className="text-text-muted text-center text-base md:text-lg mb-10">
            Играете вместе с группой. Преподаватель объясняет правила и ведёт занятие.
          </p>
        </Reveal>

        {/* Carousel: native swipe rail with snap (dots follow the scroll) */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div
              ref={railRef}
              className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {games.map((game) => (
                <article
                  key={game.number}
                  className="snap-center shrink-0 w-[84%] sm:w-[70%] md:w-full"
                >
                  {/* Title and description block */}
                  <div className="bg-white rounded-2xl p-5 md:p-6 mb-4 border border-black/[0.06] hover:border-blue-primary/25 hover:shadow-lg hover:shadow-blue-primary/10 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-primary flex items-center justify-center shrink-0">
                        <span className="text-base font-semibold text-white">
                          {game.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                          {game.title}
                        </h3>
                        <p className="text-text-muted text-sm md:text-base leading-relaxed">
                          {game.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {game.number === '01' ? (
                    <figure>
                      <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f5f8fc] px-4 py-6 sm:px-8 sm:py-8">
                        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 sm:gap-5">
                          <div className="flex items-start justify-center gap-5 sm:gap-8" aria-label="Пример участников урока">
                            {[
                              { initial: 'А', label: 'Ахмад', color: 'from-violet-50 to-violet-100 text-violet-700', speaking: true },
                              { initial: 'О', label: 'Омар', color: 'from-amber-50 to-amber-100 text-amber-700', speaking: false },
                              { initial: 'А', label: 'Али', color: 'from-sky-50 to-sky-100 text-sky-700', speaking: false },
                            ].map((person, index) => (
                              <div key={index} className="flex flex-col items-center gap-1.5">
                                <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 bg-gradient-to-br text-lg font-bold shadow-md sm:h-16 sm:w-16 ${person.color} ${person.speaking ? 'border-emerald-500' : 'border-slate-300'}`}>
                                  {person.speaking && <span className="game-speaking-pulse pointer-events-none absolute -inset-1 rounded-full border-2 border-emerald-500" aria-hidden="true" />}
                                  {person.initial}
                                </div>
                                <span className="text-[10px] font-medium text-slate-500 sm:text-xs">{person.label}{person.speaking && <span className="block text-[9px] text-slate-400">преподаватель</span>}</span>
                              </div>
                            ))}
                          </div>
                          <a href="/images/games/v7/millionaire-classroom.png" target="_blank" rel="noopener noreferrer" aria-label="Открыть полный скриншот игры «Арабский Миллионер»" className="block w-full max-w-[540px] overflow-hidden rounded-[1.5rem] shadow-xl shadow-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary">
                            <Image src="/images/games/v7/millionaire-board.png" alt="Пример вопроса и вариантов ответа в игре «Арабский Миллионер»" width={720} height={720} sizes="(max-width: 768px) 72vw, 540px" className="h-auto w-full" />
                          </a>
                          <button type="button" onClick={showCallout} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary">
                            <BellRing size={16} aria-hidden="true" /> Попробовать оклик учителя
                          </button>
                        </div>
                        {calledOut && <div className="game-callout absolute inset-0 z-10 flex items-center justify-center rounded-2xl" aria-live="polite">
                          <div className="game-callout-glow pointer-events-none absolute inset-0 rounded-2xl" />
                          <div className="relative mx-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-blue-600/90 px-5 py-4 font-bold text-white shadow-2xl backdrop-blur-md"><BellRing className="animate-bounce motion-reduce:animate-none" aria-hidden="true" /> К вам обращается учитель!</div>
                        </div>}
                      </div>
                      <figcaption className="text-xs text-text-muted mt-3 text-center leading-relaxed">Пример урока с учебными данными. Нажмите на игру, чтобы увидеть полный экран платформы.</figcaption>
                    </figure>
                  ) : <figure>
                    <a href={game.image} target="_blank" rel="noopener noreferrer" aria-label={`Открыть скриншот игры «${game.title}»`} className="block aspect-[16/10] bg-surface rounded-2xl overflow-hidden border border-black/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary">
                      <Image src={game.image} alt={`Интерфейс игры «${game.title}» на платформе Harisa с примерным учебным заданием`} width={game.width} height={game.height} sizes="(max-width: 768px) 84vw, 896px" className="w-full h-full object-contain" />
                    </a>
                    <figcaption className="text-xs text-text-muted mt-3 text-center leading-relaxed">Интерфейс платформы · локальный пример с учебными данными. Нажмите, чтобы рассмотреть.</figcaption>
                  </figure>}
                </article>
              ))}
            </div>

            {/* Navigation row - below the card */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="w-11 h-11 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:scale-105 hover:border-blue-primary/30 active:scale-90 transition-all duration-200 touch-manipulation select-none"
                aria-label="Предыдущая игра"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {games.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                      i === currentIndex
                        ? 'bg-blue-primary w-6'
                        : 'bg-black/20 hover:bg-black/40 hover:scale-125 active:scale-125 w-2'
                    }`}
                    aria-label={`Показать игру ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-11 h-11 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:scale-105 hover:border-blue-primary/30 active:scale-90 transition-all duration-200 touch-manipulation select-none"
                aria-label="Следующая игра"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
      <style jsx>{`
        .game-speaking-pulse { animation: game-speaking 2s ease-in-out infinite; }
        .game-callout { animation: game-callout-enter 250ms ease-out both; }
        .game-callout-glow { box-shadow: inset 0 0 120px rgba(59, 130, 246, .7); animation: game-glow 1.5s ease-in-out infinite; }
        @keyframes game-speaking { 0%, 100% { transform: scale(1); opacity: .3; } 50% { transform: scale(1.12); opacity: .7; } }
        @keyframes game-glow { 0%, 100% { opacity: .65; } 50% { opacity: 1; } }
        @keyframes game-callout-enter { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .game-speaking-pulse, .game-callout, .game-callout-glow { animation: none; } }
      `}</style>
    </section>
  )
}
