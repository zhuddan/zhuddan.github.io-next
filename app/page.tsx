import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>

      <div className="bg-primary text-white px-8 py-28">
        <h1 className="text-5xl font-bold">Z/Decode</h1>
        <p className="mt-2">zhuddan 的个人博客</p>
        <div className="flex mt-4">
          <Link href="/kb" className="bg-white text-black px-4 py-2 rounded">知识库</Link>

          <Link href="/blog" className="bg-transparent border border-white ml-4 text-white px-4 py-2 rounded">博客</Link>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}
