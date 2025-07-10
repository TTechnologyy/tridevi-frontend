/* global gtag */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, BarChart3, ShoppingCart } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePartnerClick = () => {
    gtag('event', 'partner_with_us_click', {
      event_category: 'engagement',
      event_label: 'Services Page CTA',
    });
    navigate('/consultation');
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

      {/* CTA Button to Consultation Page */}
      <section className="text-center py-14 bg-emerald-50 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-stone-800 mb-2">Ready to Take the Next Step?</h2>
        <p className="text-gray-600 mb-4 text-sm">
          Book a free consultation and let's build something great together.
        </p>
        <button
          onClick={handlePartnerClick}
          className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
        >
          Partner With Us
        </button>
      </section>
    </div>
  );
}
