import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';

export default function DigitalMarketing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 text-gray-800 bg-white">
      <section className="mb-20">
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl font-bold mb-4 text-emerald-700">Digital Marketing</h2>
          <p className="text-lg max-w-3xl mb-6">
            Our marketing team builds compelling strategies using SEO, social media, content marketing, and analytics to help you reach the right audience and drive business growth.
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif"
              alt="Digital Marketing Animation"
              className="w-full h-72 object-cover opacity-90 hover:scale-105 transition-transform"
            />
          </div>
        </Fade>
      </section>
    </div>
  );
}
