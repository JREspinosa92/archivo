'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Search, Filter, GraduationCap, Building2, Download, AlertCircle, Award, SlidersHorizontal } from 'lucide-react';

const alumnosMock = [
  { id: '1', nombre: 'García López Ana María', curp: 'GALA920101HDFRR01', cct: '22DPR0123A', escuela: 'Const. de 1917', grado: 5, grupo: 'A', promedio: 9.2 },
  { id: '2', nombre: 'Martínez Ruiz Carlos', curp: 'MARC920202HDFRR02', cct: '22DPR0123A', escuela: 'Const. de 1917', grado: 5, grupo: 'A', promedio: 6.5 },
  { id: '3', nombre: 'Jiménez Sosa Pedro', curp: 'JISP920303HDFRR03', cct: '22DPR4567X', escuela: 'Benito Juárez', grado: 5, grupo: 'B', promedio: 8.4 },
  { id: '4', nombre: 'Zúñiga Díaz Roberto', curp: 'ZUDI920404HDFRR04', cct: '22DPR4567X', escuela: 'Benito Juárez', grado: 6, grupo: 'C', promedio: 5.8 },
];

export default function AlumnosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [rango, setRango] = useState('todos');

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Buscador Avanzado de Alumnos</h1>
            <p className="text-slate-500 font-medium">Filtra por identidad, ubicación escolar y desempeño académico</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 bg-[#8c1c13] text-white rounded-lg text-sm font-semibold shadow-lg shadow-red-900/10 hover:bg-[#6e160f] transition-all">
            <Download className="w-4 h-4" /> Exportar Resultados
          </button>
        </header>

        {/* Panel de Filtros Inteligentes */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Busqueda Principal */}
            <div className="lg:col-span-4 relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block ml-1">Nombre o CURP</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Ej: García López o GALA92..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#8c1c13] transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* CCT Selector */}
            <div className="lg:col-span-3 relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block ml-1">Clave de Centro (CCT)</label>
              <div className="relative">
                <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <select className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none appearance-none focus:ring-2 focus:ring-[#8c1c13]">
                  <option>Todas las escuelas</option>
                  <option>22DPR0123A - Const. de 1917</option>
                  <option>22DPR4567X - Benito Juárez</option>
                </select>
              </div>
            </div>

            {/* Grado y Grupo */}
            <div className="lg:col-span-2 relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block ml-1">Grado / Grupo</label>
              <div className="grid grid-cols-2 gap-2">
                <select className="w-full px-2 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none">
                  <option>Grado</option>
                  {[1,2,3,4,5,6].map(g => <option key={g}>{g}º</option>)}
                </select>
                <select className="w-full px-2 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none">
                  <option>Grupo</option>
                  {['A','B','C'].map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>

            {/* Rango de Calificación */}
            <div className="lg:col-span-3 relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block ml-1">Rango de Calificación</label>
              <div className="relative">
                <SlidersHorizontal className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <select 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none appearance-none focus:ring-2 focus:ring-[#8c1c13]"
                  value={rango}
                  onChange={(e) => setRango(e.target.value)}
                >
                  <option value="todos">Cualquier calificación</option>
                  <option value="excelencia">Excelencia (9.0 - 10.0)</option>
                  <option value="aprobados">Aprobados (7.0 - 8.9)</option>
                  <option value="riesgo">En Riesgo (6.0 - 6.9)</option>
                  <option value="reprobados">No Aprobatorios (5.0 - 5.9)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Resultados con Indicadores Visuales */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Escuela / CCT</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alumno / CURP</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Grado / Grupo</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Promedio Ciclo</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Análisis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {alumnosMock.map((alumno) => (
                <tr key={alumno.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-700 text-xs">{alumno.escuela}</div>
                    <div className="text-[10px] text-[#8c1c13] font-mono font-bold">{alumno.cct}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800 uppercase text-sm">{alumno.nombre}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{alumno.curp}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-bold text-slate-600">{alumno.grado}º {alumno.grupo}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${
                      alumno.promedio >= 9 ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      alumno.promedio >= 7 ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                      'bg-rose-50 text-rose-600 border border-rose-100'
                    }`}>
                      {alumno.promedio.toFixed(1)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex justify-end gap-2">
                       {alumno.promedio >= 9 ? (
                         <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg" title="Excelencia">
                           <Award className="w-4 h-4" />
                         </div>
                       ) : alumno.promedio < 7 ? (
                         <div className="p-2 bg-rose-50 text-rose-600 rounded-lg" title="Requiere Atención">
                           <AlertCircle className="w-4 h-4" />
                         </div>
                       ) : (
                         <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
                           <GraduationCap className="w-4 h-4" />
                         </div>
                       )}
                     </div>
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
