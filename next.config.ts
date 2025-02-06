import type { NextConfig } from 'next'
// import createMDX from '@next/mdx'
// import rehypeSlug from 'rehype-slug'
// import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true },
  trailingSlash: true,
}

// const withMDX = createMDX({
//   extension: /\.(md|mdx)$/,
//   // extension: /\.mdx?$/,
//   options: {
//     format: 'mdx',
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypeSlug],
//   },
// })

// export default withMDX(nextConfig)
export default nextConfig
