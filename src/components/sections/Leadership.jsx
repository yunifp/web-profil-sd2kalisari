import React from 'react';

const Leadership = () => {
  const leaders = [
    {
      name: "Anna Patejczuk",
      role: "Principal",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kevin Morrison",
      role: "Trustee",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Jack Dixon",
      role: "Superintendent",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold font-serif">Our Leadership</h2>
          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors">View All</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 h-80">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold">{leader.name}</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wide">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;