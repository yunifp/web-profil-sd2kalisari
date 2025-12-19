import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Star, Activity, Heart, Music, BookOpen, Award, Users, Calendar, Clock } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center group h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-sch-yellow/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} className="text-sch-dark" />
        </div>
        <h3 className="text-4xl font-serif font-bold text-sch-dark mb-2">{value}</h3>
        <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{label}</p>
    </div>
);

const EkskulCard = ({ name, description, icon: Icon, schedule, location }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-sch-orange shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-sch-dark group-hover:text-white transition-colors duration-300 shadow-sm">
                <Icon size={28} />
            </div>
            <div>
                <h3 className="font-serif font-bold text-xl text-sch-dark group-hover:text-sch-orange transition-colors">{name}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs font-bold text-gray-400 uppercase tracking-wide">
                    <span className="flex items-center gap-1"><Clock size={12} /> {schedule}</span>
                </div>
            </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
            {description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
             <button className="w-full py-2 rounded-lg bg-gray-50 text-sch-dark font-bold text-sm hover:bg-sch-orange hover:text-white transition-all duration-300">
                Lihat Jadwal Lengkap
            </button>
        </div>
    </div>
);

const Ekstrakurikuler = () => {
    const stats = [
        { label: "Ekstrakurikuler", value: "12", icon: Activity },
        { label: "Siswa Terlibat", value: "95%", icon: Users },
        { label: "Pelatih Ahli", value: "15", icon: Star },
        { label: "Jam Latihan/Minggu", value: "24+", icon: Clock },
    ];

    const ekskulList = [
        { name: "Pramuka", schedule: "Jumat, 14.00", description: "Membentuk karakter kepemimpinan, kemandirian, dan kedisiplinan siswa melalui kegiatan kepanduan yang menyenangkan dan edukatif di alam terbuka.", icon: Star },
        { name: "Futsal Club", schedule: "Selasa, 15.30", description: "Melatih kerjasama tim, strategi permainan, dan ketahanan fisik siswa melalui olahraga bola yang kompetitif dan sportif.", icon: Activity },
        { name: "Seni Tari Tradisional", schedule: "Rabu, 14.00", description: "Melestarikan budaya bangsa dengan mempelajari berbagai tarian daerah dan kreasi baru, melatih keluwesan dan rasa percaya diri.", icon: Heart },
        { name: "Marching Band", schedule: "Sabtu, 08.00", description: "Mengembangkan bakat musik, kedisiplinan baris-berbaris, dan kekompakan tim dalam harmonisasi nada dan gerak.", icon: Music },
        { name: "Tahfidz Quran", schedule: "Senin-Kamis, 07.00", description: "Program unggulan khusus penghafal Al-Quran juz 30 dengan metode tartil, tajwid yang benar, dan setoran hafalan rutin.", icon: BookOpen },
        { name: "Sains Club", schedule: "Rabu, 15.00", description: "Wadah bagi siswa yang gemar bereksperimen dan mengeksplorasi fenomena alam melalui metode ilmiah yang seru.", icon: Award },
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-sch-yellow selection:text-black">
            <Navbar />
            
            <PageHeader 
                title="Ekstrakurikuler"
                subtitle="Wadah pengembangan minat dan bakat siswa di luar jam pelajaran akademik untuk membentuk karakter yang unggul."
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
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
                                <h2 className="text-3xl font-serif font-bold text-sch-dark text-center px-4">Pilihan Kegiatan</h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                        </Reveal>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ekskulList.map((item, idx) => (
                                <Reveal key={idx} delay={idx * 0.1} className="h-full">
                                    <EkskulCard {...item} />
                                </Reveal>
                            ))}
                        </div>
                    </section>

                    <section className="bg-sch-dark rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-sch-yellow/10 opacity-20 pattern-grid-lg"></div>
                        <Reveal>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl font-serif font-bold mb-6">Ingin Mengusulkan Ekstrakurikuler Baru?</h2>
                                <p className="text-gray-300 mb-8">Kami selalu terbuka untuk wadah baru yang dapat mengembangkan potensi siswa. Sampaikan aspirasi Anda kepada kami.</p>
                                <button className="px-8 py-3 bg-sch-yellow text-sch-dark font-bold rounded-full hover:bg-white transition-colors duration-300">
                                    Hubungi Kesiswaan
                                </button>
                            </div>
                        </Reveal>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Ekstrakurikuler;