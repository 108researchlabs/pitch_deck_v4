import { motion } from 'motion/react';
import { PORTFOLIO_STRUCTURE } from '@/data/mockData';
import { Layers, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['rgba(255,255,255,0.8)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)'];

export function Strategies() {
  return (
    <section id="strategies" className="pt-32 pb-16 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium border-l border-white/20 pl-4">Portfolio Engineering</span>
          <h2 className="text-4xl font-light mt-4 tracking-tight">Systematic Return Stacking</h2>
          <p className="mt-6 text-white/50 text-lg font-light leading-relaxed max-w-2xl">
            Our architecture differentiates between core structural returns and dynamic alpha overlays, utilizing a margin-efficient framework to optimize allocator capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {PORTFOLIO_STRUCTURE.map((item: any, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="p-10 border-b border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm">
                    {i === 0 ? <Layers size={20} className="text-white/60" /> : <Zap size={20} className="text-white/60" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white">{item.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mt-1">{item.role}</p>
                  </div>
                </div>
                <p className="text-white/40 font-light leading-relaxed text-sm">
                  {item.logic}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-white/[0.01]">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-4 font-medium">Asset Allocation</p>
                  <div className="h-[180px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={item.allocation}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={4}
                          dataKey="value"
                          stroke="none"
                        >
                          {item.allocation.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#121212', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            fontSize: '10px',
                            borderRadius: '0px'
                          }}
                          itemStyle={{ color: '#FFFFFF' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-6 font-medium">Components</p>
                  <div className="space-y-4">
                    {item.allocation.map((asset: any, idx: number) => (
                      <div key={asset.name} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                          <span className="text-[11px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{asset.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-white/20 group-hover:text-white/60">{asset.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beta Mandates Section Header */}
        <div className="pt-24 border-t border-white/5 mb-16">
          <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-medium border-l border-white/10 pl-4">Exposure Segmentation</span>
          <h3 className="text-2xl font-light text-white/90 mt-4 tracking-tight">Our Derivatives portfolio further segregated into the following:</h3>
        </div>

        {/* Beta Mandates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-white/20">Conservative Exposure</span>
            <h3 className="text-2xl font-light mt-4 text-white">Low Beta Derivatives Mandate</h3>
            <p className="mt-4 text-white/40 leading-relaxed font-light text-sm">
             This mandate is designed for investors preferring a more Conservative approach to trading, offering a comparatively lower risk - return profile with reduced market volatility exposure.
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-white/20">Enhanced Exposure</span>
            <h3 className="text-2xl font-light mt-4 text-white">High Beta Derivatives Mandate</h3>
            <p className="mt-4 text-white/40 leading-relaxed font-light text-sm">
              This mandate is structured for investors seeking enhanced return potential and is characterised by a higher risk profile, with greater sensitivity to market volatility.
            </p>
          </div>
        </div>

        {/* Portfolio Synthesis Section */}
        <div className="mt-24 border-t border-white/5 pt-20">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium border-l border-white/10 pl-4">Portfolio Synthesis</span>
            <h3 className="text-4xl font-light text-white/90 mt-8 tracking-tighter leading-[1.1]">
              Institutional Integration & <br />
              <span className="text-white/30">Portfolio Engineering Architecture.</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
            <div className="lg:col-span-7 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-[9px] uppercase tracking-widest text-white/20 font-medium">Bespoke Architecture</p>
                  <p className="text-white/40 font-light leading-relaxed text-sm">
                    Our approach centers on the strategic integration of derivatives mandates with core equity holdings. We deploy bespoke allocation frameworks by selecting the optimal mandate—Low or High Beta—tailored to institutional risk parameters and alpha objectives.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[9px] uppercase tracking-widest text-white/20 font-medium">Collateral Optimization</p>
                  <p className="text-white/40 font-light leading-relaxed text-sm">
                    We specialize in the optimization of existing equity portfolios. By enhancing collateral efficiency, we facilitate the deployment of directional overlays designed to generate additional yield without compromising the integrity of the underlying base portfolio.
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <p className="text-white/70 font-light leading-relaxed text-base italic max-w-2xl">
                  "Whether architecting a comprehensive strategy from inception or revitalizing a legacy portfolio, our process ensures every component is calibrated for risk-adjusted outperformance."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-white/20"></div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">Strategic Synopsis</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="p-8 border border-white/5 bg-white/[0.01] space-y-6">
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-medium pb-4 border-b border-white/5">Objective Framework</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-mono text-white/20 mt-1">01</span>
                    <p className="text-xs text-white/50 font-light leading-relaxed">Risk-return profile calibration and mandate selection.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-mono text-white/20 mt-1">02</span>
                    <p className="text-xs text-white/50 font-light leading-relaxed">Pledged collateral optimization for margin efficiency.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-mono text-white/20 mt-1">03</span>
                    <p className="text-xs text-white/50 font-light leading-relaxed">Systematic alpha generation via directional overlays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
