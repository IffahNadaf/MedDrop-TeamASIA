import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { ACCEPTABLE_MEDICINES, UNACCEPTABLE_MEDICINES } from '../../data/constants';
import { useForm } from '../../hooks/useForm';
import { showSuccessMessage } from '../../utils/helpers';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';

const Donate = () => {
  const initialValues = {
    medicationName: '',
    quantity: '',
    expiryDate: '',
    condition: '',
    contactInfo: ''
  };

  const handleDonationSubmit = async (values) => {
    console.log('Donation form submitted:', values);
    showSuccessMessage('Thank you for your donation request! We will contact you within 24 hours to arrange pickup.');
  };

  const { values, handleChange, handleSubmit, isSubmitting } = useForm(initialValues, handleDonationSubmit);
  
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-3xl font-bold mb-6">Donate Unused Medicine</h2>
        
        {/* Acceptable vs Unacceptable */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div className="border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-green-800">Acceptable Donations</h3>
            </div>
            <ul className="space-y-2">
              {ACCEPTABLE_MEDICINES.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-red-800">Not Acceptable</h3>
            </div>
            <ul className="space-y-2">
              {UNACCEPTABLE_MEDICINES.map((item, index) => (
                <li key={index} className="flex items-start">
                  <AlertTriangle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Medication Name"
              value={values.medicationName}
              onChange={(e) => handleChange('medicationName', e.target.value)}
              placeholder="e.g., Lisinopril 10mg"
              required
            />
            <Input
              label="Quantity"
              value={values.quantity}
              onChange={(e) => handleChange('quantity', e.target.value)}
              placeholder="e.g., 30 tablets, 1 bottle"
              required
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Expiry Date"
              type="date"
              value={values.expiryDate}
              onChange={(e) => handleChange('expiryDate', e.target.value)}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Condition <span className="text-red-500">*</span>
              </label>
              <select
                value={values.condition}
                onChange={(e) => handleChange('condition', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select condition</option>
                <option value="unopened">Unopened/Sealed</option>
                <option value="partial">Partially used</option>
                <option value="opened">Opened but unused</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Information <span className="text-red-500">*</span>
            </label>
            <textarea
              value={values.contactInfo}
              onChange={(e) => handleChange('contactInfo', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Name, phone number, email, and preferred contact method"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Donation Request'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Donate;