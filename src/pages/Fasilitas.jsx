import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import PageHeader from '../components/layouts/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Wifi, Book, Monitor, Coffee, HeartPulse } from 'lucide-react';

const FacilityCard = ({ image, title, desc, icon: Icon }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
        <div className="relative h-64 overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-sch-dark shadow-sm">
                <Icon size={24} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-sm">Lihat Detail</span>
            </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-xl font-serif font-bold text-sch-dark mb-3 group-hover:text-sch-orange transition-colors">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {desc}
            </p>
        </div>
    </div>
);

const Fasilitas = () => {
    const facilities = [
        {
            title: "Ruang Kelas Digital",
            desc: "Dilengkapi dengan proyektor, kipas angin/AC, dan tata ruang yang ergonomis untuk kenyamanan belajar siswa.",
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
            icon: Monitor
        },
        {
            title: "Perpustakaan Ramah Anak",
            desc: "Koleksi buku lengkap dengan area baca lesehan yang nyaman, mendorong minat baca siswa sejak dini.",
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
            icon: Book
        },
        {
            title: "Laboratorium Komputer",
            desc: "Fasilitas komputer modern dengan akses internet cepat untuk menunjang Asesmen Nasional (ANBK) dan pembelajaran TIK.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
            icon: Wifi
        },
        {
            title: "UKS & Ruang Kesehatan",
            desc: "Layanan pertolongan pertama dengan peralatan standar medis dan tempat istirahat yang higienis.",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
            icon: HeartPulse
        },
        {
            title: "Kantin Sehat",
            desc: "Menyediakan makanan dan minuman higienis tanpa pengawet yang diawasi langsung oleh pihak sekolah.",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
            icon: Coffee
        },
        {
            title: "Musholla Al-Ikhlas",
            desc: "Tempat ibadah yang bersih dan nyaman untuk kegiatan sholat berjamaah dan praktik keagamaan.",
            image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&w=800&q=80",
            icon: Book
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 selection:bg-sch-yellow selection:text-black">
            <Navbar />
            
            <PageHeader 
                title="Fasilitas Sekolah"
                subtitle="Sarana dan prasarana pendukung untuk menciptakan lingkungan belajar yang kondusif, aman, dan menyenangkan."
                image="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
            />

            <main className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                     <Reveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-sch-dark mb-4">Standar Pelayanan Minimal</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Kami terus berupaya meningkatkan kualitas fasilitas fisik untuk menunjang kegiatan akademik maupun non-akademik siswa.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((item, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <FacilityCard {...item} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Fasilitas;