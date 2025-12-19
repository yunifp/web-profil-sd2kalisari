import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Mail, Phone } from 'lucide-react';

const TeacherCard = ({ name, role, nip, image, color = "bg-white" }) => (
    <div className={`group ${color} h-full flex flex-col rounded-2xl p-6 text-center border border-gray-100 hover:border-sch-orange shadow-sm hover:shadow-xl transition-all duration-300`}>
        <div className="relative w-32 h-32 mx-auto mb-6 flex-shrink-0">
            <div className="absolute inset-0 bg-sch-yellow rounded-full translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full rounded-full object-cover relative z-10 border-4 border-white bg-gray-100"
            />
        </div>

        <div className="flex-1 flex flex-col justify-start w-full">
            <h3 className="text-lg font-serif font-bold text-sch-dark mb-1 leading-tight min-h-[3.5rem] flex items-center justify-center">
                {name}
            </h3>
            <p className="text-sch-orange text-xs font-bold uppercase tracking-widest mb-3">{role}</p>
            
            <div className="w-8 h-1 bg-gray-200 mx-auto rounded-full mb-4 group-hover:bg-sch-orange transition-colors"></div>
            
            <p className="text-xs text-gray-500 mb-4 font-mono">NIP. {nip}</p>
        </div>
        
        <div className="mt-auto pt-2 w-full flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            <button className="p-2 bg-gray-50 hover:bg-sch-dark hover:text-white rounded-full transition-colors" title="Email">
                <Mail size={16} />
            </button>
             <button className="p-2 bg-gray-50 hover:bg-sch-dark hover:text-white rounded-full transition-colors" title="Hubungi">
                <Phone size={16} />
            </button>
        </div>
    </div>
);

const GuruStaff = () => {
    const pimpinan = [
        {
            name: "Hj. Siti Aminah, S.Pd.SD",
            role: "Kepala Sekolah",
            nip: "19750101 200003 2 001",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
        }
    ];

    const guruKelas = [
        { name: "Ani Suryani, S.Pd", role: "Guru Kelas I", nip: "19850101 201001 2 001", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
        { name: "Bambang Pamungkas, S.Pd", role: "Guru Kelas II", nip: "19860202 201001 1 002", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
        { name: "Citra Kirana, S.Pd", role: "Guru Kelas III", nip: "19870303 201001 2 003", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=400&q=80" },
        { name: "Dedi Mulyadi, S.Pd", role: "Guru Kelas IV", nip: "19880404 201001 1 004", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
        { name: "Eka Putri, S.Pd", role: "Guru Kelas V", nip: "19890505 201001 2 005", img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7e89?auto=format&fit=crop&w=400&q=80" },
        { name: "Fajar Nugraha, S.Pd", role: "Guru Kelas VI", nip: "19900606 201001 1 006", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" }
    ];

    const guruMapel = [
        { name: "Ust. Ahmad Zaki, S.Ag", role: "Guru PAI", nip: "19910707 201501 1 007", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
        { name: "Heri Susanto, S.Or", role: "Guru PJOK", nip: "19920808 201501 1 008", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80" },
        { name: "Maria Kristina, S.Pd", role: "Guru Bahasa Inggris", nip: "19930909 201501 2 009", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-sch-yellow selection:text-black">
            <Navbar />
            
            <PageHeader 
                title="Guru & Staf Pengajar"
                subtitle="Mengenal lebih dekat para pendidik profesional yang berdedikasi membimbing putra-putri Anda."
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            />

            <main className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-20">
                    
                    <section className="text-center">
                        <Reveal>
                            <h2 className="text-3xl font-serif font-bold text-sch-dark mb-12">Pimpinan Sekolah</h2>
                        </Reveal>
                        <div className="flex justify-center">
                            <Reveal>
                                <div className="max-w-xs w-full">
                                    <TeacherCard 
                                        {...pimpinan[0]} 
                                        color="bg-gradient-to-b from-white to-sch-yellow/10 border-sch-yellow"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </section>

                    <section>
                        <Reveal>
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <h2 className="text-2xl font-serif font-bold text-sch-dark text-center min-w-max px-4">Guru Kelas</h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                        </Reveal>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {guruKelas.map((guru, idx) => (
                                <Reveal key={idx} delay={idx * 0.1} className="h-full">
                                    <TeacherCard 
                                        name={guru.name}
                                        role={guru.role}
                                        nip={guru.nip}
                                        image={guru.img}
                                    />
                                </Reveal>
                            ))}
                        </div>
                    </section>

                    <section>
                        <Reveal>
                             <div className="flex items-center gap-4 mb-12">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <h2 className="text-2xl font-serif font-bold text-sch-dark text-center min-w-max px-4">Guru Mata Pelajaran</h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                        </Reveal>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {guruMapel.map((guru, idx) => (
                                <Reveal key={idx} delay={idx * 0.1} className="h-full">
                                    <TeacherCard 
                                        name={guru.name}
                                        role={guru.role}
                                        nip={guru.nip}
                                        image={guru.img}
                                    />
                                </Reveal>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GuruStaff;