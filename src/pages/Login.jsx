import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Button from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Lock, Mail } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-md">
          <Reveal width="100%">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sch-orange/10 text-sch-orange rounded-2xl mb-4">
                  <Lock size={32} />
                </div>
                <h1 className="text-3xl font-serif font-bold text-sch-dark">Admin Portal</h1>
                <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Silakan masuk ke akun Anda</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sch-orange/20 focus:border-sch-orange transition-all outline-none"
                      placeholder="admin@sdnkalisari.sch.id"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="password" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sch-orange/20 focus:border-sch-orange transition-all outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-sch-orange focus:ring-sch-orange" />
                    <span className="text-gray-600 group-hover:text-sch-dark">Ingat saya</span>
                  </label>
                  <a href="#" className="text-sch-orange font-bold hover:underline">Lupa Password?</a>
                </div>

                <Button className="w-full py-4 text-lg shadow-lg shadow-black/10">
                  Masuk Sekarang
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;