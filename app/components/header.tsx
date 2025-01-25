import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="h-[var(--header-height)] px-4 flex items-center">
      <Link href="/">ZDecode</Link>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </header>
  )
}
