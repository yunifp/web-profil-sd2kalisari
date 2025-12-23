import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

const BeritaDetail = () => {
  const { id } = useParams();

  // Simulasi fetch data berdasarkan ID
  const newsData = {
    id: id,
    title: 'Kegiatan Perkemahan Sabtu Minggu (Persami) Siswa Kelas 4 & 5',
    date: '15 Oktober 2023',
    author: 'Admin Sekolah',
    category: 'Kesiswaan',
    image: 'https://images.unsplash.com/photo-1526634333649-063a8247071e?q=80&w=1000&auto=format&fit=crop',
    content: [
      'SD 2 Kalisari kembali mengadakan kegiatan Perkemahan Sabtu Minggu (Persami) yang diikuti oleh seluruh siswa kelas 4 dan 5. Kegiatan ini bertujuan untuk melatih kemandirian, kedisiplinan, serta kerjasama antar siswa.',
      'Rangkaian acara dimulai pada pukul 14.00 WIB dengan upacara pembukaan yang dipimpin langsung oleh Bapak Kepala Sekolah. Setelah itu, siswa mendirikan tenda masing-masing regu dengan penuh semangat.',
      'Pada malam hari, kegiatan dilanjutkan dengan api unggun dan pentas seni. Setiap regu menampilkan bakat mereka, mulai dari menyanyi, menari, hingga drama singkat. Suasana penuh keakraban sangat terasa di malam itu.',
      'Kegiatan ditutup pada hari Minggu pagi dengan senam bersama dan operasi semut untuk membersihkan lingkungan sekolah sebelum pulang.'
    ]
  };

  const relatedNews = [
    { id: 2, title: 'Juara 1 Lomba Matematika', date: '02 Nov 2023' },
    { id: 3, title: 'Penerimaan Raport Semester 1', date: '15 Des 2023' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <article className="lg:w-2/3">
                <div className="mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="bg-sch-blue/20 text-sch-blue px-2 py-1 rounded font-bold uppercase text-xs">{newsData.category}</span>
                        <span>•</span>
                        <span>{newsData.date}</span>
                        <span>•</span>
                        <span>Oleh {newsData.author}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-sch-dark leading-tight mb-6">
                        {newsData.title}
                    </h1>
                </div>

                <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                    <img src={newsData.image} alt={newsData.title} className="w-full h-auto object-cover" />
                </div>

                <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                    {newsData.content.map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <Link to="/berita" className="inline-flex items-center gap-2 text-sch-dark font-bold hover:text-sch-blue transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                        Kembali ke Berita
                    </Link>
                </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
                <div className="bg-sch-light p-6 rounded-xl border border-gray-100 sticky top-24">
                    <h3 className="font-bold text-xl text-sch-dark mb-4 pb-2 border-b border-gray-200">Berita Lainnya</h3>
                    <div className="space-y-4">
                        {relatedNews.map((item) => (
                            <Link key={item.id} to={`/berita/${item.id}`} className="block group">
                                <h4 className="font-bold text-sch-dark group-hover:text-sch-blue transition-colors mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="bg-sch-dark text-white p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-2">PPDB 2024</h3>
                    <p className="text-gray-300 text-sm mb-4">Pendaftaran peserta didik baru telah dibuka.</p>
                    <Link to="/ppdb" className="block w-full text-center bg-sch-yellow text-sch-dark font-bold py-2 rounded hover:bg-yellow-400 transition-colors">
                        Info Selengkapnya
                    </Link>
                </div>
            </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BeritaDetail;