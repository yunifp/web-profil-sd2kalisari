import React from 'react';
import { Link } from 'react-router-dom';
import StatsCard from '../../components/ui/StatsCard';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-sch-dark mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Selamat datang kembali, Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard title="Total Berita" value="24" colorClass="text-sch-blue" />
        <StatsCard title="Total Staff Akademika" value="32" colorClass="text-sch-orange" />
        <StatsCard title="Prestasi" value="42" colorClass="text-sch-purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-sch-dark mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b border-gray-50 pb-3">
              <div className="w-2 h-2 rounded-full bg-sch-green"></div>
              <p className="text-sm text-gray-600">Pendaftaran PPDB baru masuk: <span className="font-bold">Budi Santoso</span></p>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-50 pb-3">
              <div className="w-2 h-2 rounded-full bg-sch-purple"></div>
              <p className="text-sm text-gray-600">Prestasi baru ditambahkan: <span className="font-bold">Juara 1 Lomba Lari</span></p>
            </div>
             <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-sch-orange"></div>
              <p className="text-sm text-gray-600">Struktur organisasi diperbarui oleh Admin</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
            <h3 className="text-lg font-bold text-sch-dark mb-2">Kelola Struktur & Guru</h3>
            <p className="text-sm text-gray-500 mb-6">Pusat pengelolaan data guru, staff, dan penempatan jabatan sekolah.</p>
            <Link to="/admin/struktur" className="bg-sch-dark text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Kelola Sekarang
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;