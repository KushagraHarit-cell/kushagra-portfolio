'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const letters = 'KUSHAGRA HARIT'.split('');

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), { stiffness: 100, damping: 30 });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } },
  };

  const letter = {
    hidden: { y: 150, opacity: 0, rotateX: -90 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { duration: 1, ease: 'easeOut' as const } 
    },
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium multi-layer gradient mesh */}
      <div className="absolute inset-0 z-0">
        {/* Purple gradient */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[200px] opacity-20 bg-purple-600 animate-pulse" />
        {/* Blue gradient */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[180px] opacity-15 bg-blue-600 animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Pink gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[250px] opacity-10 bg-pink-600 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-gradient" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        style={{ y, opacity, scale, rotateX, rotateY }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto"
      >
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 mb-16 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-xs text-gray-400 tracking-[0.2em] uppercase"
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          Available for freelance work
        </motion.div>

        {/* Massive typography with tracking-[-0.08em] */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-black tracking-[-0.08em] leading-none mb-8 sm:mb-12 overflow-hidden"
          style={{ 
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {letters.map((char, i) =>
            char === ' ' ? (
              <span key={i} className="inline-block w-8 sm:w-12 md:w-16" />
            ) : (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block gradient-text"
                style={{
                  textShadow: '0 0 100px rgba(255,255,255,0.15)',
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 sm:mb-16 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4"
        >
          Freelance Web Developer creating modern websites, high-performance web experiences and premium digital products.
        </motion.p>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <motion.button
            onClick={() => handleScroll('#projects')}
            className="group relative flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full font-medium text-sm overflow-hidden w-full sm:w-auto justify-center"
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
            className="group relative flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border border-white/20 text-white rounded-full font-medium text-sm overflow-hidden bg-white/[0.02] w-full sm:w-auto justify-center"
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
          className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-gray-600 tracking-[0.3em] uppercase hidden sm:block">Scroll</span>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-12 sm:h-16 bg-gradient-to-b from-gray-500 via-gray-400 to-transparent"
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}
