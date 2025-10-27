import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">About LEVERAGEAI LLC</h1>
          <p className="mt-4 text-lg text-slate-600">The Agency Behind the Directory</p>
        </div>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            This directory was designed and developed by <strong>LEVERAGEAI LLC</strong>. We are a forward-thinking systems architecture and web solutions agency dedicated to building a network of high-value websites, directories, and local partnerships.
          </p>
          <h2 className="text-3xl font-bold text-slate-800 pt-4 border-t border-slate-200">Our Mission</h2>
          <p>
            In a rapidly evolving economic reality, our mission is to provide massive value to small businesses and their customers. We aim to bridge the digital divide with lightning-fast, intuitive, aesthetically pleasing, and highly optimized web solutions. We believe in quality over quantity, meticulous sourcing of data, and creating digital experiences that are both useful and elegant.
          </p>
          <h2 className="text-3xl font-bold text-slate-800 pt-4 border-t border-slate-200">Our Approach</h2>
          <p>
            We leverage a deep, systems-level understanding of software engineering, system architecture, and SEO dynamics. Our approach is rooted in identifying and defining constraints to build robust architectural frameworks before a single line of code is written. This ensures that every project is built on a solid foundation, leading to consistent, high-quality results. We call this philosophy <em>Elegant Simplicity</em>: sophisticated thinking expressed through clean, efficient execution.
          </p>
          <h2 className="text-3xl font-bold text-slate-800 pt-4 border-t border-slate-200">The Leverage AI Network</h2>
          <p>
            This directory is just one part of the growing <strong>Leverage AI Network</strong>. Our network includes a range of digital assets, from meta-directories of AI tools and educational resources to hyper-local directories serving rural communities. By connecting users with quality, curated information, we aim to empower individuals and businesses to survive and thrive in the modern economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
