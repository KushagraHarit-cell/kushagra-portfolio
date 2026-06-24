'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Layout, Pen, Zap, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

const icons = { Code2, Layout, Pen, Zap } as Record<string, React.ElementType>;

const serviceColors = [
  { glow: 'rgba(99,102,241,0.15)', border: 'hover:border-indigo-500/30', icon: 'text-indigo-400' },
  { glow: 'rgba(16,185,129,0.12)', border: 'hover:border-emerald-500/30', icon: 'text-emerald-400' },
  { glow: 'rgba(249,115,22,0.12)', border: 'hover:border-orange-500/30', icon: 'text-orange-400' },
  { glow: 'rgba(245,158,11,0.12)', border: 'hover:border-amber-500/30', icon: 'text-amber-400' },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Services</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 md:mb-0 tracking-tight"
          >
            What I bring<br />to the table.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm max-w-xs"
          >
            End-to-end digital solutions — from idea to launch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const colors = serviceColors[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group glass rounded-3xl p-8 border border-white/5 ${colors.border} transition-all duration-300 relative overflow-hidden cursor-default`}
              >
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: `radial-gradient(circle at 50% 0%, ${colors.glow}, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-2xl mb-6 border border-white/5 bg-white/5 ${colors.icon}`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-500">
                        <div className={`w-1 h-1 rounded-full flex-shrink-0 ${colors.icon.replace('text-', 'bg-')}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.div 
                    className={`mt-6 flex items-center gap-2 text-sm ${colors.icon}`}
                    initial={{ opacity: 0, x: -8 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Learn more <ArrowRight size={14} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
