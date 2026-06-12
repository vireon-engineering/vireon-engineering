'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowDown, Mail, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { projects, services, stats } from '@/data/content';
import ProjectCard from '@/components/ProjectCard';

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* ══════════════════════════
           HERO
      ══════════════════════════ */}
      <section className="min-height-screen pt-32 pb-16 flex flex-col justify-between">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-24"
          >
            <motion.p variants={itemVariants} className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted mb-12">
              Independent Technical Advisory — Utility Scale
            </motion.p>
            <motion.h1 
              variants={itemVariants}
              className="text-[var(--fs-hero)] font-black tracking-tighter uppercase mb-0 leading-[0.85]"
            >
              Engineering<br />Certainty.<br />
              <span className="text-green-accent">Independence</span><br />
              Defined.
            </motion.h1>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden -mt-24 md:-mt-48 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2400" 
            alt="Solar Farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </motion.div>

        <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full -mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <p className="text-2xl md:text-3xl text-text-mid leading-relaxed max-w-2xl font-medium tracking-tight">
                Vireon Engineering provides <strong>technical due diligence and owner&apos;s engineering</strong> for solar projects from 10 MW to 500 MW+. Delivering rigour where failure is not an option.
              </p>
            </motion.div>
            <div className="md:col-span-5 flex flex-col items-end gap-12">
              <div className="flex gap-16">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-right">
                    <p className="text-5xl font-black text-green-deep tracking-tighter mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center text-green-deep"
              >
                <ArrowDown size={20} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
           POSITIONING
      ══════════════════════════ */}
      <section className="section-padding bg-off-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-accent mb-12"
            >
              The Foundation
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--fs-h1)] mb-16 text-green-deep leading-tight"
            >
              Independent rigour, applied where technical failure is not an option.
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <p className="text-xl text-text-mid leading-relaxed">
                We protect the capital of developers and investors by eliminating technical ambiguity. No equipment vendor relationships. No preferred contractor arrangements.
              </p>
              <div className="space-y-6">
                {['No hidden commercial interests', 'Named Principal engagement', 'Global site-stage experience'].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-green-deep font-bold text-sm uppercase tracking-wider">
                    <CheckCircle2 size={18} className="text-green-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
           PROJECTS
      ══════════════════════════ */}
      <section id="projects" className="section-padding bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex justify-between items-end mb-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted mb-8">Case Studies</p>
              <h2 className="text-[var(--fs-h2)]">Engineering decisions<br />with consequence.</h2>
            </div>
            <button className="hidden md:flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-green-deep group">
              View full archive
              <div className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center group-hover:bg-green-deep group-hover:text-white transition-all">
                <ArrowDown size={14} className="-rotate-90" />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className={index % 2 === 1 ? 'md:mt-48' : ''}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
           SERVICES
      ══════════════════════════ */}
      <section id="services" className="section-padding bg-green-deep text-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32 items-end">
            <div className="md:col-span-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-accent mb-8">What we deliver</p>
              <h2 className="text-[var(--fs-h2)] text-white">Technical Expertise<br />Across the Lifecycle.</h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                Every engagement is scoped against the specific technical risk the client is managing. We deliver technical precision with commercial awareness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {services.map((service, index) => (
              <motion.div 
                key={service.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-12 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="w-8 h-[2px] bg-green-accent mb-12" />
                <h3 className="text-2xl text-white mb-6 leading-tight">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-12">{service.description}</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-green-accent hover:text-white transition-colors">
                  Learn more
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
           ABOUT
      ══════════════════════════ */}
      <section id="about" className="section-padding bg-off-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-center">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Principal Engineer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted mb-8">The Principal</p>
              <h2 className="text-[var(--fs-h1)] mb-12 leading-none">The engineer you hired is the one on the project.</h2>
              <p className="text-xl text-text-mid leading-relaxed mb-12">
                Vireon Engineering is a founder-led independent consultancy. Unlike larger firms, the senior engineer who scopes your engagement is the one who signs the deliverable. We prioritize depth of expertise over scale of delegation.
              </p>
              <div className="grid grid-cols-2 gap-12 mb-12">
                {stats.slice(2).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-black text-green-deep tracking-tighter mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              <button className="bg-green-deep text-white py-4 px-12 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-green-mid transition-colors shadow-xl shadow-green-deep/10">
                Read Principal Biography
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
           CONTACT
      ══════════════════════════ */}
      <section id="contact" className="section-padding bg-green-accent">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-[var(--fs-hero)] text-green-deep mb-16 leading-none">Let&apos;s build certainty.</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="w-full md:w-auto bg-green-deep text-white py-6 px-16 rounded-sm font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 hover:translate-y-[-4px] transition-transform">
                <Mail size={20} />
                Discuss your project
              </button>
              <p className="text-green-deep/60 font-bold uppercase tracking-widest text-xs">
                Response within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
