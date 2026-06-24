"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Car, Home as HomeIcon } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { servicesData } from '@/lib/services';

interface ServicesProps {
  openModal: (service?: string) => void;
}

export default function Services({ openModal }: ServicesProps) {
  // We can track local tab state to coordinate animations with AnimatePresence
  const [activeTab, setActiveTab] = useState<string>("auto");

  // Separate featured vs grid services
  const featuredServices = servicesData.filter(s => s.featured);
  
  const gridAutoServices = servicesData.filter(s => s.category === 'auto' && !s.featured);
  const gridHomeServices = servicesData.filter(s => s.category === 'home' && !s.featured);

  // Custom benefits list for the top 3 services
  const getBenefits = (serviceId: string) => {
    switch (serviceId) {
      case 'detailing':
        return [
          "Full multi-stage paint correction & swirl removal",
          "Premium hand-applied paint protection wax",
          "Deep dashboard, trim & center console dressing"
        ];
      case 'interior-wash':
        return [
          "Hot-water extraction of all upholstery/leather seats",
          "Safe, thorough dust removal from all vents & gaps",
          "Eco-safe odor neutralization & sanitization treatment"
        ];
      case 'sofa-cleaning':
        return [
          "Deep vacuum extraction of hidden dust & food crumbs",
          "Steam spot treatment to lift organic & food stains",
          "Anti-allergen sanitizing and protective fabric conditioning"
        ];
      default:
        return [
          "Professional-grade equipment and eco-safe products",
          "Meticulous attention to details and surfaces",
          "100% satisfaction guarantee with booking coverage"
        ];
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* PART 1 - Featured Services Alternating Rows */}
        {/* ========================================================================= */}
        <SectionHeading
          label="Our Services"
          title="What We Do Best"
          subtext="Professional mobile cleaning and restoration. We bring the tools, expertise, and premium results straight to you."
        />

        <div className="space-y-24 md:space-y-32 mb-32">
          {featuredServices.map((service, index) => {
            const isEven = index % 2 === 0;
            const benefits = getBenefits(service.id);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100/50 group">
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-w-768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                    service.category === 'auto'
                      ? 'bg-sky-50 text-sky-600 border border-sky-200'
                      : 'bg-green-50 text-brand-green border border-green-200'
                  }`}>
                    {service.category === 'auto' ? 'Auto Detailing' : 'Home & Office'}
                  </span>
                  
                  <h3 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <h4 className="font-bold text-sm text-slate-800 uppercase tracking-widest mb-3">
                    Key Service Benefits:
                  </h4>
                  
                  {/* Benefit points */}
                  <ul className="space-y-3 mb-8 w-full">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm md:text-base">
                        <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(service.name)}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    Book This Service
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* PART 2 - All Services Tabbed Grid */}
        {/* ========================================================================= */}
        <div className="border-t border-slate-100 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight mb-3">
              All Our Services
            </h3>
            <p className="text-slate-500 text-sm md:text-base">
              Browse through our full service list and book the perfect package for your needs.
            </p>
          </div>

          {/* Tab Selection */}
          <Tabs 
            defaultValue="auto" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="flex flex-col items-center"
          >
            {/* Custom Tab List */}
            <TabsList className="bg-slate-100 p-1 rounded-full flex gap-1 mb-10 w-full max-w-sm md:max-w-md shadow-inner border border-slate-200/50">
              <TabsTrigger
                value="auto"
                className="w-1/2 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition-all data-[active]:bg-sky-500 data-[active]:text-white data-[active]:shadow-md text-slate-600 hover:text-slate-800"
              >
                <Car className="w-4 h-4" />
                <span>Auto Detailing</span>
              </TabsTrigger>
              <TabsTrigger
                value="home"
                className="w-1/2 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition-all data-[active]:bg-sky-500 data-[active]:text-white data-[active]:shadow-md text-slate-600 hover:text-slate-800"
              >
                <HomeIcon className="w-4 h-4" />
                <span>Home & Office</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab Contents */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {activeTab === "auto" && (
                  <TabsContent key="auto" value="auto" className="outline-none">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {gridAutoServices.map((service) => (
                        <ServiceCard
                          key={service.id}
                          name={service.name}
                          description={service.description}
                          icon={service.icon}
                          onBook={() => openModal(service.name)}
                        />
                      ))}
                    </motion.div>
                  </TabsContent>
                )}

                {activeTab === "home" && (
                  <TabsContent key="home" value="home" className="outline-none">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {gridHomeServices.map((service) => (
                        <ServiceCard
                          key={service.id}
                          name={service.name}
                          description={service.description}
                          icon={service.icon}
                          onBook={() => openModal(service.name)}
                        />
                      ))}
                    </motion.div>
                  </TabsContent>
                )}
              </AnimatePresence>
            </div>
          </Tabs>
        </div>

      </div>
    </section>
  );
}
