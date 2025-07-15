import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';
import DMarket from '../assets/DMarket.png'; // ✅ local image

export default function DigitalMarketing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 text-gray-800 bg-white">
      <section className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div data-aos="fade-right">
          <img
            src={DMarket}
            alt="Digital Marketing"
            className="w-full h-auto rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Text */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4 text-emerald-700">Digital Marketing</h2>
          <p className="text-lg max-w-xl">
            Our marketing team builds compelling strategies using SEO, social media, content marketing,
            and analytics to help you reach the right audience and drive business growth.
          </p>
        </div>
      </section>
    </div>
  );
}
