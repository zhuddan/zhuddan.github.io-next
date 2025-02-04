'use client'
import { GithubIcon, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import ButtonLink from './button-link'

function Theme() {
  const [dark, setIsDark] = useState(false)

  return (
    <button type="button" className="size-12 flex hover:bg-gray-100 items-center justify-center rounded-full hover:text-primary" onClick={() => setIsDark(state => !state)}>
      {
        dark ? <Sun /> : <Moon />
      }
    </button>
  )
}

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
            <ButtonLink
              key={item.path}
              href={item.path}
              className="px-4 py-1.5"
              active={pathname.startsWith(item.prefix)}
            >
              {item.label}
            </ButtonLink>
          )
        })
      }
      <ButtonLink className="size-12" href="https://github.com/Zhuddan" title="Zhuddan`s github" target="_blank">
        <GithubIcon />
      </ButtonLink>
      <Theme />
    </header>
  )
}
