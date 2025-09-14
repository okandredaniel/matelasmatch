import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  {
    ignores: ['**/.next/**', '**/node_modules/**', '**/dist/**', '**/*.min.*'],
  },
  js.configs.recommended,
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
];
