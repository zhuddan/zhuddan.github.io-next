import React from 'react'
import Header from './header'
import Main from './main'

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}
