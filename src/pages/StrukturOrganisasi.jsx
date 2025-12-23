import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import PageHeader from '../components/layouts/PageHeader';

const StrukturOrganisasi = () => {
  // Simulasi data dari Database
  const allPersonnel = [
    { id: 1, name: 'Drs. Budi Santoso, M.Pd', nip: '19750101 200003 1 001', role: 'Pimpinan', position: 'Kepala Sekolah', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Siti Aminah, S.Pd', nip: '19800505 200501 2 005', role: 'Pimpinan', position: 'Wakil Kepala Sekolah', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'H. Sutrisno', role: 'Komite', position: 'Ketua Komite', image: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { id: 4, name: 'Ahmad Rizky, S.Pd', nip: '19850312 201001 1 009', role: 'Guru', position: 'Wali Kelas 1A', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 5, name: 'Dewi Sartika, S.Pd', nip: '19880720 201212 2 003', role: 'Guru', position: 'Wali Kelas 1B', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 6, name: 'Bambang Pamungkas', nip: '19900214 201903 1 007', role: 'Guru', position: 'Guru PJOK', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 7, name: 'Rina Wati', nip: '19920101 202001 2 001', role: 'Staff', position: 'Tata Usaha', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 8, name: 'Eko Prasetyo, S.Pd', nip: '19930412 202102 1 005', role: 'Guru', position: 'Wali Kelas 2A', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 9, name: 'Sri Wahyuni, S.Pd', nip: '19940817 202203 2 002', role: 'Guru', position: 'Wali Kelas 2B', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
  ];

  // Filter Data
  const kepalaSekolah = allPersonnel.find(p => p.position.includes('Kepala Sekolah') && !p.position.includes('Wakil'));
  const wakilKepala = allPersonnel.find(p => p.position.includes('Wakil Kepala'));
  const komite = allPersonnel.find(p => p.role === 'Komite');
  const subordinates = allPersonnel.filter(p => 
    !p.position.includes('Kepala Sekolah') && 
    !p.role.includes('Komite')
  );

  // Komponen Card Personil
  const PersonCard = ({ person, type = 'default' }) => {
    if (!person) return null;
    
    // Styling khusus berdasarkan tipe kartu
    const isMain = type === 'main'; // KS & Waka
    const isKomite = type === 'komite';
    
    return (
      <div className={`
        relative flex flex-col items-center bg-white p-4 rounded-xl shadow-md transition-transform hover:-translate-y-1 z-10
        ${isMain ? 'w-64 border-t-4 border-sch-blue' : ''}
        ${isKomite ? 'w-56 border-t-4 border-sch-yellow bg-yellow-50/50' : ''}
        ${type === 'sub' ? 'w-full h-full border border-gray-100 hover:shadow-lg' : ''}
      `}>
        <div className={`
          rounded-full overflow-hidden border-4 border-white shadow-sm mb-3 object-cover bg-gray-200
          ${isMain ? 'w-24 h-24' : 'w-20 h-20'}
        `}>
          <img src={person.image || 'https://via.placeholder.com/150'} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <h4 className={`font-bold text-sch-dark leading-tight mb-1 ${isMain ? 'text-lg' : 'text-sm'}`}>
            {person.name}
          </h4>
          <span className={`
            inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-1
            ${isMain ? 'bg-sch-blue/10 text-sch-blue' : 'bg-gray-100 text-gray-600'}
            ${isKomite ? 'bg-sch-yellow/20 text-yellow-700' : ''}
          `}>
            {person.position}
          </span>
          {person.nip && <p className="text-[10px] text-gray-400 font-mono">NIP. {person.nip}</p>}
        </div>
      </div>
    );
  };

  // Komponen Garis Vertikal (Pasti Lurus)
  const VerticalLine = ({ height = 'h-12' }) => (
    <div className={`w-0.5 ${height} bg-gray-300 mx-auto`}></div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <PageHeader 
        title="Struktur Organisasi" 
        subtitle="Mengenal pimpinan, guru, dan staff pengajar SD 2 Kalisari." 
        bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 overflow-x-auto">
        <div className="min-w-[768px] flex flex-col items-center">
            
            {/* LEVEL 1: Kepala Sekolah & Komite */}
            <div className="flex items-center justify-center gap-8 mb-0 relative">
                {/* Garis Penghubung Komite (Horizontal Putus-putus) */}
                {komite && kepalaSekolah && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[350px] border-t-2 border-dashed border-gray-300 -z-0"></div>
                )}

                {/* Komite */}
                {komite && <PersonCard person={komite} type="komite" />}
                
                {/* Kepala Sekolah */}
                {kepalaSekolah && <PersonCard person={kepalaSekolah} type="main" />}
            </div>

            {/* Garis Turun dari KS */}
            <VerticalLine height="h-16" />

            {/* LEVEL 2: Wakil Kepala Sekolah */}
            {wakilKepala && (
               <>
                  <PersonCard person={wakilKepala} type="main" />
                  <VerticalLine height="h-16" />
               </>
            )}

            {/* LEVEL 3: Container Guru & Staff */}
            {/* Menggunakan konsep 'Box' agar rapi dan tidak perlu menarik garis ke setiap orang */}
            <div className="w-full max-w-6xl relative">
                {/* Garis Horizontal Top (Connector ke Waka) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></div>
                
                <div className="border-t-4 border-gray-300 pt-10 relative">
                   {/* Label Kelompok */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2">
                      <span className="bg-sch-dark text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                        Dewan Guru & Staff
                      </span>
                   </div>

                   {/* Grid Guru */}
                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                      {subordinates.map((person) => (
                          <PersonCard key={person.id} person={person} type="sub" />
                      ))}
                   </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrukturOrganisasi;