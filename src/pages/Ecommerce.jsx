import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';
import {
  ShoppingCart,
  LayoutTemplate,
  Smartphone,
  Zap
} from 'lucide-react';
import EcommerceImage from '../assets/Ecommerece.png';

export default function Ecommerce() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const highlights = [
    {
      icon: <ShoppingCart className="text-emerald-600 w-6 h-6" />,
      title: 'Custom Storefronts',
    },
    {
      icon: <LayoutTemplate className="text-emerald-600 w-6 h-6" />,
      title: 'Seamless Checkout',
    },
    {
      icon: <Smartphone className="text-emerald-600 w-6 h-6" />,
      title: 'Mobile-First Design',
    },
    {
      icon: <Zap className="text-emerald-600 w-6 h-6" />,
      title: 'Lightning Performance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side – Image */}
        <Fade direction="left" triggerOnce>
          <img
            src={EcommerceImage}
            alt="E-Commerce Solutions"
            className="w-full h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </Fade>

        {/* Right Side – Text */}
        <Fade direction="right" triggerOnce>
          <div className="text-gray-800">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 text-transparent bg-clip-text leading-[1.2] animate-pulse">
              E-Commerce Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-xl">
              We design high-converting online stores that go beyond basic transactions.
              Our platforms combine sleek design, mobile optimization, and smooth checkout flows
              to turn visitors into loyal customers.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white hover:bg-emerald-50 p-3 rounded-lg transition-transform transform hover:scale-105 shadow hover:shadow-md cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {item.icon}
                  <span className="font-medium text-sm text-gray-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
