import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: '',
    budget: '',
    message: '',
    agree: false,
  });

  const [submittedName, setSubmittedName] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) return alert('Please agree to the terms before submitting.');
    try {
      await axios.post('https://tridevi-backend-production.up.railway.app/api/contact', formData);
      setSubmittedName(formData.name);
      setSuccessModal(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        service: '',
        budget: '',
        message: '',
        agree: false,
      });
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-2">Real Impact, Real Results</h2>
      <p className="text-center text-gray-700 text-lg mb-6">Partner with us today</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            className="w-full px-4 py-2 border rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="w-full px-4 py-2 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="w-full">
            <PhoneInput
              country={'us'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phone',
                required: true,
              }}
              inputClass="!w-full !h-[48px] !pl-14 !pr-4 !text-gray-800 !border !border-gray-300 !rounded focus:!outline-none"
              buttonClass="!bg-white !border !border-gray-300 !rounded-l"
              enableSearch
            />
          </div>
          <input
            type="text"
            name="website"
            placeholder="Website URL"
            className="w-full px-4 py-2 border rounded"
            value={formData.website}
            onChange={handleChange}
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select Services*</option>
            <option value="saas">SaaS Development</option>
            <option value="marketing">Digital Marketing</option>
            <option value="ecommerce">E-Commerce Solutions</option>
          </select>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select Budget*</option>
            <option value="<$1k">Less than $1,000</option>
            <option value="$1k-$5k">$1,000 - $5,000</option>
            <option value=">$5k">More than $5,000</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="w-full px-4 py-2 border rounded"
          value={formData.message}
          onChange={handleChange}
        />

        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
          />
          I agree with{' '}
          <a href="/terms" className="underline text-blue-600">Terms & Conditions</a>{' '}and{' '}
          <a href="/privacy" className="underline text-blue-600">Privacy Policy</a>
        </label>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Submit
        </button>
      </form>

      {successModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <div className="text-green-600 text-lg font-semibold mb-2">✅ Request Received</div>
            <p className="text-gray-800 mb-4">
              Thank you <strong>{submittedName}</strong>! We'll contact you shortly.
            </p>
            <button
              onClick={() => setSuccessModal(false)}
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
