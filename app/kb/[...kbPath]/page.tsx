import Page from '@/app/components/page'
import { getKbData } from '@/app/libs/md'

export async function generateStaticParams() {
  const {
    kbPaths,
  } = getKbData()
  return [
    { kbPath: undefined },
    ...kbPaths,
  ]
}

export default async function KbPage({
  params,
}: {
  params: Promise<{ kbPath: string[] }>
}) {
  const kbPath = (await params).kbPath
  return (
    <Page>
      <p>
        {JSON.stringify({ kbPath: JSON.stringify(kbPath) })}
      </p>
      <div>
        { JSON.stringify(kbPath)}
      </div>
    </Page>
  )
}
export const dynamicParams = false
