"use client";

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtext?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtext,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 ${centered ? 'text-center mx-auto' : 'text-left'}`}
    >
      <span className="inline-block text-brand-green font-bold text-xs uppercase tracking-widest bg-brand-lightgreen px-3 py-1 rounded-full border border-green-200 mb-3">
        ✦ {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
        {title}
      </h2>
      {subtext && (
        <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed">
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
