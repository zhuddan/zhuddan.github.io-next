'use client'
import type { Category } from '../libs/md'
import clsx from 'clsx'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export default function Sidebar({ data }: { data: Category[] }) {
  const pathname = usePathname()
  if (pathname === '/')
    return null
  return (
    <aside className="border-r w-[var(--sidebar-width)] h-[calc(100vh_-_var(--header-height))] flex-shrink-0 overflow-y-auto">
      <SidebarItems menuItems={data} />
    </aside>
  )
}

function SidebarItems({
  menuItems,
}: {
  menuItems: Category[]
}) {
  return (
    <ul>
      {menuItems.map((e) => {
        return <SidebarItem menuItem={e} key={e.title} />
      })}
    </ul>
  )
}

function SidebarItem({
  menuItem,
}: {
  menuItem: Category
}) {
  const pathname = usePathname()
  const isExpand = useMemo(() => {
    const pathList = pathname.split('/').filter(e => !!e).filter(e => e !== 'kb')
    return menuItem.menus && menuItem.path[0] === pathList[0]
  }, [menuItem.menus, menuItem.path, pathname])

  const isActive = useMemo(() => {
    const selfpath = ['', 'kb', ...menuItem.path, ''].join('/')
    return pathname === selfpath
  }, [menuItem.path, pathname])

  return (
    <>
      <li
        className={
          clsx(
            'overflow-hidden my-1 mr-1 rounded-r-full  hover:cursor-pointer ',
            menuItem.menus && 'font-bold text-lg',
            isActive
              ? ' bg-primary-light bg-opacity-10 text-primary'
              : ' hover:bg-gray-50',
          )
        }
      >
        <Link
          href={`/kb/${menuItem.path.join('/')}`}
          className={clsx(
            'flex justify-between pr-2 items-center  h-full py-2',
            menuItem.menus ? 'pl-3' : 'pl-6',
          )}
        >
          <span>
            { menuItem.title }
          </span>
          {
            menuItem.menus && (
              isExpand
                ? <ChevronDown />
                : <ChevronRight />
            )
          }
        </Link>
      </li>
      {menuItem.menus && isExpand
      && <SidebarItems menuItems={menuItem.menus} />}
    </>
  )
}
