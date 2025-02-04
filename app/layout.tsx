import type { Metadata } from 'next'
import clsx from 'clsx'
import { Archivo, Geist, Geist_Mono } from 'next/font/google'
import BaseLayout from './components/base-layout'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Z/Decode',
  description: 'Zhuddan 的个人博客',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-cn">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          archivo.variable,
          `antialiased`,
        )}
      >
        <BaseLayout>
          {children}
        </BaseLayout>
      </body>
    </html>
  )
}
