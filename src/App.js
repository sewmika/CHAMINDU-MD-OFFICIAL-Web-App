import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Download from './pages/Download';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="download"><Download /></section>
      <section id="about"><About /></section>
      <section id="features"><Features /></section>
      <Testimonials />
      <FAQ />
      <Newsletter />
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
