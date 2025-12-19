import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Target, Compass, Award, CheckCircle2 } from 'lucide-react';

const VisiMisi = () => {
  const missions = [
    "Menanamkan keimanan dan ketakwaan melalui pengamalan ajaran agama dalam kehidupan sehari-hari.",
    "Melaksanakan pembelajaran aktif, kreatif, efektif, dan menyenangkan (PAKEM) berbasis teknologi.",
    "Mengembangkan bakat dan minat siswa secara optimal melalui kegiatan ekstrakurikuler yang beragam.",
    "Membudayakan literasi dan numerasi sebagai dasar kecakapan hidup peserta didik.",
    "Mewujudkan lingkungan sekolah yang bersih, hijau, asri, dan ramah anak."
  ];

  const goals = [
    {
      title: "Prestasi Akademik",
      desc: "Meningkatkan rata-rata nilai asesmen nasional dan menjuarai kompetisi sains tingkat kota."
    },
    {
      title: "Karakter Unggul",
      desc: "Membentuk siswa yang disiplin, jujur, santun, dan peduli terhadap sesama serta lingkungan."
    },
    {
      title: "Digitalisasi Sekolah",
      desc: "Implementasi sistem manajemen pembelajaran dan administrasi berbasis digital secara menyeluruh."
    },
    {
      title: "Sekolah Adiwiyata",
      desc: "Mempertahankan dan meningkatkan status sebagai sekolah pelopor kebersihan dan lingkungan hidup."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-sch-yellow selection:text-black">
      <Navbar />
      
      <PageHeader 
        title="Visi, Misi & Tujuan"
        subtitle="Landasan cita-cita dan arah langkah kami dalam mendidik generasi penerus bangsa."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
      />

      <main>
        <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
               <Reveal width="100%">
                  <div className="relative">
                     <div className="absolute -top-10 -left-10 w-40 h-40 bg-sch-yellow/20 rounded-full blur-3xl"></div>
                     <div className="bg-white border-2 border-sch-yellow/20 p-10 rounded-[3rem] shadow-2xl relative z-10 text-center">
                        <div className="w-20 h-20 bg-sch-yellow text-sch-dark mx-auto rounded-2xl flex items-center justify-center mb-8 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                           <Target size={40} />
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-sch-dark mb-6">Visi Sekolah</h2>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                          "Terwujudnya Peserta Didik yang Beriman, Cerdas, Terampil, Mandiri, dan Berwawasan Global."
                        </p>
                     </div>
                  </div>
               </Reveal>

               <Reveal width="100%" delay={0.2}>
                  <div>
                      <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-sch-blue/10 rounded-lg text-sch-dark">
                              <Compass size={24} />
                          </div>
                          <span className="text-sch-orange font-bold tracking-widest uppercase text-sm">Misi Kami</span>
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-sch-dark mb-8">Langkah Nyata Mencapai Visi</h2>
                      <div className="space-y-6">
                          {missions.map((misi, idx) => (
                              <div key={idx} className="flex gap-4">
                                  <div className="mt-1 flex-shrink-0">
                                      <CheckCircle2 className="text-green-500 w-6 h-6" />
                                  </div>
                                  <p className="text-lg text-gray-600 leading-relaxed">{misi}</p>
                              </div>
                          ))}
                      </div>
                  </div>
               </Reveal>
            </div>

            <div className="bg-sch-dark rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sch-yellow/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sch-blue/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Tujuan Sekolah</h2>
                        <p className="text-gray-400">Target terukur yang ingin kami capai dalam jangka pendek dan menengah.</p>
                    </Reveal>
                </div>

                <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {goals.map((goal, idx) => (
                        <Reveal key={idx} delay={idx * 0.1}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full">
                                <div className="mb-4 text-sch-yellow">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{goal.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisiMisi;