import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value:
      "frame-ancestors 'self'; base-uri 'self'; object-src 'none'; form-action 'self'",
  },
]

const nextConfig: NextConfig = {
  // Impede o `next dev` de recriar AGENTS.md / CLAUDE.md na raiz do projeto
  agentRules: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'animejs'],
    inlineCss: true,
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig