import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 institutional-gradient pointer-events-none" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">
            Systematic Research • Infrastructure Driven
          </span>
          
          <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[1.1] mb-8 text-white">
            Quantitative Discipline.<br />
            <span className="italic font-normal">Algorithmic Precision.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-silver/50 text-lg md:text-xl font-light mb-12 leading-relaxed">
            108 Research Labs develpos institutional grade financial data research frameworks and advanced algorithmic trading systems designed to analyse and trade global financial markets. 
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12 text-left"
        >
          <div className="flex gap-4">
            <Cpu className="text-white/20 shrink-0" size={24} />
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-2 text-white/80">Systematic Overlay</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">Custom automated trading systems deployed across high-liquidity global asset classes.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="text-white/20 shrink-0" size={24} />
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-2 text-white/80">Capital Efficiency</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">Advanced margin-efficient architectures leveraging base portfolio collateral.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <TrendingUp className="text-white/20 shrink-0" size={24} />
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-2 text-white/80">Risk De-correlation</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">Asymmetric return profiles engineered to remain uncorrelated to traditional market beta.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
