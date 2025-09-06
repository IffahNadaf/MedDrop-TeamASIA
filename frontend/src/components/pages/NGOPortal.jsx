import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const NGOPortal = () => {
  const [userType, setUserType] = useState('ngo');

  const partnerBenefits = [
    'Access to verified medicine inventory',
    'Priority matching for urgent requests',
    'Bulk medicine distribution capabilities',
    'Impact tracking and reporting tools',
    'Community outreach support'
  ];

  const partnerSteps = [
    {
      number: 1,
      title: 'Register Your Organization',
      description: 'Complete verification process with required documentation'
    },
    {
      number: 2,
      title: 'Set Up Distribution Network',
      description: 'Define your service areas and capacity'
    },
    {
      number: 3,
      title: 'Start Helping Communities',
      description: 'Receive matched donations and distribute to those in need'
    }
  ];

  const organizationTypes = [
    {
      id: 'ngo',
      title: 'NGO/Charity',
      description: 'Non-profit organizations'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Center',
      description: 'Clinics and medical centers'
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy/Hospital',
      description: 'Pharmacies with overstock'
    }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-3xl font-bold mb-6">NGO & Partner Dashboard</h2>
        <p className="text-gray-600 mb-8">
          Partner with MedDrop to expand your healthcare outreach programs and help distribute 
          essential medications to communities in need.
        </p>
        
        {/* User Type Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Select Your Organization Type</h3>
          <div className="grid md:grid-cols-3 gap-4 text-white">
            {organizationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setUserType(type.id)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  userType === type.id
                    ? 'border-blue-800 bg-blue-50 text-white'
                    : 'border-gray-200 hover:border-blue-700'
                }`}
              >
                <div className="font-semibold mb-1">{type.title}</div>
                <div className="text-sm text-gray-300">{type.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Partner Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Partner Benefits</h3>
            <ul className="space-y-3">
              {partnerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">How to Partner</h3>
            <div className="space-y-4">
              {partnerSteps.map((step) => (
                <div key={step.number} className="flex items-start">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="mb-2">
            Apply for Partnership
          </Button>
          <p className="text-sm text-gray-600">
            Already a partner? <a href="#" className="text-blue-600 hover:underline">Sign in to your dashboard</a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default NGOPortal;
