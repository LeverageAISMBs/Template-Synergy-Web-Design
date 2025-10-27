import React, { useState, useEffect, useMemo } from 'react';
import { Chamber } from '../types';
import { chamberData } from '../data/chamberData';
import Modal from '../components/Modal';
import HeroSection from './directory/HeroSection';
import ControlsSection from './directory/ControlsSection';
import GridSection from './directory/GridSection';
import AboutSection from './directory/AboutSection';

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
  
  const scrollToControls = () => {
    const element = document.querySelector('#directory-controls');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <HeroSection onExploreClick={scrollToControls} />
      <ControlsSection 
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        sortOption={sortOption}
        onSortChange={(e) => setSortOption(e.target.value)}
      />
      <GridSection 
        chambers={paginatedData}
        onCardClick={handleCardClick}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <AboutSection />
      <Modal isOpen={isModalOpen} onClose={closeModal} chamber={selectedChamber} />
    </>
  );
};

export default DirectoryPage;
