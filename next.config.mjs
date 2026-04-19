/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/archivo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
