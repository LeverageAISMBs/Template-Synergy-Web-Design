import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

// Fix: Replaced `JSX.Element` with `React.ReactElement` to resolve the 'Cannot find namespace JSX' error.
const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mb-6">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-slate-800">{title}</h3>
    <p className="text-slate-500">{children}</p>
  </div>
);

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
            Crafting Digital <span className="text-indigo-600">Excellence</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-8">
            We build beautiful, responsive, and high-performing web applications that help your business grow and succeed in the digital world.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => setIsModalOpen(true)}>Get a Quote</Button>
            <Button variant="secondary">Our Services</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Synergy?</h2>
            <p className="mt-4 text-lg text-slate-600">We deliver results, not just websites.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Modern Technology" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}>
              Leveraging the latest frameworks like React, Next.js, and TypeScript to build scalable and maintainable applications.
            </FeatureCard>
            <FeatureCard title="User-Centric Design" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}>
              Our UI/UX experts create intuitive and engaging interfaces that delight users and drive conversions.
            </FeatureCard>
            <FeatureCard title="Performance Optimized" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}>
              We ensure your website is lightning-fast, SEO-friendly, and accessible to everyone, on any device.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to start your next project?
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Let's build something amazing together.
          </p>
          <div className="mt-8">
            <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Get a Free Quote">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Project Details</label>
            <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Tell us about your project..."></textarea>
          </div>
          <div className="text-right">
            <Button type="submit" onClick={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              Send Request
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Home;