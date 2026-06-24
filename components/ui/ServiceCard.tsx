"use client";

import { LucideIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: IconComponentType;
  onBook: () => void;
}

// Since LucideIcon type can sometimes complain about React versions, we can type it generically or import properly
type IconComponentType = LucideIcon;

export default function ServiceCard({
  name,
  description,
  icon: Icon,
  onBook,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group"
    >
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 bg-brand-lightblue rounded-xl flex items-center justify-center text-brand-green group-hover:bg-brand-lightgreen transition-colors">
          <Icon className="w-6 h-6 stroke-[2]" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 text-lg mb-1 group-hover:text-brand-green transition-colors">
            {name}
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <button
        onClick={(e) => {
          e.preventDefault();
          onBook();
        }}
        className="mt-6 flex items-center gap-1.5 text-sky-600 font-semibold text-sm hover:text-sky-700 transition-colors self-start group/btn"
      >
        <span>Book</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </motion.div>
  );
}
