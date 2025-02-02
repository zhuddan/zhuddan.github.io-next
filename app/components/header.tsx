'use client'
import clsx from 'clsx'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Github() {
  return <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
}

function Theme() {
  const [dark, setIsDark] = useState(false)

  return (
    <button type="button" className="ml-2" onClick={() => setIsDark(state => !state)}>
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
      <Github />
      <Theme />
    </header>
  )
}
