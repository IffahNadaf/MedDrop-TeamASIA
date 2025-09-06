import React from 'react';
import { Heart } from 'lucide-react';

const Header = ({ activeTab, setActiveTab, TabButton }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
              <Heart className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MedDrop</h1>
              <p className="text-sm text-gray-600">Where your surplus becomes someone's solution</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <TabButton id="home" label="Home" icon={Heart} />
            <TabButton id="donate" label="Donate" icon={Heart} />
            <TabButton id="request" label="Request" icon={Heart} />
            <TabButton id="ngo" label="NGO Portal" icon={Heart} />
            <TabButton id="locations" label="Locations" icon={Heart} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;