import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { PERFORMANCE_METRICS, PERFORMANCE_CHARTS } from '@/data/mockData';
import { MetricGroup, ChartDataPoint } from '@/types';

export function Performance() {
  return (
    <section id="performance" className="pt-16 pb-32 bg-brand-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium border-l border-white/20 pl-4">Institutional Reporting</span>
          <h2 className="text-4xl font-light mt-4 tracking-tight">Verified Performance Metrics</h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Row 1: Individual Mandates */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <StatCard 
              metric={PERFORMANCE_METRICS.base} 
              chartData={PERFORMANCE_CHARTS.base}
            />
            <StatCard 
              metric={PERFORMANCE_METRICS.lowBetaDerivatives} 
              chartData={PERFORMANCE_CHARTS.lowBetaDerivatives}
            />
            <StatCard 
              metric={PERFORMANCE_METRICS.highBetaDerivatives} 
              chartData={PERFORMANCE_CHARTS.highBetaDerivatives}
            />
          </div>

          {/* Row 2: Combined Mandates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <CombinedStatCard 
              metric={PERFORMANCE_METRICS.combinedLowBeta} 
              chartData={PERFORMANCE_CHARTS.combinedLowBeta}
             />
             <CombinedStatCard 
              metric={PERFORMANCE_METRICS.combinedHighBeta} 
              chartData={PERFORMANCE_CHARTS.combinedHighBeta}
             />
          </div>
        </div>

        <p className="mt-16 text-[9px] uppercase tracking-[0.3em] text-white/40 text-center">
          All data shown above is backtested data for the past 3 years. The figures are Net of Estimated Charges and Slippages.
        </p>
      </div>
    </section>
  );
}

function EquityMiniChart({ data, id }: { data: ChartDataPoint[], id: string }) {
  return (
    <div className="h-[120px] w-full mt-8 pt-4 border-t border-white/5">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip 
            contentStyle={{ backgroundColor: '#121212', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px', borderRadius: '0px' }}
            itemStyle={{ color: '#FFFFFF' }}
            labelStyle={{ color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#FFFFFF" 
            strokeWidth={1.5}
            fillOpacity={1} 
            fill={`url(#grad-${id})`}
            animationDuration={2000}
          />
          <XAxis hide dataKey="date" />
          <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function StatCard({ metric, chartData }: { metric: MetricGroup, chartData: ChartDataPoint[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-10 flex flex-col hover:bg-white/[0.02] transition-colors group"
    >
      <h3 className="text-xs uppercase tracking-widest text-white/80 mb-6">{metric.name}</h3>
      
      <div className="grid grid-cols-2 gap-y-8 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">CAGR</p>
          <p className="text-2xl font-light mono-stat">{metric.cagr}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Drawdown</p>
          <p className="text-2xl font-light mono-stat text-white/60">{metric.drawdown}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Calmar</p>
          <p className="text-xl font-light mono-stat">{metric.calmar}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Duration</p>
          <p className="text-lg font-light mono-stat text-white/40">{metric.duration}</p>
        </div>
      </div>

      <EquityMiniChart data={chartData} id={metric.name.replace(/\s+/g, '-').toLowerCase()} />
    </motion.div>
  );
}

function CombinedStatCard({ metric, chartData }: { metric: MetricGroup, chartData: ChartDataPoint[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card p-10 bg-brand-graphite/40 hover:bg-brand-graphite/60 transition-colors"
    >
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white font-medium">{metric.name}</h3>
          <p className="text-[10px] text-white/20 mt-1 uppercase italic">Integrated Performance</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1">Institutional CAGR</p>
          <p className="text-3xl font-light mono-stat text-white">{metric.cagr}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-10 border-y border-white/5 py-8">
        <div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Max Drawdown</p>
          <p className="text-sm font-light mono-stat text-white/70">{metric.drawdown}</p>
        </div>
        <div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Calmar</p>
          <p className="text-sm font-light mono-stat text-white/70">{metric.calmar}</p>
        </div>
        <div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Duration</p>
          <p className="text-sm font-light mono-stat text-white/70">{metric.duration}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-12 gap-y-6 mb-6">
         <div>
            <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Sharpe</p>
            <p className="text-sm font-mono">{metric.sharpe || 'N/A'}</p>
         </div>
         {metric.sortino && (
           <div>
              <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Sortino</p>
              <p className="text-sm font-mono">{metric.sortino}</p>
           </div>
         )}
         <div>
            <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Best Month</p>
            <p className="text-sm font-mono text-emerald-400/70">{metric.bestMonth || 'N/A'}</p>
         </div>
         <div>
            <p className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Worst Month</p>
            <p className="text-sm font-mono text-red-400/70">{metric.worstMonth || 'N/A'}</p>
         </div>
      </div>

      <EquityMiniChart data={chartData} id={metric.name.replace(/\s+/g, '-').toLowerCase()} />
    </motion.div>
  );
}
