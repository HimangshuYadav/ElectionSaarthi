import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Lazy load below-the-fold components
const Timeline = lazy(() => import('./components/Timeline'));
const VoterGuide = lazy(() => import('./components/VoterGuide'));
const FAQSection = lazy(() => import('./components/FAQSection'));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="container section" style={{textAlign: 'center'}}>Loading...</div>}>
          <Timeline />
          <VoterGuide />
          <FAQSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
