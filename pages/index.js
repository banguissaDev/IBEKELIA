import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import WhySection from '@/components/WhySection';
import PremiumSection from '@/components/PremiumSection';
import FleetSection from '@/components/FleetSection';
import RoutesSection from '@/components/RoutesSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedSection />
      <WhySection />
      <PremiumSection />
      <FleetSection />
      <RoutesSection />
      <Newsletter />
      <Footer />
    </>
  );
}
