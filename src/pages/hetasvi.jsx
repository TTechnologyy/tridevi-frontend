import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hetasvi() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700">
          Hetasvi Gheewala – Full Stack Developer
        </h1>
        <p className="mt-2 text-gray-500 text-lg">
          Building scalable solutions with innovation and precision
        </p>
      </div>

      {/* Profile Section */}
      <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image */}
        <img
          data-aos="fade-up"
          src="/team/Hetasvi_Gheewala.jpeg"
          alt="Hetasvi Gheewala"
          className="w-72 h-72 rounded-xl shadow-md object-cover object-center transition-transform duration-500 hover:scale-105"
          onError={(e) => (e.target.src = '/fallback-profile.png')}
        />

        {/* About Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-gray-700 max-w-2xl leading-relaxed"
        >
          Hetasvi is a Full Stack Developer at Tridevi Tech, passionate about creating efficient,
          user-friendly web applications. With a background in Mathematics and Computer Science,
          she specializes in building scalable SaaS platforms, integrating APIs, and optimizing
          system performance. Driven by curiosity and innovation, Hetasvi thrives on solving complex
          problems and contributing to impactful projects that empower businesses to grow and succeed.
        </p>
      </div>
    </div>
  );
}
