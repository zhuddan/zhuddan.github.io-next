import Page from '@/app/components/page'
import { generateKBData, getKBContent } from '@/app/libs/md'

export async function generateStaticParams() {
  const {
    kbPaths,
  } = generateKBData()
  return [
    { kbPath: ['test'] },
    ...kbPaths,
  ]
}

export default async function KbPage({
  params,
}: {
  params: Promise<{ kbPath: string[] }>
}) {
  const kbPath = (await params).kbPath
  const { content } = await getKBContent(kbPath)

  return (
    <Page>
      {content}
    </Page>
  )
}

export const dynamicParams = false
