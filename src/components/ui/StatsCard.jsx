import React from 'react';

const StatsCard = ({ title, value, colorClass }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <h3 className={`text-4xl font-bold ${colorClass}`}>{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;