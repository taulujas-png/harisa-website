"use client"

import { Reveal, StaggerContainer, StaggerItem } from './reveal'
import { OrnamentCorner } from './harisa-ornament'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-light/40 via-off-white to-off-white py-20 md:py-32 px-4 md:px-6 overflow-hidden min-h-[90vh] md:min-h-[85vh] flex items-center">
      <OrnamentCorner position="top-left" delay={0.2} trigger="animate" />
      <OrnamentCorner position="top-right" delay={0.2} trigger="animate" />
      <OrnamentCorner position="bottom-left" delay={0.2} trigger="animate" />
      <OrnamentCorner position="bottom-right" delay={0.2} trigger="animate" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <StaggerContainer className="flex flex-col items-center">
          <StaggerItem>
            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-semibold text-text-primary leading-[1.1] tracking-[-0.03em] text-balance mb-6">
              Арабский как его впитывали веками
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base md:text-lg text-text-muted font-normal mb-10 max-w-xl">
              Живым, а не в учебнике.
              <span className="block mt-3">Арабский с нуля: учимся понимать базовую речь фусха и выражать свои мысли на живых уроках.</span>
            </p>
          </StaggerItem>

           <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#schedule"
                 className="w-full sm:w-auto bg-black text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-gray-900 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/30 active:scale-95 transition-all duration-200 shadow-lg shadow-black/25 touch-manipulation select-none"
               >
                 Занять место
                </a>
                <a
                  href="https://wa.me/996226180075"
                 className="text-text-muted text-base hover:text-text-primary hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 touch-manipulation"
               >
                 Написать нам →
                </a>
              </div>
           </StaggerItem>
          <StaggerItem>
            <a href="#demo" className="inline-block text-blue-primary text-sm font-medium mt-6 py-2 hover:underline underline-offset-4">Сначала попробовать мини-игру ↓</a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
