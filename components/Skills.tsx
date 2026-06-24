'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'from-blue-500/20 to-purple-500/20', border: 'hover:border-blue-400/50', glow: 'rgba(59, 130, 246, 0.3)' },
  backend: { label: 'Backend', color: 'from-green-500/20 to-teal-500/20', border: 'hover:border-green-400/50', glow: 'rgba(34, 197, 94, 0.3)' },
  tools: { label: 'Tools & Platforms', color: 'from-orange-500/20 to-amber-500/20', border: 'hover:border-orange-400/50', glow: 'rgba(249, 115, 22, 0.3)' },
};

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const config = categoryConfig[skill.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className={`group relative glass rounded-2xl p-6 border border-white/5 ${config.border} transition-all duration-300 cursor-default overflow-hidden`}
    >
      {/* Gradient bg on hover */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0`} 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow edge */}
      <motion.div 
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: `0 0 40px ${config.glow} inset` }} 
      />

      <div className="relative z-10">
        <span className="text-lg font-semibold text-white">{skill.name}</span>
        
        {/* Level bar */}
        <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.06 + 0.3, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-white/50 to-white/30 rounded-full"
          />
        </div>
        <motion.span 
          className="text-sm text-gray-400 mt-2 block font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.06 + 1.5 }}
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
