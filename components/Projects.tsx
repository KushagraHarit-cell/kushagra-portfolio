'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';
import { projects } from '@/lib/data';

const projectColors = [
  { bg: 'from-blue-900/40 to-purple-900/30', accent: '#818cf8', glow: 'rgba(129, 140, 248, 0.4)' },
  { bg: 'from-emerald-900/40 to-teal-900/30', accent: '#34d399', glow: 'rgba(52, 211, 153, 0.4)' },
  { bg: 'from-orange-900/40 to-red-900/30', accent: '#fb923c', glow: 'rgba(251, 146, 60, 0.4)' },
  { bg: 'from-rose-900/40 to-pink-900/30', accent: '#f472b6', glow: 'rgba(244, 114, 182, 0.4)' },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const colors = projectColors[index % projectColors.length];
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -12 }}
      className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500"
    >
      {/* Card glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`}
      />

      {/* Floating glow effect */}
      <motion.div
        animate={{ 
          opacity: hovered ? 0.6 : 0,
          scale: hovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="absolute -inset-4 rounded-3xl blur-3xl"
        style={{ background: colors.glow }}
      />

      {/* Project image placeholder - larger */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-80`} />
        
        {/* Abstract pattern with parallax */}
        <motion.div
          animate={{ scale: hovered ? 1.2 : 1, rotate: hovered ? 12 : 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="text-8xl md:text-9xl font-black opacity-10 select-none"
            style={{ color: colors.accent }}
          >
            {project.id.toString().padStart(2, '0')}
          </div>
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(${colors.accent}40 1px, transparent 1px), linear-gradient(90deg, ${colors.accent}40 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gradient circles */}
        <motion.div
          animate={{ scale: hovered ? 1.3 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
          style={{ background: colors.accent }}
        />

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-5 left-5 px-4 py-2 rounded-full text-xs font-semibold border z-10"
            style={{ borderColor: `${colors.accent}60`, color: colors.accent, background: `${colors.accent}15` }}
          >
            Featured
          </motion.div>
        )}

        {/* Hover overlay with blur */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center gap-4 z-20"
          style={{ background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(12px)' }}
        >
          <motion.a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black bg-white hover:bg-gray-100 transition-colors cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{ transform: 'translateZ(30px)' }}
          >
            Live Demo <ArrowUpRight size={16} />
          </motion.a>
          <motion.a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white/50 transition-colors cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{ transform: 'translateZ(30px)' }}
          >
            <Code size={16} /> GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8" style={{ transform: 'translateZ(10px)' }}>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <ArrowUpRight size={20} className="text-gray-400 flex-shrink-0 mt-1" />
          </motion.div>
        </div>

        <p className="text-gray-400 text-base leading-relaxed mb-6">{project.description}</p>

        {/* Case Study Details */}
        {project.problem && project.solution && (
          <div className="mb-6 space-y-4">
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Problem</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Solution</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300 transition-colors"
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
    <section id="projects" className="relative py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Work</span>
        </motion.div>

        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text tracking-[-0.04em]"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
