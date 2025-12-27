import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { TrustSection } from './components/TrustSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased selection:bg-[#E85002]/20 selection:text-[#E85002]">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
