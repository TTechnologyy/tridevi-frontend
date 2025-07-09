import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Briefcase, BarChart3, ShoppingCart } from 'lucide-react';
import axios from 'axios';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tridevi-backend-production.up.railway.app/api/contact', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', website: '', service: '', budget: '', message: '' });
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
  };

  const services = [
    {
      title: 'SaaS Development',
      description: 'We design scalable, user-friendly software platforms tailored to your business needs.',
      features: ['Custom Dashboards', 'Role-Based Access', 'Cloud Integration'],
      link: '/saas',
      icon: <Briefcase size={32} className="text-emerald-600 mb-3" />,
    },
    {
      title: 'Digital Marketing',
      description: 'From SEO to paid ads, we craft strategies that drive real conversions.',
      features: ['SEO & Content', 'Email Funnels', 'Analytics Tracking'],
      link: '/marketing',
      icon: <BarChart3 size={32} className="text-emerald-600 mb-3" />,
    },
    {
      title: 'E-Commerce Management',
      description: 'Empowering businesses with product listings, payment systems, and streamlined workflows.',
      features: ['Shopify/Woo Setup', 'Payment Integration', 'Inventory Automation'],
      link: '/ecommerce',
      icon: <ShoppingCart size={32} className="text-emerald-600 mb-3" />,
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen scroll-smooth">
      {/* Header */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-stone-800 mb-4" data-aos="fade-up">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-base" data-aos="fade-up" data-aos-delay="200">
          At Tridevi Tech, we offer a range of services tailored to modern businesses.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 pb-12 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <Link
            to={service.link}
            key={idx}
            data-aos="zoom-in"
            className="bg-white border rounded-xl shadow hover:shadow-xl transition duration-300 transform hover:scale-105 hover:border-emerald-500 p-6"
          >
            <div className="flex flex-col items-start">
              {service.icon}
              <h2 className="text-lg font-semibold text-emerald-700 mb-1">{service.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              <ul className="text-xs text-gray-500 list-disc pl-4">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <span className="mt-4 text-sm text-emerald-600 font-medium hover:underline">
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Form */}
      <section className="text-center py-10 bg-emerald-50 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-stone-800 mb-2">Book a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="p-3 border rounded" required />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded" required type="email" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="p-3 border rounded" />
          <input name="website" value={formData.website} onChange={handleChange} placeholder="Website (optional)" className="p-3 border rounded" />
          <input name="service" value={formData.service} onChange={handleChange} placeholder="Interested Service" className="p-3 border rounded" />
          <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget Range" className="p-3 border rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={4} className="p-3 border rounded"></textarea>
          <button type="submit" className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
