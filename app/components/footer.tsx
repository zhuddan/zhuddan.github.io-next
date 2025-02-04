import { ExternalLink } from 'lucide-react'
import React from 'react'
import BaseLink from './base-link'

export default function Footer() {
  const data = [
    {
      title: '知识库',
      data: [
        {
          name: 'react',
          href: 'https://github.com/zhuddan/zhuddan.github.io',
        },
      ],
    },
    {
      title: '博客',
      data: [
        {
          name: 'type 和 interface',
          href: 'https://github.com/zhuddan/zhuddan.github.io',
        },
      ],
    },
    {
      title: '更多链接',
      data: [
        {
          name: 'Z/Decode',
          href: 'https://github.com/zhuddan/zhuddan.github.io',
        },
        {
          name: 'Zhuddan',
          href: 'https://github.com/zhuddan',
        },
        {
          name: 'npm',
          href: 'https://github.com/',
        },
      ],
    },
  ]
  return (
    <footer className="min-h-[var(--footer-height)] border-t w-full p-8">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 max-w-[1200px] mx-auto">
        {
          data.map((e) => {
            return (
              <div className="flex flex-col" key={e.title}>
                <h1 className="text-xl font-bold">
                  {e.title}
                </h1>
                {
                  e.data.map((item) => {
                    return (
                      <BaseLink
                        key={item.name}
                        href={item.href}
                        className="flex items-center"
                      >
                        {item.name}
                        {' '}
                        <ExternalLink className="ml-1" size={12} />
                      </BaseLink>
                    )
                  })
                }
                {/* <BaseLink
                  href="https://github.com/"
                  className="font-archivo"
                >
                  Z/Decode

                </BaseLink>
                <BaseLink href="https://github.com/zhuddan">Zhuddan</BaseLink> */}
              </div>
            )
          })
        }

      </div>

      <p className="text-center mt-2">
        Copyright ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        zhuddan, Inc. Built with Next.js.
      </p>
    </footer>
  )
}
