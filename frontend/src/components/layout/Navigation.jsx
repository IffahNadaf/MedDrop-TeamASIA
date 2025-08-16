import React from 'react';
import { Heart, Users, Search, Shield, MapPin } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
        activeTab === id
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-white text-white hover:bg-blue-50 hover:text-blue-800 border-gray-200'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <TabButton id="home" label="Home" icon={Heart} />
        <TabButton id="donate" label="Donate" icon={Users} />
        <TabButton id="request" label="Request" icon={Search} />
        <TabButton id="ngo" label="NGO Portal" icon={Shield} />
        <TabButton id="locations" label="Locations" icon={MapPin} />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t px-4 py-2 flex overflow-x-auto space-x-2">
        <TabButton id="home" label="Home" icon={Heart} />
        <TabButton id="donate" label="Donate" icon={Users} />
        <TabButton id="request" label="Request" icon={Search} />
        <TabButton id="ngo" label="NGO" icon={Shield} />
        <TabButton id="locations" label="Locations" icon={MapPin} />
      </div>
    </>
  );
};

export default Navigation;