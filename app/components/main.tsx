// 'use client'
import React from 'react'
import { getKbData } from '../libs/md'
import Footer from './footer'
import Sidebar from './sidebar'

export default function Main({ children }: { children: React.ReactNode }) {
  // 或者完整 URL
  const { tree } = getKbData()
  return (
    <main className="flex">
      <Sidebar data={tree} />
      <section className="flex-1">
        <div className="min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))]">
          {children}
        </div>
        <Footer />
      </section>
    </main>
  )
}
