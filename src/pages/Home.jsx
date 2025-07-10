/* global gtag */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'test_event_click', {
      event_category: 'debug',
      event_label: 'Triggered from useEffect',
    });
  } else {
    console.warn('gtag is not defined');
  }
}, []);

  const handleConsultationClick = () => {
    gtag('event', 'book_consultation_click', {
      event_category: 'engagement',
      event_label: 'Home Page CTA',
    });
    navigate('/consultation');
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-24 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-emerald-100 to-transparent opacity-30 pointer-events-none"></div>
        <Sparkles className="text-emerald-500 w-10 h-10 mb-4 animate-bounce" data-aos="fade-down" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-stone-800 mb-6 leading-tight z-10" data-aos="fade-up">
          We Build Digital Brilliance for Ambitious Brands
        </h1>
        <p className="max-w-2xl text-gray-600 text-lg md:text-xl mb-8 z-10" data-aos="fade-up" data-aos-delay="200">
          At TrideviTech, we turn your ideas into powerful software. Whether it’s SaaS, Marketing, or E-Commerce, we bring clarity, creativity, and execution to every pixel.
        </p>
        <button
          onClick={handleConsultationClick}
          className="px-8 py-3 bg-emerald-600 text-white text-lg rounded-md hover:bg-emerald-700 transition z-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Book Your Free Consultation
        </button>
      </section>

      {/* Why Us */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-stone-800" data-aos="fade-up">Why Choose TrideviTech?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
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

      {/* Services CTA */}
      <section className="bg-emerald-50 py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-6" data-aos="fade-up">
          Our Core Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg mb-10" data-aos="fade-up" data-aos-delay="200">
          Explore what we offer across SaaS Development, Digital Marketing, and E-Commerce Automation.
        </p>
        <Link
          to="/services"
          className="inline-block px-8 py-3 bg-emerald-600 text-white text-lg rounded-md hover:bg-emerald-700 transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          View All Services
        </Link>
      </section>

      {/* FAQ Button CTA */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-stone-800 mb-6" data-aos="fade-up">Got Questions?</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
          Want to know how long your project might take, what tools we use, or how we support you after launch?
        </p>
        <Link
          to="/faq"
          className="inline-block px-8 py-3 bg-emerald-600 text-white text-lg rounded-md hover:bg-emerald-700 transition"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          View FAQs
        </Link>
      </section>
    </div>
  );
}
