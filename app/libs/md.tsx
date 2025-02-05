import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

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

export function getKbData() {
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


const Alert = ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'error' }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  }
  
  return (
    <div className={`p-4 my-4 border rounded-lg ${styles[type]}`}>
      {children}
    </div>
  )
}



export async function getKBContext(kbPath: string[]) {
  const mdFilePath = (kbPath.length === 1
    ? [...kbPath, 'index']
    : kbPath).join('/')
  const filePath = path.join('app/knowledge-base', `${mdFilePath}.md`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const contentWithoutFrontmatter = source.replace(/^---\n([\s\S]*?)\n---/, '')
  const { data } = matter(source)
  const { content } = await compileMDX({
    source: contentWithoutFrontmatter,
    components: {
      h1: ({ children }) => (
        <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
      ),
      Alert
    },
  })

  console.log(content, data)
  return {
    content,
    data,
  }
}
