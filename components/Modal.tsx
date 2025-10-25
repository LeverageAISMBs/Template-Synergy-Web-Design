import React, { useEffect, useRef } from 'react';
import { Chamber } from '../types';

declare var Chart: any; // Using Chart.js from CDN

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  chamber: Chamber | null;
}

const getScoreColor = (score: number) => {
  if (score >= 90) return 'text-green-700';
  if (score >= 80) return 'text-green-600';
  if (score >= 70) return 'text-yellow-500';
  if (score >= 60) return 'text-yellow-400';
  if (score >= 50) return 'text-orange-500';
  return 'text-red-500';
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, chamber }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeydown);
      setTimeout(() => {
        modalRef.current?.classList.remove('opacity-0', 'scale-95');
      }, 10);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, onClose]);
  
  useEffect(() => {
    if (chamber && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [`Member Services (/30)`, `Community (/25)`, `Advocacy (/20)`, `Health (/25)`],
            datasets: [{
                label: 'Score',
                data: [chamber.scores.services, chamber.scores.community, chamber.scores.advocacy, chamber.scores.health],
                backgroundColor: ['rgba(6, 95, 70, 0.7)', 'rgba(5, 150, 105, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(110, 231, 183, 0.7)'],
                borderColor: ['rgba(6, 95, 70, 1)', 'rgba(5, 150, 105, 1)', 'rgba(16, 185, 129, 1)', 'rgba(110, 231, 183, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { beginAtZero: true, max: 30, grid: { color: '#e5e7eb' }, ticks: { color: '#4b5563' } },
                y: { grid: { display: false }, ticks: { color: '#374151', font: { size: 13 } } }
            }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };

  }, [chamber]);


  if (!isOpen || !chamber) return null;

  const handleClose = () => {
    modalRef.current?.classList.add('opacity-0', 'scale-95');
    setTimeout(onClose, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 scale-95 opacity-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="w-11/12">
            <h2 className="text-2xl lg:text-3xl font-bold text-green-900">{chamber.name}</h2>
            <p className="text-base text-gray-600 mt-1">{chamber.city}, {chamber.county}</p>
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-700 transition-colors duration-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="p-6 lg:p-8 overflow-y-auto">
          <p className="text-base text-gray-700 leading-relaxed">{chamber.notes}</p>
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Effectiveness Score Breakdown</h3>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="w-full lg:w-3/5" style={{ position: 'relative', height: '250px' }}>
              <canvas ref={chartRef}></canvas>
            </div>
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Score</span>
              <div className={`text-7xl font-extrabold my-2 ${getScoreColor(chamber.totalScore)}`}>{chamber.totalScore}</div>
              <span className="text-base text-gray-600">out of 100</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 border-t border-gray-200 mt-auto">
          <a href={chamber.website} target="_blank" rel="noopener noreferrer" className="w-full text-center block px-6 py-3 bg-green-800 text-white text-base font-semibold rounded-lg shadow-md hover:bg-green-700 hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
