// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1', // optional: alias support
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/context/(.*)$': '<rootDir>/context/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
