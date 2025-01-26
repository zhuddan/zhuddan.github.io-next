import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header
      className="h-[var(--header-height)] px-8 flex items-center border-b sticky top-0 bg-[var(--background)]"
    >
      <Image
        className="dark:invert"
        src="/logo.png"
        alt="Next.js logo"
        width={110}
        height={20}
        priority
      />
    </header>
  )
}
