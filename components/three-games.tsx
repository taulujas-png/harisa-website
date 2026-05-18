"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-3">
            Три игры, которых нет нигде
          </h2>
          <p className="text-text-muted text-center text-base md:text-lg mb-10">
            Пока один отвечает — остальные 11 тоже в деле
          </p>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="relative">
            {/* Card container with content */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* Title and description block */}
                  <div className="bg-white rounded-2xl p-5 md:p-6 mb-4 border border-black/[0.06]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-primary flex items-center justify-center shrink-0">
                        <span className="text-base font-semibold text-white">
                          {games[currentIndex].number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                          {games[currentIndex].title}
                        </h3>
                        <p className="text-text-muted text-sm md:text-base leading-relaxed">
                          {games[currentIndex].description}
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
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation row - below the card */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:border-blue-primary/20 transition-colors"
                aria-label="Previous game"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {games.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex 
                        ? 'bg-blue-primary w-6' 
                        : 'bg-black/20 hover:bg-black/30 w-2'
                    }`}
                    aria-label={`Go to game ${i + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:border-blue-primary/20 transition-colors"
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
