"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { 
  WHATSAPP_NUMBER, 
  WHATSAPP_DISPLAY, 
  BUSINESS_HOURS, 
  LOCATION 
} from '@/lib/constants';

export default function Contact() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Bookas%20Cleaning%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient background strip */}
      <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-brand-lightblue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column - Contact Details */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <SectionHeading
              label="Contact Us"
              title="Get In Touch"
              subtext="Ready to schedule a cleaning or have custom requests? Contact us directly on WhatsApp for an instant response."
              centered={false}
            />

            {/* Contact Information List */}
            <div className="space-y-6 w-full mb-10">
              {/* WhatsApp Item */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-green-50 text-emerald-600 rounded-xl group-hover:bg-green-100 transition-colors">
                  <MessageCircle className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400">WhatsApp</h4>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-800 hover:text-emerald-600 text-base md:text-lg transition-colors"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl group-hover:bg-sky-100 transition-colors">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400">Location</h4>
                  <span className="font-bold text-slate-800 text-base md:text-lg">
                    {LOCATION}
                  </span>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-brand-lightgreen text-brand-green rounded-xl group-hover:bg-green-100 transition-colors">
                  <Clock className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400">Working Hours</h4>
                  <span className="font-bold text-slate-800 text-base md:text-lg">
                    {BUSINESS_HOURS}
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-8 py-4 rounded-full text-base shadow-md hover:shadow-emerald-950/20 active:scale-[0.98] transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chat With Us on WhatsApp</span>
            </a>
          </div>

          {/* Right Column - Image Visual */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100/50"
            >
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format"
                alt="Bookas Professional Cleaning Service"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
