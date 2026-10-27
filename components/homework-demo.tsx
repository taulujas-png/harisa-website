"use client"

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowRight, Check, Mic, RotateCcw, Square, Volume2 } from 'lucide-react'
import { Reveal } from './reveal'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const words = [
  { id: 'book', ar: 'كِتَاب', ru: 'Книга', sound: 'кита́б' },
  { id: 'house', ar: 'بَيْت', ru: 'Дом', sound: 'байт' },
  { id: 'pen', ar: 'قَلَم', ru: 'Ручка', sound: 'ка́лям' },
]
const translations = [words[1], words[2], words[0]]
const letters = ['ا', 'ب', 'ك', 'ت']
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-primary'

function Phone({ number, title, subtitle, children }: { number: string; title: string; subtitle: string; children: ReactNode }) {
  const { ref, isVisible } = useScrollReveal(.18)
  return (
    <article ref={ref} data-visible={isVisible} style={{ transitionDelay: `${(Number(number) - 1) * 90}ms` }} className="homework-phone snap-center shrink-0 w-[min(84vw,320px)] lg:w-full lg:max-w-[320px] lg:justify-self-center">
      <div className="relative flex h-[550px] flex-col overflow-hidden rounded-[2.5rem] border-[5px] border-white bg-white shadow-xl shadow-slate-900/[0.07] ring-1 ring-slate-200">
        <div aria-hidden="true" className="mx-auto mt-3 mb-4 h-1.5 w-14 shrink-0 rounded-full bg-slate-200" />
        <div className="flex items-center justify-between border-b border-slate-100 px-5 pb-3 text-xs">
          <span className="font-semibold tracking-tight text-blue-primary">harisa</span>
          <span className="rounded-full bg-blue-light px-2 py-1 text-[10px] font-medium text-blue-primary">{number}/3</span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col px-4 pt-5 pb-4">
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          <p className="mt-1 mb-4 min-h-10 text-xs leading-relaxed text-text-muted">{subtitle}</p>
          {children}
        </div>
        <div aria-hidden="true" className="mx-auto mb-2 h-1 w-20 shrink-0 rounded-full bg-slate-200" />
      </div>
    </article>
  )
}

