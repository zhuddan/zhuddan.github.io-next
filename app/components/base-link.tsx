import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export interface BaseLinkProps extends React.ComponentProps<typeof Link> {
  active?: boolean
}

export default function BaseLink(
  {
    className,
    href,
    active,
    children,
    target,
    ...rest
  }: BaseLinkProps,
) {
  return (
    <Link
      href={href}
      className={
        clsx(
          active
            ? 'text-primary bg-primary-light bg-opacity-10'
            : ' hover:text-primary',
          className,
        )
      }
      target={
        href.toString().startsWith('http') ? '_blank' : '_self'
      }
      {...rest}

    >
      {children}
    </Link>
  )
}
