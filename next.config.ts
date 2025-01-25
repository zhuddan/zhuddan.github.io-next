import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  // reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // extension: /\.mdx?$/,
  options: {
    format: 'mdx',
  },
})

export default withMDX(nextConfig)
