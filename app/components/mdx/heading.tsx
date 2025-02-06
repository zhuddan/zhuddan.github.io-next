import clsx from 'clsx'
import React from 'react'
import AnchorLink from './anchor-link'

interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5
  id: string
}

export const Heading: React.FC<HeadingProps> = ({
  id,
  level,
  children,
}) => {
  const Tag = { 1: 'h1' as const, 2: 'h2' as const, 3: 'h3' as const, 4: 'h4' as const, 5: 'h5' as const }[level]
  return (
    <AnchorLink id={id}>
      <Tag
        id={id}
        className={
          clsx(
            'my-[0.5em] font-bold font-archivo scroll-mt-[var(--header-height)]',
            { 1: 'text-5xl', 2: 'text-3xl', 3: 'text-2xl', 4: 'text-xl', 5: 'text-lg' }[level],
          )
        }
      >
        #
        {' '}
        {children}
      </Tag>
    </AnchorLink>
  )
}

// 将所有标题组件导出
// eslint-disable-next-line react-refresh/only-export-components
export const headingComponents = {
  h1: (props: Omit<HeadingProps, 'level'>) => <Heading level={1} {...props} />,
  h2: (props: Omit<HeadingProps, 'level'>) => <Heading level={2} {...props} />,
  h3: (props: Omit<HeadingProps, 'level'>) => <Heading level={3} {...props} />,
  h4: (props: Omit<HeadingProps, 'level'>) => <Heading level={4} {...props} />,
  h5: (props: Omit<HeadingProps, 'level'>) => <Heading level={5} {...props} />,
}
