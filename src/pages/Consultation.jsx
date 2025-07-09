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

  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      return alert('Please agree to the terms before submitting.');
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE}/api/contact`, formData);
      setSubmittedName(formData.name);
      setShowModal(true);

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
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg relative">
      <h2 className="text-3xl font-bold text-center mb-2">Real Impact, Real Results</h2>
      <p className="text-center text-gray-700 text-lg mb-6">Partner with us today</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name*" className="w-full px-4 py-2 border rounded" value={formData.name} onChange={handleChange} required />
          <input name="email" placeholder="Email*" type="email" className="w-full px-4 py-2 border rounded" value={formData.email} onChange={handleChange} required />
          <div className="w-full">
            <PhoneInput
              country={'us'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{ name: 'phone', required: true }}
              inputClass="!w-full !h-[48px] !pl-14 !pr-4 !text-gray-800 !border !border-gray-300 !rounded focus:!outline-none"
              buttonClass="!bg-white !border !border-gray-300 !rounded-l"
              enableSearch
            />
          </div>
          <input name="website" placeholder="Website URL" className="w-full px-4 py-2 border rounded" value={formData.website} onChange={handleChange} />
          <select name="service" className="w-full px-4 py-2 border rounded" value={formData.service} onChange={handleChange} required>
            <option value="">Select Services*</option>
            <option value="SaaS Development">SaaS Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="E-Commerce Solutions">E-Commerce Solutions</option>
          </select>
          <select name="budget" className="w-full px-4 py-2 border rounded" value={formData.budget} onChange={handleChange} required>
            <option value="">Select Budget*</option>
            <option value="<$1k">Less than $1,000</option>
            <option value="$1k-$5k">$1,000 - $5,000</option>
            <option value=">$5k">More than $5,000</option>
          </select>
        </div>

        <textarea name="message" rows="4" placeholder="Message" className="w-full px-4 py-2 border rounded" value={formData.message} onChange={handleChange} />

        <label className="flex items-center text-sm">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="mr-2" required />
          I agree with <a href="/terms" className="underline text-blue-600">Terms & Conditions</a> and <a href="/privacy" className="underline text-blue-600">Privacy Policy</a>
        </label>

        <button type="submit" className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-900 transition">
          Submit
        </button>
      </form>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-xl">
            <div className="text-green-600 text-lg font-semibold mb-2">✅ Request Received</div>
            <p className="text-sm text-gray-700 mb-4">
              Thank you <span className="font-semibold">{submittedName}</span>! We'll contact you shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
