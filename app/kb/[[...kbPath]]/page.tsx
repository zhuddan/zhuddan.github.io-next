import { getData } from '../../libs/md'

export async function generateStaticParams() {
  getData()
  return [
    { kbPath: undefined },
    { kbPath: ['welcome'] },
    { kbPath: ['about'] },
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
