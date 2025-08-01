import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import heroImage from '../assets/about-hero.jpg';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-aos="fade-up">
            About Tridevi Tech
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-100" data-aos="fade-up" data-aos-delay="200">
            At Tridevi Tech, we specialize in building robust SaaS platforms, designing revenue-driven digital
            marketing strategies, and managing e-commerce stores that scale. Our team is driven by a passion
            for innovation and impact.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.2),transparent)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-3">Our Vision</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              To empower small and medium-sized businesses around the globe with scalable digital solutions that
              simplify operations and fuel growth.
            </p>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-3">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              To build innovative SaaS tools, deliver ROI-focused digital marketing, and manage modern e-commerce
              platforms that help our clients succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-2xl font-semibold text-stone-800 mb-10" data-aos="fade-up">
          Meet the Team
        </h2>

        <div className="flex justify-center gap-16 flex-wrap" data-aos="fade-up" data-aos-delay="200">
          {/* Sonu Patel */}
          <Link to="/sonu" className="text-center group">
            <img
              src="/team/sonu.jpeg"
              alt="Sonu Patel"
              className="w-52 h-52 rounded-full object-cover object-center mx-auto shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-bold text-emerald-700 group-hover:underline">
              Sonu Patel
            </h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </Link>

          {/* Hetasvi Gheewala */}
          <Link to="/hetasvi" className="text-center group">
            <img
              src="/team/Hetasvi_Gheewala.jpeg"
              alt="Hetasvi Gheewala"
              className="w-52 h-52 rounded-full object-cover object-center mx-auto shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-bold text-emerald-700 group-hover:underline">
              Hetasvi Gheewala
            </h3>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
