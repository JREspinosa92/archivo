import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Necesario para GitHub Pages
  basePath: '/archivo', // El nombre de tu repositorio
  assetPrefix: '/archivo', // Asegura que el CSS y JS carguen bien
  images: {
    unoptimized: true, // GitHub Pages no soporta optimización de imágenes en el servidor
  },
  // Desactivamos el trailingSlash para evitar problemas con las rutas en GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
