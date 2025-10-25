
import React, { useState } from 'react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 pr-8">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};


const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the typical timeline for a web development project?",
      answer: "A typical project takes between 6 to 12 weeks, depending on the complexity and scope. We start with a discovery phase, followed by design, development, testing, and deployment. We'll provide a detailed timeline after our initial consultation."
    },
    {
      question: "How much does a new website cost?",
      answer: "The cost varies greatly depending on the project's requirements. A simple marketing website might start around $5,000, while a complex web application or e-commerce site can be significantly more. We provide a detailed, itemized quote after understanding your needs."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer various support and maintenance packages to ensure your website remains secure, up-to-date, and performs optimally. We can discuss these options based on your specific needs."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. All websites we build are fully responsive, meaning they will look great and function perfectly on all devices, including desktops, tablets, and smartphones. This is a standard part of our development process."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-slate-600">
              Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
