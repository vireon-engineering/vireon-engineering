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
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-5 h-5 bg-green-accent rounded-sm group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-black text-lg tracking-tighter uppercase text-green-deep">
            Vireon Engineering
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-text-mid hover:text-green-deep transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-green-deep text-white text-xs font-bold py-3 px-6 rounded-sm uppercase tracking-wider hover:bg-green-mid transition-colors shadow-lg shadow-green-deep/10"
          >
            Speak with us
          </Link>
        </nav>

        {/* Mobile Burger */}
        <button 
          className="md:hidden text-green-deep"
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
            className="fixed inset-0 top-[72px] bg-white z-40 p-8 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-2xl font-black uppercase tracking-tighter text-green-deep"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="bg-green-deep text-white text-center py-4 rounded-sm font-bold uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speak with us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
