import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sch-dark text-white pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                
                <div className="col-span-1 lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif font-bold leading-none">SDN Kalisari</span>
                            <span className="text-xs tracking-widest text-sch-yellow uppercase mt-1">Unggul & Berkarakter</span>
                        </div>
                    </div>
                    <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                        Mewujudkan generasi penerus bangsa yang cerdas secara intelektual, matang secara emosional, dan kuat secara spiritual berlandaskan nilai-nilai Pancasila.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 text-gray-400 text-sm">
                           <MapPin size={18} className="mt-1 text-sch-orange flex-shrink-0" />
                           <span>Jl. Raya Kalisari No. 12, Pasar Rebo, Jakarta Timur 13790</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                           <Phone size={18} className="text-sch-orange flex-shrink-0" />
                           <span>(021) 8770 1234</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                           <Mail size={18} className="text-sch-orange flex-shrink-0" />
                           <span>admin@sdnkalisari.sch.id</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-sch-yellow text-lg relative inline-block">
                        Profil Sekolah
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-sch-orange rounded-full"></span>
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Sejarah Sekolah</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Visi & Misi</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Struktur Organisasi</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Fasilitas Sekolah</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Data Guru & Staf</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-sch-yellow text-lg relative inline-block">
                        Akademik
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-sch-orange rounded-full"></span>
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Kurikulum Merdeka</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Ekstrakurikuler</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Prestasi Siswa</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Kalender Akademik</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">E-Raport</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-sch-yellow text-lg relative inline-block">
                        Informasi Publik
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-sch-orange rounded-full"></span>
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Berita Terkini</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Pengumuman</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">PPDB 2025</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Agenda Sekolah</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                <p>&copy; 2025 SD Negeri Kalisari. Developed with ❤️.</p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"><Instagram size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Youtube size={18} /></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;