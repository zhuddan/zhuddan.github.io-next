import fs from 'node:fs'
import path from 'node:path'

interface Item {
  name: string
  path: { markdownPath: string }[]
  children?: Item[]
}

function getTree(root: string, basename = root) {
  const array = fs.readdirSync(root)
  const items: Item[] = []
  for (let index = 0; index < array.length; index++) {
    const filePath = path.join(root, array[index])
    const el = fs.statSync(filePath)
    items.push({
      name: path.basename(filePath),
      path: [
        { markdownPath: '' },
      ],
      children: el.isDirectory()
        ? getTree(filePath, basename).map((e) => {
            return {
              ...e,
              path: [{ markdownPath: basename }, ...e.path],
            }
          })
        : undefined,
    })
  }
  return items
}

export function getData() {
  const data = getTree('./app/content')
  return data
}
