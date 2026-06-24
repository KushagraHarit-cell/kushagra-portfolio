'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';
import { projects } from '@/lib/data';

const projectColors = [
  { bg: 'from-blue-900/30 to-purple-900/20', accent: '#818cf8' },
  { bg: 'from-emerald-900/30 to-teal-900/20', accent: '#34d399' },
  { bg: 'from-orange-900/30 to-red-900/20', accent: '#fb923c' },
  { bg: 'from-rose-900/30 to-pink-900/20', accent: '#f472b6' },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const colors = projectColors[index % projectColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
      style={{ willChange: 'transform' }}
    >
      {/* Card glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`}
      />

      {/* Project image placeholder */}
      <div className="relative h-52 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-70`} />
        
        {/* Abstract pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-7xl font-black opacity-10 select-none"
            style={{ color: colors.accent }}
          >
            {project.id.toString().padStart(2, '0')}
          </motion.div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${colors.accent}40 1px, transparent 1px), linear-gradient(90deg, ${colors.accent}40 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Gradient circles */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{ background: colors.accent }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border"
            style={{ borderColor: `${colors.accent}40`, color: colors.accent, background: `${colors.accent}10` }}>
            Featured
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{ background: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(8px)' }}
        >
          <motion.a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-black bg-white hover:bg-gray-100 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo <ArrowUpRight size={14} />
          </motion.a>
          <motion.a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/20 hover:border-white/40 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={14} /> GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <ArrowUpRight size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
          </motion.div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-white/8 text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Work</span>
        </motion.div>

        <div className="flex items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text tracking-tight"
          >
            Selected projects.
          </motion.h2>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            All projects <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
