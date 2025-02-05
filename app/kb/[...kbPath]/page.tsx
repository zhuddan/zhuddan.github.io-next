import Page from '@/app/components/page'
import { getKBContext as getKBContent, getKbData } from '@/app/libs/md'

export async function generateStaticParams() {
  const {
    kbPaths,
  } = getKbData()
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
