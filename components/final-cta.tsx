"use client"

import { Reveal } from './reveal'
import { BackgroundPattern } from './ornaments'

export function FinalCTA() {
  return (
    <section id="contact" className="bg-blue-primary py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background pattern */}
      <BackgroundPattern className="absolute inset-0 w-full h-full text-white opacity-[0.06]" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 text-balance">
            Начни говорить на арабском уже в этом месяце
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-white/70 text-base mb-8">
            Новый поток стартует в начале каждого месяца. Группы небольшие — запись закрывается при наборе.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="https://t.me/harisa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-primary font-medium px-8 py-3.5 rounded-full text-base hover:bg-blue-light transition-colors"
          >
            Занять место
          </a>
        </Reveal>
      </div>
    </section>
  )
}
