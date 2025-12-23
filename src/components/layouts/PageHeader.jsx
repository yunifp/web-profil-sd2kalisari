import React from 'react';
import { Reveal } from '../ui/Reveal';

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <Reveal>
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-sch-yellow rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              SD Negeri Kalisari
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {title}
            </h1>
        </Reveal>
        <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {subtitle}
            </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PageHeader;