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
        protocol: 'http', 
        hostname: 'localhost',
        port: '1337', 
        pathname: '/uploads/**', 
      },
      {
        protocol: 'https',
        hostname: 'omundomare-backend.onrender.com', // Sua URL do Render
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Onde as imagens vão morar
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig