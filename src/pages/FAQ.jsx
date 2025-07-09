import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true});
  }, []);

  const faqs = [
    {
      question: 'How long will my project take?',
      answer: 'Timelines vary based on scope, but most projects are completed in 2–6 weeks. We deliver fast without cutting corners.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use React, Angular, Node.js, Spring Boot, Firebase, Tailwind CSS, and more, based on what fits your needs best.'
    },
    {
      question: 'Do you offer post-launch support?',
      answer: 'Yes. We include post-launch support in every package and offer affordable long-term maintenance options.'
    },
    {
      question: 'Can you work with international clients?',
      answer: 'Absolutely. We’ve worked with clients across multiple time zones using Zoom, Slack, and Asana for seamless collaboration.'
    },
    {
      question: 'Do I need to know tech to work with you?',
      answer: 'Not at all. We break down everything clearly and guide you through the process from idea to launch.'
    },
    {
      question: 'What’s the pricing model?',
      answer: 'We offer both fixed-price and milestone-based contracts, depending on your preferences and project scope.'
    }
  ];

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">Frequently Asked Questions</h1>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">{faq.question}</h3>
            <p className="text-gray-700 text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
