import { useState } from 'react';
import { Header } from './components/ui/Header2';
import Hero from './components/Hero';
import HeroTrustSection from './components/HeroTrustSection';
import Features from './components/Features';
import Services from './components/Services';
import ImageGallery from './components/ImageGallery';
import CoverageMap from './components/CoverageMap';
import Why from './components/Why';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import { useSectionReveal } from './hooks/useSectionReveal';

function AppContent() {
  useSectionReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroTrustSection />
        <Features />
        <Services />
        <ImageGallery />
        <CoverageMap />
        <Why />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <PageLoader onComplete={() => setReady(true)} />
      <CustomCursor />
      {ready && <AppContent />}
    </>
  );
}

export default App;
