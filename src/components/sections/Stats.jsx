import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Reveal } from '../ui/Reveal';

// Komponen Kecil untuk Menghandle Animasi Angka
const StatCounter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Trigger saat terlihat
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));

  // Cek apakah value adalah angka (untuk menghindari error pada "A")
  const isNumeric = !isNaN(parseFloat(value));

  useEffect(() => {
    if (isInView && isNumeric) {
      // Animasi dari 0 ke value target selama 2.5 detik
      animate(motionValue, parseInt(value), {
        duration: 2.5,
        ease: "easeOut",
      });
    }
  }, [isInView, value, isNumeric, motionValue]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="text-4xl lg:text-5xl font-serif font-bold text-sch-yellow">
        {isNumeric ? (
          <motion.span>{roundedValue}</motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {value}
          </motion.span>
        )}
        {/* Tambahkan simbol + jika itu angka */}
        {isNumeric && <span>+</span>}
      </div>
      <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    { num: "32", label: "Guru Bersertifikasi" },
    { num: "580", label: "Siswa Aktif" },
    { num: "15", label: "Ekstrakurikuler" },
    { num: "A", label: "Akreditasi Sekolah" },
  ];

  return (
    <section className="py-20 bg-sch-dark text-white relative overflow-hidden">
      {/* Hiasan Background Tipis */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-0 left-1/4 w-64 h-64 bg-sch-primary rounded-full blur-3xl mix-blend-overlay"></div>
         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sch-blue rounded-full blur-3xl mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {statsData.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1} width="100%">
              <StatCounter value={stat.num} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;