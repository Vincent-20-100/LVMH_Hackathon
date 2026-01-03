/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ajout indispensable pour GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
