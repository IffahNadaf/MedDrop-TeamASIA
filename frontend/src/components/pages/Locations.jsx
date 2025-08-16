import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { LOCATIONS } from '../../data/constants';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Locations = () => {
  return (
    <div className="space-y-8 max-w-full overflow-x-hidden">
      <Card>
        <h2 className="text-3xl font-bold mb-6">Donation & Pickup Locations</h2>
        
        <div className="grid gap-6">
          {LOCATIONS.map((location, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-gray-600">{location.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Need a Pickup?</h3>
          <p className="text-gray-700 mb-4">
            Can't make it to one of our locations? We offer free pickup service for donations within Tokyo. 
            Simply schedule a pickup and we'll come to you.
          </p>
          <Button>
            Schedule Pickup
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Locations;