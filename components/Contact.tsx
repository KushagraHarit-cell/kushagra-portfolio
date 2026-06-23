'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass = `w-full glass rounded-xl px-5 py-4 text-white text-sm placeholder:text-gray-600 border border-white/5 
    focus:border-white/20 focus:outline-none focus:ring-0 transition-all duration-200 bg-transparent resize-none`;

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-5 pointer-events-none"
        style={{ background: 'white' }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="text-xs tracking-widest text-gray-500 uppercase">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold gradient-text mb-4"
        >
          Let's build something<br />great together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="text-gray-500 mb-12"
        >
          Have a project in mind or just want to talk code? My inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl p-8 md:p-10 border border-white/5"
        >
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Message sent!</h3>
              <p className="text-gray-500">I'll get back to you within 24 hours.</p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-6 text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                Send another message →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-500 mb-2 block tracking-wide">Name</label>
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
                  <label className="text-xs text-gray-500 mb-2 block tracking-wide">Email</label>
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
                <label className="text-xs text-gray-500 mb-2 block tracking-wide">Message</label>
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
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-medium text-sm bg-white text-black hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                whileHover={{ scale: formState === 'loading' ? 1 : 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {formState === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
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
