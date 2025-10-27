import React from 'react';

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-800 mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);


const Services: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Services</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                We help small businesses bridge the digital divide with lightning-fast, intuitive, and aesthetically pleasing web solutions that are optimized for performance and visibility.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard 
                title="Web Design & Development"
                description="Creating modern, responsive websites that are not only beautiful but also built on a solid architectural framework for speed, security, and scalability."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
            />
            <ServiceCard 
                title="SEO & GEO Optimization"
                description="Increasing local and national traffic by leveraging our deep understanding of SEO dynamics. We create keyword-rich, semantically synced, and research-backed content."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
            />
            <ServiceCard 
                title="Directory Platforms"
                description="Building high-value, niche directories like this one. We connect communities and provide curated information, from meta AI tool directories to locally focused guides."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>}
            />
        </div>
      </div>
    </div>
  );
};

export default Services;
