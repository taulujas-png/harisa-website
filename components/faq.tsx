"use client"

import { useState } from 'react'
import { Reveal, StaggerContainer, StaggerItem } from './reveal'

const faqs = [
  {
    question: "Подойдёт ли мне, если я с нуля?",
    answer: "Да! Курс создан специально для начинающих. Мы начинаем с алфавита и базовых звуков, постепенно переходя к словам и фразам через игры и практику."
  },
  {
    question: "Сколько времени нужно в день?",
    answer: "45 минут на урок (3 раза в неделю) + около 15-20 минут на домашние мини-игры. Итого: около 3 часов в неделю для стабильного прогресса."
  },
  {
    question: "Что если я пропущу урок?",
    answer: "Записи всех уроков доступны в личном кабинете. Но живое участие — основа метода, поэтому мы рекомендуем выбирать группу под ваше расписание."
  },
  {
    question: "Когда стартует следующий поток?",
    answer: "Потоки стартуют в начале каждого месяца. Запишись сейчас — и мы добавим тебя в ближайшую группу."
  },
  {
    question: "Кто преподаёт?",
    answer: "Носители языка и опытные преподаватели с педагогическим образованием, прошедшие обучение методике harisa."
  },
  {
    question: "Есть ли группы для детей?",
    answer: "Пока нет, но мы работаем над адаптацией программы для детей 10-14 лет. Оставьте заявку, и мы сообщим о запуске."
  }
]

function ChevronIcon({ className = "", isOpen = false }: { className?: string; isOpen?: boolean }) {
  return (
    <svg 
      className={`${className} transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <StaggerContainer>
          <StaggerItem>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-10 text-center">
              Вопросы
            </h2>
          </StaggerItem>
        </StaggerContainer>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-b border-black/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full py-4 flex items-center justify-between text-left group active:scale-[0.99] transition-transform duration-150 touch-manipulation select-none"
                >
                  <span className="text-base font-medium text-text-primary pr-4 group-hover:text-blue-primary transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 group-hover:border-blue-primary/40 ${openIndex === i ? 'bg-blue-primary border-blue-primary text-white' : 'bg-white border-black/10 text-text-muted'}`}>
                    <ChevronIcon className="w-4 h-4" isOpen={openIndex === i} />
                  </span>
                </button>
                {/* GPU-only accordion: grid-rows 0fr->1fr instead of height:auto (theo #6) */}
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
