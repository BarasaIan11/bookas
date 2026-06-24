"use client";

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-start gap-4 transition-shadow duration-300"
    >
      <div className="p-3 bg-brand-lightblue rounded-xl text-brand-green">
        <Icon className="w-6 h-6 stroke-[2.5]" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-brand-dark mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
