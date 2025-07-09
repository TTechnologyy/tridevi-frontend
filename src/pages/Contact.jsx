import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Mail } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-white text-gray-800 min-h-screen px-4 py-12">
      <h1
        className="text-3xl font-bold text-center mb-10 text-stone-800"
        data-aos="fade-up"
      >
        Contact Us
      </h1>

      <section className="max-w-3xl mx-auto space-y-6">
        {/* Office Address */}
        <div
          className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <MapPin className="text-emerald-600 mt-1" size={28} />
          <address className="not-italic">
            <h2 className="text-xl font-semibold mb-1">Our Office</h2>
            <p>Tridevi Tech LLC</p>
            <p>Industrious – Millennium Park</p>
            <p>24 E Washington St, Suite 875</p>
            <p>Chicago, IL 60602, United States</p>
          </address>
        </div>

        {/* Email Contact */}
        <a
          href="mailto:tridevitechnology@gmail.com"
          className="block bg-gray-50 p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <Mail className="text-emerald-600 mt-1" size={28} />
          <div>
            <h2 className="text-xl font-semibold mb-1">Email Us</h2>
            <p className="text-gray-700">tridevitechnology@gmail.com</p>
          </div>
        </a>
      </section>

      {/* Google Map Embed */}
      <section
        className="rounded-xl overflow-hidden shadow-md mt-12 max-w-xl mx-auto"
        data-aos="fade-up"
      >
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.178946281169!2d-87.62781528455796!3d41.883896771281246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cbe420f59a7%3A0xe20cf9c1ff1cc83e!2s24%20E%20Washington%20St%2C%20Chicago%2C%20IL%2060602!5e0!3m2!1sen!2sus!4v1719485200000!5m2!1sen!2sus"
          width="100%"
          height="180"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
