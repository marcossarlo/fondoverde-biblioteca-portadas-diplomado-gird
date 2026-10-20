/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/portada-c', destination: '/portada-curso-1-modulo-1', permanent: true },
      { source: '/portada-c-modulo-2', destination: '/portada-curso-1-modulo-2', permanent: true },
      { source: '/portada-c-modulo-3', destination: '/portada-curso-1-modulo-3', permanent: true },
      { source: '/portada-c-modulo-4', destination: '/portada-curso-1-modulo-4', permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
