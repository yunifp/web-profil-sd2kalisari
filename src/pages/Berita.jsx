import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import PageHeader from '../components/layouts/PageHeader';

const Berita = () => {
  const newsList = [
    {
      id: 1,
      title: 'Kegiatan Perkemahan Sabtu Minggu (Persami)',
      category: 'Kesiswaan',
      date: '15 Okt 2023',
      image: 'https://images.unsplash.com/photo-1526634333649-063a8247071e?q=80&w=1000&auto=format&fit=crop',
      desc: 'Kegiatan pramuka rutin yang diikuti oleh seluruh siswa kelas 4 dan 5 untuk melatih kemandirian.'
    },
    {
      id: 2,
      title: 'Juara 1 Lomba Matematika Tingkat Kabupaten',
      category: 'Prestasi',
      date: '02 Nov 2023',
      image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop',
      desc: 'Siswa kami berhasil meraih prestasi gemilang dalam olimpiade matematika tahunan.'
    },
    {
      id: 3,
      title: 'Sosialisasi Kesehatan Gigi dan Mulut',
      category: 'Kesehatan',
      date: '10 Nov 2023',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop',
      desc: 'Bekerjasama dengan Puskesmas setempat memberikan edukasi kepada siswa kelas 1-3.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <PageHeader 
        title="Berita & Artikel" 
        subtitle="Informasi terbaru seputar kegiatan dan prestasi sekolah." 
        bgImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((item) => (
                <Link to={`/berita/${item.id}`} key={item.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                    <div className="h-56 overflow-hidden relative">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur text-sch-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                {item.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="text-gray-500 text-xs font-medium mb-3 flex items-center gap-2">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                             {item.date}
                        </div>
                        <h3 className="text-xl font-bold text-sch-dark mb-3 line-clamp-2 group-hover:text-sch-blue transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                            {item.desc}
                        </p>
                        <span className="text-sch-blue font-bold text-sm flex items-center gap-1 mt-auto">
                            Baca Selengkapnya
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Berita;