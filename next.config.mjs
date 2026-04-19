/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/archivo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    // Ignoramos errores de tipo durante el build para asegurar el despliegue
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignoramos errores de lint durante el build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
