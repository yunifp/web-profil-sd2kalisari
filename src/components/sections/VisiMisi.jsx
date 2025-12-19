import React from 'react';
import { Target, CheckCircle2, Award } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const VisiMisi = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sch-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sch-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <Reveal width="100%">
                    <h2 className="text-4xl font-serif font-bold text-sch-dark mb-4">Visi & Misi Sekolah</h2>
                    <div className="w-24 h-1 bg-sch-orange mx-auto rounded-full"></div>
                </Reveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                
                <Reveal width="100%" delay={0.1}>
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-sch-blue/20 h-full relative overflow-hidden group hover:border-sch-blue transition-colors">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target size={200} />
                        </div>
                        
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                            <Target size={32} />
                        </div>
                        
                        <h3 className="text-3xl font-serif font-bold mb-6 text-sch-dark">Visi Kami</h3>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            "Terwujudnya Peserta Didik yang Beriman, Cerdas, Terampil, Mandiri, dan Berwawasan Global."
                        </p>
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <div className="bg-sch-dark p-10 rounded-3xl shadow-xl h-full relative overflow-hidden text-white group">
                         <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white">
                            <Award size={200} />
                        </div>

                        <div className="w-16 h-16 bg-white/10 text-sch-yellow rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                            <Award size={32} />
                        </div>

                        <h3 className="text-3xl font-serif font-bold mb-6">Misi Kami</h3>
                        <ul className="space-y-4">
                            {[
                                "Menanamkan keimanan dan ketakwaan melalui pengamalan ajaran agama.",
                                "Melaksanakan pembelajaran aktif, kreatif, efektif, dan menyenangkan.",
                                "Mengembangkan bakat dan minat siswa melalui kegiatan ekstrakurikuler.",
                                "Mewujudkan lingkungan sekolah yang bersih, hijau, dan asri."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-sch-green flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>

            </div>
        </div>
    </section>
  );
};

export default VisiMisi;