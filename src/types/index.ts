export interface Perfil {
  id: string;
  email: string;
  cct_vinculada: string;
  zona_escolar: string;
  rol: 'escuela' | 'supervisor';
}

export interface Alumno {
  id: string;
  nombre_completo: string;
  curp: string;
  cct: string;
  grado: number;
  grupo: string;
}

export interface Calificacion {
  id: string;
  alumno_id: string;
  materia: string;
  trimestre: 1 | 2 | 3;
  puntaje: number;
}

export interface PromedioNivel {
  nombre: string;
  promedio: number;
  totalAlumnos?: number;
}
