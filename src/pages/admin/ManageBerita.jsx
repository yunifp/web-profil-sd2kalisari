import React, { useState } from 'react';

const ManageBerita = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    category: 'Kegiatan',
    date: '',
    status: 'Published',
    image: null,
    content: ''
  });

  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: 'Kegiatan Perkemahan Sabtu Minggu (Persami)',
      category: 'Kesiswaan',
      date: '2023-10-15',
      status: 'Published',
      image: 'https://images.unsplash.com/photo-1526634333649-063a8247071e?q=80&w=1000&auto=format&fit=crop',
      content: 'Kegiatan pramuka rutin...'
    },
    {
      id: 2,
      title: 'Juara 1 Lomba Matematika Tingkat Kabupaten',
      category: 'Prestasi',
      date: '2023-11-02',
      status: 'Published',
      image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop',
      content: 'Siswa kami berhasil meraih...'
    },
    {
      id: 3,
      title: 'Rapat Koordinasi Wali Murid Kelas 6',
      category: 'Pengumuman',
      date: '2023-09-20',
      status: 'Archived',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop',
      content: 'Pengumuman hasil rapat...'
    }
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData({ ...formData, image: file });
    }
  };

  const openModal = (item = null) => {
    if (item) {
      setIsEditing(true);
      setFormData(item);
      setPreviewImage(item.image);
    } else {
      setIsEditing(false);
      setFormData({ id: null, title: '', category: 'Kegiatan', date: '', status: 'Published', image: null, content: '' });
      setPreviewImage(null);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus berita ini?')) {
      setNewsList(newsList.filter(item => item.id !== id));
    }
  };

  const handleArchive = (id) => {
    setNewsList(newsList.map(item => 
      item.id === id ? { ...item, status: item.status === 'Published' ? 'Archived' : 'Published' } : item
    ));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-sch-dark">Kelola Berita & Artikel</h1>
           <p className="text-gray-500 text-sm">Buat, edit, dan kelola publikasi sekolah.</p>
        </div>
        <button 
          onClick={() => openModal()}
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
        {newsList.map((item) => (
          <div key={item.id} className={`bg-white rounded-xl shadow-sm border overflow-hidden group hover:shadow-md transition-shadow ${item.status === 'Archived' ? 'opacity-75 border-gray-200 bg-gray-50' : 'border-gray-200'}`}>
            <div className="relative h-48 overflow-hidden">
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
               <h3 className="font-bold text-sch-dark text-lg mb-2 line-clamp-2 leading-tight">
                 {item.title}
               </h3>
               <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                 {item.content}
               </p>
               
               <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                 <button 
                    onClick={() => openModal(item)}
                    className="flex-1 bg-sch-blue/10 text-sch-blue font-bold py-2 rounded text-sm hover:bg-sch-blue hover:text-sch-dark transition-colors"
                 >
                    Edit
                 </button>
                 <button 
                    onClick={() => handleArchive(item.id)}
                    className="p-2 text-gray-500 hover:bg-gray-200 rounded transition-colors" 
                    title={item.status === 'Published' ? "Arsipkan" : "Terbitkan Kembali"}
                 >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                 </button>
                 <button 
                    onClick={() => handleDelete(item.id)}
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
               <h3 className="font-bold text-xl text-sch-dark">
                 {isEditing ? 'Edit Berita' : 'Buat Berita Baru'}
               </h3>
               <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
            </div>
            
            <div className="p-6 space-y-4">
               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-1">Judul Berita</label>
                 <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sch-blue focus:outline-none"
                    defaultValue={formData.title}
                 />
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Kategori</label>
                    <select 
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sch-blue focus:outline-none bg-white"
                        defaultValue={formData.category}
                    >
                      <option>Kegiatan</option>
                      <option>Prestasi</option>
                      <option>Pengumuman</option>
                      <option>Artikel</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Tanggal</label>
                    <input 
                        type="date" 
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sch-blue focus:outline-none"
                        defaultValue={formData.date}
                    />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-1">Gambar Utama</label>
                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                    <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                    {previewImage ? (
                        <img src={previewImage} alt="Preview" className="h-40 mx-auto object-contain rounded" />
                    ) : (
                        <div className="text-gray-400">
                             <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                             <span className="text-sm">Klik untuk upload gambar</span>
                        </div>
                    )}
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-700 mb-1">Konten Berita</label>
                 <textarea 
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sch-blue focus:outline-none h-32"
                    defaultValue={formData.content}
                    placeholder="Tulis isi berita di sini..."
                 ></textarea>
               </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
               <button onClick={closeModal} className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-bold hover:bg-white transition-colors">Batal</button>
               <button className="px-5 py-2.5 rounded-lg bg-sch-dark text-white font-bold hover:bg-gray-800 transition-colors">Simpan Berita</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBerita;