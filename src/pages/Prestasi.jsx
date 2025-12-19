import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Trophy, Medal, Calendar, Award, Star } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center group h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-sch-yellow/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} className="text-sch-dark" />
        </div>
        <h3 className="text-4xl font-serif font-bold text-sch-dark mb-2">{value}</h3>
        <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{label}</p>
    </div>
);

const PrestasiCard = ({ title, event, rank, date, level, image }) => (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-sch-orange shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
        <div className="h-56 overflow-hidden relative">
            <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-sch-dark flex items-center gap-1.5 shadow-sm border border-gray-100">
                <Calendar size={12} className="text-sch-orange" />
                {date}
            </div>
            
            <div className="absolute top-4 left-4 z-10">
                 <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                    rank.toLowerCase().includes('1') || rank.toLowerCase().includes('emas') 
                    ? 'bg-yellow-50 text-yellow-700 border-yellow-200' 
                    : rank.toLowerCase().includes('2') || rank.toLowerCase().includes('perak')
                    ? 'bg-gray-50 text-gray-600 border-gray-200' 
                    : 'bg-orange-50 text-orange-700 border-orange-200'
                }`}>
                    {rank}
                </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-0"></div>
            <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
        </div>

        <div className="p-6 flex-1 flex flex-col">
            <div className="mb-3">
                 <span className="text-xs font-bold tracking-widest text-sch-orange uppercase mb-1 block">{level}</span>
                <h3 className="text-xl font-serif font-bold text-sch-dark leading-tight group-hover:text-sch-orange transition-colors">
                    {title}
                </h3>
            </div>
            
            <p className="text-gray-500 text-sm mb-6 flex-1 border-l-2 border-gray-200 pl-3 italic">
                "{event}"
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sch-dark font-medium text-sm">
                <span className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                    <Trophy size={16} className="text-sch-orange" />
                    Lihat Dokumentasi
                </span>
            </div>
        </div>
    </div>
);

const Prestasi = () => {
    const stats = [
        { label: "Total Prestasi", value: "128", icon: Trophy },
        { label: "Tingkat Provinsi", value: "45", icon: Award },
        { label: "Tingkat Nasional", value: "12", icon: Star },
        { label: "Tahun Ini", value: "24", icon: Calendar },
    ];

    const prestasiList = [
        { 
            title: "Juara 1 Lomba Cerdas Cermat PAI", 
            event: "Pekan Keterampilan & Seni PAI (PENTAS PAI) 2024", 
            rank: "Juara 1", 
            date: "Nov 2024", 
            level: "Tingkat Kabupaten",
            image: "https://images.unsplash.com/photo-1577896335477-2858506297bd?auto=format&fit=crop&w=400&q=80"
        },
        { 
            title: "Medali Perak Olimpiade Matematika", 
            event: "Kompetisi Sains Nasional (KSN) SD Tahun 2024", 
            rank: "Medali Perak", 
            date: "Okt 2024", 
            level: "Tingkat Provinsi",
            image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&q=80"
        },
        { 
            title: "Juara Umum Lomba Baris Berbaris", 
            event: "HUT Pramuka Ke-63 Kwarran Cibeber", 
            rank: "Juara Umum", 
            date: "Agu 2024", 
            level: "Tingkat Kecamatan",
            image: "https://images.unsplash.com/photo-1526634332515-d56c3da74201?auto=format&fit=crop&w=400&q=80"
        },
        { 
            title: "Juara 2 Futsal Junior Cup", 
            event: "Turnamen Futsal Antar SD Se-Kota", 
            rank: "Juara 2", 
            date: "Jul 2024", 
            level: "Tingkat Kota",
            image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=400&q=80"
        },
        { 
            title: "Juara Harapan 1 Pidato Bahasa Arab", 
            event: "Festival Anak Sholeh Indonesia (FASI)", 
            rank: "Harapan 1", 
            date: "Jun 2024", 
            level: "Tingkat Provinsi",
            image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=400&q=80"
        },
        { 
            title: "Medali Emas Karate Kata Perorangan", 
            event: "Olimpiade Olahraga Siswa Nasional (O2SN)", 
            rank: "Medali Emas", 
            date: "Mei 2024", 
            level: "Tingkat Kabupaten",
            image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-sch-yellow selection:text-black">
            <Navbar />
            
            <PageHeader 
                title="Prestasi Sekolah"
                subtitle="Rekam jejak kebanggaan siswa-siswi kami dalam mengukir prestasi di berbagai bidang akademik maupun non-akademik."
                image="https://images.unsplash.com/photo-1567168539593-59673ababaae?q=80&w=2070&auto=format&fit=crop"
            />

            <main className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-24">
                    
                    <section>
                        <Reveal>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="h-full">
                                        <StatCard {...stat} />
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </section>

                    <section>
                        <Reveal>
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <h2 className="text-3xl font-serif font-bold text-sch-dark text-center px-4">Hall of Fame</h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                        </Reveal>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {prestasiList.map((item, idx) => (
                                <Reveal key={idx} delay={idx * 0.1} className="h-full">
                                    <PrestasiCard {...item} />
                                </Reveal>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <Reveal>
                                <button className="px-8 py-4 bg-white border-2 border-sch-dark text-sch-dark font-bold rounded-full hover:bg-sch-dark hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
                                    Lihat Arsip Tahun Lalu
                                </button>
                            </Reveal>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Prestasi;