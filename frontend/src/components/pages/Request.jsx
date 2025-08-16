import React from 'react';
import { Info } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { showSuccessMessage } from '../../utils/helpers';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';

const Request = () => {
  const initialValues = {
    medicationName: '',
    urgency: '',
    quantity: '',
    reason: '',
    contactInfo: ''
  };

  const handleRequestSubmit = async (values) => {
    console.log('Request form submitted:', values);
    showSuccessMessage('Your medicine request has been submitted! We will match you with available donations and notify you within 48 hours.');
  };

  const { values, handleChange, handleSubmit, isSubmitting } = useForm(initialValues, handleRequestSubmit);

  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-3xl font-bold mb-6">Request Medicine</h2>
        <p className="text-gray-600 mb-8">
          Need access to essential medications? Submit a request and we'll match you with available donations 
          from our community of donors.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Medication Name"
              value={values.medicationName}
              onChange={(e) => handleChange('medicationName', e.target.value)}
              placeholder="e.g., Metformin, Lisinopril, Insulin"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level <span className="text-red-500">*</span>
              </label>
              <select
                value={values.urgency}
                onChange={(e) => handleChange('urgency', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select urgency</option>
                <option value="critical">Critical (within 24 hours)</option>
                <option value="urgent">Urgent (within 1 week)</option>
                <option value="moderate">Moderate (within 2 weeks)</option>
                <option value="low">Low (within 1 month)</option>
              </select>
            </div>
          </div>
          
          <Input
            label="Quantity Needed"
            value={values.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            placeholder="e.g., 30 tablets for 1 month supply"
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Request <span className="text-red-500">*</span>
            </label>
            <textarea
              value={values.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Brief description of your medical need and financial situation"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Information <span className="text-red-500">*</span>
            </label>
            <textarea
              value={values.contactInfo}
              onChange={(e) => handleChange('contactInfo', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Name, phone number, email, and preferred contact method"
              required
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Info className="text-blue-600 mr-2" size={20} />
              <p className="text-blue-800">
                All requests are reviewed for authenticity. We may ask for medical documentation 
                or verification from a healthcare provider.
              </p>
            </div>
          </div>

          <Button
            type="submit"
            variant="success"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Medicine Request'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Request;