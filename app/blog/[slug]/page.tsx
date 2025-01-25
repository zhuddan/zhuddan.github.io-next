export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post } = await import(`@/app/content/${slug}.md`)
  return <Post />
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }]
}

export const dynamicParams = false
