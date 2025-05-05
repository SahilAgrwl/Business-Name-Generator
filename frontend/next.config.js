/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
      return [
        {
          // Apply to all routes
          source: '/:path*',
          headers: [
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-XSS-Protection', value: '1; mode=block' },
          ],
        },
      ];
    },
  }
  
  module.exports = nextConfig