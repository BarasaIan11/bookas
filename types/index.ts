import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: 'auto' | 'home';
  featured: boolean;           // true for top 3 hero row services
  image?: string;              // Unsplash URL for featured services
}

export interface BookingForm {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
