/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'aws-ligpainting.s3.us-east-2.amazonaws.com',
              pathname: '/**',  
          },
          {
              protocol: 'https',
              hostname: 'cdn.usegalileo.ai',
              pathname: '/**',  
          },
      ],
  },
};

export default nextConfig;