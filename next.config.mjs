/** @type {import('next').NextConfig} */
const nextConfig = {
     webpack: (config) => {
   config.externals = [...config.externals, 'bcrypt'];

   return config;
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        
        port: ''
      },
      {
        protocol: 'https',
        hostname: "img.clerk.com",
        
        port: ''
      }
    ]
  }
};

export default nextConfig;
