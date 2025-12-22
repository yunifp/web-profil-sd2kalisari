import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import Button from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { ClipboardCheck, FileText, Calendar, UserCheck } from 'lucide-react';

const PPDB = () => {
  const steps = [
    { icon: <FileText />, title: "Isi Formulir", desc: "Melengkapi data diri calon siswa melalui formulir online atau datang langsung." },
    { icon: <ClipboardCheck />, title: "Verifikasi Berkas", desc: "Penyerahan berkas fisik seperti Akta Kelahiran, KK, dan Ijazah TK." },
    { icon: <Calendar />, title: "Wawancara & Tes", desc: "Observasi kesiapan belajar dan wawancara orang tua siswa." },
    { icon: <UserCheck />, title: "Daftar Ulang", desc: "Penyelesaian administrasi dan pengambilan seragam sekolah." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Penerimaan Peserta Didik Baru" 
        subtitle="Bergabunglah bersama keluarga besar SD Negeri Kalisari. Kami berkomitmen membentuk generasi unggul, cerdas, dan berkarakter."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-4xl font-serif font-bold text-sch-dark mb-6">Jadwal PPDB Tahun Ajaran 2025/2026</h2>
            <div className="space-y-4">
              <div className="flex justify-between p-4 bg-gray-50 rounded-xl border-l-4 border-sch-orange">
                <span className="font-bold">Gelombang 1</span>
                <span className="text-gray-600">Januari - Maret 2025</span>
              </div>
              <div className="flex justify-between p-4 bg-gray-50 rounded-xl border-l-4 border-sch-blue">
                <span className="font-bold">Gelombang 2</span>
                <span className="text-gray-600">April - Juni 2025</span>
              </div>
            </div>
            <div className="mt-10 p-8 bg-sch-dark text-white rounded-3xl">
              <h3 className="text-xl font-bold mb-4 italic text-sch-yellow">Persyaratan Utama:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Berusia minimal 6 tahun pada bulan Juli 2025</li>
                <li>• Fotokopi Akta Kelahiran</li>
                <li>• Fotokopi Kartu Keluarga</li>
                <li>• Pas Foto Terbaru (3x4)</li>
              </ul>
            </div>
          </Reveal>

          {/* <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-3xl hover:border-sch-orange transition-colors">
                  <div className="w-12 h-12 bg-sch-orange/10 text-sch-orange rounded-xl flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-sch-dark mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div> */}
        </div>

        {/* <div className="mt-24 text-center">
            <Reveal width="100%">
                <div className="bg-sch-orange/5 rounded-3xl p-12 border border-sch-orange/10">
                    <h2 className="text-3xl font-serif font-bold text-sch-dark mb-4">Siap Mendaftarkan Putra-Putri Anda?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Klik tombol di bawah untuk mengisi formulir pendaftaran online secara cepat dan mudah.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="px-10">Daftar Sekarang</Button>
                        <Button variant="outline" className="px-10">Unduh Brosur</Button>
                    </div>
                </div>
            </Reveal>
        </div> */}
      </section>
      <Footer />
    </div>
  );
};

export default PPDB;