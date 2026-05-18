"use client"

import { Reveal } from './reveal'

const steps = [
  {
    title: "Warm-up",
    duration: "7 МИН",
    description: "Блиц по прошлому занятию"
  },
  {
    title: "Theory Drop",
    duration: "13 МИН",
    description: "4–5 слов через образы на доске"
  },
  {
    title: "Grand Game",
    duration: "20 МИН",
    description: "Живая игра со всей группой"
  },
  {
    title: "Wrap-up",
    duration: "5 МИН",
    description: "Динары + домашнее задание"
  }
]

export function HowLessonWorks() {
  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-16">
            Как устроен урок
          </h2>
        </Reveal>

        {/* Stepper */}
        <Reveal delay={0.1}>
          <div className="relative">
            {/* Numbered circles row with connecting lines */}
            <div className="flex items-center justify-between mb-6 px-4 md:px-8">
              {steps.map((_, i) => (
                <div key={i} className="flex items-center flex-1 last:flex-none">
                  {/* Circle with number */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-primary text-blue-primary flex items-center justify-center text-lg md:text-xl font-semibold bg-white shrink-0">
                    {i + 1}
                  </div>
                  {/* Connecting dashed line */}
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-0 border-t-2 border-dashed border-blue-primary/40 mx-2 md:mx-4" />
                  )}
                </div>
              ))}
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-black/[0.04]"
                >
                  <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-blue-primary font-medium text-sm mb-2">
                    {step.duration}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
