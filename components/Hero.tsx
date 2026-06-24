"use client";

import Image from 'next/image';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  openModal: (service?: string) => void;
}

export default function Hero({ openModal }: HeroProps) {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format"
        alt="Bookas Professional Car Detailing and Cleaning Service"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* Small Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-green/90 text-white font-bold text-xs uppercase tracking-wider mb-6 border border-emerald-400/30 shadow-md backdrop-blur-sm"
        >
          <span>✦ Professional Cleaning in Nairobi</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Spotless Results. <br />
          <span className="bg-gradient-to-r from-brand-blue to-emerald-400 bg-clip-text text-transparent">Every Time.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed mb-10"
        >
          From premium auto detailing to deep home and office cleaning. We bring professional equipment, expert techniques, and the shine directly to your doorstep.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-green hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-full text-base shadow-lg hover:shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white/10" />
            <span>Book Now</span>
          </button>
          
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto flex items-center justify-center border-2 border-white/40 hover:border-white bg-white/5 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-full text-base backdrop-blur-sm transition-all"
          >
            Our Services
          </button>
        </motion.div>
      </div>

      {/* Bounce Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-white/60 hover:text-white transition-colors cursor-pointer"
          onClick={scrollToServices}
        >
          <ChevronDown className="w-8 h-8 stroke-[1.5]" />
        </motion.div>
      </div>
    </section>
  );
}
