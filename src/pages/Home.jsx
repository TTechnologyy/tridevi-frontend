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
      description: 'We design scalable, user-friendly software platforms tailored to your business needs.',
      image: saasImg,
      link: '/saas'
    },
    {
      title: 'Digital Marketing',
      description: 'From SEO to paid ads, we craft strategies that drive real conversions.',
      image: marketingImg,
      link: '/marketing'
    },
    {
      title: 'E-Commerce Management',
      description: 'Empowering businesses with listings, payments, and streamlined workflows.',
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
            We Build Digital Brilliance for Ambitious Brands
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg md:text-xl mb-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
            At TrideviTech, we turn your ideas into powerful software. Whether it’s SaaS, Marketing, or E-Commerce, we bring clarity, creativity, and execution to every pixel.
          </p>
          <button
            onClick={handleConsultationClick}
            className="px-8 py-3 bg-emerald-600 text-white text-lg rounded-md hover:bg-emerald-700 transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Book Your Free Consultation
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-stone-800" data-aos="fade-up">Why Choose TrideviTech?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Tailored Solutions</h3>
            <p className="text-gray-600">We don’t do templates. Every solution is built from scratch to meet your unique goals.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Modern, Scalable Tech</h3>
            <p className="text-gray-600">From sleek frontends to powerful backends, we use the latest tech to future-proof your product.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Reliable & Fast Communication</h3>
            <p className="text-gray-600">We act like an extension of your team—you’re never left guessing.</p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="bg-emerald-50 py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-6" data-aos="fade-up">
          Our Core Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg mb-10" data-aos="fade-up" data-aos-delay="200">
          Explore what we offer across SaaS Development, Digital Marketing, and E-Commerce Automation.
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