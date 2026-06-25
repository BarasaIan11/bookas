"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { BookingForm } from '@/types';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectGroup, 
  SelectLabel, 
  SelectItem, 
  SelectSeparator 
} from './ui/select';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedService = '',
}: BookingModalProps) {
  // Controlled form state
  const [form, setForm] = useState<BookingForm>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  // Validation error state
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  // Sync selected service when modal opens or selectedService changes
  useEffect(() => {
    if (isOpen) {
      setForm({
        name: '',
        phone: '',
        service: selectedService,
        date: '',
        time: '',
        message: '',
      });
      setErrors({});
      setHasSubmittedOnce(false);
    }
  }, [isOpen, selectedService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Run validation checks
  const validate = useCallback(() => {
    const newErrors: Partial<Record<keyof BookingForm, string>> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.date) {
      newErrors.date = "Preferred date is required";
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
      }
    }
    if (!form.time) newErrors.time = "Preferred time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form.name, form.phone, form.service, form.date, form.time]);

  // Run validation on inputs if they change after first submit attempt
  useEffect(() => {
    if (hasSubmittedOnce) {
      validate();
    }
  }, [form, hasSubmittedOnce, validate]);

  const handleSubmit = () => {
    setHasSubmittedOnce(true);
    if (!validate()) return;

    // Create the formatted WhatsApp booking message
    const messageText = `Hello Bookas Cleaning Service! 👋

I'd like to book a service:

📋 Name: ${form.name.trim()}
📞 Phone: ${form.phone.trim()}
🧹 Service: ${form.service}
📅 Date: ${form.date}
⏰ Preferred Time: ${form.time}${form.message.trim() ? `\n💬 Message: ${form.message.trim()}` : ''}

Please confirm my booking. Thank you!`;

    // Open WhatsApp in a new tab
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
    
    // Close the modal
    onClose();
  };

  // Get current date in YYYY-MM-DD format for date input minimum constraint
  const getTodayString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Backdrop Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white w-full max-w-[480px] rounded-t-3xl md:rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh] md:max-h-[85vh] overflow-hidden mx-0 md:mx-4 border border-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="flex flex-col select-none">
                  <span className="text-xl font-extrabold text-sky-500 tracking-tight leading-none">Bookas</span>
                  <span className="text-[8px] uppercase font-bold tracking-widest text-slate-400">Cleaning Service</span>
                </div>
                <div className="h-4 w-px bg-slate-200 mx-1" />
                <h3 className="font-extrabold text-slate-800 text-lg">Book a Service</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="px-6 py-6 overflow-y-auto space-y-5 flex-1">
              
              {/* Name field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. John Doe"
                  className={`w-full text-slate-700 bg-white border ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                  } py-2.5 px-4 h-11 rounded-xl text-sm focus:outline-hidden focus:ring-3 transition-all`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-semibold mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="e.g. 0712 345678"
                  className={`w-full text-slate-700 bg-white border ${
                    errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                  } py-2.5 px-4 h-11 rounded-xl text-sm focus:outline-hidden focus:ring-3 transition-all`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-semibold mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service Select field (Shadcn Select) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Service *
                </label>
                <Select
                  value={form.service}
                  onValueChange={(val) => setForm(prev => ({ ...prev, service: val || '' }))}
                >
                  <SelectTrigger 
                    className={`w-full text-slate-700 bg-white border ${
                      errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                    } py-2.5 px-4 h-11 rounded-xl text-sm focus:outline-hidden focus:ring-3 transition-all text-left flex items-center justify-between font-normal`}
                  >
                    <SelectValue placeholder="Choose a cleaning service..." />
                  </SelectTrigger>
                  
                  <SelectContent className="bg-white border border-slate-150 shadow-xl rounded-xl p-1 z-50 max-h-60 overflow-y-auto w-full md:max-w-[432px]">
                    <SelectGroup>
                      <SelectLabel className="font-bold text-xs text-slate-400 tracking-wider uppercase px-2.5 py-1.5">
                        Auto Detailing
                      </SelectLabel>
                      <SelectItem value="Interior Wash" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Interior Wash
                      </SelectItem>
                      <SelectItem value="Exterior Wash" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Exterior Wash
                      </SelectItem>
                      <SelectItem value="Detailing" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Detailing
                      </SelectItem>
                      <SelectItem value="Engine Wash" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Engine Wash
                      </SelectItem>
                      <SelectItem value="Polishing" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Polishing
                      </SelectItem>
                      <SelectItem value="Buffing" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Buffing
                      </SelectItem>
                      <SelectItem value="Underwash" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Underwash
                      </SelectItem>
                      <SelectItem value="Vacuum" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Vacuum
                      </SelectItem>
                    </SelectGroup>
                    <SelectSeparator className="my-1 border-slate-100" />
                    <SelectGroup>
                      <SelectLabel className="font-bold text-xs text-slate-400 tracking-wider uppercase px-2.5 py-1.5">
                        Home & Office Cleaning
                      </SelectLabel>
                      <SelectItem value="Sofa Cleaning" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Sofa Cleaning
                      </SelectItem>
                      <SelectItem value="Carpets" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Carpets Cleaning
                      </SelectItem>
                      <SelectItem value="Office & Home" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Office & Home Cleaning
                      </SelectItem>
                      <SelectItem value="Windows" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Windows Cleaning
                      </SelectItem>
                      <SelectItem value="Leather" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Leather Treatment
                      </SelectItem>
                      <SelectItem value="Spray" className="rounded-lg hover:bg-slate-50 cursor-pointer py-2 px-3 text-slate-700 text-sm">
                        Spray Sanitization
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-xs font-semibold mt-1">{errors.service}</p>
                )}
              </div>

              {/* Date field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  min={getTodayString()}
                  value={form.date}
                  onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))}
                  className={`w-full text-slate-700 bg-white border ${
                    errors.date ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                  } py-2.5 px-4 h-11 rounded-xl text-sm focus:outline-hidden focus:ring-3 transition-all`}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs font-semibold mt-1">{errors.date}</p>
                )}
              </div>

              {/* Time field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm(prev => ({ ...prev, time: e.target.value }))}
                  className={`w-full text-slate-700 bg-white border ${
                    errors.time ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
                  } py-2.5 px-4 h-11 rounded-xl text-sm focus:outline-hidden focus:ring-3 transition-all`}
                />
                {errors.time && (
                  <p className="text-red-500 text-xs font-semibold mt-1">{errors.time}</p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Special Instructions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Any details we should know? e.g. location, specific vehicle details..."
                  className="w-full text-slate-700 bg-white border border-slate-200 focus:border-sky-500 focus:ring-sky-100 py-2.5 px-4 rounded-xl text-sm focus:outline-hidden focus:ring-3 transition-all resize-none"
                />
              </div>

            </div>

            {/* Form Submit Footer */}
            <div className="px-6 py-5 bg-slate-50 border-t border-slate-100 shrink-0">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 rounded-xl text-sm shadow-md hover:shadow-emerald-950/10 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book via WhatsApp 💬</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
