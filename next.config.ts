import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'animejs'],
    inlineCss: true,
  },
}

export default nextConfig
