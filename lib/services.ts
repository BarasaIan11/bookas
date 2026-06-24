import { 
  Sparkles, 
  Droplets, 
  ShieldCheck, 
  Settings, 
  Wand2, 
  RefreshCw, 
  ArrowDown, 
  Wind, 
  Armchair, 
  Grid, 
  Home, 
  Brush, 
  Layers 
} from 'lucide-react';
import { Service } from '@/types';

export const servicesData: Service[] = [
  // AUTO DETAILING
  {
    id: "interior-wash",
    name: "Interior Wash",
    description: "Deep clean of seats, dashboard, panels, and all interior surfaces for a fresh cabin feel.",
    icon: Sparkles,
    category: "auto",
    featured: true,
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&q=80&auto=format"
  },
  {
    id: "exterior-wash",
    name: "Exterior Wash",
    description: "Full exterior wash and drying process leaving your car body and wheels spotless.",
    icon: Droplets,
    category: "auto",
    featured: false
  },
  {
    id: "detailing",
    name: "Detailing",
    description: "Complete professional bumper-to-bumper detailing inside and out, restoring your car's original glory.",
    icon: ShieldCheck,
    category: "auto",
    featured: true,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80&auto=format"
  },
  {
    id: "engine-wash",
    name: "Engine Wash",
    description: "Safe, expert cleaning of the engine bay, removing dust, oil, and grime.",
    icon: Settings,
    category: "auto",
    featured: false
  },
  {
    id: "polishing",
    name: "Polishing",
    description: "Professional paint correction that restores your car's paintwork to a mirror-like shine.",
    icon: Wand2,
    category: "auto",
    featured: false
  },
  {
    id: "buffing",
    name: "Buffing",
    description: "High-grade machine buffing to remove light scratches, oxidation, and swirl marks.",
    icon: RefreshCw,
    category: "auto",
    featured: false
  },
  {
    id: "underwash",
    name: "Underwash",
    description: "High-pressure undercarriage washing to clean off mud, road salts, and prevent rust.",
    icon: ArrowDown,
    category: "auto",
    featured: false
  },
  {
    id: "vacuum",
    name: "Vacuum",
    description: "Intense interior vacuuming including seats, carpets, trunk, and hard-to-reach crevices.",
    icon: Wind,
    category: "auto",
    featured: false
  },

  // HOME & OFFICE
  {
    id: "sofa-cleaning",
    name: "Sofa Cleaning",
    description: "Deep hot-water extraction and steam cleaning for all types of upholstery fabric and sofas.",
    icon: Armchair,
    category: "home",
    featured: true,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format"
  },
  {
    id: "carpets",
    name: "Carpets",
    description: "Thorough steam extraction to eliminate deep-seated dust mites, stains, and odors from carpets.",
    icon: Grid,
    category: "home",
    featured: false
  },
  {
    id: "office-home",
    name: "Office & Home",
    description: "Comprehensive cleaning routines for residential spaces and commercial business offices.",
    icon: Home,
    category: "home",
    featured: false
  },
  {
    id: "windows",
    name: "Windows",
    description: "Streak-free, crystal-clear cleaning for both interior and exterior window glasses.",
    icon: Brush,
    category: "home",
    featured: false
  },
  {
    id: "leather",
    name: "Leather",
    description: "Specialized leather treatment including gentle cleaning and premium conditioning creams.",
    icon: Layers,
    category: "home",
    featured: false
  },
  {
    id: "spray",
    name: "Spray",
    description: "Deep sanitization and eco-safe disinfectant spray treatments for homes and workspaces.",
    icon: Sparkles,
    category: "home",
    featured: false
  }
];
