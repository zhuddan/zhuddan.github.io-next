import { getKbData } from '../../libs/md'

export async function generateStaticParams() {
  const {
    kbPaths,
  } = getKbData()
  return [
    { kbPath: undefined },
    ...kbPaths,
  ]
}

export default async function Page({
  params,
}: {
  params: Promise<{ kbPath: string[] }>
}) {
  const kbPath = (await params).kbPath
  return (
    <>
      <p>
        {JSON.stringify({ kbPath: JSON.stringify(kbPath) })}
      </p>
      <div>
        { JSON.stringify(kbPath)}
      </div>
    </>
  )
}
export const dynamicParams = false
