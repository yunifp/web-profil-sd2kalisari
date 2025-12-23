import React from 'react';

const ManageVisiMisi = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-2xl font-bold text-sch-dark">Edit Visi & Misi</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
        <label className="block text-sm font-bold text-gray-700">Visi Sekolah</label>
        <textarea 
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue h-32"
            defaultValue="Terwujudnya peserta didik yang beriman, cerdas, terampil, mandiri dan berwawasan global."
        ></textarea>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
        <div className="flex justify-between items-center">
             <label className="block text-sm font-bold text-gray-700">Misi Sekolah</label>
             <button className="text-sm text-sch-blue font-bold">+ Tambah Poin</button>
        </div>
        <div className="space-y-3">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-2">
                    <input 
                        type="text" 
                        className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue"
                        defaultValue={`Contoh poin misi ke-${i}`}
                    />
                    <button className="text-red-500 hover:bg-red-50 px-3 rounded">Hapus</button>
                </div>
            ))}
        </div>
      </div>

      <button className="bg-sch-dark text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800">
          Simpan Perubahan
      </button>
    </div>
  );
};

export default ManageVisiMisi;