import React from 'react'
import Footer from './footer'
import Sidebar from './sidebar'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex-1">
        <div className="min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))] p-8">

          {children}
        </div>
        <Footer />
      </section>
    </main>
  )
}
