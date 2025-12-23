import React from 'react';

const ManagePrestasi = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sch-dark">Kelola Prestasi Siswa</h1>
        <button className="bg-sch-purple text-sch-dark font-bold px-6 py-2.5 rounded-lg hover:opacity-90">
          + Tambah Prestasi
        </button>
      </div>

       <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="w-full text-left">
          <thead className="border-b border-gray-100">
            <tr>
              <th className="p-4 font-bold text-gray-700">Nama Lomba</th>
              <th className="p-4 font-bold text-gray-700">Juara</th>
              <th className="p-4 font-bold text-gray-700">Tingkat</th>
              <th className="p-4 font-bold text-gray-700 text-right">Opsi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-4">Olimpiade Matematika</td>
              <td className="p-4"><span className="text-sch-orange font-bold">Juara 1</span></td>
              <td className="p-4">Kabupaten</td>
              <td className="p-4 text-right text-sm text-blue-600 cursor-pointer">Edit</td>
            </tr>
             <tr>
              <td className="p-4">Lomba Pidato</td>
              <td className="p-4"><span className="text-gray-500 font-bold">Juara 2</span></td>
              <td className="p-4">Provinsi</td>
              <td className="p-4 text-right text-sm text-blue-600 cursor-pointer">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePrestasi;