import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import PageHeader from '../components/layouts/PageHeader';
import { Link } from 'react-router-dom';
import heroimage from "../assets/heroimage.jpg"

const PPDB = () => {
  // Simulasi data yang dikelola dari Admin Panel
  const ppdbData = {
    status: 'opened', // 'opened' or 'closed'
    tahunAjaran: '2024 / 2025',
    heroTitle: 'Penerimaan Peserta Didik Baru',
    heroDesc: 'Bergabunglah bersama kami untuk mencetak generasi cerdas, berkarakter, dan berwawasan global di SD 2 Kalisari.',
    linkDaftar: 'https://bit.ly/ppdb-sd2kalisari',
    syarat: [
      'Mengisi formulir pendaftaran',
      'Fotokopi Akta Kelahiran (3 lembar)',
      'Fotokopi Kartu Keluarga (3 lembar)',
      'Pas Foto 3x4 berwarna (4 lembar)',
      'Usia minimal 6 tahun pada bulan Juli'
    ],
    alur: [
      { title: 'Daftar Online', desc: 'Isi formulir pendaftaran melalui link yang tersedia.' },
      { title: 'Verifikasi Berkas', desc: 'Bawa berkas fisik ke sekolah untuk diverifikasi panitia.' },
      { title: 'Wawancara', desc: 'Wawancara singkat calon siswa dan orang tua.' },
      { title: 'Pengumuman', desc: 'Hasil seleksi akan diumumkan melalui website dan WhatsApp.' },
      { title: 'Daftar Ulang', desc: 'Lakukan daftar ulang untuk konfirmasi status siswa.' }
    ],
    jadwal: {
      mulai: '01 Mei 2024',
      selesai: '30 Juni 2024'
    },
    kontak: {
      wa: '0812-3456-7890',
      email: 'ppdb@sd2kalisari.sch.id'
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <PageHeader 
        title="PPDB Online" 
        subtitle={`Tahun Ajaran ${ppdbData.tahunAjaran}`} 
        bgImage={heroimage}
      />

      {/* Hero / CTA Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="bg-sch-blue/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-sch-blue/20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block">
                {ppdbData.status === 'opened' ? (
                     <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-2 mx-auto md:mx-0 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                        PENDAFTARAN DIBUKA
                    </span>
                ) : (
                    <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-2 mx-auto md:mx-0 w-fit">
                        PENDAFTARAN DITUTUP
                    </span>
                )}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sch-dark leading-tight">
              {ppdbData.heroTitle}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {ppdbData.heroDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              {ppdbData.status === 'opened' ? (
                  <a 
                    href={ppdbData.linkDaftar} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-sch-dark text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-sch-dark/20 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    Daftar Sekarang
                  </a>
              ) : (
                  <button disabled className="bg-gray-300 text-gray-500 font-bold px-8 py-4 rounded-xl cursor-not-allowed">
                    Pendaftaran Belum Dibuka
                  </button>
              )}
              <button className="bg-white text-sch-dark border border-gray-200 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                 Download Brosur
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
             {/* Simulasi Preview Brosur */}
             <div className="relative w-64 h-80 bg-white shadow-2xl rotate-3 border-8 border-white rounded-lg overflow-hidden group hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-sch-dark flex flex-col items-center justify-center text-white p-6 text-center">
                    <span className="font-serif font-bold text-xl mb-2">BROSUR PPDB</span>
                    <span className="text-4xl font-bold text-sch-yellow">{ppdbData.tahunAjaran.split('/')[0]}</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Kolom Kiri: Alur & Syarat */}
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-sch-dark mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-sch-yellow flex items-center justify-center text-sch-dark">1</span>
                        Syarat Pendaftaran
                    </h3>
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ppdbData.syarat.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-sch-dark mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-sch-purple flex items-center justify-center text-sch-dark">2</span>
                        Alur Pendaftaran
                    </h3>
                    <div className="relative border-l-2 border-sch-blue/30 ml-4 space-y-8 pl-8 py-2">
                        {ppdbData.alur.map((step, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white border-4 border-sch-blue"></span>
                                <h4 className="font-bold text-lg text-sch-dark">{step.title}</h4>
                                <p className="text-gray-600 mt-1">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Kolom Kanan: Jadwal & Kontak */}
            <div className="space-y-8">
                <div className="bg-sch-dark text-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold font-serif mb-6 border-b border-gray-700 pb-4">Jadwal Penting</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Mulai Pendaftaran</p>
                            <p className="text-2xl font-bold text-sch-green">{ppdbData.jadwal.mulai}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Batas Akhir</p>
                            <p className="text-2xl font-bold text-red-400">{ppdbData.jadwal.selesai}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-sch-light border border-gray-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-sch-dark mb-4">Butuh Bantuan?</h3>
                    <p className="text-gray-600 mb-6 text-sm">Jika Anda mengalami kendala saat mendaftar, silakan hubungi panitia kami.</p>
                    
                    <div className="space-y-4">
                        <a href={`https://wa.me/${ppdbData.kontak.wa.replace(/-/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow group">
                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            </div>
                            <div>
                                <p className="font-bold text-sch-dark text-sm">WhatsApp Panitia</p>
                                <p className="text-gray-500 text-xs">{ppdbData.kontak.wa}</p>
                            </div>
                        </a>
                        
                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-sch-blue/20 text-sch-blue flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <p className="font-bold text-sch-dark text-sm">Email</p>
                                <p className="text-gray-500 text-xs">{ppdbData.kontak.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PPDB;