
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-base font-semibold leading-6 text-indigo-600 uppercase tracking-wider">About Us</h2>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              A Passion for Building a Better Web
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Synergy Web Solutions was founded with a simple mission: to help businesses of all sizes succeed online by building exceptional digital experiences. We believe that a great website is more than just code; it's a powerful tool for communication, growth, and connection.
            </p>
            <p className="mt-4 text-xl text-slate-600">
              Our team of dedicated designers, developers, and strategists works collaboratively to bring your vision to life. We are committed to transparency, quality, and building long-lasting partnerships with our clients.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              className="rounded-lg shadow-xl" 
              src="https://picsum.photos/seed/about/600/500" 
              alt="Our Team" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
