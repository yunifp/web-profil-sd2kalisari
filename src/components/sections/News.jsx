import React from 'react';
import { Reveal } from '../ui/Reveal';

const News = () => {
    return (
        <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4 text-sch-dark">Kabar Sekolah</h2>
                    <p className="text-gray-500">Informasi terbaru seputar kegiatan dan prestasi siswa.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Peringatan Hari Kemerdekaan RI ke-79", date: "17 Agustus 2025", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80" },
                        { title: "Kunjungan Edukatif ke Museum Nasional", date: "10 Agustus 2025", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=600&q=80" },
                        { title: "Juara Umum Lomba Pramuka Tingkat Kecamatan", date: "05 Agustus 2025", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" }
                    ].map((news, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="group cursor-pointer">
                                <div className="overflow-hidden rounded-2xl mb-4 aspect-video relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-sch-orange uppercase tracking-wider mb-2">
                                    <span>Berita</span>
                                    <span>•</span>
                                    <span>{news.date}</span>
                                </div>
                                <h3 className="text-xl font-bold font-serif leading-snug group-hover:text-sch-blue transition-colors">{news.title}</h3>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;