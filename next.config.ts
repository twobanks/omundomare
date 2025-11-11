/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**', 
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'phenomenal-friendship-0bab359607.strapiapp.com/', 
        port: '',
        pathname: '/uploads/**', 
      },
      {
        protocol: 'http', 
        hostname: 'localhost',
        port: '1337', 
        pathname: '/uploads/**', 
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig