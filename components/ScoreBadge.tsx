import React from 'react';

interface ScoreBadgeProps {
  score: number;
}

const getScoreColor = (score: number) => {
  if (score >= 90) return 'bg-green-700';
  if (score >= 80) return 'bg-green-600';
  if (score >= 70) return 'bg-yellow-500';
  if (score >= 60) return 'bg-yellow-400';
  if (score >= 50) return 'bg-orange-500';
  return 'bg-red-500';
};

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  return (
    <div
      className={`flex items-center justify-center w-14 h-14 rounded-full font-semibold text-white flex-shrink-0 text-lg ${getScoreColor(score)}`}
    >
      {score}
    </div>
  );
};

export default ScoreBadge;
