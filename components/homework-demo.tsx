"use client"

import { useState } from 'react'
import { ArrowRight, Check, Lightbulb, RotateCcw } from 'lucide-react'
import { Reveal } from './reveal'

const words = [
  { id: 'book', ar: 'كِتَاب', ru: 'Книга', sound: 'кита́б' },
  { id: 'house', ar: 'بَيْت', ru: 'Дом', sound: 'байт' },
  { id: 'pen', ar: 'قَلَم', ru: 'Ручка', sound: 'ка́лям' },
]
const translations = [words[1], words[2], words[0]]
const letters = ['ا', 'ب', 'ك', 'ت']
type Mode = 'match' | 'build'

export function HomeworkDemo() {
  const [mode, setMode] = useState<Mode>('match')
  const [selected, setSelected] = useState<string | null>(null)
  const [matched, setMatched] = useState<string[]>([])
  const [answer, setAnswer] = useState<number[]>([])
  const [feedback, setFeedback] = useState('')
  const [hint, setHint] = useState(true)
  const [built, setBuilt] = useState(false)
  const complete = mode === 'match' ? matched.length === words.length : built

  function reset(next: Mode = mode) {
    setMode(next)
    setSelected(null)
    setMatched([])
    setAnswer([])
    setFeedback('')
    setHint(true)
    setBuilt(false)
  }

  function match(id: string) {
    if (!selected) {
      setFeedback('Сначала выберите арабское слово слева.')
      return
    }
    if (id !== selected) {
      setFeedback('Пока не совпало. Посмотрите подсказку и попробуйте другой перевод.')
      return
    }
    const next = [...matched, id]
    setMatched(next)
    setSelected(null)
    setFeedback(next.length === words.length ? 'Три из трёх! Вы нашли все пары.' : 'Верно! Найдите следующую пару.')
  }

  function checkWord() {
    if (answer.map(i => letters[i]).join('') === 'كتاب') {
      setBuilt(true)
      setFeedback('Верно! كِتَاب — книга. Вы собрали своё первое слово.')
    } else {
      setFeedback('Пока не получилось. Нажмите на букву в ответе, чтобы вернуть её, или очистите слово.')
    }
  }

  const tile = 'w-full min-h-20 sm:min-h-24 rounded-2xl border-2 p-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary'
  const tab = 'flex-1 sm:flex-none rounded-full px-4 sm:px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary'

  return (
    <section id="demo" className="bg-off-white py-16 md:py-24 px-4 md:px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-8 md:mb-10">
            <p className="text-blue-primary text-sm font-medium mb-3">ПОСЛЕ УРОКА — МИНИ-ПРАКТИКА ДОМА</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-3">Попробуйте домашние игры</h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">Два коротких примера прямо здесь. Арабский знать не нужно — начните с подсказок.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl border border-black/[0.06] shadow-lg shadow-black/[0.04] overflow-hidden">
            <div className="p-5 sm:p-8 border-b border-black/[0.06]">
              <div role="group" aria-label="Выберите домашнюю игру" className="flex flex-wrap gap-2 bg-surface rounded-3xl sm:rounded-full p-1.5 w-fit max-w-full">
                <button type="button" aria-pressed={mode === 'match'} onClick={() => { if (mode !== 'match') reset('match') }} className={`${tab} ${mode === 'match' ? 'bg-blue-primary text-white shadow-sm' : 'text-text-muted hover:bg-white'}`}>Найдите пары</button>
                <button type="button" aria-pressed={mode === 'build'} onClick={() => { if (mode !== 'build') reset('build') }} className={`${tab} ${mode === 'build' ? 'bg-blue-primary text-white shadow-sm' : 'text-text-muted hover:bg-white'}`}>Соберите слово</button>
              </div>
              <p className="text-text-muted text-sm mt-4 flex gap-2 items-start"><Lightbulb className="w-4 h-4 text-blue-primary shrink-0 mt-0.5" />На уроке разбираете слова с преподавателем, дома закрепляете их в игре.</p>
            </div>

            <div className="p-5 sm:p-8" aria-label={mode === 'match' ? 'Демо: найдите пары' : 'Демо: соберите слово'}>
              <div className="flex items-center justify-between gap-3 mb-6 text-sm">
                <span className="text-blue-primary font-medium">{mode === 'match' ? `${matched.length} из 3 пар` : '1 слово · 4 буквы'}</span>
                <button type="button" onClick={() => reset()} aria-label="Начать демо заново" className="inline-flex gap-2 items-center text-text-muted hover:text-blue-primary py-2"><RotateCcw className="w-4 h-4" />Заново</button>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2">{mode === 'match' ? 'Что значит это слово?' : 'Соберите слово «книга»'}</h3>
              <p className="text-sm sm:text-base text-text-muted mb-5">{mode === 'match' ? 'Нажмите на арабское слово, затем на его перевод.' : 'Нажимайте на буквы по порядку. Арабский пишется справа налево.'}</p>

              {mode === 'match' ? (
                <>
                  <button type="button" aria-pressed={hint} onClick={() => setHint(!hint)} className="text-blue-primary text-sm underline underline-offset-4 mb-5 py-1">{hint ? 'Скрыть подсказки' : 'Показать подсказки'}</button>
                  <div className="grid grid-cols-2 gap-3 sm:gap-5">
                    <div className="grid grid-rows-3 gap-3">
                      {words.map(w => (
                        <button type="button" key={w.id} disabled={matched.includes(w.id)} aria-pressed={selected === w.id} aria-label={`Арабское слово: ${w.ar}`} onClick={() => { setSelected(w.id); setFeedback('Теперь выберите перевод справа.') }} className={`${tile} ${matched.includes(w.id) ? 'border-blue-primary/20 bg-blue-light text-blue-primary opacity-60' : selected === w.id ? 'border-blue-primary bg-blue-light' : 'border-black/[0.06] hover:border-blue-primary/40 bg-white'}`}>
                          <span className="block text-3xl sm:text-4xl leading-relaxed" lang="ar" dir="rtl">{w.ar}</span>
                          {hint && <span className="block text-xs sm:text-sm text-text-muted mt-1">{w.sound} · {w.ru}</span>}
                          {matched.includes(w.id) && <Check className="w-4 h-4 mx-auto mt-1" aria-label="Пара найдена" />}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-rows-3 gap-3">
                      {translations.map(w => (
                        <button type="button" key={w.id} disabled={matched.includes(w.id)} onClick={() => match(w.id)} className={`${tile} flex items-center justify-center text-base sm:text-lg ${matched.includes(w.id) ? 'border-blue-primary/20 bg-blue-light text-blue-primary opacity-60' : 'border-black/[0.06] hover:border-blue-primary/40 bg-white'}`}>
                          {w.ru}{matched.includes(w.id) && <Check className="w-4 h-4 ml-2" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-text-muted mb-5">Подсказка: <span lang="ar" dir="rtl" className="text-2xl text-blue-primary inline-block mx-1">كِتَاب</span> — кита́б, книга.</p>
                  <div dir="rtl" className="flex gap-2 sm:gap-3 justify-center rounded-2xl bg-blue-light p-4 sm:p-6 mb-5" aria-label="Ваше слово">
                    {Array.from({ length: 4 }, (_, pos) => (
                      <button type="button" key={pos} disabled={answer[pos] === undefined || built} aria-label={answer[pos] === undefined ? `Место для буквы ${pos + 1}` : `Убрать букву ${letters[answer[pos]]}`} onClick={() => { setAnswer(answer.filter((_, i) => i !== pos)); setFeedback('') }} className="w-12 h-16 sm:w-16 sm:h-20 rounded-xl border-2 border-blue-primary/20 bg-white text-3xl sm:text-4xl text-blue-primary disabled:cursor-default">
                        {answer[pos] === undefined ? <span aria-hidden className="text-blue-primary/20">ـ</span> : letters[answer[pos]]}
                      </button>
                    ))}
                  </div>
                  <div dir="rtl" className="flex gap-3 justify-center mb-6" aria-label="Доступные буквы">
                    {letters.map((letter, i) => (
                      <button type="button" key={i} disabled={answer.includes(i) || built} aria-label={`Добавить букву ${letter}`} onClick={() => { setAnswer([...answer, i]); setFeedback('') }} className="w-12 h-14 sm:w-16 sm:h-16 rounded-xl border border-black/10 text-3xl bg-white hover:bg-blue-light hover:border-blue-primary/40 disabled:opacity-25 transition-colors">{letter}</button>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button type="button" onClick={checkWord} disabled={answer.length !== 4 || built} className="rounded-full bg-blue-primary text-white px-6 py-3 font-medium disabled:opacity-40 hover:bg-blue-dark transition-colors">Проверить слово</button>
                    <button type="button" onClick={() => { setAnswer([]); setFeedback(''); setBuilt(false) }} className="text-sm text-text-muted hover:text-blue-primary py-3">Очистить</button>
                  </div>
                </>
              )}

              <p role="status" aria-live="polite" aria-atomic="true" className={`min-h-12 mt-5 text-sm leading-relaxed ${complete ? 'text-blue-primary font-medium' : 'text-text-muted'}`}>{feedback || 'Здесь можно ошибаться. Попробуйте — игра подскажет.'}</p>
              {complete && (
                <div className="bg-blue-light rounded-2xl p-5 mt-2">
                  <p className="text-text-primary font-medium mb-3">На занятиях — новые слова и живая практика с группой.</p>
                  <a href="#schedule" className="inline-flex items-center gap-2 bg-blue-primary text-white rounded-full px-5 py-3 text-sm font-medium hover:bg-blue-dark">Посмотреть группы<ArrowRight className="w-4 h-4" /></a>
                </div>
              )}
            </div>
            <p className="px-5 sm:px-8 py-4 bg-surface text-xs text-text-muted leading-relaxed">Это короткое демо домашних заданий. В учебном кабинете задания связаны с темой урока. Результаты этого примера не сохраняются.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
