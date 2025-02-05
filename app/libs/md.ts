import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export interface Category {
  name: string
  path: string[]
  menus: MenuItem[]
}

interface MenuItem {
  name: string
  path: string[]
}

const kbPath = './app/knowledge-base'

function getTree() {
  const categories = fs.readdirSync(kbPath)
  const items: Category[] = []
  for (let index = 0; index < categories.length; index++) {
    const categoryName = categories[index]
    const dirPath = path.join(kbPath, categoryName)
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
      name: data.title,
      path: [categoryName],
      menus: [],
    } satisfies Category
    console.log(s)
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

export async function getKBContext(kbPath: string[]) {
  const mdFilePath = (kbPath.length === 1
    ? [...kbPath, 'index']
    : kbPath).join('/')
  const {
    default: Post,
  } = await import(`@/app/knowledge-base/${mdFilePath}.md`)
  return Post
}
