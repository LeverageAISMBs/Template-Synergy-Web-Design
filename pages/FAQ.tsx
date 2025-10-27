import React from 'react';
import Accordion, { AccordionItem } from '../components/Accordion';

const FAQ: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Answers to common questions about our directory and services.
            </p>
        </div>
        <Accordion>
          <AccordionItem title="What is the purpose of this directory?">
            This interactive directory provides a comprehensive, scorable directory of Chambers of Commerce across Oregon. The goal is to offer a transparent, data-driven tool for businesses, community leaders, and residents to understand and connect with the organizations shaping Oregon's economic landscape.
          </AccordionItem>
          <AccordionItem title="How are the effectiveness scores calculated?">
            Each Chamber is evaluated on four key domains: Member Services (worth 30 points), Community Engagement (25 points), Advocacy (20 points), and Organizational Health (25 points). The total score, out of 100, reflects a holistic view of the chamber's performance based on the "An Analysis of Oregon's Chambers of Commerce" report.
          </AccordionItem>
          <AccordionItem title="Who is LEVERAGEAI LLC?">
            LEVERAGEAI LLC is the agency that designed and built this directory. We are a modern web solutions company specializing in Web Design, SEO management, and creating high-value directory platforms. Our mission is to bridge the digital divide for small businesses by providing lightning-fast, intuitive, and aesthetically pleasing websites that drive traffic and results.
          </AccordionItem>
           <AccordionItem title="Can my Chamber's information be updated?">
            The data presented here is based on a specific report and is current as of its publication. For the most up-to-date information, please visit the chamber's official website, linked in each detailed view. We are not affiliated with any Chamber of Commerce and do not manage their information directly.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
