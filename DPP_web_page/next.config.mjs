/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LVMH_Hackathon', 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
