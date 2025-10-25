import React, { useState, useEffect, useMemo } from 'react';
import { Chamber } from '../types';
import { chamberData } from '../data/chamberData';
import ChamberCard from '../components/ChamberCard';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import Button from '../components/Button';

const ITEMS_PER_PAGE = 15;

const DirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('score-high');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChamber, setSelectedChamber] = useState<Chamber | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedData = useMemo(() => {
    let data = [...chamberData];

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      data = data.filter(c =>
        c.name.toLowerCase().includes(lowercasedTerm) ||
        c.city.toLowerCase().includes(lowercasedTerm) ||
        c.county.toLowerCase().includes(lowercasedTerm)
      );
    }

    switch (sortOption) {
      case 'score-high':
        data.sort((a, b) => b.totalScore - a.totalScore);
        break;
      case 'score-low':
        data.sort((a, b) => a.totalScore - b.totalScore);
        break;
      case 'name-az':
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return data;
  }, [searchTerm, sortOption]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOption]);

  const totalPages = Math.ceil(filteredAndSortedData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCardClick = (chamber: Chamber) => {
    setSelectedChamber(chamber);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChamber(null);
  };
  
  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-white to-[#fcfaf8] overflow-hidden">
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-green-900 leading-tight">
            Unlock Oregon's Business Network.
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            An interactive directory and analysis of Oregon's Chambers of Commerce. Discover the organizations driving local economies, compare their effectiveness, and connect.
          </p>
          <div className="mt-12">
            <Button onClick={() => scrollTo('#directory-controls')}>
              Explore the Directory
            </Button>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section id="directory-controls" className="sticky top-16 z-30 bg-[#fcfaf8]/90 backdrop-blur-md py-6 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <input
              type="text"
              placeholder="Search by name, city, or county..."
              className="w-full md:w-1/2 lg:w-2/5 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all h-[50px]"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="score-high">Sort: Score (High to Low)</option>
              <option value="score-low">Sort: Score (Low to High)</option>
              <option value="name-az">Sort: Name (A-Z)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <main id="directory-grid-container" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {paginatedData.map(chamber => (
                  <ChamberCard key={chamber.name} chamber={chamber} onClick={() => handleCardClick(chamber)} />
                ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700">No Chambers Found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter settings.</p>
            </div>
          )}
        </div>
      </main>

      {/* About Section */}
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

      <Modal isOpen={isModalOpen} onClose={closeModal} chamber={selectedChamber} />
    </>
  );
};

export default DirectoryPage;
