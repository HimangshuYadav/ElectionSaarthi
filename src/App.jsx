import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import VoterGuide from './components/VoterGuide';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Timeline />
        <VoterGuide />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
