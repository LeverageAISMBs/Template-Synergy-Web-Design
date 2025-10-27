import React from 'react';

interface ControlsSectionProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortOption: string;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ControlsSection: React.FC<ControlsSectionProps> = ({ searchTerm, onSearchChange, sortOption, onSortChange }) => {
  return (
    <section id="directory-controls" className="sticky top-16 z-30 bg-[#fcfaf8]/90 backdrop-blur-md py-6 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search by name, city, or county..."
            className="w-full md:w-1/2 lg:w-2/5 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            value={searchTerm}
            onChange={onSearchChange}
            aria-label="Search Chambers"
          />
          <select
            className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all h-[50px]"
            value={sortOption}
            onChange={onSortChange}
            aria-label="Sort Chambers"
          >
            <option value="score-high">Sort: Score (High to Low)</option>
            <option value="score-low">Sort: Score (Low to High)</option>
            <option value="name-az">Sort: Name (A-Z)</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ControlsSection;
