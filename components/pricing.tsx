"use client"

import { Reveal } from './reveal'

export function Pricing() {
  return (
    <section id="pricing" className="bg-off-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-md mx-auto">
        <Reveal>
          <div className="blue-accent-card rounded-2xl p-8 md:p-10 text-center">
            <span className="text-white/70 text-sm font-medium mb-5 block">
              Первый модуль — 3 месяца
            </span>

            <div className="mb-4">
              <span className="text-5xl md:text-6xl font-semibold text-white leading-none">
                3 000
              </span>
              <span className="text-white text-xl ml-1.5">сом</span>
            </div>
            <p className="text-white/75 text-sm mb-6">в месяц</p>

            <div className="h-px bg-white/20 mb-6" />

            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-start gap-2.5 text-white text-sm">
                <span className="text-white/90 mt-0.5">✓</span>
                <span>Живые уроки 3 раза в неделю</span>
              </li>
              <li className="flex items-start gap-2.5 text-white text-sm">
                <span className="text-white/90 mt-0.5">✓</span>
                <span>Все игры и домашние задания включены</span>
              </li>
              <li className="flex items-start gap-2.5 text-white text-sm">
                <span className="text-white/90 mt-0.5">✓</span>
                <span>До 1 000 сом скидка за Динары каждый месяц</span>
              </li>
            </ul>

            <div className="space-y-2.5">
              <a
                href="#contact"
                className="block w-full bg-white text-blue-primary font-medium py-3.5 rounded-full hover:bg-blue-light transition-colors text-sm"
              >
                Занять место
              </a>
              <a
                href="#contact"
                className="block w-full border border-white/50 text-white font-medium py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                Написать нам
              </a>
            </div>

            <p className="text-white/60 text-xs mt-5">
              Новый поток стартует в начале каждого месяца
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
