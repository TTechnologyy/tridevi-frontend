import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Viren() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700">
          Viren Soni – Software & Automation Engineer
        </h1>
        <p className="mt-2 text-gray-500 text-lg">
          Innovating through precision, efficiency, and smart automation
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image */}
        <img
          data-aos="fade-up"
          src="/team/viren.jpg"
          alt="Viren Soni"
          className="w-72 h-auto rounded-xl shadow-md object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Story Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-gray-700 max-w-2xl"
        >
          Viren plays a key role at Tridevi Tech as a Software & Automation Engineer,
          focused on building intelligent systems that enhance efficiency and performance.
          With a strong foundation in computer science and a passion for automation,
          he designs scalable solutions that simplify complex processes for businesses.
          His problem-solving mindset and commitment to innovation help drive the company’s
          mission of making technology smarter and more accessible.
        </p>
      </div>
    </div>
  );
}
