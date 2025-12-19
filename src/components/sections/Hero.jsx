import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowRight, Trophy } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import HeroImage from '../../assets/subhero.jpg'
import SubHeroImage from '../../assets/heroimage.jpg'

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
            src={HeroImage}
            alt="School Building" 
            className="w-full h-full object-cover"
        />
        {/* Layer Hitam (Opacity 75%) agar teks jelas */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={12} fill="currentColor" className="text-sch-yellow" />
              <span className="text-sch-yellow">Sekolah Penggerak Angkatan I</span>
            </div>
            {/* Text Putih */}
            <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-white">
              Mewujudkan <br/>
              Generasi <span className="text-sch-yellow italic">Cerdas</span> & <br/>
              Berakhlak Mulia
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            {/* Text Abu Terang */}
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Selamat datang di SD Negeri Kalisari. Kami berkomitmen memberikan pendidikan dasar terbaik dengan kurikulum merdeka yang berpusat pada siswa.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <button className="bg-sch-yellow text-sch-dark px-8 py-4 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Daftar PPDB Online
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                Unduh Brosur
              </button>
            </div>
          </Reveal>
        </div>

        <motion.div style={{ y: y1 }} className="relative order-1 lg:order-2">
            {/* Glow effect di belakang gambar */}
            <div className="absolute top-10 right-10 w-full h-full bg-sch-yellow/20 rounded-[3rem] -z-10 blur-3xl" />
            
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                    src={SubHeroImage} 
                    alt="Siswa SD Indonesia"
                    className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-[2s]"
                />
                
                <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-sch-yellow text-sch-dark rounded-full flex items-center justify-center">
                            <Trophy size={24} />
                        </div>
                        <div className="text-white">
                            <p className="text-xs font-bold uppercase text-gray-300 mb-1">Prestasi Terbaru</p>
                            <p className="font-serif text-lg font-bold leading-tight">Juara 1 Olimpiade Sains Nasional Tingkat Kota</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;