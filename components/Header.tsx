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
        scrolled ? 'bg-surface/90 backdrop-blur-xl py-4 border-border' : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-4 h-4 border border-accent rounded-sm group-hover:rotate-45 group-hover:bg-accent transition-all duration-500" />
          <span className={clsx("font-sans font-bold text-sm tracking-widest uppercase transition-colors", scrolled ? "text-ink" : "text-white")}>
            Vireon
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={clsx("font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors", scrolled ? "text-ink-light" : "text-white/80")}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="ml-4 bg-ink text-surface text-[10px] font-black py-3 px-6 rounded-full uppercase tracking-widest hover:bg-accent hover:text-surface transition-colors"
          >
            Initiate Project
          </Link>
        </nav>

        {/* Mobile Burger */}
        <button 
          className={clsx("md:hidden", scrolled ? "text-ink" : "text-white")}
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
            className="fixed inset-0 top-[72px] bg-surface z-40 p-8 flex flex-col gap-8 md:hidden border-t border-border"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-serif text-3xl font-light text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="mt-8 border border-accent text-accent text-center py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest"
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
