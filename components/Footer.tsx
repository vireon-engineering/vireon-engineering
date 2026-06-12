import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface text-ink py-24 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-5 h-5 bg-accent rounded-sm" />
              <span className="font-serif font-light text-3xl tracking-tight text-ink">
                Vireon
              </span>
            </Link>
            <p className="text-ink-light max-w-sm mb-8 text-lg font-sans leading-relaxed">
              Engineering the Carbon-Neutral Horizon at a planetary scale. Rigour where failure is not an option.
            </p>
            <a 
              href="mailto:enquiries@vireonengineering.com" 
              className="text-accent font-sans font-bold text-sm tracking-widest uppercase hover:underline underline-offset-8 transition-all"
            >
              enquiries@vireonengineering.com
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-light mb-8">Services</p>
            <nav className="flex flex-col gap-4 font-sans text-sm text-ink-light">
              <Link href="#strategic-advisory" className="hover:text-accent transition-colors">Strategic Advisory</Link>
              <Link href="#design-engineering" className="hover:text-accent transition-colors">Design & Detailed Engineering</Link>
              <Link href="#project-management" className="hover:text-accent transition-colors">Project Management</Link>
              <Link href="#asset-optimization" className="hover:text-accent transition-colors">Asset Optimization</Link>
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-light mb-8">Firm</p>
            <nav className="flex flex-col gap-4 font-sans text-sm text-ink-light">
              <Link href="#about" className="hover:text-accent transition-colors">About & Leadership</Link>
              <Link href="#projects" className="hover:text-accent transition-colors">Project Archive</Link>
              <Link href="#insights" className="hover:text-accent transition-colors">Technical Intelligence</Link>
              <Link href="#contact" className="hover:text-accent transition-colors">Initiate Project</Link>
            </nav>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-ink-light font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Vireon Engineering. All rights reserved.</p>
          <div className="flex gap-12">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-accent transition-colors">Legal Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
