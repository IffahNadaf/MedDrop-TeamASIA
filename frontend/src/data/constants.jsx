import { Heart, Users, Shield, MapPin } from 'lucide-react';

export const TARGET_USERS = [
  {
    title: "Individuals with Surplus Medicine",
    description: "People with unused, non-expired medicines who want to help others",
    icon: Heart,
    color: "blue"
  },
  {
    title: "Patients & Families in Need",
    description: "Individuals facing financial barriers to accessing essential medications",
    icon: Users,
    color: "green"
  },
  {
    title: "NGOs & Healthcare Centers",
    description: "Organizations working to improve healthcare access in communities",
    icon: Shield,
    color: "purple"
  },
  {
    title: "Pharmacies & Hospitals",
    description: "Healthcare facilities with overstock looking to help the community",
    icon: MapPin,
    color: "orange"
  }
];

export const ACCEPTABLE_MEDICINES = [
  'Prescription medications (unopened, unexpired)',
  'Over-the-counter medications',
  'Insulin and diabetic supplies',
  'Inhalers and respiratory medications',
  'Blood pressure medications',
  'Antibiotics (complete courses only)'
];

export const UNACCEPTABLE_MEDICINES = [
  'Opened or damaged containers',
  'Expired medications',
  'Controlled substances',
  'Liquid medications (opened)',
  'Compounded medications',
  'Temperature-sensitive drugs (if storage compromised)'
];

export const LOCATIONS = [
  { 
    name: 'Central Medical Center', 
    address: '123 Health St, Margao', 
    hours: '9AM - 6PM', 
    contact: '03-1234-5678' 
  },
  { 
    name: 'Community Pharmacy Network', 
    address: 'shop.no 456 18 June Road, Panjim', 
    hours: '8AM - 8PM', 
    contact: '03-2345-6789' 
  },
  { 
    name: 'Metropolitan Hospital', 
    address: '789 Wellness Blvd, Canacona', 
    hours: '24/7', 
    contact: '03-3456-7890' 
  }
];

export const SAMPLE_MEDICINES = [
  { 
    name: 'Lisinopril 10mg', 
    quantity: '60 tablets', 
    location: 'Central Medical Center', 
    expires: '2025-12-15' 
  },
  { 
    name: 'Metformin 500mg', 
    quantity: '90 tablets', 
    location: 'Community Pharmacy', 
    expires: '2025-11-30' 
  },
  { 
    name: 'Albuterol Inhaler', 
    quantity: '2 inhalers', 
    location: 'Metropolitan Hospital', 
    expires: '2025-10-20' 
  },
  { 
    name: 'Atorvastatin 20mg', 
    quantity: '30 tablets', 
    location: 'Central Medical Center', 
    expires: '2026-01-10' 
  },
  { 
    name: 'Omeprazole 20mg', 
    quantity: '45 capsules', 
    location: 'Community Pharmacy', 
    expires: '2025-09-25' 
  },
  { 
    name: 'Amlodipine 5mg', 
    quantity: '90 tablets', 
    location: 'Metropolitan Hospital', 
    expires: '2025-12-05' 
  }
];