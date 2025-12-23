import React from 'react';

const BeritaList = ({ data, onCreate, onEdit, onDelete, onArchive }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-sch-dark">Kelola Berita & Artikel</h1>
          <p className="text-gray-500 text-sm">Buat, edit, dan kelola publikasi sekolah.</p>
        </div>
        <button 
          onClick={onCreate}
          className="bg-sch-blue text-sch-dark font-bold px-6 py-2.5 rounded-lg hover:bg-blue-300 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Buat Berita Baru
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <input 
          type="text" 
          placeholder="Cari judul berita..." 
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sch-blue focus:outline-none"
        />
        <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-sch-blue focus:outline-none">
          <option value="">Semua Kategori</option>
          <option value="Kegiatan">Kegiatan</option>
          <option value="Prestasi">Prestasi</option>
          <option value="Pengumuman">Pengumuman</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className={`bg-white rounded-xl shadow-sm border overflow-hidden group hover:shadow-md transition-shadow ${item.status === 'Archived' ? 'opacity-75 border-gray-200 bg-gray-50' : 'border-gray-200'}`}>
            <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => onEdit(item)}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-white/90 backdrop-blur text-sch-dark text-xs font-bold px-2 py-1 rounded shadow-sm">
                  {item.category}
                </span>
                {item.status === 'Archived' && (
                  <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                    Diarsipkan
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-5">
              <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {item.date}
              </p>
              <h3 
                className="font-bold text-sch-dark text-lg mb-2 line-clamp-2 leading-tight cursor-pointer hover:text-sch-blue transition-colors"
                onClick={() => onEdit(item)}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {item.content}
              </p>
              
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => onEdit(item)}
                  className="flex-1 bg-sch-blue/10 text-sch-blue font-bold py-2 rounded text-sm hover:bg-sch-blue hover:text-sch-dark transition-colors"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onArchive(item.id)}
                  className="p-2 text-gray-500 hover:bg-gray-200 rounded transition-colors" 
                  title={item.status === 'Published' ? "Arsipkan" : "Terbitkan Kembali"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </button>
                <button 
                  onClick={() => onDelete(item.id)}
                  className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded transition-colors"
                  title="Hapus"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaList;