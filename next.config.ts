import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ['./styles'],
    additionalData: ` @use "functions" as *; @use "variables" as *;`,
  },
};

export default nextConfig;