function MatchGame() {
  const [selected, setSelected] = useState<{ id: string; side: 'arabic' | 'russian' } | null>(null)
  const [matched, setMatched] = useState<string[]>([])
  const [feedback, setFeedback] = useState('Начните с любой карточки.')
  const [mistake, setMistake] = useState(false)
  const reset = () => { setSelected(null); setMatched([]); setFeedback('Начните с любой карточки.') }
  const selectCard = (id: string, side: 'arabic' | 'russian') => {
    if (!selected || selected.side === side) {
      if (selected?.id === id) { setSelected(null); setFeedback('Начните с любой карточки.'); return }
      setSelected({ id, side })
      setFeedback(side === 'arabic' ? 'Теперь найдите перевод.' : 'Теперь найдите арабское слово.')
      return
    }
    if (selected.id !== id) { setMistake(true); setFeedback('Попробуйте другую карточку — подсказка под арабским словом.'); return }
    const next = [...matched, id]
    setMatched(next); setSelected(null)
    setFeedback(next.length === words.length ? 'Все три пары найдены! Отличное начало.' : 'Верно! Найдите следующую пару.')
  }

  return (
    <Phone number="1" title="Найдите пары" subtitle="Соедините арабское слово с переводом. Подсказки помогут.">
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="font-medium text-blue-primary">{matched.length} из 3 пар</span>
        <button type="button" onClick={reset} aria-label="Начать поиск пар заново" className={`p-2 text-slate-400 hover:text-blue-primary ${focus}`}><RotateCcw size={14} /></button>
      </div>
      <div onAnimationEnd={() => setMistake(false)} className={`homework-pairs grid grid-cols-2 gap-2 ${mistake ? 'homework-shake' : ''}`}>
        <div className="grid gap-2">{words.map(w => <button type="button" key={w.id} disabled={matched.includes(w.id)} aria-pressed={selected?.side === 'arabic' && selected.id === w.id} aria-label={`Арабское слово: ${w.ar}`} onClick={() => selectCard(w.id, 'arabic')} data-matched={matched.includes(w.id)} className={`homework-tile h-[67px] rounded-xl border px-1 transition-colors ${focus} ${matched.includes(w.id) ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : selected?.side === 'arabic' && selected.id === w.id ? 'border-blue-primary bg-blue-light' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
          <span lang="ar" dir="rtl" className="block text-2xl leading-8">{w.ar}</span><span className="block text-[9px] text-text-muted">{w.sound} · {w.ru}</span>
        </button>)}</div>
        <div className="grid gap-2">{translations.map(w => <button type="button" key={w.id} disabled={matched.includes(w.id)} aria-pressed={selected?.side === 'russian' && selected.id === w.id} onClick={() => selectCard(w.id, 'russian')} data-matched={matched.includes(w.id)} className={`homework-tile flex h-[67px] items-center justify-center gap-1 rounded-xl border text-sm transition-colors ${focus} ${matched.includes(w.id) ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : selected?.side === 'russian' && selected.id === w.id ? 'border-blue-primary bg-blue-light' : 'border-slate-200 bg-white hover:border-blue-300'}`}>{w.ru}{matched.includes(w.id) && <Check size={13} />}</button>)}</div>
      </div>
      <div className="homework-progress" aria-hidden="true"><span style={{ width: `${matched.length / 3 * 100}%` }} /></div>
      <p role="status" className={`mt-auto pt-4 text-xs leading-relaxed ${matched.length === 3 ? 'text-emerald-700' : 'text-text-muted'}`}>{feedback}</p>
    </Phone>
  )
}

function BuilderGame() {
  const [answer, setAnswer] = useState<number[]>([])
  const [built, setBuilt] = useState(false)
  const [mistake, setMistake] = useState(false)
  const [feedback, setFeedback] = useState('Арабский пишется справа налево.')
  const reset = () => { setAnswer([]); setBuilt(false); setFeedback('Арабский пишется справа налево.') }
  const checkWord = () => {
    if (answer.map(i => letters[i]).join('') === 'كتاب') { setBuilt(true); setFeedback('Верно! كِتَاب — книга. Слово собрано.') }
    else { setMistake(true); setFeedback('Пока не получилось. Уберите букву нажатием и попробуйте ещё.') }
  }
  return (
    <Phone number="2" title="Соберите слово" subtitle="Нажимайте на буквы по порядку, чтобы получилось «книга».">
      <div className="mb-3 rounded-2xl bg-blue-light px-3 py-2 text-center"><span className="text-[10px] text-text-muted">Вот ваше слово</span><span lang="ar" dir="rtl" className="mt-1 block text-3xl leading-normal text-blue-primary">كِتَاب</span><span className="text-xs text-text-muted">кита́б · книга</span></div>
      <div dir="rtl" onAnimationEnd={() => setMistake(false)} className={`homework-slots mb-3 flex justify-center gap-2 ${mistake ? 'homework-shake' : ''}`} data-built={built} aria-label="Ваше слово">{Array.from({ length: 4 }, (_, pos) => <button type="button" key={pos} disabled={answer[pos] === undefined || built} aria-label={answer[pos] === undefined ? `Место для буквы ${pos + 1}` : `Убрать букву ${letters[answer[pos]]}`} onClick={() => setAnswer(answer.filter((_, i) => i !== pos))} className={`h-12 w-11 rounded-xl border-2 border-blue-primary/20 text-2xl text-blue-primary ${focus}`}>{answer[pos] === undefined ? <span aria-hidden="true" className="text-blue-primary/20">ـ</span> : <span key={answer[pos]} className="homework-letter">{letters[answer[pos]]}</span>}</button>)}</div>
      <div dir="rtl" className="mb-3 flex justify-center gap-2" aria-label="Доступные буквы">{letters.map((letter, i) => <button type="button" key={i} disabled={answer.includes(i) || built} aria-label={`Добавить букву ${letter}`} onClick={() => setAnswer([...answer, i])} className={`h-11 w-11 rounded-xl border border-slate-200 text-2xl hover:bg-blue-light disabled:opacity-25 ${focus}`}>{letter}</button>)}</div>
      <div className="flex items-center justify-center gap-2"><button type="button" onClick={checkWord} disabled={answer.length !== 4 || built} className={`rounded-full bg-blue-primary px-5 py-2.5 text-xs font-medium text-white disabled:opacity-40 ${focus}`}>Проверить</button><button type="button" onClick={reset} aria-label="Начать сборку слова заново" className={`p-3 text-slate-400 hover:text-blue-primary ${focus}`}><RotateCcw size={15} /></button></div>
      <p role="status" className={`mt-auto min-h-[60px] pt-3 text-xs leading-relaxed ${built ? 'text-emerald-700' : 'text-text-muted'}`}>{feedback}</p>
    </Phone>
  )
}

function SpeakingGame() {
  const [recording, setRecording] = useState(false)
  const [busy, setBusy] = useState(false)
  const [audioUrl, setAudioUrl] = useState('')
  const [feedback, setFeedback] = useState('Запишите слово и послушайте себя. Демо без оценки произношения.')
  const recorder = useRef<MediaRecorder | null>(null)
  const stream = useRef<MediaStream | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const audio = useRef<HTMLAudioElement | null>(null)
  const mounted = useRef(true)
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; if (timer.current) clearTimeout(timer.current); if (recorder.current) { recorder.current.onstop = null; if (recorder.current.state === 'recording') recorder.current.stop() } stream.current?.getTracks().forEach(t => t.stop()) } }, [])
  useEffect(() => () => { if (audioUrl) URL.revokeObjectURL(audioUrl) }, [audioUrl])
  const stop = () => { if (timer.current) clearTimeout(timer.current); if (recorder.current?.state === 'recording') recorder.current.stop(); stream.current?.getTracks().forEach(t => t.stop()); setRecording(false) }
  const start = async () => {
    if (recording) { stop(); return }
    if (busy) return
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') { setFeedback('Запись недоступна в этом браузере. Попробуйте произнести слово вслух: кита́б.'); return }
    setBusy(true)
    try {
      const media = await navigator.mediaDevices.getUserMedia({ audio: true })
      if (!mounted.current) { media.getTracks().forEach(t => t.stop()); return }
      stream.current = media
      const chunks: Blob[] = []
      const current = new MediaRecorder(media)
      recorder.current = current
      current.ondataavailable = e => { if (e.data.size) chunks.push(e.data) }
      current.onstop = () => { media.getTracks().forEach(t => t.stop()); if (mounted.current) { setAudioUrl(URL.createObjectURL(new Blob(chunks, { type: current.mimeType }))); setRecording(false); setFeedback('Готово. Послушайте, как у вас получилось. Запись остаётся в этом браузере.') } }
      current.onerror = () => { media.getTracks().forEach(t => t.stop()); if (mounted.current) { setRecording(false); setFeedback('Не удалось записать. Попробуйте ещё раз.') } }
      audio.current?.pause(); setAudioUrl(''); current.start(); setRecording(true); setFeedback('Говорите: «кита́б». Нажмите ещё раз, чтобы закончить.')
      timer.current = setTimeout(stop, 8000)
    } catch { stream.current?.getTracks().forEach(t => t.stop()); if (mounted.current) setFeedback('Для записи нужен доступ к микрофону. Можно просто произнести слово вслух: кита́б.') }
    finally { if (mounted.current) setBusy(false) }
  }
  return (
    <Phone number="3" title="Произнесите слово" subtitle="Закрепляйте слова голосом — как в домашнем задании.">
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-2xl bg-violet-50/70 py-3">
        <span className="text-sm text-text-muted">Книга</span><span lang="ar" dir="rtl" className="my-2 text-4xl leading-normal text-slate-800">كِتَاب</span><span className="mb-3 text-xs text-text-muted">кита́б</span>
        <button type="button" onClick={start} disabled={busy} aria-label={recording ? 'Закончить запись' : 'Записать слово'} data-recording={recording} className={`homework-mic relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-colors disabled:opacity-50 ${recording ? 'bg-rose-500 shadow-rose-200' : 'bg-blue-primary shadow-blue-200'} ${focus}`}>{recording && <span className="homework-recording-ring" aria-hidden="true" />}{recording ? <Square size={23} fill="currentColor" /> : <Mic size={26} />}</button>
        {!audioUrl && <span className="mt-2 text-[10px] font-medium text-text-muted">{busy ? 'Разрешите доступ к микрофону' : recording ? 'Идёт запись…' : 'Нажмите и произнесите'}</span>}
        {audioUrl && <><audio ref={audio} src={audioUrl} /><button type="button" onClick={() => { if (audio.current) { audio.current.currentTime = 0; void audio.current.play().catch(() => setFeedback('Не удалось воспроизвести запись. Попробуйте записать ещё раз.')) } }} className={`homework-play mt-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs text-blue-primary ${focus}`}><Volume2 size={14} />Послушать себя</button></>}
      </div>
      <p role="status" className="mt-3 min-h-[66px] text-[11px] leading-relaxed text-text-muted">{feedback}</p>
    </Phone>
  )
}

export function HomeworkDemo() {
  const rail = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  return (
    <section id="demo" className="overflow-hidden bg-off-white px-4 py-16 md:px-6 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal><div className="mb-9 text-center"><p className="mb-3 text-xs font-medium tracking-wider text-blue-primary">ПОСЛЕ УРОКА — ПРАКТИКА ДОМА</p><h2 className="mb-3 text-2xl font-semibold text-text-primary md:text-3xl">Попробуйте домашние игры</h2><p className="mx-auto max-w-xl text-base text-text-muted">Находите пары, собирайте слова и произносите их вслух. Начните с подсказок.</p></div></Reveal>
        <div>
          <div ref={rail} onScroll={() => { const el = rail.current; if (!el) return; const center = el.scrollLeft + el.clientWidth / 2; let nearest = 0; let distance = Infinity; Array.from(el.children).forEach((child, i) => { const card = child as HTMLElement; const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center); if (d < distance) { distance = d; nearest = i } }); setActive(nearest) }} className="no-scrollbar relative -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc((100%_-_min(84vw,320px))_/_2)] pt-2 pb-7 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-4">
            <MatchGame /><BuilderGame /><SpeakingGame />
          </div>
          <div className="mt-1 flex justify-center gap-2 lg:hidden">{['Найдите пары', 'Соберите слово', 'Произнесите слово'].map((title, i) => <button type="button" key={title} aria-label={`Показать домашнюю игру «${title}»`} aria-pressed={active === i} onClick={() => { const el = rail.current; const card = el?.children[i] as HTMLElement | undefined; if (el && card) el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }} className={`flex h-8 w-8 items-center justify-center rounded-full ${focus}`}><span className={`h-1.5 rounded-full transition-all ${active === i ? 'w-5 bg-blue-primary' : 'w-1.5 bg-slate-300'}`} /></button>)}</div>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-center text-xs leading-relaxed text-text-muted">Учебные примеры. В кабинете задания связаны с уроком; результаты этого демо не сохраняются в платформе.</p>
        <div className="mt-6 text-center"><a href="#schedule" className="inline-flex items-center gap-2 text-sm font-medium text-blue-primary hover:underline underline-offset-4">Посмотреть наборы<ArrowRight size={16} /></a></div>
      </div>
      <style jsx global>{`
        #demo .homework-phone { opacity:0; transform:translateY(32px) scale(.975); transition:opacity .75s ease,transform .85s cubic-bezier(.16,1,.3,1); }
        #demo .homework-phone[data-visible=true] { opacity:1; transform:none; }
        #demo .homework-tile { transition:background .25s,border-color .25s,color .25s,transform .2s,box-shadow .2s; }
        #demo .homework-tile:not(:disabled):hover { transform:translateY(-2px); box-shadow:0 4px 10px #2563eb0a; }
        #demo .homework-tile:not(:disabled):active { transform:scale(.95); }
        #demo .homework-tile[aria-pressed=true] { transform:translateY(-2px); box-shadow:0 4px 12px #2563eb15; }
        #demo .homework-tile[data-matched=true] { animation:homework-match .4s ease; }
        #demo .homework-progress { height:3px; margin-top:14px; background:#eff6ff; border-radius:9px; overflow:hidden; }
        #demo .homework-progress span { display:block; height:100%; background:#10b981; border-radius:inherit; transition:width .5s cubic-bezier(.2,.8,.2,1); }
        #demo .homework-letter { display:inline-block; animation:homework-letter-in .25s ease-out; }
        #demo .homework-slots button { transition:border-color .3s,background .3s,transform .2s; }
        #demo .homework-slots[data-built=true] button { border-color:#a7f3d0; background:#ecfdf5; color:#047857; animation:homework-match .4s ease; }
        #demo .homework-shake { animation:homework-shake .3s ease; }
        #demo .homework-mic { transition:transform .2s,background .25s,box-shadow .25s; }
        #demo .homework-mic:hover { transform:scale(1.05); }
        #demo .homework-mic:active { transform:scale(.94); }
        #demo .homework-recording-ring { position:absolute; inset:-6px; border:2px solid #fb7185; border-radius:50%; animation:homework-recording 1.3s ease-out infinite; pointer-events:none; }
        #demo .homework-play { animation:homework-letter-in .35s ease-out; }
        @keyframes homework-match { 0%,100% { transform:scale(1); } 45% { transform:scale(.95); } 75% { transform:scale(1.03); } }
        @keyframes homework-letter-in { from { opacity:0; transform:translateY(9px) scale(.8); } to { opacity:1; transform:none; } }
        @keyframes homework-shake { 0%,100% { transform:translateX(0); } 25%,75% { transform:translateX(-3px); } 50% { transform:translateX(3px); } }
        @keyframes homework-recording { from { opacity:.7; transform:scale(1); } to { opacity:0; transform:scale(1.35); } }
        @media(prefers-reduced-motion:reduce) { #demo .homework-phone { opacity:1; transform:none; } #demo .homework-phone, #demo .homework-phone * { animation:none!important; transition:none!important; } }
      `}</style>
    </section>
  )
}
