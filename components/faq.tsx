"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
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
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-base font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronIcon className="w-5 h-5 text-text-muted shrink-0" isOpen={openIndex === i} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-text-muted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
