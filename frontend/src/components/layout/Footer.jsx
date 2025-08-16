import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Heart className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">MedDrop</span>
            </div>
            <p className="text-gray-400">
              Where your surplus becomes someone's solution. Connecting communities to reduce medical waste and improve healthcare access for all.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">How It Works</a></li>
              <li><a href="#" className="hover:text-white">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-white">Partner Organizations</a></li>
              <li><a href="#" className="hover:text-white">Volunteer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 123456789</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>help@meddrop.org</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Goa, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MedDrop. All rights reserved. Where your surplus becomes someone's solution.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;