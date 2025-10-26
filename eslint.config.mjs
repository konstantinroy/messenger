// npm run lint-fix

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
    rules: {
      'no-console': 'warn',
      'prefer-const': 'warn',
      quotes: ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-double'],
      indent: ['warn', 2],
      'max-len': ['warn', { code: 120 }],
      'comma-dangle': ['warn', 'always-multiline'],
      semi: [2, 'never'],
      'react/self-closing-comp': ['error', { 'component': true, 'html': true }],
      // "import/order": ["warn", {
      //     "groups": ["builtin", "external", "internal",
      //     "parent", "sibling", "index", "object", "type"],
      //     "newlines-between": "always-and-inside-groups"
      // }]
    },
  },
]

export default eslintConfig
