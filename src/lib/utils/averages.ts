import { Calificacion, Alumno } from "@/types";

/**
 * Nivel 1: Promedio por alumno (media de sus materias)
 */
export const calcularPromedioAlumno = (calificaciones: Calificacion[]): number => {
  if (calificaciones.length === 0) return 0;
  const suma = calificaciones.reduce((acc, curr) => acc + curr.puntaje, 0);
  return Number((suma / calificaciones.length).toFixed(2));
};

/**
 * Nivel 2: Promedio por grupo (media de los alumnos del mismo grado/grupo)
 */
export const calcularPromedioGrupo = (
  alumnos: Alumno[],
  todasLasCalificaciones: Calificacion[]
): number => {
  const promediosAlumnos = alumnos.map(alumno => {
    const califs = todasLasCalificaciones.filter(c => c.alumno_id === alumno.id);
    return calcularPromedioAlumno(califs);
  }).filter(p => p > 0);

  if (promediosAlumnos.length === 0) return 0;
  const suma = promediosAlumnos.reduce((acc, curr) => acc + curr, 0);
  return Number((suma / promediosAlumnos.length).toFixed(2));
};

/**
 * Nivel 3: Promedio por escuela (media de todos los grupos de una CCT)
 * Se puede calcular directamente sobre todos los alumnos de la CCT
 */
export const calcularPromedioEscuela = (
  alumnosEscuela: Alumno[],
  todasLasCalificaciones: Calificacion[]
): number => {
  return calcularPromedioGrupo(alumnosEscuela, todasLasCalificaciones);
};

/**
 * Nivel 4: Promedio de Zona (media de todas las CCT pertenecientes a la misma zona escolar)
 */
export const calcularPromedioZona = (
  promediosEscuelas: number[]
): number => {
  const filtrados = promediosEscuelas.filter(p => p > 0);
  if (filtrados.length === 0) return 0;
  const suma = filtrados.reduce((acc, curr) => acc + curr, 0);
  return Number((suma / filtrados.length).toFixed(2));
};
