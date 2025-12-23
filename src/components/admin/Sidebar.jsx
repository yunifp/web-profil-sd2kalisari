import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/berita', label: 'Berita' },
    { path: '/admin/ppdb', label: 'PPDB' },
    { path: '/admin/ekstrakurikuler', label: 'Ekstrakurikuler' },
    { path: '/admin/prestasi', label: 'Prestasi' },
    { path: '/admin/visi-misi', label: 'Visi & Misi' },
    { path: '/admin/struktur', label: 'Struktur & Guru' },
  ];

  return (
    <div className="w-64 bg-sch-dark min-h-screen text-white fixed left-0 top-0 overflow-y-auto z-50">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-sch-yellow font-serif">Admin Panel</h1>
        <p className="text-sm text-gray-400 mt-1">SD 2 Kalisari</p>
      </div>
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                  isActive(item.path)
                    ? 'bg-sch-blue text-sch-dark'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-8 pt-4 border-t border-gray-700">
            <Link
              to="/"
              className="block px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 hover:text-red-300 transition-colors"
            >
              Logout / Ke Website
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;