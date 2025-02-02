import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true },
  trailingSlash: true,
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // extension: /\.mdx?$/,
  options: {
    format: 'mdx',
  },
})

export default withMDX(nextConfig)
