import React from 'react';

const ManageGuru = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sch-dark">Kelola Data Guru & Staff</h1>
        <button className="bg-sch-orange text-white font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-colors">
          + Tambah Guru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="font-bold text-sch-dark text-lg">Nama Guru {item}</h3>
              <p className="text-sch-orange text-sm mb-2">Wali Kelas {item}A</p>
              <div className="flex gap-2 text-sm mt-3">
                 <button className="text-gray-600 hover:text-sch-blue">Edit</button>
                 <button className="text-red-400 hover:text-red-600">Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGuru;