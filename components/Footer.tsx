'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, AtSign, Mail } from 'lucide-react';

const socials = [
  { icon: Code2, label: 'GitHub', href: 'https://github.com/kushagra', color: 'hover:text-white' },
  { icon: Globe, label: 'LinkedIn', href: 'https://linkedin.com/in/kushagra', color: 'hover:text-blue-400' },
  { icon: AtSign, label: 'Instagram', href: 'https://instagram.com/kushagra', color: 'hover:text-pink-400' },
  { icon: Mail, label: 'Email', href: 'mailto:kushagra@example.com', color: 'hover:text-green-400' },
];

const navLinks = [
  { label: 'About', href: '#about' },
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
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-3">
              KH<span className="text-gray-600">.</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Building premium digital experiences that live at the intersection of design and engineering.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs text-gray-500 tracking-widest uppercase mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-gray-500 hover:text-white transition-colors text-left cursor-pointer w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs text-gray-500 tracking-widest uppercase mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
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
                    transition={{ delay: i * 0.08 }}
                    className={`flex items-center gap-2 text-sm text-gray-500 ${social.color} transition-colors cursor-pointer`}
                  >
                    <Icon size={14} />
                    {social.label}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Kushagra Harit. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
