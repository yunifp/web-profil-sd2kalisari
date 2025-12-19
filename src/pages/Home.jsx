import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Star, Menu, X, Globe, PenTool, Layout } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal'; 
import { GeoPattern } from '../components/ui/GeoPattern';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <span className="text-2xl font-serif font-bold tracking-tighter">St. Ignatius</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Admissions', 'Academics', 'Student Life', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-sch-orange transition-colors uppercase tracking-wider">
                {item}
              </a>
            ))}
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105">
              Portal Login
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b px-6 py-4"
        >
          {['About', 'Admissions', 'Academics', 'Contact'].map((item) => (
            <a key={item} href="#" className="block py-3 text-lg font-serif border-b border-gray-100">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative pt-32 pb-10 lg:pt-48 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <Reveal>
            <h1 className="text-6xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8">
              Empowering <br/>
              <span className="italic text-gray-400">Minds,</span> <br/>
              Inspiring Futures
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
              We provide an exceptional learning environment where tradition meets innovation. Join our welcoming community today.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group">
                Start Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all">
                Virtual Tour
              </button>
            </div>
          </Reveal>
        </div>

        <motion.div style={{ y: y1 }} className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-sch-yellow/20 rounded-full blur-3xl" />
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Student"
                    className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-[2s]"
                />
                <div className="absolute bottom-8 left-8 bg-sch-yellow p-6 rounded-xl max-w-xs shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2">Upcoming Event</p>
                    <p className="font-serif text-xl font-bold mb-2">Open House 2025</p>
                    <a href="#" className="text-sm border-b border-black pb-1 inline-block">Register Now</a>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
    <Reveal delay={delay} width="100%">
        <div className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
            <a href="#" className="text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
            </a>
        </div>
    </Reveal>
);

const ColorSection = ({ color, title, image, reverse }) => {
    return (
        <section className={`py-20 overflow-hidden ${color}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                        <Reveal>
                            <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">{title}</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-lg opacity-80 mb-8 max-w-xl">
                                Our comprehensive curriculum is designed to challenge students and foster a lifelong love of learning through innovative teaching methods.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
                                Explore Program
                            </button>
                        </Reveal>
                    </div>
                    <div className="flex-1 w-full">
                         <Reveal delay={0.3}>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                         </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Footer = () => (
    <footer className="bg-sch-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                    <span className="text-3xl font-serif font-bold mb-6 block">St. Ignatius</span>
                    <p className="text-gray-400 max-w-sm">
                        Empowering the next generation of leaders through excellence in education, character development, and community service.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-sch-yellow">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Admissions Portal</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 text-sch-yellow">Contact</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li>Jakarta, Indonesia</li>
                        <li>+62 21 555 0192</li>
                        <li>admissions@stignatius.sch.id</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                <p>&copy; 2025 St. Ignatius School. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    </footer>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-sch-yellow selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="w-full overflow-hidden bg-sch-yellow/20 py-4">
             <GeoPattern />
        </div>

        <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <Reveal>
                        <h2 className="text-4xl font-serif font-bold mb-4">Essential Resources</h2>
                    </Reveal>
                    <div className="h-1 w-20 bg-sch-orange rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard icon={Globe} title="Online Library" desc="Access thousands of journals and research papers anywhere." delay={0.1} />
                    <ServiceCard icon={PenTool} title="Writing Tools" desc="Enhance proficiency with advanced writing assistants." delay={0.2} />
                    <ServiceCard icon={Users} title="Counselling" desc="Individual and group support for personal growth." delay={0.3} />
                    <ServiceCard icon={Layout} title="Career Plan" desc="Strategic planning for future educational pursuits." delay={0.4} />
                </div>
            </div>
        </section>

        <ColorSection 
            color="bg-sch-blue" 
            title="Explore Diverse Departments" 
            image="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        />
        
        <ColorSection 
            color="bg-sch-green" 
            title="Advanced Placement Program" 
            image="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            reverse={true}
        />

         <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <Reveal>
                    <h2 className="text-5xl font-serif font-bold mb-8">Our Leadership</h2>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-10 mt-16">
                    {[1,2,3].map((i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                                <img src={`https://images.unsplash.com/photo-155${i}48-c${i}23e4?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Leader" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-xl font-bold">Faculty Member</h3>
                                    <p className="text-sm text-gray-300">Head of Department</p>
                                </div>
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

export default Home;