'use client';

import React, { useState } from 'react';
import { Shield, Mail, Lock, LogIn, School } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
    // Aquí irá la lógica de Supabase Auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#8c1c13]" /> {/* Color institucional guinda */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8c1c1310] rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1e293b10] rounded-full blur-3xl" />

      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl border border-slate-100 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-[#8c1c13] rounded-xl mb-4 shadow-lg shadow-red-900/20">
            <School className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">USEBEQ</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Gestión de Calificaciones de Zona</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Correo Institucional
            </label>
            <input
              type="email"
              placeholder="ejemplo@usebeq.edu.mx"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8c1c13] focus:border-transparent outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8c1c13] focus:border-transparent outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#8c1c13] hover:bg-[#6e160f] text-white font-bold rounded-lg flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all shadow-lg shadow-red-900/20"
          >
            <LogIn className="w-5 h-5" /> Acceder al Portal
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-4 grayscale opacity-60">
           {/* Aquí irían logos institucionales */}
           <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
             Sistema Oficial de Captura <br /> de Aprovechamiento Escolar
           </div>
        </div>
      </div>
    </div>
  );
}
