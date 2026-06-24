'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const letters = 'KUSHAGRA HARIT'.split('');

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03, delayChildren: 0.4 } },
  };

  const letter = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px] opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-5"
          style={{ background: 'rgba(200,200,255,0.3)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-5"
          style={{ background: 'rgba(255,200,200,0.2)' }}
        />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[180px]" />
          </div>
      </motion.div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400 tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for freelance work
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tight leading-none mb-6 overflow-hidden"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {letters.map((char, i) =>
            char === ' ' ? (
              <span key={i} className="inline-block w-6 md:w-10" />
            ) : (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block gradient-text"
              >
                {char}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-lg md:text-xl text-gray-400 mb-12 font-light tracking-wide"
        >
          Crafting high-performance websites,
          premium digital experiences &
          modern web products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => handleScroll('#projects')}
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => handleScroll('#contact')}
            className="group flex items-center gap-3 px-8 py-4 border border-white/15 text-white rounded-full font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={16} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
