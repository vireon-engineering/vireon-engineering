'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { stats, bentoServices } from '@/data/content';

export default function HomePage() {
  const textRevealVariants: Variants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <div className="bg-[var(--color-obsidian)] min-h-screen">
      {/* ══════════════════════════
           CINEMATIC HERO
      ══════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto z-10">
        <div className="max-w-6xl">
          <motion.div variants={staggerVariants} initial="hidden" animate="visible">
            <div className="text-reveal-mask mb-2 overflow-hidden">
              <motion.h1 variants={textRevealVariants} className="text-[var(--fs-hero)] leading-[0.85] text-[var(--color-stark-white)]">
                Engineering the
              </motion.h1>
            </div>
            <div className="text-reveal-mask mb-2 overflow-hidden">
              <motion.h1 variants={textRevealVariants} className="text-[var(--fs-hero)] leading-[0.85] text-[var(--color-stark-white)]">
                Carbon-Neutral
              </motion.h1>
            </div>
            <div className="text-reveal-mask mb-12 overflow-hidden">
              <motion.h1 variants={textRevealVariants} className="text-[var(--fs-hero)] leading-[0.85] text-[var(--color-electric-lime)] italic">
                Horizon.
              </motion.h1>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <p className="text-xl md:text-2xl text-[var(--color-text-body)] font-light leading-relaxed max-w-2xl">
              We combine world-class design, rigorous advisory, and multi-disciplinary engineering to build future-proof solar and renewable infrastructure at a planetary scale.
            </p>
            <div className="flex items-end justify-start md:justify-end">
              <button className="flex items-center gap-4 text-[var(--color-electric-lime)] group">
                <span className="font-sans text-sm font-bold tracking-widest uppercase">Explore Capabilities</span>
                <div className="w-12 h-12 rounded-full border border-[var(--color-electric-lime)] flex items-center justify-center group-hover:bg-[var(--color-electric-lime)] group-hover:text-[var(--color-obsidian)] transition-all duration-500">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════
           STATS STRIP
      ══════════════════════════ */}
      <section className="py-12 border-y border-[var(--color-border-dark)] bg-[var(--color-obsidian-light)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[var(--color-border-dark)]">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="pl-8 first:pl-0 flex flex-col"
              >
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-stark-white)] font-light mb-2">
                  {stat.value}<span className="text-[var(--color-electric-lime)] text-2xl ml-1">{stat.suffix}</span>
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-text-body)]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
           CORE SERVICES BENTO
      ══════════════════════════ */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-[var(--fs-h2)] text-[var(--color-stark-white)] max-w-3xl">
            Precision engineering for assets that <span className="italic text-[var(--color-electric-lime)]">outperform</span> expectations.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[320px] gap-6">
          {bentoServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bento-card group ${service.colSpan} ${service.rowSpan}`}
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/40 to-transparent" />
              </div>
              
              <div className="bento-glow" />

              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl text-[var(--color-stark-white)] mb-4 group-hover:text-[var(--color-electric-lime)] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-sans text-[var(--color-text-body)] max-w-md text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-3 text-[var(--color-electric-lime)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Temporary spacing to demonstrate scroll */}
      <div className="h-[20vh]"></div>
    </div>
  );
}
