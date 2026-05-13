import { MetricGroup, Portfolio, ResearchStep, ChartDataPoint } from '../types';

export const PERFORMANCE_METRICS: Record<string, MetricGroup> = {
  base: {
    name: 'Base Portfolio',
    cagr: '20.82%',
    drawdown: '-8.47%',
    calmar: '2.46',
    duration: '137 Days',
    description: 'A resilient core allocation diversified across uncorrelated asset classes (Equities, Commodities, Debt) designed for capital preservation and margin efficiency.'
  },
  lowBetaDerivatives: {
    name: 'Low Beta Derivatives (only) Portfolio',
    cagr: '25.21%',
    drawdown: '-6.17%',
    calmar: '4.09',
    duration: '88 Days',
    sharpe: '2.94',
    sortino: '7.87',
    bestMonth: '5.68%',
    worstMonth: '-2.79%',
    avgPositive: '2.79%',
    avgNegative: '-1.70%',
    description: 'Systematic directional and volatility-based strategies engineered for controlled exposure and risk-adjusted consistency.'
  },
  highBetaDerivatives: {
    name: 'High Beta Derivatives (only) Portfolio',
    cagr: '32.65%',
    drawdown: '-8.90%',
    calmar: '3.67',
    duration: '93 Days',
    description: 'Opportunistic systematic frameworks designed for enhanced return profiles and asymmetric market participation.'
  },
  combinedLowBeta: {
    name: 'Combined Portfolio — Low Beta',
    cagr: '39.70%',
    drawdown: '-6.28%',
    calmar: '6.31',
    duration: '59 Days',
    sharpe: '3.84',
    sortino: '7.78',
    bestMonth: '7.39%',
    worstMonth: '-2.88%',
    avgPositive: '3.98%',
    avgNegative: '-1.54%',
    description: 'An efficient integration of stable core assets and low-beta overlays, delivering balanced return generation and structural alpha.'
  },
  combinedHighBeta: {
    name: 'Combined Portfolio — High Beta',
    cagr: '45.77%',
    drawdown: '-7.01%',
    calmar: '6.53',
    duration: '65 Days',
    sharpe: '2.66',
    bestMonth: '14.68%',
    worstMonth: '-2.77%',
    description: 'A convex return profile utilizing high-beta overlays to capture structural market inefficiency through efficient risk deployment.'
  }
};

export const PORTFOLIO_STRUCTURE: Portfolio[] = [
  {
    title: 'Base Portfolio (Core Allocation)',
    role: 'Capital Preservation & Margin Efficiency',
    assets: ['Equity Indices (L/M/S Cap)', 'Commodities (Gold)', 'Sovereign Debt'],
    logic: 'High-quality ETFs and Bonds diversified across uncorrelated asset classes, serving as pledged collateral to facilitate advanced synthetic exposure.',
    allocation: [
      { name: 'Index ETFs', value: 50 },
      { name: 'Commodities', value: 30 },
      { name: 'Sovereign Debt', value: 20 },
    ]
  },
  {
    title: 'Derivatives Portfolio (Alpha Overlays)',
    role: 'Systematic Return Generation',
    assets: ['Directional Long/Short', 'Directional Option Selling', 'Mean Reversion Option Selling'],
    logic: 'Automated algorithmic mandates utilizing margin derived from the Base Portfolio to capture idiosyncratic and systematic alpha streams.',
    allocation: [
      { name: 'Mean Reversion', value: 50 },
      { name: 'Directional Long/Short', value: 30 },
      { name: 'Directional Option Selling', value: 20 },
    ]
  }
];

export const RESEARCH_STEPS: ResearchStep[] = [
  {
    title: 'Framework Design',
    description: 'Construction of mathematical primitives and multi-factor research signals based on deep historical market hierarchies.'
  },
  {
    title: 'Systematic Screening',
    description: 'Algorithmic filtering across global macro variables and security-level alternative data to isolate persistent inefficiencies.'
  },
  {
    title: 'Risk Decomposition',
    description: 'Granular isolation of idiosyncratic risk factors from systematic beta components to optimize institutional exposure.'
  },
  {
    title: 'Portfolio Engineering',
    description: 'Integration of core mandates with systematic overlays using a proprietary margin-efficient architecture.'
  }
];

export const PERFORMANCE_CHARTS: Record<string, ChartDataPoint[]> = {
  base: [
    { date: 'Jan 2023', value: 100 }, { date: 'Apr 23', value: 104 }, { date: 'Jul 23', value: 108 }, { date: 'Oct 23', value: 112 },
    { date: 'Jan 2024', value: 115 }, { date: 'Apr 24', value: 120 }, { date: 'Jul 24', value: 126 }, { date: 'Oct 24', value: 132 },
    { date: 'Jan 2025', value: 140 }, { date: 'Apr 25', value: 148 }, { date: 'Jul 25', value: 158 }, { date: 'Oct 25', value: 168 },
    { date: 'Dec 2025', value: 175 }
  ],
  lowBetaDerivatives: [
    { date: 'Jan 2023', value: 100 }, { date: 'Apr 23', value: 108 }, { date: 'Jul 23', value: 115 }, { date: 'Oct 23', value: 122 },
    { date: 'Jan 2024', value: 125 }, { date: 'Apr 24', value: 138 }, { date: 'Jul 24', value: 152 }, { date: 'Oct 24', value: 168 },
    { date: 'Jan 2025', value: 185 }, { date: 'Apr 25', value: 205 }, { date: 'Jul 25', value: 228 }, { date: 'Oct 25', value: 255 },
    { date: 'Dec 2025', value: 275 }
  ],
  highBetaDerivatives: [
    { date: 'Jan 2023', value: 100 }, { date: 'Apr 23', value: 115 }, { date: 'Jul 23', value: 132 }, { date: 'Oct 23', value: 150 },
    { date: 'Jan 2024', value: 165 }, { date: 'Apr 24', value: 195 }, { date: 'Jul 24', value: 230 }, { date: 'Oct 24', value: 270 },
    { date: 'Jan 2025', value: 315 }, { date: 'Apr 25', value: 370 }, { date: 'Jul 25', value: 435 }, { date: 'Oct 25', value: 510 },
    { date: 'Dec 2025', value: 580 }
  ],
  combinedLowBeta: [
    { date: 'Jan 2023', value: 100 }, { date: 'Apr 23', value: 110 }, { date: 'Jul 23', value: 122 }, { date: 'Oct 23', value: 135 },
    { date: 'Jan 2024', value: 150 }, { date: 'Apr 24', value: 175 }, { date: 'Jul 24', value: 205 }, { date: 'Oct 24', value: 240 },
    { date: 'Jan 2025', value: 285 }, { date: 'Apr 25', value: 335 }, { date: 'Jul 25', value: 395 }, { date: 'Oct 25', value: 465 },
    { date: 'Dec 2025', value: 520 }
  ],
  combinedHighBeta: [
    { date: 'Jan 2023', value: 100 }, { date: 'Apr 23', value: 115 }, { date: 'Jul 23', value: 135 }, { date: 'Oct 23', value: 160 },
    { date: 'Jan 2024', value: 185 }, { date: 'Apr 24', value: 220 }, { date: 'Jul 24', value: 265 }, { date: 'Oct 24', value: 320 },
    { date: 'Jan 2025', value: 385 }, { date: 'Apr 25', value: 465 }, { date: 'Jul 25', value: 565 }, { date: 'Oct 25', value: 685 },
    { date: 'Dec 2025', value: 780 }
  ]
};
