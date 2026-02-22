const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.angular/**',
      '**/*.spec.ts',
      'eslint.config.js',
      'tailwind.config.js',
      'postcss.config.js',
      'angular.json',
      'tsconfig.json',
      'tsconfig.*.json',
    ],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        Event: 'readonly',
        HTMLElement: 'readonly',
        // Node globals
        process: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
];
