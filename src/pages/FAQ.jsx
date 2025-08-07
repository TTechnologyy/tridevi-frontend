import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Clock, Laptop, LifeBuoy, Globe2, User, DollarSign, ChevronDown } from 'lucide-react';

export default function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long will my project take?',
      answer: 'Timelines vary based on scope, but most projects are completed in 2–6 weeks. We deliver fast without cutting corners.',
      icon: <Clock className="text-emerald-600 w-5 h-5" />
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use React, Angular, Node.js, Spring Boot, Firebase, Tailwind CSS, and more, based on what fits your needs best.',
      icon: <Laptop className="text-emerald-600 w-5 h-5" />
    },
    {
      question: 'Do you offer post-launch support?',
      answer: 'Yes. We include post-launch support in every package and offer affordable long-term maintenance options.',
      icon: <LifeBuoy className="text-emerald-600 w-5 h-5" />
    },
    {
      question: 'Can you work with international clients?',
      answer: 'Absolutely. We’ve worked with clients across multiple time zones using Zoom, Slack, and Asana for seamless collaboration.',
      icon: <Globe2 className="text-emerald-600 w-5 h-5" />
    },
    {
      question: 'Do I need to know tech to work with you?',
      answer: 'Not at all. We break down everything clearly and guide you through the process from idea to launch.',
      icon: <User className="text-emerald-600 w-5 h-5" />
    },
    {
      question: 'What’s the pricing model?',
      answer: 'We offer both fixed-price and milestone-based contracts, depending on your preferences and project scope.',
      icon: <DollarSign className="text-emerald-600 w-5 h-5" />
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-emerald-700" data-aos="fade-up">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-emerald-50 p-6 rounded-xl transition hover:shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-800">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`transition-transform ${openIndex === index ? 'rotate-180 text-emerald-600' : 'rotate-0 text-gray-400'}`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Still have questions?</p>
          <a href="/contact" className="text-emerald-600 font-semibold hover:underline">
            Reach out to us directly →
          </a>
        </div>
      </div>
    </div>
  );
}