import ButtonLink from './button-link'

export default function Hero() {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="relative h-300 mx-auto">
        <h1
          className="text-[64px] hover:cursor-pointer font-archivo"
        >
          Z/Decode
        </h1>
      </div>
      <p className="mt-2">
        <ButtonLink href="https://github.com/Zhuddan" className="hover:!bg-transparent">
          Zhuddan
        </ButtonLink>
        {' '}
        的个人博客
      </p>
      <div className="flex mt-4">
        <ButtonLink
          href="/kb/mini"
          active
          className="px-4 py-1.5 !bg-primary !text-white hover:!bg-opacity-90"
        >
          知识库
        </ButtonLink>
        <ButtonLink className="ml-2 px-4 py-1.5" href="/blog">博客</ButtonLink>
      </div>
    </div>
  )
}
