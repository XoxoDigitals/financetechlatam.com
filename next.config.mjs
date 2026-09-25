/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/collections", destination: "/consulting", permanent: true },
      { source: "/accounting", destination: "/consulting", permanent: true },
      { source: "/international", destination: "/consulting", permanent: true },
      { source: "/advertising", destination: "/ai-content", permanent: true },
      { source: "/fintech", destination: "/ai-content", permanent: true },
    ];
  },
};

export default nextConfig;
