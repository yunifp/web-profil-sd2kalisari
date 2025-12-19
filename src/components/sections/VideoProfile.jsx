import React from 'react';
import { Play } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const VideoProfile = () => {
  return (
    <section className="py-12 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <div className="relative w-full aspect-video lg:aspect-[2.5/1] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Video Profil Sekolah" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/50">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-2 tracking-tight">Profil SD Negeri Kalisari</h2>
              <p className="text-white/90 text-lg">Mengenal lebih dekat lingkungan belajar kami</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default VideoProfile;