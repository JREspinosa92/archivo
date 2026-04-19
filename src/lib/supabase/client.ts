import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Función para validar si es una URL válida
const isValidUrl = (url: string) => {
  try {
    return url.startsWith('https://') || url.startsWith('http://');
  } catch {
    return false;
  }
};

// Solo creamos el cliente si la URL es válida, de lo contrario creamos uno "mudo"
// para evitar que la aplicación se rompa al iniciar.
export const supabase = isValidUrl(supabaseUrl) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder-project.supabase.co', 'placeholder-key');

if (!isValidUrl(supabaseUrl)) {
  console.error(
    'ERROR DE CONFIGURACIÓN: La URL de Supabase no es válida o falta en .env.local. ' +
    'La aplicación cargará en modo demostración, pero las funciones de base de datos no estarán activas.'
  );
}
