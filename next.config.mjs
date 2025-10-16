/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Use app router features as needed.
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  redirects: async () => [
    // Example redirect when renaming slugs
    // { source: "/bikini/azure-tide", destination: "/bikini/azure-tide-bikini", permanent: true }
  ]
};
export default nextConfig;
