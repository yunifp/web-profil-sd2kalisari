import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { Reveal } from '../components/ui/Reveal';

const Berita = () => {
  const allNews = [
    { title: "Peringatan Hari Kemerdekaan RI ke-79", date: "17 Agustus 2025", category: "Kegiatan", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80" },
    { title: "Kunjungan Edukatif ke Museum Nasional", date: "10 Agustus 2025", category: "Edukasi", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=600&q=80" },
    { title: "Juara Umum Lomba Pramuka Tingkat Kecamatan", date: "05 Agustus 2025", category: "Prestasi", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" },
    { title: "Workshop Digital Kreatif untuk Siswa Kelas 6", date: "01 Agustus 2025", category: "Workshop", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
    { title: "Rapat Koordinasi Komite Sekolah Semester Ganjil", date: "28 Juli 2025", category: "Pengumuman", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" },
    { title: "Pelatihan Dokter Kecil SDN Kalisari", date: "20 Juli 2025", category: "Kegiatan", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Berita & Artikel" 
        subtitle="Temukan informasi terbaru mengenai kegiatan, prestasi, dan pengumuman resmi dari SD Negeri Kalisari."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
      />
      
      <main className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {allNews.map((news, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-2xl mb-5 aspect-[4/3] relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-sch-orange uppercase tracking-wider mb-3">
                    <span>{news.category}</span>
                    <span>•</span>
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif leading-snug group-hover:text-sch-blue transition-colors">{news.title}</h3>
                  <p className="mt-3 text-gray-500 line-clamp-2">Laporan lengkap mengenai kegiatan yang dilaksanakan oleh seluruh civitas akademika SD Negeri Kalisari...</p>
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

export default Berita;