import React from 'react';

const ManageEkstrakurikuler = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sch-dark">Kelola Ekstrakurikuler</h1>
        <button className="bg-sch-yellow text-sch-dark font-bold px-6 py-2.5 rounded-lg hover:opacity-90">
          + Tambah Ekskul
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Pramuka', 'Futsal', 'Tari', 'Melukis'].map((eks) => (
              <div key={eks} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
                  <div className="h-32 bg-gray-200 w-full relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image Preview</div>
                  </div>
                  <div className="p-4">
                      <h3 className="font-bold text-lg text-sch-dark">{eks}</h3>
                      <p className="text-sm text-gray-500 mt-1">Hari: Sabtu, 08:00</p>
                      <div className="mt-4 flex gap-2">
                          <button className="flex-1 bg-gray-100 py-2 rounded text-sm font-medium hover:bg-gray-200">Edit</button>
                          <button className="flex-1 bg-red-50 text-red-500 py-2 rounded text-sm font-medium hover:bg-red-100">Hapus</button>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default ManageEkstrakurikuler;