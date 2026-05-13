/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Performance } from './components/sections/Performance';
import { Strategies } from './components/sections/Strategies';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-brand-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Strategies />
        <Performance />
      </main>
      <Footer />
    </div>
  );
}

