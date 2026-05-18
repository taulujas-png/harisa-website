"use client"

import { Reveal, StaggerContainer, StaggerItem } from './reveal'
import { OrnamentCorner } from './harisa-ornament'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-light/40 via-off-white to-off-white py-20 md:py-32 px-4 md:px-6 overflow-hidden min-h-[90vh] md:min-h-[85vh] flex items-center">
      {/* Corner ornaments */}
      <OrnamentCorner position="top-left" delay={0.2} />
      <OrnamentCorner position="top-right" delay={0.2} />
      <OrnamentCorner position="bottom-left" delay={0.2} />
      <OrnamentCorner position="bottom-right" delay={0.2} />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <StaggerContainer className="flex flex-col items-center">
          {/* Main headline */}
          <StaggerItem>
            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-semibold text-text-primary leading-[1.1] tracking-[-0.03em] text-balance mb-6">
              Арабский как его впитывали веками
            </h1>
          </StaggerItem>

          {/* Subheadline */}
          <StaggerItem>
            <p className="text-base md:text-lg text-text-muted font-normal mb-10 max-w-xl">
              Живым, а не в учебнике.
            </p>
          </StaggerItem>

          {/* CTA row */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto bg-blue-primary text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-blue-dark transition-colors shadow-lg shadow-blue-primary/25"
              >
                Занять место
              </a>
              <a
                href="#contact"
                className="text-text-muted text-base hover:text-text-primary transition-colors"
              >
                Написать нам →
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
