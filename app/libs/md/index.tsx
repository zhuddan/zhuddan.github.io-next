import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import components from './components'

export interface Category {
  title: string
  path: string[]
  menus?: Category[]
}

const kbRootPath = './app/knowledge-base'

function getTree() {
  const categories = fs.readdirSync(kbRootPath)
  const items: Category[] = []
  for (let index = 0; index < categories.length; index++) {
    const categoryName = categories[index]
    const dirPath = path.join(kbRootPath, categoryName)
    const el = fs.statSync(dirPath)
    const isGroup = el.isDirectory()
    if (!isGroup) {
      console.warn(`[${dirPath}] is not a dir`)
      continue
    }
    const rootFilePath = path.join(dirPath, 'index.md')
    const fileContents = fs.readFileSync(rootFilePath).toString()
    const { data } = matter(fileContents)
    const s = {
      title: data.title,
      path: [categoryName],
      menus: [],
    } satisfies Category
    items.push(s)
  }
  return items
}

export function generateKBData() {
  const tree = getTree()
  function getKbPaths(data: Category[]) {
    const result: { kbPath: string[] }[] = []
    for (let index = 0; index < data.length; index++) {
      const { path, menus: children } = data[index]
      result.push({ kbPath: path })
      if (children) {
        // result.push(...getKbPaths(children))
      }
    }
    return result
  }
  const kbPaths = getKbPaths(tree)

  return {
    tree,
    kbPaths,
  }
}

export async function getKBContent(kbPath: string[]) {
  const mdFilePath = (kbPath.length === 1 ? [...kbPath, 'index'] : kbPath).join('/')
  const filePath = path.join('app/knowledge-base', `${mdFilePath}.md`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const contentWithoutFrontmatter = source.replace(/^---\n([\s\S]*?)\n---/, '')
  const { data } = matter(source)
  const { content } = await compileMDX({
    source: contentWithoutFrontmatter,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  })
  return {
    content,
    data,
  }
}
