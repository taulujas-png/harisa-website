"use client"

import { Reveal, StaggerContainer, StaggerItem } from './reveal'
import { OrnamentCorner } from './harisa-ornament'

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-transparent py-20 md:py-32 px-4 md:px-6 overflow-hidden min-h-[60vh] flex items-center">
      {/* Corner ornaments - reduced by 30% */}
      <OrnamentCorner position="top-left" delay={0.2} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      <OrnamentCorner position="top-right" delay={0.2} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      <OrnamentCorner position="bottom-left" delay={0.2} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      <OrnamentCorner position="bottom-right" delay={0.2} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <StaggerContainer className="flex flex-col items-center">
          <StaggerItem>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-text-primary leading-[1.1] tracking-[-0.03em] text-balance mb-6">
              Начни говорить на арабском уже в этом месяце
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base md:text-lg text-text-muted font-normal mb-10 max-w-xl mx-auto">
              Новый поток стартует в начале каждого месяца. Группы небольшие — запись закрывается при наборе.
            </p>
          </StaggerItem>

          <StaggerItem>
            <a
              href="https://t.me/harisa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-blue-primary font-medium px-8 py-3.5 rounded-full text-base hover:bg-gray-900 transition-colors shadow-lg shadow-black/20"
            >
              Занять место
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
