'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Reveal } from './reveal';

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
}

export function AvailableSlots() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeGender, setActiveGender] = useState<'male' | 'female' | 'all'>('all');

  useEffect(() => {
    async function fetchSlots() {
      try {
        const { data, error } = await supabase
          .from('slots')
          .select('id, name, schedule_type, description, time_start, price, gender, max_students, current_students, is_open')
          .order('schedule_type', { ascending: true });

        if (error) {
          console.error('Error fetching slots:', error);
          return;
        }

        if (data && data.length > 0) {
          setSlots(data);
          // Auto-select gender tab based on available slots if there's only one gender
          const hasMale = data.some(s => s.gender === 'male');
          const hasFemale = data.some(s => s.gender === 'female');
          if (hasMale && !hasFemale) setActiveGender('male');
          else if (!hasMale && hasFemale) setActiveGender('female');
          else if (hasMale && hasFemale) setActiveGender('male'); // Default to male if both exist
        } else {
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
        setLoading(false);
      }
    }

    fetchSlots();
  }, []);

  // Filter slots based on the active gender toggle
  const filteredSlots = slots.filter(s => activeGender === 'all' ? true : s.gender === activeGender);
  
  // Group slots by course name
  const groupedSlots = filteredSlots.reduce((acc, slot) => {
    const courseName = slot.name || 'Общий курс';
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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-blue-primary/20 border-t-blue-primary rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(groupedSlots).map(([courseName, courseSlots]) => (
              <div key={courseName} className="flex flex-col gap-8">
                
                {/* 1. Header (Pricing / Course Info) */}
                <Reveal>
                  <div className="blue-accent-card rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-10 -mb-10"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full mb-4 border border-white/20">
                          Первый модуль — 3 месяца
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{courseName}</h3>
                        
                        <div className="flex items-baseline gap-2 mt-4 mb-6">
                          <span className="text-5xl font-semibold text-white leading-none">3 000</span>
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
                          <div className="bg-black/20 backdrop-blur-md p-1.5 rounded-2xl flex items-center border border-white/10 w-full md:w-auto">
                            <button
                              onClick={() => setActiveGender('male')}
                              className={`flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                activeGender === 'male' ? 'bg-white text-blue-primary shadow-md' : 'text-white/70 hover:text-white'
                              }`}
                            >
                              Для братьев
                            </button>
                            <button
                              onClick={() => setActiveGender('female')}
                              className={`flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
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
                    {courseSlots.map((slot, idx) => {
                      const isFull = slot.current_students >= slot.max_students || !slot.is_open;
                      const seatsLeft = slot.max_students - slot.current_students;
                      const isAlmostFull = seatsLeft <= 2 && !isFull;

                      return (
                        <motion.div
                          key={slot.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className={`bg-white rounded-3xl p-6 border ${
                            isFull ? 'border-slate-200 opacity-60 grayscale' : 'border-slate-100 shadow-xl shadow-blue-900/5 hover:border-blue-200 hover:shadow-blue-900/10'
                          } transition-all duration-300 relative flex flex-col`}
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
                                href={`https://harisa.site/login?slot=${slot.id}`}
                                className="w-full py-4 px-6 bg-blue-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-primary/30 group/btn"
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
