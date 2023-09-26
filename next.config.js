/** @type {import('next').NextConfig} */
/** @type {import('helmet').HelmetOptions} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'http://localhost:3000/'",
          },
        ],
      },
    ];
  },
}


module.exports = nextConfig
