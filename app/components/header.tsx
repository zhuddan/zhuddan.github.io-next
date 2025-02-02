'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
  const pathname = usePathname()
  const menus = [
    {
      path: '/kb/about/a',
      label: '知识库',
      prefix: '/kb',
    },
    {
      path: '/blog',
      label: '博客',
      prefix: '/blog',
    },
  ]
  return (
    <header
      className="h-[var(--header-height)] px-8 flex items-center border-b sticky top-0 bg-[var(--background)]"
    >
      <Link href="/">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={110}
          height={20}
          priority
        />
      </Link>
      <div className="flex-1"></div>
      {
        menus.map((item) => {
          return (
            <Link
              key={item.path}
              href={item.path}
              className={
                clsx(
                  'ml-2 px-2 py-1 rounded flex items-center justify-center',
                  pathname.startsWith(item.prefix)
                    ? ' bg-primary-light bg-opacity-10 text-primary'
                    : ' hover:bg-gray-50',
                )
              }
            >
              {item.label}
            </Link>
          )
        })
      }

    </header>
  )
}
