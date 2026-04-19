'use client';

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { TrendingUp, Users, School, Award, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const dataGrados = [
  { name: '1º Grado', promedio: 8.5, meta: 9.0 },
  { name: '2º Grado', promedio: 8.2, meta: 9.0 },
  { name: '3º Grado', promedio: 7.9, meta: 9.0 },
  { name: '4º Grado', promedio: 9.1, meta: 9.0 },
  { name: '5º Grado', promedio: 8.7, meta: 9.0 },
  { name: '6º Grado', promedio: 8.4, meta: 9.0 },
];

const dataZona = [
  { subject: 'Español', A: 8.2, B: 8.5, fullMark: 10 },
  { subject: 'Matemáticas', A: 7.5, B: 8.1, fullMark: 10 },
  { subject: 'Ciencias', A: 8.8, B: 9.0, fullMark: 10 },
  { subject: 'Historia', A: 8.0, B: 8.4, fullMark: 10 },
  { subject: 'Geografía', A: 8.5, B: 8.2, fullMark: 10 },
  { subject: 'Cívica', A: 9.2, B: 9.5, fullMark: 10 },
];

export default function DashboardPage() {
  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <p className="text-slate-500 font-medium text-sm">Bienvenido de nuevo, Juan</p>
            <h1 className="text-3xl font-bold text-slate-800">Panel de Control Escolar</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
              Descargar PDF
            </button>
            <button className="px-4 py-2 bg-[#8c1c13] text-white rounded-lg text-sm font-semibold shadow-lg shadow-red-900/10 hover:bg-[#6e160f] transition-all">
              Nueva Captura
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Alumnos" value="1,248" icon={Users} color="bg-blue-500" trend="+12" />
          <StatCard title="Promedio Zona" value="8.42" icon={TrendingUp} color="bg-emerald-500" trend="+0.5" />
          <StatCard title="CCTs Activas" value="12" icon={School} color="bg-amber-500" trend="0" />
          <StatCard title="Eficiencia" value="94.2%" icon={Award} color="bg-purple-500" trend="+2.1" />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart - Promedios por Grado */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-800">Comparativa por Grado</h3>
              <select className="text-xs bg-slate-50 border-none rounded p-1 outline-none text-slate-500 font-medium">
                <option>Ciclo 2023-2024</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataGrados} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="promedio" fill="#8c1c13" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Radar Chart - Desempeño por Materia */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-800">Desempeño de Zona (Materias)</h3>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-400"></div> Zona Actual</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Meta Estatal</div>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataZona}>
                  <PolarGrid stroke="#f1f5f9" />
                  <PolarAngleAxis dataKey="subject" tick={{fill: '#94a3b8', fontSize: 10}} />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} axisLine={false} tick={false} />
                  <Radar
                    name="Zona 042"
                    dataKey="A"
                    stroke="#8c1c13"
                    fill="#8c1c13"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Meta Estatal"
                    dataKey="B"
                    stroke="#94a3b8"
                    fill="#94a3b8"
                    fillOpacity={0.2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color, trend }: any) {
  const isPositive = trend.startsWith('+');
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        {trend !== "0" && (
          <div className={`flex items-center gap-0.5 text-xs font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
            {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {trend}%
          </div>
        )}
      </div>
      <p className="text-slate-500 text-sm font-medium">{title}</p>
      <h4 className="text-2xl font-bold text-slate-800 mt-1">{value}</h4>
    </div>
  );
}
