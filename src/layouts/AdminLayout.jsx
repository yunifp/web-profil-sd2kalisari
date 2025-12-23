import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex bg-sch-light min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1 ml-64">
        <header className="bg-white shadow-sm p-6 flex justify-between items-center sticky top-0 z-40">
          <h2 className="text-xl font-bold text-sch-dark">Panel Administrasi</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-sch-purple flex items-center justify-center text-sch-dark font-bold">
              A
            </div>
          </div>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;