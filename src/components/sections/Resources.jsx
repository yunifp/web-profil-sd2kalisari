import React from 'react';
import { Bus, BookOpen, PenTool, Compass } from 'lucide-react';

const Resources = () => {
  const items = [
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Transportation",
      desc: "Safe and reliable transport options for qualifying children."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Online Library",
      desc: "Access to academic journals, articles, and research papers."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Writing Tools",
      desc: "Enhance proficiency with advanced online writing assistants."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Career Planning",
      desc: "Exploration of various career options and industry research."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Essential Resources <br /> for Students</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="mb-6 p-3 bg-brand-gray inline-block rounded-lg">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
              <a href="#" className="text-sm font-semibold flex items-center hover:gap-2 transition-all">
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;