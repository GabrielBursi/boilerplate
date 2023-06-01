/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 */

export default {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  coverageDirectory: "coverage",
};
