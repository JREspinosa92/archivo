'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Save, Info, UserCheck, AlertCircle, RefreshCcw } from 'lucide-react';

const userMock = {
  email: 'maestro.ejemplo@usebeq.edu.mx',
  rol: 'escuela',
  cct_vinculada: '22DPR0123A',
  escuela: 'Primaria Constitución de 1917'
};

const inicialAlumnos = [
  { id: '1', nombre: 'García López Ana María', curp: 'GALA920101HDFRR01', t1: 8.5, t2: 9.0, t3: 0 },
  { id: '2', nombre: 'Martínez Ruiz Carlos', curp: 'MARC920202HDFRR02', t1: 7.0, t2: 6.5, t3: 0 },
  { id: '3', nombre: 'Sánchez Pérez Elena', curp: 'SAPE920303HDFRR03', t1: 9.5, t2: 0, t3: 0 },
];

export default function CapturaPage() {
  const [alumnos, setAlumnos] = useState(inicialAlumnos);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleGradeChange = (id: string, trimestre: 't1' | 't2' | 't3', value: string) => {
    const numValue = parseFloat(value);
    
    // Validación de rango 5-10
    if (value !== '' && (numValue < 5 || numValue > 10)) return;

    setIsSyncing(true);
    
    setAlumnos(prev => prev.map(al => {
      if (al.id === id) {
        return { ...al, [trimestre]: value === '' ? 0 : numValue };
      }
      return al;
    }));

    // Simular guardado automático
    setTimeout(() => setIsSyncing(false), 800);
  };

  const calcularPromedio = (al: any) => {
    const notas = [al.t1, al.t2, al.t3].filter(n => n > 0);
    if (notas.length === 0) return 0;
    const suma = notas.reduce((a, b) => a + b, 0);
    return (suma / notas.length).toFixed(1);
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-slate-500 text-xs font-mono font-bold">CCT: {userMock.cct_vinculada}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 text-xs uppercase font-bold tracking-wider">{userMock.escuela}</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Captura de Calificaciones</h1>
            <p className="text-slate-500 font-medium">Ciclo Escolar 2023-2024 • 2º Trimestre</p>
          </div>
          
          <div className="flex items-center gap-4">
            {isSyncing ? (
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold animate-pulse">
                <RefreshCcw className="w-4 h-4 animate-spin" /> Sincronizando...
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                <UserCheck className="w-4 h-4" /> Datos Protegidos
              </div>
            )}
            <button className="flex items-center gap-2 px-6 py-2 bg-[#8c1c13] text-white rounded-lg text-sm font-semibold shadow-lg shadow-red-900/10 hover:bg-[#6e160f] transition-all">
              <Save className="w-4 h-4" /> Finalizar Periodo
            </button>
          </div>
        </header>

        {/* Grades Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alumno / CURP</th>
                <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Trimestre 1</th>
                <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Trimestre 2</th>
                <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Trimestre 3</th>
                <th className="px-6 py-5 text-[10px] font-bold text-[#8c1c13] uppercase tracking-widest text-center">Promedio Ciclo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {alumnos.map((alumno) => {
                const promedio = parseFloat(calcularPromedio(alumno));
                return (
                  <tr key={alumno.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800 uppercase text-sm">{alumno.nombre}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{alumno.curp}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input 
                        type="number" 
                        step="0.1"
                        value={alumno.t1 || ''} 
                        onChange={(e) => handleGradeChange(alumno.id, 't1', e.target.value)}
                        className="w-16 p-2 text-center bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-600 focus:ring-2 focus:ring-[#8c1c13] outline-none transition-all" 
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input 
                        type="number" 
                        step="0.1"
                        value={alumno.t2 || ''} 
                        onChange={(e) => handleGradeChange(alumno.id, 't2', e.target.value)}
                        className="w-16 p-2 text-center bg-white border-2 border-[#8c1c13]/30 focus:border-[#8c1c13] rounded-xl font-bold text-slate-800 focus:ring-4 focus:ring-[#8c1c13]/10 outline-none transition-all" 
                        placeholder="--"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input 
                        type="number" 
                        step="0.1"
                        value={alumno.t3 || ''} 
                        onChange={(e) => handleGradeChange(alumno.id, 't3', e.target.value)}
                        className="w-16 p-2 text-center bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-600 focus:ring-2 focus:ring-[#8c1c13] outline-none transition-all" 
                        placeholder="--"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-black transition-all ${
                        promedio === 0 ? 'bg-slate-100 text-slate-400' :
                        promedio >= 9 ? 'bg-emerald-100 text-emerald-700' :
                        promedio >= 7 ? 'bg-blue-100 text-blue-700' :
                        'bg-rose-100 text-rose-700 animate-pulse'
                      }`}>
                        {promedio > 0 ? promedio.toFixed(1) : '--'}
                        {promedio > 0 && promedio < 7 && <AlertCircle className="w-4 h-4" />}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Guía de Validación</h4>
            <ul className="text-xs text-slate-500 space-y-1 list-disc ml-4">
              <li>El sistema guarda automáticamente cada cambio detectado.</li>
              <li>Las calificaciones deben estar en el rango de <strong>5.0 a 10.0</strong>.</li>
              <li>Los promedios en <span className="text-rose-600 font-bold">rojo</span> indican alumnos que requieren atención inmediata o regularización.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
