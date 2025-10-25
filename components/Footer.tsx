import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Oregon Chamber of Commerce Directory. All rights reserved.</p>
          <p className="text-xs mt-1">Data derived from the "An Analysis of Oregon's Chambers of Commerce" report.</p>
        </div>
        <div className="text-center sm:text-right">
          <a href="/llm.txt" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors duration-200">
            Powered by LEVERAGEAI LLC
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
