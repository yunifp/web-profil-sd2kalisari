import React, { useState } from 'react';

const ManageStruktur = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const personnelData = [
    { id: 1, name: 'Drs. Budi Santoso, M.Pd', nip: '19750101 200003 1 001', role: 'Pimpinan', position: 'Kepala Sekolah', image: null },
    { id: 2, name: 'Siti Aminah, S.Pd', nip: '19800505 200501 2 005', role: 'Pimpinan', position: 'Wakil Kepala Sekolah', image: null },
    { id: 3, name: 'Ahmad Rizky, S.Pd', nip: '19850312 201001 1 009', role: 'Guru', position: 'Wali Kelas 1A', image: null },
    { id: 4, name: 'Dewi Sartika, S.Pd', nip: '19880720 201212 2 003', role: 'Guru', position: 'Wali Kelas 1B', image: null },
    { id: 5, name: 'Bambang Pamungkas', nip: '19900214 201903 1 007', role: 'Guru', position: 'Guru PJOK', image: null },
    { id: 6, name: 'Rina Wati', nip: '19920101 202001 2 001', role: 'Staff', position: 'Staff Tata Usaha', image: null },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'Pimpinan': return 'bg-sch-purple/20 text-purple-700 border-purple-200';
      case 'Guru': return 'bg-sch-orange/20 text-orange-800 border-orange-200';
      case 'Staff': return 'bg-sch-blue/20 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-bold text-sch-dark">Manajemen Struktur & Personil</h1>
           <p className="text-gray-500 text-sm">Kelola data guru, staff, dan penempatan jabatan dalam organisasi.</p>
        </div>
        <button className="bg-sch-blue text-sch-dark font-bold px-6 py-2.5 rounded-lg hover:bg-blue-300 transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Tambah Personil
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex gap-4">
            <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </span>
                <input 
                    type="text" 
                    placeholder="Cari nama atau NIP..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sch-blue"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sch-blue bg-white">
                <option value="">Semua Role</option>
                <option value="Pimpinan">Pimpinan</option>
                <option value="Guru">Guru</option>
                <option value="Staff">Staff</option>
            </select>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
            <thead className="bg-white text-gray-600 border-b border-gray-200 uppercase text-xs font-bold tracking-wider">
                <tr>
                <th className="p-4 w-16">Foto</th>
                <th className="p-4">Nama & NIP</th>
                <th className="p-4">Kategori (Role)</th>
                <th className="p-4">Jabatan / Penempatan</th>
                <th className="p-4 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {personnelData.map((person) => (
                <tr key={person.id} className="hover:bg-gray-50 group transition-colors">
                    <td className="p-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                            {/* Placeholder image logic */}
                        </div>
                    </td>
                    <td className="p-4">
                        <div className="font-bold text-sch-dark">{person.name}</div>
                        <div className="text-xs text-gray-500 font-mono mt-0.5">NIP. {person.nip}</div>
                    </td>
                    <td className="p-4">
                        <span className={`px-2.5 py-1 rounded text-xs font-bold border ${getRoleColor(person.role)}`}>
                            {person.role}
                        </span>
                    </td>
                    <td className="p-4">
                        <div className="flex items-center gap-2">
                             <span className="text-sch-dark font-medium">{person.position}</span>
                             <button className="text-gray-300 hover:text-sch-blue opacity-0 group-hover:opacity-100 transition-opacity" title="Ubah Penempatan">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                             </button>
                        </div>
                    </td>
                    <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                            <button className="p-1.5 text-gray-500 hover:text-sch-blue hover:bg-blue-50 rounded-lg transition-colors" title="Edit Data">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </button>
                            <button className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center text-sm text-gray-600">
            <span>Menampilkan 6 dari 32 personil</span>
            <div className="flex gap-1">
                <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50 disabled:opacity-50">Prev</button>
                <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStruktur;