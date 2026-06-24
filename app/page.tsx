"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Dynamically import BookingModal to defer loading until required (improves page load performance)
const BookingModal = dynamic(() => import('@/components/BookingModal'), {
  ssr: false,
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const openModal = (service?: string) => {
    setSelectedService(service || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <main className="flex flex-col min-h-screen">
        <Hero openModal={openModal} />
        <WhyChooseUs />
        <Services openModal={openModal} />
        <Contact />
      </main>
      <Footer openModal={openModal} />
      
      {/* Booking modal renders in a portal only on client execution when triggered */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        selectedService={selectedService} 
      />
    </>
  );
}
