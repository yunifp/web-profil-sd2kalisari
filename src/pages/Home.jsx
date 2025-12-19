import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import VisiMisi from '../components/sections/VisiMisi'; 
import Features from '../components/sections/Features';
import VideoProfile from '../components/sections/VideoProfile';
import Activities from '../components/sections/Activities';
import News from '../components/sections/News';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-sch-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        
 
        <VisiMisi />


        <Features />
        <VideoProfile />
        <Activities />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Home;