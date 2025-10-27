import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900">About This Directory</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          This interactive directory is based on the "An Analysis of Oregon's Chambers of Commerce" report. It provides a comprehensive, scorable directory of Chambers across the state, evaluating them on four key domains:
          <span className="font-semibold text-green-800"> Member Services</span>,
          <span className="font-semibold text-green-800"> Community Engagement</span>,
          <span className="font-semibold text-green-800"> Advocacy</span>, and
          <span className="font-semibold text-green-800"> Organizational Health</span>.
          The goal is to offer a transparent, data-driven tool for businesses, community leaders, and residents to understand and connect with the organizations shaping Oregon's economic landscape.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
