import React from 'react';
import { LayoutDashboard, Users, ClipboardList, FileText, Settings, LogOut, School } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/', active: true },
    { icon: ClipboardList, label: 'Captura', href: '/captura' },
    { icon: Users, label: 'Alumnos', href: '/alumnos' },
    { icon: FileText, label: 'Reportes', href: '/reportes' },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen flex flex-col fixed left-0 top-0 text-slate-300 border-r border-slate-800">
      <div className="p-6 flex items-center gap-3">
        <div className="p-2 bg-[#8c1c13] rounded-lg">
          <School className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-white font-bold text-lg leading-tight">USEBEQ</h2>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Zona Escolar 042</p>
        </div>
      </div>

      <nav className="flex-1 px-4 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all group ${
              item.active 
                ? 'bg-[#8c1c13] text-white shadow-lg shadow-red-900/20' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-500 group-hover:text-red-400'}`} />
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-4 bg-slate-800/50 rounded-2xl mb-4 border border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
              JS
            </div>
            <div>
              <p className="text-xs font-bold text-white">Juan Sánchez</p>
              <p className="text-[10px] text-slate-500">Supervisor de Zona</p>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
