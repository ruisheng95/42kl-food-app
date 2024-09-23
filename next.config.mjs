/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/42kl-food-app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
