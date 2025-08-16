import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';
import { TARGET_USERS } from '../../data/constants';
import { getColorClasses } from '../../utils/helpers';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Home = ({ setActiveTab }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white w-full overflow-x-hidden">
        <h2 className="text-5xl font-bold mb-6">Where Your Surplus Becomes Someone's Solution</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          MedDrop bridges the gap between medicine donors and people in need. Join our platform to donate 
          unused medications or request essential medicines for you and your community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="text-white hover:text-blue-600"
            onClick={() => setActiveTab('donate')}
            variant="secondary"
            size="lg" 
          >
            Donate Medicine
          </Button>
          <Button className="text-white"
            onClick={() => setActiveTab('request')}
            variant="outline"
            size="lg"
          >
            Request Medicine
          </Button>
        </div>
      </div>

      {/* Target Users */}
      <Card>
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Who We Serve</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_USERS.map((user, index) => {
            const colors = getColorClasses(user.color);
            return (
              <div key={index} className={`text-center p-6 rounded-xl ${colors.bg} ${colors.border} border`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colors.icon}`}>
                  <user.icon className={colors.text} size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-black">{user.title}</h4>
                <p className="text-gray-600 text-sm">{user.description}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
          <p className="text-gray-700">Medications Donated</p>
        </Card>
        <Card className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">0</div>
          <p className="text-gray-700">People Helped</p>
        </Card>
        <Card className="text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
          <p className="text-gray-700">Healthcare Costs Saved</p>
        </Card>
      </div>

      {/* How It Works */}
      <Card>
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-blue-600" size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-black">1. Register Donation/Request</h4>
            <p className="text-gray-600">Submit details about your unused medications or medical needs through our secure platform</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-green-600" size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-black">2. Smart Matching & Verification</h4>
            <p className="text-gray-600">Our system matches donors with requesters and verifies medicine safety and authenticity</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-black">3. Connect & Help</h4>
            <p className="text-gray-600">Get notified of matches and help distribute verified medications to those in need</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;