'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Waves, Utensils, ShieldCheck, Settings } from 'lucide-react';
import RSVPForm from '@/components/RSVPForm';
import AdminDashboard from '@/components/AdminDashboard';

export default function Page() {
  const [view, setView] = useState<'invite' | 'admin'>('invite');

  return (
    <main className="min-h-screen relative font-sans selection:bg-red-200 overflow-x-hidden bg-zinc-900 antialiased">
      {/* Navigation for Admin Toggle (Subtle) */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setView(view === 'invite' ? 'admin' : 'invite')}
          className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all text-gray-400 hover:text-red-600"
          title={view === 'invite' ? 'Área do Administrador' : 'Voltar para o Convite'}
          suppressHydrationWarning
        >
          {view === 'invite' ? <Settings className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
        </button>
      </div>

      {view === 'invite' ? (
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
          {/* Hero Section */}
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl border-t-8 border-red-600 border-b-8 border-black overflow-hidden">
            {/* Background Image for the Card Content */}
            <div className="absolute inset-0 z-0 opacity-15">
              <Image 
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=2000&auto=format&fit=crop" 
                alt="Estádio de Futebol"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Football Field Hero Image */}
            <div className="relative h-48 md:h-64 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
                alt="Campo de Futebol"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"></div>
            </div>

            <div className="relative p-8 md:p-16 pt-8 md:pt-10 text-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,0,0,0.05)_20px,rgba(255,0,0,0.05)_40px)]"></div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-red-600 font-display font-black text-xl md:text-2xl tracking-[0.3em] uppercase mb-2">
                  Convocação Tricolor
                </h2>
                <h1 className="text-4xl md:text-7xl font-display font-black text-gray-900 mb-6 leading-tight">
                  EMILY <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-black to-gray-600">
                    14 ANOS
                  </span>
                </h1>
                
                <div className="flex flex-wrap justify-center gap-6 text-gray-600 font-medium mb-10">
                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                    <Calendar className="w-5 h-5 text-red-600" />
                    <span>Domingo, 5 de Abril</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span>A partir das 12h</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Details Card */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/20"
            >
              <h3 className="text-xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-red-600" />
                Local da Partida
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Jorge Alves Brawn, 85 <br />
                Bela Vista - Indaiatuba-SP
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-2xl">
                    <Utensils className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kit Churrasco</h4>
                    <p className="text-sm text-gray-500">Pedimos a gentileza de trazer seu kit churrasco (carne e bebida de sua preferência).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl">
                    <Waves className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Liberado Piscina</h4>
                    <p className="text-sm text-gray-500">Não esqueça sua roupa de banho e toalha!</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RSVP Form */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <RSVPForm />
            </motion.div>
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="text-white font-bold text-sm uppercase tracking-widest drop-shadow-md">
              #Emily14 #SPFC #FutebolParty
            </p>
          </footer>
        </div>
      ) : (
        <div className="py-20">
          <AdminDashboard />
        </div>
      )}
    </main>
  );
}
