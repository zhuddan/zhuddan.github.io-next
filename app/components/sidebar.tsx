'use client'
import type { MenuItem } from '../libs/md'
import clsx from 'clsx'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export default function Sidebar({ data }: { data: MenuItem[] }) {
  const pathname = usePathname()
  if (pathname === '/')
    return null
  return (
    <aside className="border w-[var(--sidebar-width)] h-[calc(100vh_-_var(--header-height))] flex-shrink-0 overflow-y-auto">
      <SidebarItems menuItems={data} />
    </aside>
  )
}

function SidebarItems({
  menuItems,
}: {
  menuItems: MenuItem[]
}) {
  return (
    <ul>
      {menuItems.map((e) => {
        return <SidebarItem menuItem={e} key={e.name} />
      })}
    </ul>
  )
}

function SidebarItem({
  menuItem,
}: {
  menuItem: MenuItem
}) {
  const pathname = usePathname()
  const isExpand = useMemo(() => {
    const pathList = pathname.split('/').filter(e => !!e).filter(e => e !== 'kb')
    return menuItem.children && menuItem.path[0] === pathList[0]
  }, [menuItem.children, menuItem.path, pathname])

  const isActive = useMemo(() => {
    const selfpath = ['', 'kb', ...menuItem.path, ''].join('/')
    return pathname === selfpath
  }, [menuItem.path, pathname])

  return (
    <>
      <li
        className={
          clsx(
            ' py-2 my-1 rounded-r-full  hover:cursor-pointer ',
            menuItem.children && 'font-bold text-lg',
            isActive
              ? ' bg-primary-light bg-opacity-10 text-primary'
              : ' hover:bg-gray-50',
          )
        }
      >
        <Link
          href={`/kb/${menuItem.path.join('/')}`}
          className={clsx(
            'flex justify-between pr-2 items-center',

            menuItem.children ? 'pl-3' : 'pl-6',
          )}
        >
          <span>
            { menuItem.name }
          </span>
          {
            menuItem.children && (
              isExpand
                ? <ChevronDown />
                : <ChevronRight />
            )
          }
        </Link>
      </li>
      {menuItem.children && isExpand && <SidebarItems menuItems={menuItem.children} />}
    </>
  )
}
