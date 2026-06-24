"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import FeatureCard from './ui/FeatureCard';
import { featuresData } from '@/lib/features';

export default function WhyChooseUs() {
  const parallaxContainerRef = useRef<HTMLDivElement>(null);
  
  // Custom parallax scroll values for the visual team banner
  const { scrollYProgress } = useScroll({
    target: parallaxContainerRef,
    offset: ["start end", "end start"]
  });
  
  // Translate the image vertically as the user scrolls
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="why-us" className="py-20 md:py-28 bg-brand-lightblue relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lightgreen rounded-full filter blur-3xl opacity-40 -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/40 rounded-full filter blur-3xl opacity-40 -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          label="Why Choose Us"
          title="The Bookas Difference"
          subtext="We don't just clean — we restore, protect, and deliver pristine quality to every customer."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Full-width parallax image banner */}
        <div 
          ref={parallaxContainerRef}
          className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-100/50"
        >
          <motion.div 
            style={{ y: yTranslate, height: '130%', top: '-15%' }}
            className="absolute inset-0 w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80&auto=format"
              alt="Bookas Cleaning Service Team at Work"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              className="brightness-90 select-none"
            />
          </motion.div>
          {/* Subtle image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 flex items-end p-6 md:p-10" />
          
          {/* Floating tag inside parallax */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 max-w-lg">
            <span className="bg-sky-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              Our Promise
            </span>
            <h3 className="text-xl md:text-3xl font-extrabold tracking-tight">
              Dedicated to details, obsessed with cleanliness.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
