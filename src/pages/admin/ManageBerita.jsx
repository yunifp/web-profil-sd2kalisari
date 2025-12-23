import React, { useState } from 'react';
import BeritaList from '../../components/admin/berita/BeritaList';
import BeritaForm from '../../components/admin/berita/BeritaForm';

const ManageBerita = () => {
  const [viewMode, setViewMode] = useState('list'); 
  const [editingItem, setEditingItem] = useState(null);

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

  const handleCreate = () => {
    setEditingItem(null);
    setViewMode('form');
    window.scrollTo(0, 0);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setViewMode('form');
    window.scrollTo(0, 0);
  };

  const handleCancel = () => {
    setViewMode('list');
    setEditingItem(null);
  };

  const handleSave = (formData, previewImage) => {
    if (formData.id) {
        setNewsList(newsList.map(item => item.id === formData.id ? { ...formData, image: previewImage || formData.image } : item));
    } else {
        const newId = newsList.length + 1;
        setNewsList([...newsList, { ...formData, id: newId, image: previewImage || 'https://via.placeholder.com/400' }]);
    }
    handleCancel();
  };

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
    <>
      {viewMode === 'list' ? (
        <BeritaList 
          data={newsList}
          onCreate={handleCreate}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onArchive={handleArchive}
        />
      ) : (
        <BeritaForm 
          initialData={editingItem}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default ManageBerita;