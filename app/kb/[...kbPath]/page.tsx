import PageWrapper from '@/app/components/page-wrapper'
import { generateKBData, getKBContent } from '@/app/libs/md'

export async function generateStaticParams() {
  const { kbPaths } = generateKBData()
  return [...kbPaths]
}

export default async function KbPage({
  params,
}: {
  params: Promise<{ kbPath: string[] }>
}) {
  const kbPath = (await params).kbPath
  const { content } = await getKBContent(kbPath)
  return (
    <PageWrapper>
      {content}
    </PageWrapper>
  )
}

export const dynamicParams = false
