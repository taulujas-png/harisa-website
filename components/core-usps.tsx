"use client"

import { Reveal, StaggerContainer, StaggerItem } from './reveal'

function SpeechBubbleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function GameIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}

function GroupIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function CoreUSPs() {
  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <StaggerContainer>
          <StaggerItem>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
              Почему harisa
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-text-muted text-base md:text-lg mb-10">
              Три вещи, которых нет больше нигде
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Row 1: Large blue card + small white card */}
        <div className="grid md:grid-cols-5 gap-4 md:gap-6 mb-4 md:mb-6">
          <Reveal className="md:col-span-3">
            <div className="blue-accent-card rounded-2xl p-6 md:p-8 h-full min-h-[240px] md:min-h-[280px] flex flex-col">
              <SpeechBubbleIcon className="w-7 h-7 text-white/90 mb-5" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Говоришь с первого урока
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-auto">
                Никаких лекций. 80% занятия — ты говоришь, слышишь, отвечаешь на арабском.
              </p>
              <span className="inline-block bg-white/20 text-white text-[13px] font-medium px-4 py-1.5 rounded-full w-fit mt-5">
                Живая практика
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="standard-card rounded-2xl p-6 md:p-8 h-full min-h-[240px] md:min-h-[280px] flex flex-col">
              <GameIcon className="w-7 h-7 text-blue-primary mb-5" />
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
                Групповые тренажёры
              </h3>
              <p className="text-text-muted text-base leading-relaxed mb-auto">
                Три авторских игры — каждая заточена под одно: чтобы ты думал, реагировал и говорил на арабском, а не вспоминал правила.
              </p>
              <span className="inline-block bg-blue-light text-blue-primary text-[13px] font-medium px-4 py-1.5 rounded-full w-fit mt-5">
                3 авторские игры
              </span>
            </div>
          </Reveal>
        </div>

        {/* Row 2: Full-width glass card */}
        <Reveal delay={0.2}>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-3">
                  <GroupIcon className="w-7 h-7 text-blue-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
                      Не курс. Среда.
                    </h3>
                    <p className="text-text-muted text-base leading-relaxed">
                      Весь формат заточен под живое взаимодействие. Единомышленники находят друг друга, практикуются вместе — и растут быстрее, чем в одиночку. Учитель направляет, группа тянет вперёд.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-block bg-blue-light text-blue-primary text-[13px] font-medium px-4 py-1.5 rounded-full w-fit">
                  Сообщество
                </span>
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-blue-light border-2 border-white flex items-center justify-center text-blue-primary text-sm font-medium">А</div>
                  <div className="w-9 h-9 rounded-full bg-surface border-2 border-white flex items-center justify-center text-text-muted text-sm font-medium">М</div>
                  <div className="w-9 h-9 rounded-full bg-blue-primary border-2 border-white flex items-center justify-center text-white text-sm font-medium">И</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
