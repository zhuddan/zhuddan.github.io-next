import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
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
      <Link href="/kb/about/a">知识库</Link>
      <Link href="/blog" className="ml-1">博客</Link>
    </header>
  )
}
