const repo = 'portfolio'; // your GitHub repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true
};

export default nextConfig;
