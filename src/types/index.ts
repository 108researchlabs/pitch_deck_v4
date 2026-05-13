export interface MetricGroup {
  name: string;
  cagr: string;
  drawdown: string;
  calmar: string;
  duration: string;
  description: string;
  sharpe?: string;
  sortino?: string;
  bestMonth?: string;
  worstMonth?: string;
  avgPositive?: string;
  avgNegative?: string;
}

export interface PortfolioAllocation {
  name: string;
  value: number;
}

export interface Portfolio {
  title: string;
  role: string;
  assets: string[];
  logic: string;
  allocation: PortfolioAllocation[];
}

export interface ResearchStep {
  title: string;
  description: string;
}

export interface ChartDataPoint {
  date: string;
  value: number;
}
