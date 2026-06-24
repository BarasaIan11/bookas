"use client";

import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  TAGLINE, 
  LOCATION, 
  WHATSAPP_DISPLAY, 
  BUSINESS_HOURS,
  WHATSAPP_NUMBER
} from '@/lib/constants';

interface FooterProps {
  openModal: (service?: string) => void;
}

export default function Footer({ openModal }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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

  const columns = [
    {
      // Column 1 - Brand Summary
      content: (
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start select-none">
            <div className="flex items-center gap-0.5">
              <span className="text-2xl font-extrabold text-sky-400 tracking-tight">Bookas</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green mt-2"></span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest -mt-1 leading-none text-white/80">
              Cleaning Service
            </span>
          </div>
          <p className="text-xs text-white/60 leading-relaxed max-w-xs">
            Professional car detailing and home/office cleaning in Nairobi. Spotless results, every time, brought straight to your location.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white/5 hover:bg-brand-green hover:text-white text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white/5 hover:bg-brand-green hover:text-white text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white/5 hover:bg-brand-green hover:text-white text-white/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      )
    },
    {
      // Column 2 - Quick Links
      content: (
        <div>
          <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-brand-green pl-3">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-sky-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#why-us" onClick={(e) => handleLinkClick(e, '#why-us')} className="hover:text-sky-400 transition-colors">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-sky-400 transition-colors">
                Our Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-sky-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      // Column 3 - Our Services (subset of 8 for clarity)
      content: (
        <div>
          <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-brand-green pl-3">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>
              <button onClick={() => openModal("Interior Wash")} className="hover:text-sky-400 transition-colors text-left">
                Interior Wash
              </button>
            </li>
            <li>
              <button onClick={() => openModal("Exterior Wash")} className="hover:text-sky-400 transition-colors text-left">
                Exterior Wash
              </button>
            </li>
            <li>
              <button onClick={() => openModal("Detailing")} className="hover:text-sky-400 transition-colors text-left">
                Detailing
              </button>
            </li>
            <li>
              <button onClick={() => openModal("Sofa Cleaning")} className="hover:text-sky-400 transition-colors text-left">
                Sofa Cleaning
              </button>
            </li>
            <li>
              <button onClick={() => openModal("Carpets")} className="hover:text-sky-400 transition-colors text-left">
                Carpets Cleaning
              </button>
            </li>
            <li>
              <button onClick={() => openModal("Windows")} className="hover:text-sky-400 transition-colors text-left">
                Windows Wash
              </button>
            </li>
            <li>
              <button onClick={() => openModal("Office & Home")} className="hover:text-sky-400 transition-colors text-left">
                Office & Home Cleaning
              </button>
            </li>
            <li>
              <button onClick={() => openModal("Polishing")} className="hover:text-sky-400 transition-colors text-left">
                Polishing & Waxing
              </button>
            </li>
          </ul>
        </div>
      )
    },
    {
      // Column 4 - Contact Info & Action
      content: (
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-1 border-l-2 border-brand-green pl-3">
            Contact Info
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-white/60">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-brand-green shrink-0" />
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-green shrink-0" />
              <span>{LOCATION}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-green shrink-0" />
              <span>{BUSINESS_HOURS}</span>
            </li>
          </ul>
          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto bg-brand-green hover:bg-emerald-600 text-white font-extrabold px-6 py-2.5 rounded-full text-xs md:text-sm shadow-md hover:shadow-emerald-950/20 transition-all mt-2 transform hover:-translate-y-0.5"
          >
            Book Now
          </button>
        </div>
      )
    }
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grids with scroll in fade stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-16">
          {columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {column.content}
            </motion.div>
          ))}
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/40 text-xs md:text-sm">
            &copy; 2025 {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs md:text-sm flex items-center gap-1 justify-center">
            <span>Made with</span>
            <span className="text-emerald-500 animate-pulse">♥</span>
            <span>in Nairobi, Kenya</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
