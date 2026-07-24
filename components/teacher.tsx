"use client"

import { Reveal } from './reveal'

export function Teacher() {
  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-12">
            Ваш учитель
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/[0.04]
                          flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            
            {/* Фото-заглушка */}
            <div className="shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden 
                              bg-surface border-2 border-blue-light flex items-center justify-center">
                <span className="text-text-muted text-sm text-center px-4">Здесь будет<br/>твоё фото</span>
              </div>
            </div>

            {/* Текст */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
                Имя Фамилия
              </h3>
              
              <blockquote className="text-base md:text-lg italic text-text-muted 
                                     leading-relaxed mb-6">
                «Я создал Harisa, потому что сам прошёл через боль скучных 
                учебников. Арабский — живой язык, и учить его нужно живым. 
                Наша методика — это то, чего мне не хватало, когда я начинал.»
              </blockquote>

              <ul className="space-y-3 text-sm md:text-base text-text-muted">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-primary shrink-0" />
                  Основатель Harisa и автор методики
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-primary shrink-0" />
                  X лет изучения и преподавания арабского
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-primary shrink-0" />
                  Создатель игровой системы обучения
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
