module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  modulePaths: [
    "<rootDir>"
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'jsx',
    'tsx',
    'json',
    'vue',
  ],
  transform: {
    ".*\.(vue)$": "@vue/vue3-jest",
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    // '^.+\\.jsx?$': 'babel-jest',
    '.*\./\.[jt]sx?$/$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/examples/$1',
    '/^packages\/(.*)$/': '<rootDir>/packages/$1',
  },
  moduleDirectories: [
    "node_modules"
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',
}