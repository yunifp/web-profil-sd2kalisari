import React from 'react';
import { Reveal } from '../ui/Reveal';

const Activities = () => {
    return (
        <section className="py-24 overflow-hidden bg-sch-blue/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <Reveal>
                            <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight text-sch-dark">
                                Kegiatan Belajar Mengajar yang <span className="text-blue-600">Menyenangkan</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-lg opacity-80 mb-8 max-w-xl text-gray-700">
                                Kami menerapkan metode pembelajaran aktif (Active Learning) di mana siswa diajak untuk berdiskusi, praktek, dan bermain sambil belajar di lingkungan yang asri.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                {[
                                    "Ruang Kelas Nyaman & Bersih", // Teks sudah diganti
                                    "Lapangan Olahraga Luas", 
                                    "Musholla Sekolah"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-sch-dark text-white px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
                                Lihat Galeri Sekolah
                            </button>
                        </Reveal>
                    </div>
                    <div className="flex-1 w-full">
                         <Reveal delay={0.3}>
                            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                                <img 
                                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Kegiatan Belajar SD" 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                         </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;