import React from 'react';
import { Chamber } from '../types';
import ScoreBadge from './ScoreBadge';

interface ChamberCardProps {
  chamber: Chamber;
  onClick: () => void;
}

const ChamberCard: React.FC<ChamberCardProps> = ({ chamber, onClick }) => {
  return (
    <div
      className="bg-white border-transparent shadow-lg border rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
      onClick={onClick}
    >
      <ScoreBadge score={chamber.totalScore} />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{chamber.name}</h3>
        <p className="text-gray-600">{chamber.city}, {chamber.county}</p>
      </div>
    </div>
  );
};

export default ChamberCard;
