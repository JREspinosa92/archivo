'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Printer, FileDown, Mail, Share2, FileText, CheckCircle2 } from 'lucide-react';

export default function ReportesPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <div className="print:hidden">
        <Sidebar />
      </div>
      
      <main className="flex-1 ml-64 print:ml-0 p-8">
        <header className="mb-8 flex justify-between items-end print:hidden">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Reportes Oficiales</h1>
            <p className="text-slate-500 font-medium">Generación de documentación para Zona Escolar</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold shadow-lg hover:bg-black transition-all"
            >
              <Printer className="w-4 h-4" /> Imprimir Reporte
            </button>
          </div>
        </header>

        {/* Report Preview Container */}
        <div className="bg-white border border-slate-200 shadow-xl mx-auto max-w-[210mm] min-h-[297mm] p-[20mm] relative overflow-hidden print:shadow-none print:border-none print:p-0">
          
          {/* Header Institucional (Visible en Impresión) */}
          <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#8c1c13] flex items-center justify-center rounded">
                <span className="text-white font-bold text-2xl">U</span>
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase">USEBEQ</h2>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                  Unidad de Servicios para la <br /> Educación Básica del Estado de Querétaro
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-800 uppercase">Reporte de Aprovechamiento</p>
              <p className="text-[10px] text-slate-500">Ciclo Escolar 2023-2024</p>
              <p className="text-[10px] text-slate-500">Fecha: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-sm font-bold bg-slate-100 p-2 uppercase border-l-4 border-slate-900 mb-4">Datos de la Zona / Escuela</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 uppercase font-bold text-[9px]">Zona Escolar:</span>
                  <span className="text-slate-800 font-bold">ZONA 042 - QUERÉTARO</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 uppercase font-bold text-[9px]">Centro de Trabajo (CCT):</span>
                  <span className="text-slate-800 font-bold">22DPR0123A</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 uppercase font-bold text-[9px]">Director(a):</span>
                  <span className="text-slate-800 font-bold">PROFR. MARCOS VILLEGAS LÓPEZ</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 uppercase font-bold text-[9px]">Grado y Grupo:</span>
                  <span className="text-slate-800 font-bold">5º GRADO - GRUPO A</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold bg-slate-100 p-2 uppercase border-l-4 border-slate-900 mb-4">Resumen de Calificaciones</h3>
              <table className="w-full text-left text-[11px] border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-2">CURP</th>
                    <th className="border border-slate-200 p-2">Alumno</th>
                    <th className="border border-slate-200 p-2 text-center">T1</th>
                    <th className="border border-slate-200 p-2 text-center">T2</th>
                    <th className="border border-slate-200 p-2 text-center">T3</th>
                    <th className="border border-slate-200 p-2 text-center">Prom</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5].map(i => (
                    <tr key={i}>
                      <td className="border border-slate-200 p-2 font-mono">GALA920101HDFRR0{i}</td>
                      <td className="border border-slate-200 p-2 uppercase">García López Ana María</td>
                      <td className="border border-slate-200 p-2 text-center">8.5</td>
                      <td className="border border-slate-200 p-2 text-center">9.0</td>
                      <td className="border border-slate-200 p-2 text-center">--</td>
                      <td className="border border-slate-200 p-2 text-center font-bold">8.7</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="grid grid-cols-2 gap-8">
               <div className="p-4 border border-slate-200 rounded">
                 <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-2">Promedio por Grupo</h4>
                 <div className="text-2xl font-black text-slate-900">8.65</div>
               </div>
               <div className="p-4 border border-slate-200 rounded">
                 <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-2">Estado de Validación</h4>
                 <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                   <CheckCircle2 className="w-4 h-4" /> Validado por Dirección
                 </div>
               </div>
            </section>

            <div className="mt-20 grid grid-cols-2 gap-20">
              <div className="border-t border-slate-900 pt-4 text-center">
                <p className="text-[10px] font-bold text-slate-800 uppercase">PROFR. MARCOS VILLEGAS LÓPEZ</p>
                <p className="text-[9px] text-slate-500">Director de la Escuela</p>
              </div>
              <div className="border-t border-slate-900 pt-4 text-center">
                <p className="text-[10px] font-bold text-slate-800 uppercase">PROFR. JUAN SÁNCHEZ</p>
                <p className="text-[9px] text-slate-500">Supervisor de Zona 042</p>
              </div>
            </div>
          </div>

          {/* Footer del Reporte */}
          <div className="absolute bottom-8 left-0 w-full px-[20mm] flex justify-between text-[8px] text-slate-400 font-bold uppercase tracking-widest">
            <span>Sistema Integral de Gestión Escolar - USEBEQ</span>
            <span>Página 1 de 1</span>
          </div>
        </div>
      </main>

      {/* Floating Action Buttons (Print only) */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 print:hidden">
        <button className="p-3 bg-white border border-slate-200 shadow-xl rounded-full text-slate-600 hover:text-[#8c1c13] transition-all">
          <FileDown className="w-6 h-6" />
        </button>
        <button className="p-3 bg-white border border-slate-200 shadow-xl rounded-full text-slate-600 hover:text-[#8c1c13] transition-all">
          <Mail className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
