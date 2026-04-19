'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Search, Filter, Save, ChevronDown, UserPlus, Info } from 'lucide-react';

const alumnosDummy = [
  { id: '1', nombre: 'García López Ana María', curp: 'GALA920101HDFRR01', grado: 5, grupo: 'A', cct: '22DPR0123A' },
  { id: '2', nombre: 'Martínez Ruiz Carlos', curp: 'MARC920202HDFRR02', grado: 5, grupo: 'A', cct: '22DPR0123A' },
  { id: '3', nombre: 'Sánchez Pérez Elena', curp: 'SAPE920303HDFRR03', grado: 5, grupo: 'A', cct: '22DPR0123A' },
  { id: '4', nombre: 'Zúñiga Díaz Roberto', curp: 'ZUDI920404HDFRR04', grado: 5, grupo: 'A', cct: '22DPR0123A' },
];

export default function CapturaPage() {
  const [calificaciones, setCalificaciones] = useState<Record<string, number>>({});

  const handleScoreChange = (id: string, value: string) => {
    const score = parseFloat(value);
    if (!isNaN(score) && score >= 5 && score <= 10) {
      setCalificaciones(prev => ({ ...prev, [id]: score }));
    }
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Panel de Captura</h1>
              <p className="text-slate-500 font-medium">Primaria "Constitución de 1917" - 5º Grado Grupo A</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                <UserPlus className="w-4 h-4" /> Alta Alumno
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-[#8c1c13] text-white rounded-lg text-sm font-semibold shadow-lg shadow-red-900/10 hover:bg-[#6e160f] transition-all">
                <Save className="w-4 h-4" /> Guardar Cambios
              </button>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3 mt-4">
             <Info className="w-5 h-5 text-amber-600 mt-0.5" />
             <div className="text-sm text-amber-800">
               <span className="font-bold">Recordatorio:</span> El periodo de captura para el 2º Trimestre cierra el 15 de Mayo. 
               Asegúrese de validar todos los promedios antes de guardar.
             </div>
          </div>
        </header>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-6 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar por CURP o Nombre..." 
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8c1c13] transition-all w-72"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-100">
              <Filter className="w-4 h-4" /> Filtros Avanzados
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>Materia:</span>
            <button className="flex items-center gap-1 px-3 py-1 bg-slate-100 rounded text-slate-800">
              Matemáticas <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-bottom border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">CURP / Nombre</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Trimestre 1</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Trimestre 2 (Actual)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Promedio Ciclo</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {alumnosDummy.map((alumno) => (
                <tr key={alumno.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800 uppercase">{alumno.nombre}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{alumno.curp}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2 py-1 bg-slate-100 rounded text-slate-600 font-bold text-sm">8.5</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <input 
                        type="number" 
                        min="5" 
                        max="10" 
                        step="0.1"
                        placeholder="--"
                        className="w-16 p-2 text-center bg-white border border-slate-200 rounded-lg font-bold text-slate-800 focus:ring-2 focus:ring-[#8c1c13] outline-none transition-all shadow-sm"
                        onChange={(e) => handleScoreChange(alumno.id, e.target.value)}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-slate-400">--</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#8c1c13] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold hover:underline">
                      Ver Historial
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
