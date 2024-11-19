import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier,
      tailwindcss,
    },
    rules: {
      // ESLint rules
      ...configPrettier.rules,
      'prettier/prettier': 'error',

      // React rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',

      // React Hooks rules
      // 'react-hooks/rules-of-hooks': 'error',
      // 'react-hooks/exhaustive-deps': 'warn',

      // Meteor rules
      // 'meteor/audit-argument-checks': 'warn',
      // 'meteor/no-session': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        callees: ['twMerge', 'createTheme'],
        classRegex: '^(class(Name)|theme)?$',
      },
    },
  },
  {
    ignores: [
      '.meteor/**',
      'packages/**',
      'node_modules/**',
      'build/**',
      '*.config.js',
      'package.json',
      'package-lock.json',
      'README.md',
      'public/**',
      '.vscode/**',
      '.idea/**',
    ],
  },
];
