module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['myAssets', './src/assets'],
          ['myComponents', './src/components'],
          ['myConstants', './src/constants'],
          ['myPages', './src/pages'],
        ],
      },
    },
  },
  rules: {
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
