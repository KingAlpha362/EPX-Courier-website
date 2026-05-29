import { useScrollReveal } from './hooks/useScrollReveal';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from './components/Header';
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
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import DifferentiatorBand from './components/DifferentiatorBand';
import ScrollProgress from './components/ScrollProgress';
import FloatingCTA from './components/FloatingCTA';

function App() {
  useScrollReveal();
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <HeroTrustSection />
        <Why />
        <Services />
        <DifferentiatorBand />
        <ImageGallery />
        <Features />
        <Portfolio />
        <CoverageMap />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
      <SpeedInsights />
    </>
  );
}

export default App;
