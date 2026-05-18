"use client"

import { Reveal } from './reveal'

const stats = [
  { number: "80%", label: "урока — практика" },
  { number: "60", label: "слов в месяц" },
  { number: "3", label: "месяца" },
  { number: "3 000", label: "сом/мес" },
]

export function StatsBar() {
  return (
    <section className="py-8 px-4 md:px-6">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg shadow-black/[0.04] px-6 py-8 md:px-10 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center relative">
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-black/[0.06]" />
                  )}
                  <p className="text-3xl md:text-4xl font-semibold text-blue-primary leading-tight">
                    {stat.number}
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
