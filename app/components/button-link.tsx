import type { BaseLinkProps } from './base-link'
import clsx from 'clsx'
import React from 'react'
import BaseLink from './base-link'

interface ButtonLinkProps extends BaseLinkProps {}

export default function ButtonLink(
  {
    className,
    href,
    active,
    children,
    ...rest
  }: ButtonLinkProps,
) {
  return (
    <BaseLink
      href={href}
      active={active}
      {...rest}
      className={
        clsx(
          ' items-center justify-center inline-flex rounded-full',
          className,
          !active && 'hover:bg-gray-100',
        )
      }
    >
      {children}
    </BaseLink>
  )
}
