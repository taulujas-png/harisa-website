"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from './reveal'

const games = [
  {
    number: "01",
    title: "Арабский Миллионер",
    description: "Один отвечает. Остальные делают ставки Динарами. Потом — блиц для всех одновременно.",
    image: "/placeholder-game-1.png"
  },
  {
    number: "02",
    title: "Крокодил / Элиас",
    description: "Один объясняет слово. Платформа диктует каждому условие: «используй цвет» или «задай вопрос».",
    image: "/placeholder-game-2.png"
  },
  {
    number: "03",
    title: "Шпион 2.0",
    description: "11 знают слово, один — нет. Каждый называет ассоциацию за 5 секунд. Шпион может перехватить банк.",
    image: "/placeholder-game-3.png"
  }
]

export function ThreeGames() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const railRef = useRef<HTMLDivElement>(null)
  const lockRef = useRef(false)

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
            Три игры, которых нет нигде
          </h2>
          <p className="text-text-muted text-center text-base md:text-lg mb-10">
            Пока один отвечает — остальные 11 тоже в деле
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

                  {/* Image placeholder - separate block */}
                  <div className="aspect-[16/10] bg-surface rounded-2xl flex items-center justify-center border border-black/[0.06]">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-blue-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-text-muted text-sm">Скриншот игры</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation row - below the card */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="w-11 h-11 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:scale-105 hover:border-blue-primary/30 active:scale-90 transition-all duration-200 touch-manipulation select-none"
                aria-label="Previous game"
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
                    aria-label={`Go to game ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-11 h-11 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:scale-105 hover:border-blue-primary/30 active:scale-90 transition-all duration-200 touch-manipulation select-none"
                aria-label="Next game"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
