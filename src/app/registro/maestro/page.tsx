'use client';

import React from 'react';
import { School, Chrome, ArrowRight, UserPlus, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function RegistroMaestroPage() {
  const handleGoogleSignUp = () => {
    console.log('Iniciando registro de maestro con Google...');
    // Redirigir al flujo de configuración de alumnos
    window.location.href = '/configuracion';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Panel Izquierdo: Informativo */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#8c1c13] p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-12 -mb-12 blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
              <School className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold tracking-tighter text-xl">USEBEQ DIGITAL</span>
          </div>
          
          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            Bienvenido al Portal <br /> de Captura Docente
          </h2>
          <p className="text-red-100 text-lg max-w-md mb-12">
            Únete a la red de maestros que están transformando la gestión educativa en Querétaro.
          </p>

          <div className="space-y-6">
            <BenefitItem text="Sincronización directa con tu cuenta institucional" />
            <BenefitItem text="Carga masiva de alumnos vía Excel" />
            <BenefitItem text="Generación automática de reportes trimestrales" />
          </div>
        </div>

        <div className="relative z-10 pt-12 border-t border-white/10">
          <p className="text-red-200 text-sm">© 2026 USEBEQ - Dirección de Tecnologías de la Información</p>
        </div>
      </div>

      {/* Panel Derecho: Registro */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24">
        <div className="max-w-md w-full">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-slate-800 mb-2">Registro de Maestro</h1>
            <p className="text-slate-500 font-medium">Comienza vinculando tu identidad digital institucional.</p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-xs text-emerald-800 leading-relaxed">
                <span className="font-bold">Acceso Seguro:</span> Al usar tu cuenta de Google Institucional, no necesitas crear nuevas contraseñas. Tus datos están protegidos por la infraestructura de USEBEQ.
              </p>
            </div>

            <button
              onClick={handleGoogleSignUp}
              className="w-full group py-4 bg-white border-2 border-slate-100 hover:border-[#8c1c13] rounded-2xl flex items-center justify-center gap-4 transition-all hover:shadow-xl hover:shadow-red-900/5"
            >
              <div className="bg-white p-1 rounded-full shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.85c.87-2.6 3.3-4.54 6.16-4.54z" fill="#EA4335"/>
                </svg>
              </div>
              <span className="font-bold text-slate-700 group-hover:text-[#8c1c13] transition-colors">Registrarme con Google</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#8c1c13] group-hover:translate-x-1 transition-all" />
            </button>

            {/* Módulo de Credencial Institucional */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Validación Adicional (Opcional)</label>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-300">
                  <UserPlus className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-700">Foto de Credencial</p>
                  <p className="text-[10px] text-slate-400">Sube tu identificación de USEBEQ para validación rápida.</p>
                </div>
                <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-[#8c1c13] hover:text-white hover:border-[#8c1c13] transition-all">
                  Subir
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium px-2">
              <div className="h-px flex-1 bg-slate-100"></div>
              <span>¿Ya tienes cuenta?</span>
              <div className="h-px flex-1 bg-slate-100"></div>
            </div>

            <button 
              onClick={() => window.location.href = '/login'}
              className="w-full py-4 text-slate-500 font-bold hover:text-slate-800 transition-colors text-sm"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-red-50">
      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
        <CheckCircle2 className="w-3 h-3 text-white" />
      </div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
