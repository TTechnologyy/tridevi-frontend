import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';

export default function SaaS() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-16 gap-10 bg-white">
      {/* Left Side – Image */}
      <Fade direction="left" triggerOnce>
        <img
          src="/saas.jpg"
          alt="SaaS Development"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </Fade>

      {/* Right Side – Text */}
      <Fade direction="right" triggerOnce>
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-4 text-emerald-600">SaaS Development</h2>
          <p className="text-lg leading-relaxed">
            We design scalable SaaS (Software as a Service) products tailored to your market.
            Our services include seamless frontend user experiences, efficient backend systems,
            cloud hosting, user management, and continuous performance tracking to help your product grow.
          </p>
        </div>
      </Fade>
    </div>
  );
}
