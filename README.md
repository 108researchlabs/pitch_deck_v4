# 108 Research Labs Landing Page

An institutional-grade landing page for a quantitative financial research and algorithmic trading firm. 

## Features

- **Institutional Branding**: High-impact messaging featuring the 108 Research Labs visual identity.
- **Advanced Strategies**: Overview of algorithmic trading systems and research frameworks.
- **Performance Analysis**: Cumulative return charts and systematic capital allocation visualizations.
- **Modern UI**: Smooth scroll-to-section navigation with a minimalist dark-mode aesthetic.

## Project Structure

- `src/components/`: Reusable UI components organized by layout and sections.
- `src/data/`: Static data and mock assets.
- `src/types/`: TypeScript interface definitions for data integrity.
- `src/lib/`: Utility functions and shared helpers.
- `public/`: Static assets (logos, robots.txt, etc.).
- `vite.config.ts`: Optimized Vite configuration for production deployment.
- `vercel.json`: Deployment configuration for Vercel.

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS 4.0
- **Animation**: Motion 12
- **Charts**: Recharts 3
- **Icons**: Lucide React
- **Deployment**: Vercel

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Design Philosophy

The site follows a **Dark Luxury** aesthetic, combining pure black (#121212) backgrounds with silver and white typography. It prioritizes information density and typographic rhythm to build trust with sophisticated investors, avoiding standard startup gradients or neon styles.

## Deployment

### Vercel
1. Connect this repository to Vercel.
2. Vercel will automatically detect the Vite setup.
3. Deploy.

### GitHub Pages
1. Ensure the `base` path is set correctly in `vite.config.ts` if deploying to a sub-path.
2. Use the `gh-pages` branch or GitHub Actions to deploy the `dist` folder.
