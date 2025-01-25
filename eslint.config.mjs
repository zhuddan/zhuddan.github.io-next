import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default antfu({
  formatters: true,
  react: true,
  // 合并 Next.js 的配置
  overrides: [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ],
})
