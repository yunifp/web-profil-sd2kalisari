import React, { useState } from 'react';

const ManagePPDB = () => {
  const [activeTab, setActiveTab] = useState('informasi');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-sch-dark">Kelola Halaman PPDB</h1>
           <p className="text-gray-500 text-sm">Update informasi yang tampil di menu PPDB website.</p>
        </div>
        <button className="bg-sch-blue text-sch-dark font-bold px-6 py-2.5 rounded-lg hover:bg-blue-300 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
            Simpan Perubahan
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('informasi')}
            className={`pb-3 px-4 font-medium text-sm transition-colors relative ${activeTab === 'informasi' ? 'text-sch-blue' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Informasi Umum
            {activeTab === 'informasi' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-sch-blue"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('syarat')}
            className={`pb-3 px-4 font-medium text-sm transition-colors relative ${activeTab === 'syarat' ? 'text-sch-blue' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Syarat & Alur
            {activeTab === 'syarat' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-sch-blue"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('kontak')}
            className={`pb-3 px-4 font-medium text-sm transition-colors relative ${activeTab === 'kontak' ? 'text-sch-blue' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Kontak & Jadwal
            {activeTab === 'kontak' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-sch-blue"></div>}
          </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        {activeTab === 'informasi' && (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-sch-dark">Status Pendaftaran</label>
                        <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue bg-white">
                            <option value="buka">Dibuka</option>
                            <option value="tutup">Ditutup</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-sch-dark">Tahun Ajaran</label>
                        <input type="text" defaultValue="2024 / 2025" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-sch-dark">Judul Utama (Hero)</label>
                    <input type="text" defaultValue="Penerimaan Peserta Didik Baru" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-sch-dark">Deskripsi Singkat</label>
                    <textarea defaultValue="Bergabunglah bersama kami untuk mencetak generasi cerdas dan berkarakter." className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue h-24"></textarea>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-sch-dark">Link Formulir Pendaftaran</label>
                    <div className="flex gap-2">
                         <span className="bg-gray-100 border border-gray-300 text-gray-500 rounded-l-lg px-3 py-3 flex items-center text-sm">https://</span>
                         <input type="text" defaultValue="bit.ly/ppdb-sd2kalisari" className="flex-1 border border-gray-300 rounded-r-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                    </div>
                    <p className="text-xs text-gray-500">Link ini akan dipasang pada tombol "Daftar Sekarang".</p>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-sch-dark">Brosur PPDB (Gambar)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                         <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                         <p className="text-sm text-sch-blue font-bold">Klik untuk upload</p>
                         <p className="text-xs text-gray-400">PNG, JPG (Max 2MB)</p>
                    </div>
                </div>
            </div>
        )}

        {activeTab === 'syarat' && (
             <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="block text-sm font-bold text-sch-dark">Daftar Syarat Pendaftaran</label>
                        <button className="text-xs bg-sch-light text-sch-dark border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">+ Tambah Syarat</button>
                    </div>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-2">
                            <div className="bg-gray-100 px-3 py-3 rounded text-gray-500 font-bold text-sm">{i}</div>
                            <input type="text" defaultValue={`Syarat contoh nomor ${i}`} className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                            <button className="text-red-400 hover:text-red-600 px-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                    <label className="block text-sm font-bold text-sch-dark">Alur Pendaftaran (Deskripsi)</label>
                    <textarea defaultValue="1. Mengisi formulir online...&#10;2. Menunggu konfirmasi...&#10;3. Daftar ulang..." className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue h-32 leading-relaxed"></textarea>
                </div>
             </div>
        )}

        {activeTab === 'kontak' && (
            <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-sch-dark">Jadwal Pendaftaran</label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <span className="text-xs text-gray-500 mb-1 block">Tanggal Mulai</span>
                             <input type="date" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                        </div>
                        <div>
                             <span className="text-xs text-gray-500 mb-1 block">Tanggal Selesai</span>
                             <input type="date" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                        </div>
                    </div>
                </div>

                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-sch-dark">Nomor WhatsApp Panitia</label>
                    <input type="text" defaultValue="0812-3456-7890" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-sch-dark">Email Panitia (Opsional)</label>
                    <input type="email" defaultValue="ppdb@sd2kalisari.sch.id" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sch-blue" />
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ManagePPDB;