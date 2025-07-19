import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import PromotionalOffer from './components/PromotionalOffer';
import BestDelivered from './components/BestDelivered';
import Testimonials from './components/Testimonials';
import MeetChefs from './components/MeetChefs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <MenuGrid />
      <PromotionalOffer />
      <BestDelivered />
      <Testimonials />
      <MeetChefs />
      <Footer />
    </div>
  );
}

export default App;