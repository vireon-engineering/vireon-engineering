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
    <div className="bg-surface min-h-screen">
      {/* ══════════════════════════
           CINEMATIC HERO (LIGHT)
      ══════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-6 md:px-12 w-full overflow-hidden">
        {/* Cinematic Background Image - Kept dark for contrast against white text, but the page is light */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2400" 
            alt="Utility-scale solar infrastructure"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay to ensure text contrast while transitioning to light section below */}
          <div className="absolute inset-0 bg-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-ink/20" />
        </motion.div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="max-w-6xl">
            <motion.div variants={staggerVariants} initial="hidden" animate="visible">
              <div className="text-reveal-mask mb-2 overflow-hidden">
                <motion.h1 variants={textRevealVariants} className="text-[var(--fs-hero)] leading-[0.85] text-white">
                  Engineering the
                </motion.h1>
              </div>
              <div className="text-reveal-mask mb-2 overflow-hidden">
                <motion.h1 variants={textRevealVariants} className="text-[var(--fs-hero)] leading-[0.85] text-white">
                  Carbon-Neutral
                </motion.h1>
              </div>
              <div className="text-reveal-mask mb-12 overflow-hidden">
                <motion.h1 variants={textRevealVariants} className="text-[var(--fs-hero)] leading-[0.85] text-surface-alt italic">
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
              <p className="text-xl md:text-2xl text-ink font-light leading-relaxed max-w-2xl bg-surface/80 backdrop-blur-md p-6 rounded-lg border border-border">
                We combine world-class design, rigorous advisory, and multi-disciplinary engineering to build future-proof solar and renewable infrastructure at a planetary scale.
              </p>
              <div className="flex items-end justify-start md:justify-end">
                <button className="flex items-center gap-4 text-accent group">
                  <span className="font-sans text-sm font-bold tracking-widest uppercase">Explore Capabilities</span>
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-surface transition-all duration-500 bg-surface">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
           STATS STRIP
      ══════════════════════════ */}
      <section className="py-12 border-y border-border bg-surface-alt">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="pl-8 first:pl-0 flex flex-col"
              >
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink font-light mb-2">
                  {stat.value}<span className="text-accent text-2xl ml-1">{stat.suffix}</span>
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-ink-light">
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
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto bg-surface">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="text-[var(--fs-h2)] text-ink max-w-3xl">
            Precision engineering for assets that <span className="italic text-accent">outperform</span> expectations.
          </h2>
          <button className="flex items-center gap-4 text-accent group pb-2">
            <span className="font-sans text-xs font-bold tracking-widest uppercase">View All Services</span>
            <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-surface transition-all duration-500">
              <ArrowRight size={14} />
            </div>
          </button>
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
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s] ease-out mix-blend-multiply" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              </div>
              
              <div className="bento-glow" />

              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl text-ink mb-4 group-hover:text-accent transition-colors duration-500 drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="font-sans text-ink-light max-w-md text-sm leading-relaxed drop-shadow-sm font-medium">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-3 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* ══════════════════════════
           BIG IMAGE SHOWCASE
      ══════════════════════════ */}
      <section className="py-24 bg-surface-alt overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[21/9] md:aspect-[24/9] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2400" 
              alt="Massive solar installation representing our 185GW footprint"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-surface/90 backdrop-blur-md px-12 py-8 rounded-2xl text-center border border-border shadow-xl">
                <p className="font-serif text-4xl md:text-6xl text-ink font-light tracking-tight mb-2">185+ GW</p>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Global Footprint</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-[10vh] bg-surface"></div>
    </div>
  );
}
