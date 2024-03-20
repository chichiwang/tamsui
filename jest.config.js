const sharedConfigs = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.mjs?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/app/$1',
  },
};

const appConfig = {
  displayName: 'App Tests',
  testMatch: [
    '<rootDir>/app/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/app/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testEnvironment: 'jsdom',
  ...sharedConfigs,
};

const clientConfig = {
  displayName: 'Client Tests',
  testMatch: [
    '<rootDir>/client/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/client/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testEnvironment: 'jsdom',
  ...sharedConfigs,
};

const serverConfig = {
  displayName: 'Server Tests',
  testMatch: [
    '<rootDir>/server/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/server/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testEnvironment: 'node',
  ...sharedConfigs,
};

module.exports = {
  projects: [clientConfig, serverConfig, appConfig],
  collectCoverage: true,
  coverageDirectory: '__coverage__',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
