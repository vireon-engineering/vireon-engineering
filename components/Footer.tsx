import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-deep text-white section-padding border-t border-border-dark">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-5 h-5 bg-green-accent rounded-sm" />
              <span className="font-black text-xl tracking-tighter uppercase">
                Vireon Engineering
              </span>
            </Link>
            <p className="text-white/40 max-w-sm mb-8 text-lg leading-relaxed">
              Independent engineering consultancy for utility-scale renewable energy projects. Rigour where failure is not an option.
            </p>
            <a 
              href="mailto:enquiries@vireonengineering.com" 
              className="text-green-accent font-bold text-lg hover:underline underline-offset-8"
            >
              enquiries@vireonengineering.com
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-8">Services</p>
            <nav className="flex flex-col gap-4">
              <Link href="#services" className="text-white/60 hover:text-white transition-colors">Owner's Engineering</Link>
              <Link href="#services" className="text-white/60 hover:text-white transition-colors">Technical Due Diligence</Link>
              <Link href="#services" className="text-white/60 hover:text-white transition-colors">Detailed Engineering</Link>
              <Link href="#services" className="text-white/60 hover:text-white transition-colors">Feasibility Studies</Link>
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-8">Firm</p>
            <nav className="flex flex-col gap-4">
              <Link href="#about" className="text-white/60 hover:text-white transition-colors">About & Principal</Link>
              <Link href="#projects" className="text-white/60 hover:text-white transition-colors">Project Portfolio</Link>
              <Link href="#insights" className="text-white/60 hover:text-white transition-colors">Technical Insights</Link>
              <Link href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 Vireon Engineering. All rights reserved.</p>
          <div className="flex gap-12">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
