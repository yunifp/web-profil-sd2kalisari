import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: "Profil",
    submenu: [
      { label: "Sejarah Sekolah", path: "/profil/sejarah" },
      { label: "Visi & Misi", path: "/profil/visi-misi" },
      { label: "Struktur Organisasi", path: "/profil/struktur-organisasi" },
      { label: "Fasilitas", path: "/profil/fasilitas" },
    ]
  },
  {
    title: "Akademik",
    submenu: [
        { label: "Ekstrakurikuler", path: "/akademik/ekstrakurikuler" }, 
        { label: "Prestasi", path: "/akademik/prestasi" } 
    ]
  },
  { title: "Berita", path: "/berita" }, 
  { title: "PPDB", path: "/ppdb" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex flex-col justify-center h-full">
            <span className="text-2xl font-serif font-bold tracking-tight text-sch-dark leading-none">SDN Kalisari</span>
            <span className="text-[10px] tracking-widest uppercase text-gray-500 font-medium mt-1">Unggul & Berkarakter</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item, idx) => (
              <div 
                key={idx} 
                className="relative group px-3 py-2"
                onMouseEnter={() => setActiveSubmenu(idx)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {item.submenu ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 group-hover:text-sch-orange transition-colors">
                    {item.title}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link to={item.path} className="text-sm font-medium text-gray-700 hover:text-sch-orange transition-colors">
                    {item.title}
                  </Link>
                )}

                <AnimatePresence>
                  {item.submenu && activeSubmenu === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                        {item.submenu.map((sub, i) => (
                          <Link 
                            key={i} 
                            to={sub.path} 
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-sch-orange rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link to="/login" className="ml-4 bg-sch-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sch-orange transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
    <User size={16} />
    Login
</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b px-4 py-4"
        >
          {menuItems.map((item, idx) => (
            <div key={idx} className="py-2 border-b border-gray-50 last:border-0">
              {item.submenu ? (
                <div>
                  <div className="font-serif font-bold text-gray-800 mb-2">{item.title}</div>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                    {item.submenu.map((sub, i) => (
                      <Link key={i} to={sub.path} className="block text-sm text-gray-500 hover:text-sch-orange py-1">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={item.path} className="block font-serif font-bold text-gray-800 hover:text-sch-orange">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <button className="w-full mt-4 bg-sch-dark text-white py-3 rounded-lg font-bold">Login Portal</button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;