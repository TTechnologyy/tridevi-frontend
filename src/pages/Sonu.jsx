import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sonu() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700">
          Sonu Patel – Founder & CEO
        </h1>
        <p className="mt-2 text-gray-500 text-lg">
          Leading with vision, purpose, and compassion
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image */}
        <img
          data-aos="fade-up"
          src="/team/sonu.jpeg"
          alt="Sonu Patel"
          className="w-72 h-auto rounded-xl shadow-md object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Story Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-gray-700 max-w-2xl"
        >
          Sonu started Tridevi Tech with a vision to make tech services more accessible
          for small businesses. Coming from a family of entrepreneurs, she combined her
          technical skills and passion for marketing to build scalable solutions for modern
          businesses. She strongly believes in empowering others and fostering a collaborative
          environment for growth.
        </p>
      </div>
    </div>
  );
}
