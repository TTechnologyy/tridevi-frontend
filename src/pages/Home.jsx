/* global gtag */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

import saasImg from '../assets/SaaS.jpeg';
import marketingImg from '../assets/DMarketing.jpeg';
import ecommerceImg from '../assets/EComm.jpeg';
import bgVideo from '../assets/AdobeStock_503241310_Video_HD_Preview.mov';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'test_event_click', {
        event_category: 'debug',
        event_label: 'Triggered from useEffect',
      });
      console.log('✅ test_event_click fired');
    } else {
      console.warn('❌ gtag is not defined');
    }
  }, []);

  const handleConsultationClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'book_consultation_click', {
        event_category: 'engagement',
        event_label: 'Home Page CTA',
      });
      console.log('✅ book_consultation_click fired');
    } else {
      console.warn('❌ gtag is not defined');
    }
    navigate('/consultation');
  };

  const services = [
    {
      title: 'SaaS Development',
      description: 'Custom software that evolves with your business. Scalable. Intuitive. Secure.',
      image: saasImg,
      link: '/saas'
    },
    {
      title: 'Digital Marketing',
      description: 'Grow your brand with SEO, paid ads, and compelling content strategies that convert.',
      image: marketingImg,
      link: '/marketing'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Streamline your online store with optimized product listings, payment systems, and automation.',
      image: ecommerceImg,
      link: '/ecommerce'
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-24 text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <Sparkles className="text-emerald-400 w-12 h-12 mb-4 animate-bounce mx-auto" data-aos="fade-down" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up">
            Crafting Digital Products That Elevate Brands
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg md:text-xl mb-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
            From SaaS platforms to full-scale marketing and online stores, TrideviTech helps you build, launch, and grow with confidence.
          </p>
          <button
            onClick={handleConsultationClick}
            className="px-8 py-3 bg-emerald-600 text-white text-lg rounded-md hover:bg-emerald-700 transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Let’s Talk About Your Project
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-stone-800" data-aos="fade-up">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Tailored, Not Templated</h3>
            <p className="text-gray-600">We dive deep into your goals and craft unique, purpose-driven solutions. No one-size-fits-all.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Future-Ready Technology</h3>
            <p className="text-gray-600">Our stack is built for growth—responsive UIs, fast APIs, and cloud-based architecture.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Clear Communication</h3>
            <p className="text-gray-600">We collaborate closely and keep you in the loop—from kickoff to deployment and beyond.</p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="bg-emerald-50 py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-6" data-aos="fade-up">
          What We Do
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg mb-10" data-aos="fade-up" data-aos-delay="200">
          We help you launch, grow, and automate your digital presence with services built around your vision.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Link
              key={idx}
              to={service.link}
              data-aos="zoom-in"
              className="group relative p-6 bg-white border rounded-xl shadow hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}