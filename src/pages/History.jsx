import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import PageHeader from '../components/layouts/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Calendar, Award, TrendingUp, Building2 } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      year: "1985",
      title: "Pendirian Sekolah",
      desc: "SD Negeri Kalisari resmi didirikan di atas tanah wakaf seluas 2.500m² dengan bangunan awal yang terdiri dari 6 ruang kelas sederhana.",
      icon: Building2
    },
    {
      year: "1998",
      title: "Renovasi Besar",
      desc: "Mendapatkan bantuan pemerintah untuk renovasi total menjadi bangunan bertingkat guna menampung jumlah siswa yang terus bertambah.",
      icon: TrendingUp
    },
    {
      year: "2010",
      title: "Sekolah Adiwiyata",
      desc: "Meraih penghargaan sebagai Sekolah Adiwiyata tingkat Kota berkat komitmen terhadap kebersihan dan penghijauan lingkungan sekolah.",
      icon: Award
    },
    {
      year: "2022",
      title: "Sekolah Penggerak",
      desc: "Terpilih sebagai salah satu Sekolah Penggerak Angkatan I yang menerapkan Kurikulum Merdeka secara menyeluruh.",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-sch-yellow selection:text-black">
      <Navbar />
      
      <PageHeader 
        title="Sejarah Perjalanan"
        subtitle="Mengenang jejak langkah pengabdian dalam mencerdaskan kehidupan bangsa dari masa ke masa."
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
      />

      <main>
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
               <h2 className="text-3xl font-serif font-bold text-sch-dark mb-8">Awal Mula Berdiri</h2>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed text-lg">
               <Reveal delay={0.1}>
                  <p className="mb-6">
                    SD Negeri Kalisari memulai perjalanan panjangnya pada tahun 1985. Berawal dari keinginan kuat masyarakat sekitar akan adanya sarana pendidikan yang berkualitas dan terjangkau, para tokoh masyarakat bekerja sama dengan pemerintah daerah untuk mendirikan sekolah dasar ini.
                  </p>
                  <p>
                    Pada masa-masa awal, kegiatan belajar mengajar dilaksanakan dengan fasilitas yang sangat terbatas. Namun, semangat para guru dan antusiasme siswa menjadi pondasi kuat yang membuat sekolah ini terus bertahan dan berkembang.
                  </p>
               </Reveal>
               <Reveal delay={0.2}>
                  <p className="mb-6">
                    Seiring berjalannya waktu, SDN Kalisari terus berbenah. Dari bangunan semi permanen menjadi gedung bertingkat yang megah. Dari kapur tulis menjadi papan tulis digital. Transformasi ini dilakukan tanpa menghilangkan nilai-nilai luhur budi pekerti yang menjadi ciri khas kami.
                  </p>
                  <blockquote className="border-l-4 border-sch-orange pl-6 italic text-gray-800 font-serif">
                    "Pendidikan bukan hanya tentang mengisi wadah, tetapi menyalakan api."
                  </blockquote>
               </Reveal>
            </div>
          </div>
        </section>

        <section className="py-24 bg-sch-dark text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-sch-yellow rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-sch-blue rounded-full blur-3xl"></div>
           </div>

           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <Reveal>
                 <div className="text-center mb-16">
                    <span className="text-sch-yellow font-bold tracking-widest uppercase text-xs mb-2 block">Milestone</span>
                    <h2 className="text-4xl font-serif font-bold">Jejak Langkah Kami</h2>
                 </div>
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group h-full">
                       <div className="flex items-center justify-between mb-6">
                          <span className="text-3xl font-serif font-bold text-sch-yellow">{item.year}</span>
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-sch-yellow group-hover:text-sch-dark transition-colors">
                             <item.icon size={20} />
                          </div>
                       </div>
                       <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                       <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
           </div>
        </section>

        <section className="py-24 px-6 lg:px-8 bg-gray-50">
           <div className="max-w-7xl mx-auto">
              <Reveal>
                  <h2 className="text-3xl font-serif font-bold text-sch-dark mb-12 text-center">Dokumentasi Sejarah</h2>
              </Reveal>
              <div className="grid md:grid-cols-3 gap-6">
                 {[1, 2, 3].map((item, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                       <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                          <img 
                            src={`https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80`} 
                            alt="Foto Sejarah" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                          />
                       </div>
                    </Reveal>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default History;