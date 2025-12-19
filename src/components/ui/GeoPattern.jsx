import React from 'react';

export const GeoPattern = () => {
  return (
    <div className="w-full h-16 flex overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-shrink-0 flex">
                <div className="w-16 h-16 bg-sch-yellow rounded-full -ml-8 translate-y-8"></div>
                <div className="w-16 h-16 bg-sch-orange rounded-full -ml-8 translate-y-8"></div>
                <div className="w-16 h-16 bg-sch-blue rounded-full -ml-8 translate-y-8"></div>
            </div>
        ))}
    </div>
  );
};