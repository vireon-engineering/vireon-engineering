'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  service: string;
  scale: string;
  geography: string;
  outcome: string;
  image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-green-deep/10 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight className="text-green-deep" size={20} />
        </div>
      </div>
      
      <div className="flex justify-between items-start gap-8">
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-accent mb-4">{project.service} — {project.scale}</p>
          <h3 className="text-2xl font-black tracking-tighter uppercase mb-4 leading-none group-hover:text-green-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-mid text-sm max-w-md line-clamp-2">{project.outcome}</p>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mt-1">{project.geography}</p>
      </div>
    </motion.div>
  );
}
