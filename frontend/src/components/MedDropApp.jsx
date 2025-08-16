import React, { useState } from 'react';
import { Heart, Users, Search, Shield, MapPin } from 'lucide-react';

// Import page components
import Home from './pages/Home';
import Donate from './pages/Donate';
import Request from './pages/Request';
import NGOPortal from './pages/NGOPortal';
import Locations from './pages/Locations';

// Import layout components
import Footer from './layout/Footer';

const MedDropApp = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Tab button component
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
        activeTab === id
          ? 'bg-blue-600 text-gray shadow-lg'
          : 'bg-white text-white-700 hover:bg-blue-500 border hover:text-blue-200 border-gray-200'
      }`}
    >
      <Icon size={18} />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );

  // Render current page based on active tab
  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'donate':
        return <Donate />;
      case 'request':
        return <Request />;
      case 'ngo':
        return <NGOPortal />;
      case 'locations':
        return <Locations />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Heart className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MedDrop</h1>
                <p className="text-sm text-gray-600">Where your surplus becomes someone's solution</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <TabButton id="home" label="Home" icon={Heart} />
              <TabButton id="donate" label="Donate" icon={Users} />
              <TabButton id="request" label="Request" icon={Search} />
              <TabButton id="ngo" label="NGO Portal" icon={Shield} />
              <TabButton id="locations" label="Locations" icon={MapPin} />
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t px-4 py-2 flex overflow-x-auto space-x-2 sticky top-[73px] z-40">
        <TabButton id="home" label="Home" icon={Heart} />
        <TabButton id="donate" label="Donate" icon={Users} />
        <TabButton id="request" label="Request" icon={Search} />
        <TabButton id="ngo" label="NGO" icon={Shield} />
        <TabButton id="locations" label="Locations" icon={MapPin} />
      </div>

      {/* Main Content */}
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MedDropApp;