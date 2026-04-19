'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { School, Layers, Users, ChevronRight, CheckCircle2, ArrowLeft, ArrowRight, Download, Info } from 'lucide-react';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cct: '',
    nombreEscuela: '',
    zona: '042',
    grados: [] as string[],
    grupos: [] as string[],
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const toggleGrado = (g: string) => {
    setFormData(prev => ({
      ...prev,
      grados: prev.grados.includes(g) 
        ? prev.grados.filter(item => item !== g) 
        : [...prev.grados, g]
    }));
  };

  const toggleGrupo = (g: string) => {
    setFormData(prev => ({
      ...prev,
      grupos: prev.grupos.includes(g) 
        ? prev.grupos.filter(item => item !== g) 
        : [...prev.grupos, g]
    }));
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Header */}
          <div className="flex justify-between items-center mb-12">
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= i ? 'bg-[#8c1c13] text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    step >= i ? 'text-[#8c1c13]' : 'text-slate-400'
                  }`}>
                    {i === 1 ? 'Centro de Trabajo' : i === 2 ? 'Grados y Grupos' : 'Alumnos'}
                  </span>
                </div>
                {i < 3 && <div className={`flex-1 h-0.5 mx-4 ${step > i ? 'bg-[#8c1c13]' : 'bg-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10 border border-slate-100">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-50 rounded-2xl text-[#8c1c13]">
                    <School className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Tu Centro de Trabajo</h2>
                    <p className="text-slate-500 text-sm">Vincula tu cuenta a tu escuela oficial</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Clave de Centro de Trabajo (CCT)</label>
                    <input 
                      type="text" 
                      placeholder="Ej: 22DPR0123A" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8c1c13] outline-none font-mono"
                      value={formData.cct}
                      onChange={(e) => setFormData({...formData, cct: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre Oficial de la Escuela</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Primaria Constitución de 1917" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8c1c13] outline-none"
                      value={formData.nombreEscuela}
                      onChange={(e) => setFormData({...formData, nombreEscuela: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-50 rounded-2xl text-[#8c1c13]">
                    <Layers className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Grados y Grupos</h2>
                    <p className="text-slate-500 text-sm">Configura tu carga académica</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">Selecciona Grados</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[1,2,3,4,5,6].map(g => {
                        const s = g.toString();
                        const active = formData.grados.includes(s);
                        return (
                          <button 
                            key={g} 
                            onClick={() => toggleGrado(s)}
                            className={`p-3 border rounded-xl font-bold transition-all ${
                              active ? 'bg-[#8c1c13] border-[#8c1c13] text-white shadow-lg' : 'bg-white border-slate-200 text-slate-600 hover:border-[#8c1c13]/50'
                            }`}
                          >
                            {g}º
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">Selecciona Grupos</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['A','B','C','D','E','F'].map(g => {
                        const active = formData.grupos.includes(g);
                        return (
                          <button 
                            key={g} 
                            onClick={() => toggleGrupo(g)}
                            className={`p-3 border rounded-xl font-bold transition-all ${
                              active ? 'bg-[#8c1c13] border-[#8c1c13] text-white shadow-lg' : 'bg-white border-slate-200 text-slate-600 hover:border-[#8c1c13]/50'
                            }`}
                          >
                            {g}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-50 rounded-2xl text-[#8c1c13]">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Carga Masiva de Alumnos</h2>
                    <p className="text-slate-500 text-sm">Sube tu padrón oficial en formato Excel o CSV</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* File Upload Area */}
                  <div className="p-10 border-2 border-dashed border-slate-200 hover:border-[#8c1c13] rounded-3xl flex flex-col items-center justify-center gap-4 text-center transition-all bg-slate-50/50 group cursor-pointer">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#8c1c13] transition-colors">
                      <Download className="w-8 h-8 rotate-180" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-[#8c1c13] transition-colors">Arrastra tu archivo aquí</p>
                      <p className="text-sm text-slate-400">Formatos compatibles: .xlsx, .csv (Max. 5MB)</p>
                    </div>
                    <button className="mt-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:shadow-md transition-all">
                      Seleccionar Archivo
                    </button>
                  </div>

                  {/* Template Info */}
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-700">
                        <Info className="w-5 h-5" />
                      </div>
                      <p className="text-xs text-amber-800 font-medium">
                        Usa nuestra plantilla oficial para evitar errores en la CURP.
                      </p>
                    </div>
                    <button className="text-[10px] font-bold text-amber-700 underline uppercase tracking-wider">
                      Descargar Plantilla
                    </button>
                  </div>

                  {/* Import Preview (Mockup) */}
                  <div className="border border-slate-100 rounded-2xl overflow-hidden opacity-40">
                    <div className="bg-slate-50 px-4 py-2 text-[10px] font-bold text-slate-400 uppercase">Vista previa de datos</div>
                    <div className="p-4 space-y-2">
                       <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                       <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-between gap-4">
              {step > 1 && (
                <button 
                  onClick={prevStep}
                  className="px-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl flex items-center gap-2 hover:bg-slate-200 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" /> Anterior
                </button>
              )}
              <button 
                onClick={step === 3 ? () => window.location.href = '/' : nextStep}
                className={`ml-auto px-8 py-4 bg-[#8c1c13] text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-[#6e160f] transition-all shadow-lg shadow-red-900/20`}
              >
                {step === 3 ? 'Finalizar Configuración' : 'Siguiente Paso'} 
                {step < 3 && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
