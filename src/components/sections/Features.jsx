import React from 'react';
import { BookOpen, Users, Star, Award } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <Reveal delay={delay} width="100%">
        <div className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sch-blue/10 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
            
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-sch-dark group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-sch-dark relative z-10">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed relative z-10">{desc}</p>
        </div>
    </Reveal>
);

const Features = () => {
    return (
        <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <Reveal>
                            <span className="text-sch-orange font-bold tracking-widest uppercase text-xs mb-2 block">Mengapa Memilih Kami?</span>
                            <h2 className="text-4xl font-serif font-bold text-sch-dark">Fasilitas & Layanan Unggulan</h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                         <a href="#" className="inline-flex items-center font-medium border-b-2 border-black pb-1 hover:text-sch-orange hover:border-sch-orange transition-colors">
                            Lihat Semua Fasilitas
                         </a>
                    </Reveal>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard icon={BookOpen} title="Perpustakaan Digital" desc="Akses ribuan buku cerita dan pelajaran secara digital dan fisik." delay={0.1} />
                    <FeatureCard icon={Users} title="Guru Kompeten" desc="Tenaga pendidik profesional lulusan universitas terbaik." delay={0.2} />
                    <FeatureCard icon={Star} title="Ekstrakurikuler" desc="Pramuka, Tari, Futsal, Drumband, dan Paduan Suara." delay={0.3} />
                    <FeatureCard icon={Award} title="Bimbingan Karakter" desc="Pendidikan moral dan religius yang diutamakan." delay={0.4} />
                </div>
            </div>
        </section>
    );
};

export default Features;