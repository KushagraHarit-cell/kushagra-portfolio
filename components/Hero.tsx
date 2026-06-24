'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const letters = 'KUSHAGRA HARIT'.split('');

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
  };

  const letter = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const } 
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium ambient glow */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        {/* Main central glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{ 
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary glows */}
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ 
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
            animation: 'float 12s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse'
          }}
        />
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Animated grid lines */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.02]"
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto"
      >
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 mb-12 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-xs text-gray-400 tracking-[0.2em] uppercase"
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          Available for freelance work
        </motion.div>

        {/* Name with 3D effect */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] xl:text-[13rem] font-bold tracking-tighter leading-none mb-6 sm:mb-8 overflow-hidden"
          style={{ 
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '-0.04em'
          }}
        >
          {letters.map((char, i) =>
            char === ' ' ? (
              <span key={i} className="inline-block w-4 sm:w-8 md:w-10" />
            ) : (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block gradient-text"
                style={{
                  textShadow: '0 0 80px rgba(255,255,255,0.1)'
                }}
              >
                {char}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Enhanced subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-10 sm:mb-14 font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-4"
        >
          Crafting high-performance websites,
          <br className="hidden sm:block" />
          premium digital experiences & modern web products.
        </motion.p>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.button
            onClick={() => handleScroll('#projects')}
            className="group relative flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-full font-medium text-sm overflow-hidden w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View Work</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gray-200"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => handleScroll('#contact')}
            className="group relative flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-white rounded-full font-medium text-sm overflow-hidden bg-white/[0.02] w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={16} />
            Contact Me
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Premium scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-gray-600 tracking-[0.3em] uppercase hidden sm:block">Scroll</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-10 sm:h-12 bg-gradient-to-b from-gray-500 via-gray-400 to-transparent"
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.08; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.12; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
      `}</style>
    </section>
  );
}
