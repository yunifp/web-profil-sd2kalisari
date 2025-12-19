import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Empowering Minds, <br />
              <span className="text-gray-500 italic">Inspiring Futures</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Welcome to St. Ignatius. Get ready for another year of learning and growing together.
            </p>
            <div className="flex gap-4">
              <Button>Join Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-10 -left-10 w-24 h-24 bg-brand-yellow rounded-full z-0 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-10 -right-10 w-24 h-24 bg-brand-blue rounded-full z-0 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Student" 
                className="w-full h-[500px] object-cover"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-brand-yellow p-6 rounded-xl shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider mb-2 block">Mar 3</span>
                <h3 className="text-xl font-bold mb-2">PA Day for Elementary School</h3>
                <button className="flex items-center text-sm font-semibold mt-2 hover:underline">
                  Discover Event <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;