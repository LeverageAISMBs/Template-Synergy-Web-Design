import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center space-x-2 mt-12">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            currentPage === number
              ? 'bg-green-800 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-green-100'
          }`}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
