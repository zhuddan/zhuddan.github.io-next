import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import BaseLink from './base-link'

interface PageProps extends React.HtmlHTMLAttributes<HTMLDivElement> {

}
export default function Page(
  {
    children,
    className,
    ...rest
  }: PageProps,
) {
  return (
    <div
      className={
        clsx('p-8', className)
      }
      {
        ...rest
      }
    >
      <BreadCrumb />
      <div className="mt-2">
        {children}
      </div>
    </div>
  )
}

function BreadCrumb() {
  const data = [
    {
      title: '首页',
      link: '/',
    },
    {
      title: '用户',
      link: '/user',
    },
    {
      title: '用户列表',
      link: '/user-list',
    },
  ]
  return (
    <nav className="flex">
      {
        data.map((item, index) => {
          return (
            <div key={item.link} className="inline-flex items-center mr-2">
              <BaseLink href={item.link} active className="font-bold !bg-transparent ">
                {item.title}
              </BaseLink>
              {
                index !== data.length - 1 && (
                  <ChevronRight className="ml-1 text-primary" size={16} />
                )
              }
            </div>
          )
        })
      }

    </nav>
  )
}
