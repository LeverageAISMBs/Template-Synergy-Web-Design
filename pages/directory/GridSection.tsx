import React from 'react';
import { Chamber } from '../../types';
import ChamberCard from '../../components/ChamberCard';
import Pagination from '../../components/Pagination';

interface GridSectionProps {
  chambers: Chamber[];
  onCardClick: (chamber: Chamber) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const GridSection: React.FC<GridSectionProps> = ({ chambers, onCardClick, currentPage, totalPages, onPageChange }) => {
  return (
    <main id="directory-grid-container" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {chambers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {chambers.map(chamber => (
                <ChamberCard key={chamber.name} chamber={chamber} onClick={() => onCardClick(chamber)} />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No Chambers Found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default GridSection;
