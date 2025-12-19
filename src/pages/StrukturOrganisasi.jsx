import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { Reveal } from '../components/ui/Reveal';

// 1. Komponen Kartu Organisasi (Reusable)
const OrgCard = ({ name, role, nip, image, color = "border-sch-dark" }) => (
    <div className={`relative flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 ${color} w-64 hover:-translate-y-1 transition-transform duration-300 z-20`}>
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-gray-100 shadow-sm">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-serif font-bold text-gray-800 text-center leading-tight mb-1">{name}</h3>
        <p className="text-sch-orange font-bold text-xs uppercase tracking-wider mb-1 text-center">{role}</p>
        {nip && <p className="text-[10px] text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded">NIP. {nip}</p>}
    </div>
);

// 2. Komponen Penghubung Vertikal (Garis Lurus)
const VerticalLine = ({ height = "h-12" }) => (
    <div className={`w-0.5 bg-gray-300 ${height} mx-auto relative -z-0`}></div>
);

// 3. Komponen "Bracket" (Cabang Pohon)
// Ini triknya: Div kosong dengan border atas, kiri, dan kanan untuk membuat cabang
const TreeBranch = () => (
    <div className="hidden md:block w-full max-w-2xl h-12 border-t-2 border-x-2 border-gray-300 rounded-t-2xl mx-auto relative -z-0 top-0.5">
        {/* Garis kecil turun di tengah atas untuk nyambung ke KS */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gray-300"></div>
    </div>
);

const StrukturOrganisasi = () => {
    return (
        <div className="min-h-screen bg-gray-50 selection:bg-sch-yellow selection:text-black">
            <Navbar />
            
            <PageHeader 
                title="Struktur Organisasi"
                subtitle="Sinergi kepemimpinan dan manajemen dalam mewujudkan pelayanan pendidikan yang prima."
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
            />

            <main className="py-20 px-4 overflow-x-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    
                    {/* --- LEVEL 1: KEPALA SEKOLAH --- */}
                    <Reveal width="100%">
                        <div className="flex flex-col items-center">
                            <OrgCard 
                                name="Hj. Siti Aminah, S.Pd.SD"
                                role="Kepala Sekolah"
                                nip="19750101 200003 2 001"
                                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                                color="border-sch-orange"
                            />
                            {/* Garis Turun dari KS */}
                            <VerticalLine height="h-12" />
                        </div>
                    </Reveal>


                    {/* --- LEVEL 2: KOMITE & TU --- */}
                    {/* Tampilan Desktop (Pohon Bercabang) */}
                    <div className="w-full relative">
                        {/* Garis Cabang (Hanya muncul di Desktop) */}
                        <Reveal delay={0.1} width="100%">
                            <TreeBranch />
                        </Reveal>

                        {/* Wadah Kartu Level 2 */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-48 relative -top-1">
                            
                            {/* Kiri: Komite */}
                            <Reveal delay={0.2}>
                                <div className="flex flex-col items-center">
                                    {/* Garis Vertikal Mobile */}
                                    <div className="md:hidden w-0.5 h-8 bg-gray-300"></div> 
                                    <OrgCard 
                                        name="Budi Santoso, S.H."
                                        role="Ketua Komite"
                                        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                                        color="border-blue-500"
                                    />
                                </div>
                            </Reveal>

                            {/* Kanan: TU */}
                            <Reveal delay={0.3}>
                                <div className="flex flex-col items-center">
                                    {/* Garis Vertikal Mobile */}
                                    <div className="md:hidden w-0.5 h-8 bg-gray-300"></div>
                                    <OrgCard 
                                        name="Rina Wati, S.E."
                                        role="Kepala Tata Usaha"
                                        nip="19800505 200501 2 005"
                                        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
                                        color="border-purple-500"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* --- PENGHUBUNG KE GURU --- */}
                    <div className="flex flex-col items-center mt-0 md:-mt-6">
                        {/* Garis Panjang turun ke Guru */}
                         {/* Di Mobile: garis biasa. Di Desktop: garis panjang dari tengah branch */}
                        <div className="w-0.5 h-16 md:h-24 bg-gray-300 z-0"></div>
                        
                        <div className="bg-sch-dark text-white px-8 py-2 rounded-full font-serif font-bold shadow-lg z-10 mb-8">
                            Dewan Guru & Staf
                        </div>
                    </div>

                    {/* --- LEVEL 3: GRID GURU --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                         {[
                            { role: "Guru Kelas I", name: "Ani Suryani, S.Pd", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
                            { role: "Guru Kelas II", name: "Bambang P., S.Pd", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" },
                            { role: "Guru Kelas III", name: "Citra Kirana, S.Pd", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=300&q=80" },
                            { role: "Guru Kelas IV", name: "Dedi Mulyadi, S.Pd", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
                            { role: "Guru Kelas V", name: "Eka Putri, S.Pd", img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7e89?auto=format&fit=crop&w=300&q=80" },
                            { role: "Guru Kelas VI", name: "Fajar Nugraha, S.Pd", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
                            { role: "Guru PAI", name: "Ust. Ahmad Zaki", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
                            { role: "Guru PJOK", name: "Heri Susanto, S.Or", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80" },
                        ].map((teacher, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-sch-orange transition-all flex items-center gap-4">
                                    <img src={teacher.img} alt={teacher.name} className="w-14 h-14 rounded-full object-cover bg-gray-100" />
                                    <div>
                                        <h4 className="font-bold text-sch-dark text-sm">{teacher.name}</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">{teacher.role}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default StrukturOrganisasi;