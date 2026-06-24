'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormState = 'idle' | 'loading' | 'success' | 'error';

// EmailJS configuration - Replace with your actual credentials
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Kushagra Harit',
        },
        EMAILJS_PUBLIC_KEY
      );
      setFormState('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormState('error');
    }
  };

  const inputClass = `w-full glass rounded-xl px-5 py-4 text-white text-sm placeholder:text-gray-600 border border-white/5 
    focus:border-white/20 focus:outline-none focus:ring-0 transition-all duration-200 bg-transparent resize-none`;

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6" ref={ref}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-5 pointer-events-none"
        style={{ background: 'white' }} />
      {/* Additional gradient glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 bg-purple-600 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 bg-blue-600 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6 tracking-[-0.04em]"
        >
          Let's build something<br />great together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="text-gray-500 mb-16 text-base md:text-lg"
        >
          Have a project in mind or just want to talk code? My inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/5"
        >
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <CheckCircle className="text-green-400 mb-6" size={64} />
              <h3 className="text-2xl font-semibold text-white mb-3">Message sent!</h3>
              <p className="text-gray-500 text-base">I'll get back to you within 24 hours.</p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-8 text-base text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Send another message →
              </button>
            </motion.div>
          ) : formState === 'error' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <AlertCircle className="text-red-400 mb-6" size={64} />
              <h3 className="text-2xl font-semibold text-white mb-3">Something went wrong</h3>
              <p className="text-gray-500 text-base mb-4">Please try again or contact me directly via email.</p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-4 text-base text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Try again →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-500 mb-3 block tracking-wide">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-3 block tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-3 block tracking-wide">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full flex items-center justify-center gap-3 py-5 rounded-xl font-semibold text-base bg-white text-black hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
