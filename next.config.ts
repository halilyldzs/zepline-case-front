import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ['./styles'],
    additionalData: ` @use "functions" as *; @use "variables" as *;`,
  },
  images: {
    qualities: [100, 75],
  },
};

export default nextConfig;
