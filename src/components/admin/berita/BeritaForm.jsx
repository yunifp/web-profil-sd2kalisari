import React, { useState, useEffect } from 'react';

const BeritaForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    category: 'Kegiatan',
    date: '',
    status: 'Published',
    image: null,
    content: ''
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setPreviewImage(initialData.image);
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = () => {
    onSave(formData, previewImage);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-sch-dark">
            {formData.id ? 'Edit Berita' : 'Buat Berita Baru'}
          </h1>
          <p className="text-gray-500 text-sm">Silakan isi formulir di bawah ini dengan lengkap.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Judul Berita</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sch-blue focus:outline-none"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="Masukkan judul berita..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
              <select 
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sch-blue focus:outline-none bg-white"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option>Kegiatan</option>
                <option>Prestasi</option>
                <option>Pengumuman</option>
                <option>Artikel</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Tanggal</label>
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sch-blue focus:outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Gambar Utama</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer relative bg-gray-50">
              <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
              {previewImage ? (
                <div className="relative">
                  <img src={previewImage} alt="Preview" className="h-64 mx-auto object-contain rounded shadow-sm" />
                  <p className="text-sm text-gray-500 mt-2">Klik area ini untuk mengganti gambar</p>
                </div>
              ) : (
                <div className="text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="text-base font-medium">Klik untuk upload gambar</span>
                  <p className="text-sm mt-1">Format: JPG, PNG, GIF</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Konten Berita</label>
            <textarea 
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sch-blue focus:outline-none min-h-[300px]"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              placeholder="Tulis isi berita lengkap di sini..."
            ></textarea>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
          <button onClick={onCancel} className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-bold hover:bg-white transition-colors">
            Batal
          </button>
          <button onClick={handleSubmit} className="px-6 py-2.5 rounded-lg bg-sch-dark text-white font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Simpan Berita
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeritaForm;