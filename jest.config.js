export default {
  // Use jsdom environment for DOM testing, since Jest runs in Node.js
  // and we need a browser-like environment for React components
  testEnvironment: 'jsdom',
  
  // Transform JSX files using Babel
  // This allows Jest to understand modern JavaScript and JSX syntax
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    }]
  },
  
  // File extensions to consider
  moduleFileExtensions: ['js', 'jsx'],
  
  // Test file patterns, matching files in the tests directory 
  testMatch: ['<rootDir>/tests/**/*.test.{js,jsx}'],
  
  // Setup file for global test configuration
  // This file runs after the test framework is installed in the environment
  // and before each test file is executed
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  
  // Global variables for the test environment
  // Adding polyfills for TextEncoder and TextDecoder
  // which are used by the fetch API in Node.js
  globals: {
    TextEncoder: TextEncoder,
    TextDecoder: TextDecoder,
  }
};