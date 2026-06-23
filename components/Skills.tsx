'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'from-blue-500/10 to-purple-500/10', border: 'hover:border-blue-500/30' },
  backend: { label: 'Backend', color: 'from-green-500/10 to-teal-500/10', border: 'hover:border-green-500/30' },
  tools: { label: 'Tools & Platforms', color: 'from-orange-500/10 to-amber-500/10', border: 'hover:border-orange-500/30' },
};

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const config = categoryConfig[skill.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`group relative glass rounded-2xl p-5 border border-white/5 ${config.border} transition-all duration-300 cursor-default overflow-hidden`}
    >
      {/* Gradient bg on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Glow edge */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: '0 0 30px rgba(255,255,255,0.03) inset' }} />

      <div className="relative z-10">
        <span className="text-base font-medium text-white">{skill.name}</span>
        
        {/* Level bar */}
        <div className="mt-3 h-px bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-white/30 to-white/10 rounded-full"
          />
        </div>
        <span className="text-xs text-gray-600 mt-1 block">{skill.level}%</span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const categories = ['frontend', 'backend', 'tools'] as const;

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs tracking-widest text-gray-500 uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold gradient-text mb-16"
        >
          Tools of the trade.
        </motion.h2>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat}>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs text-gray-500 tracking-widest uppercase mb-5"
              >
                {categoryConfig[cat].label}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
