'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Chrome, ShieldCheck, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

export default function VincularGooglePage() {
  const [isLinked, setIsLinked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLinkGoogle = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        // Supabase maneja automáticamente el link si el email coincide 
        // o si el usuario ya tiene sesión iniciada
      },
    });

    if (error) {
      console.error('Error al vincular Google:', error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-12">
        <div className="max-w-2xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-black text-slate-800">Vinculación de Cuenta</h1>
            <p className="text-slate-500 font-medium">Sincroniza tu identidad institucional con los servicios de Google.</p>
          </header>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {/* Cabecera de Integración */}
            <div className="p-8 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
                  <Mail className="w-6 h-6 text-[#8c1c13]" />
                </div>
                <div className="h-0.5 w-8 bg-slate-200" />
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
                  <Chrome className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                isLinked ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
              }`}>
                {isLinked ? 'Sincronizado' : 'Pendiente'}
              </div>
            </div>

            <div className="p-10 space-y-8">
              {!isLinked ? (
                <>
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-800">¿Por qué vincular tu Gmail Institucional?</h2>
                    <ul className="space-y-4">
                      <BenefitRow 
                        icon={<ShieldCheck className="w-5 h-5" />} 
                        title="Seguridad Avanzada" 
                        desc="Protege tu acceso con la autenticación de dos factores de Google." 
                      />
                      <BenefitRow 
                        icon={<Mail className="w-5 h-5" />} 
                        title="Acceso Sin Contraseña" 
                        desc="Entra al portal en un clic desde cualquier dispositivo institucional." 
                      />
                      <BenefitRow 
                        icon={<ArrowRight className="w-5 h-5" />} 
                        title="Sincronización de Datos" 
                        desc="Mantén tus grupos y alumnos actualizados con tu cuenta oficial." 
                      />
                    </ul>
                  </div>

                  <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
                    <p className="text-xs text-blue-800 leading-relaxed font-medium">
                      Asegúrate de estar utilizando tu correo con terminación <span className="font-bold">@usebeq.edu.mx</span> para que la vinculación sea válida.
                    </p>
                  </div>

                  <button 
                    onClick={handleLinkGoogle}
                    className="w-full py-4 bg-white border-2 border-slate-100 hover:border-blue-500 rounded-2xl flex items-center justify-center gap-4 transition-all hover:shadow-xl group"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.85c.87-2.6 3.3-4.54 6.16-4.54z" fill="#EA4335"/>
                    </svg>
                    <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Vincular con Google Gmail</span>
                  </button>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">¡Cuenta Vinculada con Éxito!</h2>
                  <p className="text-slate-500 mb-8 max-w-sm">
                    Tu cuenta ahora está protegida y sincronizada con tu Gmail institucional de USEBEQ.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="px-8 py-3 bg-[#8c1c13] text-white font-bold rounded-xl shadow-lg hover:bg-[#6e160f] transition-all"
                  >
                    Volver al Dashboard
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BenefitRow({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
        {icon}
      </div>
      <div>
        <p className="font-bold text-slate-700 text-sm">{title}</p>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
    </li>
  );
}
