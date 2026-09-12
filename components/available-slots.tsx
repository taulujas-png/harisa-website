'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Reveal } from './reveal';

interface CourseInfo { title: string; price_per_month?: number }

interface Slot {
  id: string;
  schedule_type: string;
  description?: string;
  time_start?: string;
  price?: number;
  gender: 'male' | 'female' | 'mixed';
  max_students: number;
  current_students: number;
  is_open: boolean;
  name: string; // Used as course name fallback
  courses?: CourseInfo | CourseInfo[] | null;
}

function getCourse(s: Slot): CourseInfo | null {
  if (!s.courses) return null;
  return Array.isArray(s.courses) ? (s.courses[0] ?? null) : s.courses;
}

export function AvailableSlots() {
  const [slots, setSlots] = useState<Slot[]>(() => {
    // Stale-first: instant cached render, no blank screen (theo-performance #2)
    if (typeof window === 'undefined') return [];
    try {
      const cached = localStorage.getItem('harisa_slots_cache');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [];
  });
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const cached = localStorage.getItem('harisa_slots_cache');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return false;
      }
    } catch {}
    return true;
  });
  const [activeGender, setActiveGender] = useState<'male' | 'female' | 'all'>(() => {
    if (typeof window === 'undefined') return 'all';
    try {
      const cached = localStorage.getItem('harisa_slots_cache');
      if (cached) {
        const parsed: Slot[] = JSON.parse(cached);
        const hasMale = parsed.some(s => s.gender === 'male');
        const hasFemale = parsed.some(s => s.gender === 'female');
        if (hasMale && !hasFemale) return 'male';
        if (!hasMale && hasFemale) return 'female';
        if (hasMale && hasFemale) return 'male';
      }
    } catch {}
    return 'all';
  });

  useEffect(() => {
    let cancelled = false;
    async function fetchSlots() {
      try {
        const { data, error } = await supabase
          .from('slots')
          .select('id, name, schedule_type, description, time_start, price, gender, max_students, current_students, is_open, courses(title, price_per_month)')
          .order('schedule_type', { ascending: true })
          .limit(24);

        if (cancelled) return;
        if (error) {
          console.error('Error fetching slots:', error);
          if (slots.length === 0) {
            setSlots([
              { id: '1', name: 'Арабский язык с нуля', schedule_type: 'Пн / Ср / Пт', time_start: '18:00', price: 3000, gender: 'male', max_students: 12, current_students: 5, is_open: true },
              { id: '2', name: 'Арабский язык с нуля', schedule_type: 'Вт / Чт / Сб', time_start: '18:00', price: 3000, gender: 'female', max_students: 12, current_students: 12, is_open: false },
              { id: '3', name: 'Арабский язык с нуля', schedule_type: 'Пн / Ср / Пт', time_start: '20:00', price: 3000, gender: 'male', max_students: 12, current_students: 11, is_open: true },
            ]);
            setActiveGender('male');
          }
          return;
        }

        if (data && data.length > 0) {
          const typed = data as unknown as Slot[];
          setSlots(typed);
          try { localStorage.setItem('harisa_slots_cache', JSON.stringify(typed)); } catch {}
          // Auto-select gender tab based on available slots if there's only one gender
          const hasMale = data.some(s => s.gender === 'male');
          const hasFemale = data.some(s => s.gender === 'female');
          if (hasMale && !hasFemale) setActiveGender('male');
          else if (!hasMale && hasFemale) setActiveGender('female');
          else if (hasMale && hasFemale) setActiveGender(prev => prev === 'all' ? 'male' : prev);
        } else if (slots.length === 0) {
          // Fallback MVP slots if DB is empty
          setSlots([
            { id: '1', name: 'Арабский язык с нуля', schedule_type: 'Пн / Ср / Пт', time_start: '18:00', price: 3000, gender: 'male', max_students: 12, current_students: 5, is_open: true },
            { id: '2', name: 'Арабский язык с нуля', schedule_type: 'Вт / Чт / Сб', time_start: '18:00', price: 3000, gender: 'female', max_students: 12, current_students: 12, is_open: false },
            { id: '3', name: 'Арабский язык с нуля', schedule_type: 'Пн / Ср / Пт', time_start: '20:00', price: 3000, gender: 'male', max_students: 12, current_students: 11, is_open: true },
          ]);
          setActiveGender('male');
        }
      } catch (err) {
        console.error('Failed to fetch slots:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchSlots();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter slots based on the active gender toggle
  const filteredSlots = slots.filter(s => activeGender === 'all' ? true : s.gender === activeGender);
  
  // Group slots by course name
  const groupedSlots = filteredSlots.reduce((acc, slot) => {
    // If the slot is linked to a course, use course title. Otherwise fallback to 'Общий курс'
    const courseName = getCourse(slot)?.title || 'Общий курс';
    if (!acc[courseName]) acc[courseName] = [];
    acc[courseName].push(slot);
    return acc;
  }, {} as Record<string, Slot[]>);

  // Check if we need a toggle
  const hasMale = slots.some(s => s.gender === 'male');
  const hasFemale = slots.some(s => s.gender === 'female');
  const showToggle = hasMale && hasFemale;

  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6 relative overflow-hidden" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-primary mb-4">
              Выберите удобное расписание
            </h2>
            <p className="text-blue-primary/60 text-sm md:text-base">
              Бронируйте место прямо сейчас. Новые группы стартуют в начале каждого месяца.
            </p>
          </Reveal>
        </div>

        {loading && slots.length === 0 ? (
          <div className="space-y-8" aria-busy="true" aria-label="Загрузка расписания">
            <div className="bg-blue-primary rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="animate-pulse space-y-4">
                <div className="h-6 w-48 bg-white/20 rounded-full" />
                <div className="h-10 w-64 bg-white/20 rounded-xl" />
                <div className="h-12 w-40 bg-white/20 rounded-xl" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[0, 1].map(i => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 animate-pulse">
                  <div className="h-6 w-32 bg-slate-200 rounded-lg mb-3" />
                  <div className="h-4 w-24 bg-slate-100 rounded-lg mb-6" />
                  <div className="h-14 w-full bg-slate-100 rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(groupedSlots).map(([courseName, courseSlots]) => (
              <div key={courseName} className="flex flex-col gap-8">
                
                {/* 1. Header (Pricing / Course Info) */}
                <Reveal>
                  <div className="blue-accent-card rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    {/* Decorative: solid gradient shapes, no blur (GPU-friendly) */}
                    <div aria-hidden className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
                    <div aria-hidden className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-10 -mb-10 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full mb-4 border border-white/20">
                          Первый модуль — 3 месяца
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{courseName}</h3>
                        
                        <div className="flex items-baseline gap-2 mt-4 mb-6">
                          <span className="text-5xl font-semibold text-white leading-none">
                            {getCourse(courseSlots[0])?.price_per_month ? getCourse(courseSlots[0])!.price_per_month!.toLocaleString() : '3 000'}
                          </span>
                          <span className="text-white/80 text-lg">сом / мес</span>
                        </div>

                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                            <span>Живые уроки 3 раза в неделю</span>
                          </li>
                          <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                            <span>Все игры и домашние задания включены</span>
                          </li>
                          <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                            <span>До 1 000 сом скидка за Динары каждый месяц</span>
                          </li>
                        </ul>
                      </div>

                      {/* 2. Gender Toggle */}
                      {showToggle && (
                        <div className="shrink-0 flex flex-col items-start md:items-end w-full md:w-auto mt-6 md:mt-0">
                          <p className="text-white/70 text-sm mb-3">Выберите группу:</p>
                          <div className="bg-black/20 p-1.5 rounded-full flex items-center border border-white/10 w-full md:w-auto">
                            <button
                              onClick={() => setActiveGender('male')}
                              className={`flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 touch-manipulation select-none hover:scale-[1.02] active:scale-95 ${
                                activeGender === 'male' ? 'bg-white text-blue-primary shadow-md' : 'text-white/70 hover:text-white'
                              }`}
                            >
                              Для братьев
                            </button>
                            <button
                              onClick={() => setActiveGender('female')}
                              className={`flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 touch-manipulation select-none hover:scale-[1.02] active:scale-95 ${
                                activeGender === 'female' ? 'bg-white text-blue-primary shadow-md' : 'text-white/70 hover:text-white'
                              }`}
                            >
                              Для сестёр
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>

                {/* 3. Slot Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <AnimatePresence mode="popLayout">
                    {courseSlots.map((slot) => {
                      const isFull = slot.current_students >= slot.max_students || !slot.is_open;
                      const seatsLeft = slot.max_students - slot.current_students;
                      const isAlmostFull = seatsLeft <= 2 && !isFull;

                      return (
                        <motion.div
                          key={slot.id}
                          layout
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          className={`bg-white rounded-3xl p-6 border transition-all duration-200 ${
                            isFull ? 'border-slate-200 opacity-60 grayscale' : 'border-slate-100 shadow-xl shadow-blue-900/5 hover:border-blue-200 hover:shadow-blue-900/10 hover:-translate-y-0.5'
                          } relative flex flex-col`}
                        >
                          <div className="flex justify-between items-start mb-5">
                            <div>
                              <h4 className="text-xl font-bold text-slate-800">{slot.schedule_type}</h4>
                              <div className="flex items-center gap-2 text-slate-500 mt-2 font-medium">
                                <Clock className="w-4 h-4" />
                                <span>{slot.description || slot.time_start || 'Время уточняется'}</span>
                              </div>
                            </div>
                            
                            {/* Scarcity Badge */}
                            <div className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-bold ${
                              isFull ? 'bg-slate-100 text-slate-500' :
                              isAlmostFull ? 'bg-red-50 text-red-600 border border-red-100' : 
                              'bg-green-50 text-green-600 border border-green-100'
                            }`}>
                              {isFull ? (
                                <>Мест нет</>
                              ) : (
                                <>
                                  <Users className="w-3.5 h-3.5" />
                                  Занято: {slot.current_students} из {slot.max_students}
                                </>
                              )}
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            {isFull ? (
                              <button disabled className="w-full py-4 px-6 bg-slate-100 text-slate-400 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                                Набор закрыт
                              </button>
                            ) : (
                              <a 
                                href={`https://harisa.site/login?slot=${slot.id}${typeof window !== 'undefined' && localStorage.getItem('harisa_promo') ? `&promo=${localStorage.getItem('harisa_promo')}` : ''}`}
                                className="w-full py-4 px-6 bg-blue-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-dark hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-primary/30 active:scale-[0.98] transition-all duration-200 touch-manipulation select-none group/btn"
                              >
                                Записаться на это время
                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                  
                  {courseSlots.length === 0 && (
                    <div className="col-span-1 md:col-span-2 text-center py-10 bg-white/50 rounded-3xl border border-slate-100">
                      <p className="text-slate-500 font-medium">Нет доступных слотов для выбранной категории</p>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
