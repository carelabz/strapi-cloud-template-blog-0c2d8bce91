/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "striking-pleasure-03fbdffa08.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
