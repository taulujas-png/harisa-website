"use client"

import { Reveal, StaggerContainer, StaggerItem } from './reveal'
import { OrnamentCorner } from './harisa-ornament'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-light/40 via-off-white to-off-white py-20 md:py-32 px-4 md:px-6 overflow-hidden min-h-[90vh] md:min-h-[85vh] flex items-center">
      {/* Corner ornaments */}
      <OrnamentCorner position="top-left" delay={0.2} />
      <OrnamentCorner position="top-right" delay={0.4} />
      <OrnamentCorner position="bottom-left" delay={0.6} />
      <OrnamentCorner position="bottom-right" delay={0.8} />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <StaggerContainer className="flex flex-col items-center">
          {/* Pill tag */}
          <StaggerItem>
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-primary text-[13px] font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-primary/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-primary" />
              Живой арабский · Бишкек
            </span>
          </StaggerItem>

          {/* Main headline */}
          <StaggerItem>
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold text-text-primary leading-[1.15] tracking-[-0.02em] text-balance mb-5">
              Арабский как его передавали веками — живым, а не в учебнике
            </h1>
          </StaggerItem>

          {/* Subheadline */}
          <StaggerItem>
            <p className="text-base md:text-lg text-text-muted font-normal mb-8 max-w-xl">
              Игры вместо правил. Практика вместо зубрёжки.<br />
              С первого урока.
            </p>
          </StaggerItem>

          {/* CTA row */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
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

          {/* Small text */}
          <StaggerItem>
            <p className="text-sm text-text-muted mb-10">
              Новый поток — в начале каждого месяца · Запись открыта
            </p>
          </StaggerItem>

          {/* Glass card - App mockup */}
          <StaggerItem>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 max-w-xs w-full text-left border border-white/50 shadow-xl shadow-black/[0.03]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-text-muted flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-blue-primary/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-primary" />
                  </span>
                  Performance Score
                </span>
                <span className="text-sm font-medium text-blue-primary">5/100</span>
              </div>
              <div className="h-px bg-black/[0.06] mb-3" />
              <p className="text-text-primary font-medium text-sm mb-1">Ассаляму алейкум, Алишер</p>
              <p className="text-text-muted text-sm mb-4">У вас сегодня 1 урок.</p>
              <button className="w-full bg-blue-primary text-white text-sm font-medium py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-dark transition-colors">
                Начать урок →
              </button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
