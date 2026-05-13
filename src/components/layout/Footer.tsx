import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto px-6">
      <a href="#hero" className="flex items-center hover:opacity-80 transition-opacity">
        <Logo size="sm" />
      </a>
      
      <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] text-center md:text-left">
        © 2026 108 Research Labs LLP. All rights reserved. <br className="md:hidden" />
        Advanced Systematic Research & Portfolio Engineering.
      </p>

      <div className="flex gap-8">
         <a href="#" className="text-[10px] text-white/40 uppercase tracking-widest hover:text-white transition-colors italic">Privacy Policy</a>
         <a href="#" className="text-[10px] text-white/40 uppercase tracking-widest hover:text-white transition-colors italic">Regulatory Info</a>
      </div>
    </footer>
  );
}
