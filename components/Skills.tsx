'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'from-blue-500/25 to-purple-500/25', border: 'hover:border-blue-400/70', glow: 'rgba(59, 130, 246, 0.5)' },
  backend: { label: 'Backend', color: 'from-green-500/25 to-teal-500/25', border: 'hover:border-green-400/70', glow: 'rgba(34, 197, 94, 0.5)' },
  tools: { label: 'Tools & Platforms', color: 'from-orange-500/25 to-amber-500/25', border: 'hover:border-orange-400/70', glow: 'rgba(249, 115, 22, 0.5)' },
};

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const config = categoryConfig[skill.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.08, y: -12 }}
      className={`group relative glass rounded-2xl p-7 border border-white/5 ${config.border} transition-all duration-400 cursor-default overflow-hidden`}
    >
      {/* Gradient bg on hover */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0`} 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Glow edge */}
      <motion.div 
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ boxShadow: `0 0 50px ${config.glow} inset` }} 
      />

      {/* Floating glow effect */}
      <motion.div
        animate={{ 
          opacity: 0,
          scale: 1.5,
        }}
        whileHover={{ 
          opacity: 0.6,
          scale: 2,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-4 rounded-2xl blur-2xl"
        style={{ background: config.glow }}
      />

      <div className="relative z-10">
        <span className="text-xl font-bold text-white">{skill.name}</span>
        
        {/* Level bar */}
        <div className="mt-5 h-2.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: index * 0.08 + 0.4, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-white/60 to-white/40 rounded-full"
          />
        </div>
        <motion.span 
          className="text-base text-gray-400 mt-3 block font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.08 + 1.8 }}
        >
          {skill.level}%
        </motion.span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const categories = ['frontend', 'backend', 'tools'] as const;

  return (
    <section id="skills" className="relative py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-16 tracking-[-0.04em]"
        >
          Tools of the trade.
        </motion.h2>

        <div className="space-y-16">
          {categories.map((cat, catIndex) => (
            <div key={cat}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
                className="text-sm text-gray-500 tracking-[0.2em] uppercase mb-6 font-medium"
              >
                {categoryConfig[cat].label}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
