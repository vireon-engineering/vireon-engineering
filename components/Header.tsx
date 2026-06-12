'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Advisory', href: '#strategic-advisory' },
    { name: 'Engineering', href: '#design-engineering' },
    { name: 'Execution', href: '#project-management' },
    { name: 'Optimization', href: '#asset-optimization' },
  ];

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        scrolled ? 'bg-[var(--color-obsidian)]/80 backdrop-blur-xl py-4 border-[var(--color-border-dark)]' : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-4 h-4 border border-[var(--color-electric-lime)] rounded-sm group-hover:rotate-45 group-hover:bg-[var(--color-electric-lime)] transition-all duration-500" />
          <span className="font-sans font-bold text-sm tracking-widest uppercase text-[var(--color-stark-white)]">
            Vireon
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-body)] hover:text-[var(--color-electric-lime)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="ml-4 bg-[var(--color-stark-white)] text-[var(--color-obsidian)] text-[10px] font-black py-3 px-6 rounded-full uppercase tracking-widest hover:bg-[var(--color-electric-lime)] transition-colors"
          >
            Initiate Project
          </Link>
        </nav>

        {/* Mobile Burger */}
        <button 
          className="md:hidden text-[var(--color-stark-white)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-[var(--color-obsidian)] z-40 p-8 flex flex-col gap-8 md:hidden border-t border-[var(--color-border-dark)]"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-serif text-3xl font-light text-[var(--color-stark-white)] hover:text-[var(--color-electric-lime)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="mt-8 border border-[var(--color-electric-lime)] text-[var(--color-electric-lime)] text-center py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Initiate Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
