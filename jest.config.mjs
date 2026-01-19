import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    ".+\\.(css|scss)$": "identity-obj-proxy",
  },
  clearMocks: true,
  maxWorkers: 5,
  coverageReporters: ["text", "cobertura", "lcov"],
  testPathIgnorePatterns: [
    "/e2e/",
    "/node_modules/",
    "\\.constants\\.tx",
    "\\.constants\\.ts",
  ],
  coveragePathIgnorePatterns: [
    "/configs/",
    "/context/",
    "/contexts/",
    "/constants/",
    "/svg-icons/",
    "/index.ts",
    "\\.constants\\.ts",
    "\\.constants\\.tsx",
    "\\page\\.tsx",
  ],
};

export default async () => ({
  ...(await createJestConfig(config)()),
  // https://github.com/vercel/next.js/issues/40183
  transformIgnorePatterns: ["node_modules/(?!next-intl)/"],
});
