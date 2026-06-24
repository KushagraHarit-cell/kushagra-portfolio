'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Layout, Pen, Zap, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

const icons = { Code2, Layout, Pen, Zap } as Record<string, React.ElementType>;

const serviceColors = [
  { glow: 'rgba(99,102,241,0.35)', border: 'hover:border-indigo-500/60', icon: 'text-indigo-400', bg: 'from-indigo-500/15 to-purple-500/15' },
  { glow: 'rgba(16,185,129,0.35)', border: 'hover:border-emerald-500/60', icon: 'text-emerald-400', bg: 'from-emerald-500/15 to-teal-500/15' },
  { glow: 'rgba(249,115,22,0.35)', border: 'hover:border-orange-500/60', icon: 'text-orange-400', bg: 'from-orange-500/15 to-red-500/15' },
  { glow: 'rgba(245,158,11,0.35)', border: 'hover:border-amber-500/60', icon: 'text-amber-400', bg: 'from-amber-500/15 to-yellow-500/15' },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Services</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4 md:mb-0 tracking-[-0.04em]"
          >
            What I bring<br />to the table.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-base max-w-sm"
          >
            End-to-end digital solutions — from idea to launch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const colors = serviceColors[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className={`group glass rounded-3xl p-12 border border-white/5 ${colors.border} transition-all duration-500 relative overflow-hidden cursor-default`}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ background: `radial-gradient(circle at 50% 0%, ${colors.glow}, transparent 75%)` }}
                />

                {/* Floating glow effect */}
                <motion.div
                  animate={{ 
                    opacity: 0,
                    scale: 1.5,
                  }}
                  whileHover={{ 
                    opacity: 0.8,
                    scale: 2,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute -inset-8 rounded-3xl blur-3xl"
                  style={{ background: colors.glow }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`inline-flex p-5 rounded-2xl mb-10 border border-white/10 bg-white/5 ${colors.icon}`}
                  >
                    <Icon size={32} />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">{service.description}</p>

                  <ul className="space-y-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-4 text-lg text-gray-500">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.icon.replace('text-', 'bg-')}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.div 
                    className={`mt-10 flex items-center gap-3 text-lg font-semibold ${colors.icon}`}
                    initial={{ opacity: 0, x: -15 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Learn more <ArrowRight size={18} />
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
