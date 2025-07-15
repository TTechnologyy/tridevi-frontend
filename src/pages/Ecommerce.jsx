import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';
import EcommerceImage from '../assets/Ecommerece.avif'; // ✅ local image

function Ecommerce() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 text-gray-800 bg-white">
      <section className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div data-aos="fade-right">
          <img
            src={EcommerceImage}
            alt="E-Commerce Solutions"
            className="w-full h-auto rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Text */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4 text-emerald-700">E-Commerce Solutions</h2>
          <p className="text-lg max-w-xl">
            We create e-commerce platforms that do more than just sell. From elegant storefronts to seamless checkout flows,
            our goal is to turn browsers into loyal buyers. Every store is custom-built with conversion and experience in mind,
            ensuring mobile responsiveness and lightning-fast performance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Ecommerce;
