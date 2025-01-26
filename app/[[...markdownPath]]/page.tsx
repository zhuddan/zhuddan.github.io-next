export function generateStaticParams() {
  return [
    { markdownPath: undefined },
    { markdownPath: ['welcome'] },
    { markdownPath: ['about'] },
  ]
}

export default async function Page({
  params,
}: {
  params: Promise<{ markdownPath: string[] }>
}) {
  const markdownPath = (await params).markdownPath
  return <>{JSON.stringify(markdownPath)}</>
}
export const dynamicParams = false
