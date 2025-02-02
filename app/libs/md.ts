import fs from 'node:fs'
import path from 'node:path'

export interface MenuItem {
  name: string
  path: string[]
  children?: MenuItem[]
}

function getTree(root: string, basename = root) {
  const array = fs.readdirSync(root)
  const items: MenuItem[] = []
  for (let index = 0; index < array.length; index++) {
    const filePath = path.join(root, array[index])
    const el = fs.statSync(filePath)
    const selfPath = path.basename(filePath).replace('.md', '')
    items.push({
      name: selfPath,
      path: [
        selfPath,
      ],
      children: el.isDirectory()
        ? getTree(filePath, basename).map((e) => {
            return {
              ...e,
              name: `${selfPath}__${e.name}`,
              path: [selfPath, ...e.path],
            }
          })
        : undefined,
    })
  }
  return items
}

export function getKbData() {
  const tree = getTree('./app/content')

  function getKbPaths(data: MenuItem[]) {
    const result: { kbPath: string[] }[] = []
    for (let index = 0; index < data.length; index++) {
      const { path, children } = data[index]
      result.push({ kbPath: path })
      if (children) {
        result.push(...getKbPaths(children))
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
