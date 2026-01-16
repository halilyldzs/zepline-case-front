import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ['./styles'],
    additionalData: `@use "variables" as *;`,
  },
};

export default nextConfig;
