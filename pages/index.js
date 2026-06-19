import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import WhySection from '@/components/WhySection';
import PremiumSection from '@/components/PremiumSection';
import SliderSection from '@/components/SliderSection';
import DestinationsSection from '@/components/DestinationsSection';
import FleetSection from '@/components/FleetSection';
import RoutesSection from '@/components/RoutesSection';
import ReservationForm from '@/components/ReservationForm';
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
      <SliderSection />
      <DestinationsSection />
      <FleetSection />
      <RoutesSection />
      <ReservationForm />
      <Newsletter />
      <Footer />
    </>
  );
}
