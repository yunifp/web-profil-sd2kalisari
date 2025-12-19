import React from 'react';
import Button from '../ui/Button';

const Banner = ({ color, title, desc }) => (
  <div className={`w-full py-16 px-4 mb-4 rounded-xl relative overflow-hidden ${color}`}>
    <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <h2 className="text-2xl md:text-3xl font-serif font-bold max-w-xl">{title}</h2>
      <Button variant="primary" className="bg-black text-white whitespace-nowrap">Learn More</Button>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
  </div>
);

const Departments = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto space-y-8">
      <Banner 
        color="bg-brand-blue" 
        title="Explore Diverse Departments Available In Our School"
      />
      <Banner 
        color="bg-brand-green" 
        title="Embark on Academic Excellence: Advanced Placement Program"
      />
      <Banner 
        color="bg-brand-purple" 
        title="St. Ignatius College School's Comprehensive Safe Program"
      />
    </section>
  );
};

export default Departments;