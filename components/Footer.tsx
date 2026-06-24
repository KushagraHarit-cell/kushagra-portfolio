'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Mail, ExternalLink } from 'lucide-react';

const socials = [
  {
    icon: Code2,
    label: 'GitHub',
    href: 'https://github.com/KushagraHarit-cell'
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kushagra-h-011452324'
  },
  {
    icon: Globe,
    label: 'Portfolio',
    href: 'https://kushagra-portfolio-zeta.vercel.app'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:kushagraharit@gmail.com'
  },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-20 md:py-24 px-6 overflow-hidden">
      {/* Large background typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[20vw] md:text-[15vw] font-black text-white tracking-[-0.1em] leading-none select-none"
        >
          KUSHAGRA
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-white mb-4 tracking-tight">
                KH<span className="text-gray-600">.</span>
              </div>
              <p className="text-base text-gray-500 leading-relaxed max-w-md">
                Building premium digital experiences that live at the intersection of design and engineering.
              </p>
            </motion.div>
          </div>

          {/* Nav */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-6"
            >
              Navigation
            </motion.h4>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="text-base text-gray-500 hover:text-white transition-colors text-left cursor-pointer w-fit"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-6"
            >
              Connect
            </motion.h4>
            <div className="flex flex-col gap-4">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-3 text-base text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon size={16} />
                    {social.label}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Kushagra Harit. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
