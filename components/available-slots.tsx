'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Slot {
  id: string;
  schedule_type: string;
  description?: string;
  time_start?: string;
  price?: number;
}

export function AvailableSlots() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSlots() {
      try {
        const { data, error } = await supabase
          .from('slots')
          .select('id, schedule_type, description, time_start, price')
          .order('schedule_type', { ascending: true });

        if (error) {
          console.error('Error fetching slots:', error);
          return;
        }

        if (data && data.length > 0) {
          setSlots(data);
        } else {
          // Fallback MVP slots if DB is empty for design showcase
          setSlots([
            { id: '1', schedule_type: 'Пн / Ср / Пт', description: '18:00 – 19:30', price: 4000 },
            { id: '2', schedule_type: 'Вт / Чт / Сб', description: '18:00 – 19:30', price: 4000 },
            { id: '3', schedule_type: 'Пн / Ср / Пт', description: '20:00 – 21:30', price: 4000 },
          ]);
        }
      } catch (err) {
        console.error('Failed to fetch slots:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSlots();
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="schedule">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Идет набор в группы
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6"
          >
            Выберите удобное <span className="text-blue-600">расписание</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium"
          >
            Оставьте заявку сейчас, чтобы забронировать место. Оплата производится после регистрации на платформе.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {slots.map((slot, idx) => (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx % 3) }}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-blue-200 hover:shadow-blue-200/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{slot.schedule_type}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8 relative z-10">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span className="font-semibold">{slot.description || slot.time_start || 'Время уточняется'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <CreditCard className="w-5 h-5 text-slate-400" />
                    <span className="font-semibold">{slot.price ? `${slot.price.toLocaleString()} KGS / мес` : '4000 KGS / мес'}</span>
                  </div>
                </div>

                <a 
                  href={`https://harisa.site/login?slot=${slot.id}`}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors duration-300 relative z-10 group/btn"
                >
                  Записаться
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
