import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';

function Ecommerce() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 text-gray-800 bg-white">
      <section className="mb-20">
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl font-bold mb-4 text-emerald-700">E-Commerce Solutions</h2>
          <p className="text-lg max-w-3xl mb-6">
            We create e-commerce platforms that do more than just sell. From elegant storefronts to seamless checkout flows, our goal is to turn browsers into loyal buyers. 
            Every store is custom-built with conversion and experience in mind, ensuring mobile responsiveness and lightning-fast performance.
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
              alt="E-Commerce Animation"
              className="w-full h-72 object-cover opacity-90 hover:scale-105 transition-transform"
            />
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default Ecommerce;
