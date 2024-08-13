/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['aws-ligpainting.s3.us-east-2.amazonaws.com','cdn.usegalileo.ai'],
    },
  };

export default nextConfig;
