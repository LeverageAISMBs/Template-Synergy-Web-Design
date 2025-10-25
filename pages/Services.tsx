
import React from 'react';

const ServiceItem: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "We build bespoke web applications from scratch, tailored to your specific business needs using modern, scalable technologies.",
      imageUrl: "https://picsum.photos/seed/serv1/600/400"
    },
    {
      title: "UI/UX Design",
      description: "Our design team creates beautiful, intuitive, and user-friendly interfaces that provide an exceptional user experience and boost engagement.",
      imageUrl: "https://picsum.photos/seed/serv2/600/400"
    },
    {
      title: "E-Commerce Solutions",
      description: "From Shopify to custom-built platforms, we create robust e-commerce websites that drive sales and provide a seamless shopping experience.",
      imageUrl: "https://picsum.photos/seed/serv3/600/400"
    },
    {
      title: "CMS & Platform Integration",
      description: "We integrate and customize content management systems like WordPress and Strapi to give you full control over your website's content.",
      imageUrl: "https://picsum.photos/seed/serv4/600/400"
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Providing a wide range of solutions to help you achieve your digital goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map(service => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
