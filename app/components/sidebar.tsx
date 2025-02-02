import type { MenuItem } from '../libs/md'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
// import { getKbData } from '../libs/md'

export default function Sidebar({ data }: { data: MenuItem[] }) {
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
  return (
    <>
      <li
        className={
          clsx(
            ' py-2 my-1 rounded-r-full hover:bg-gray-50 hover:cursor-pointer ',
            menuItem.children
              ? 'font-bold text-lg'
              : '',
          )
        }
      >
        <a
          href=""
          className={clsx(
            'flex justify-between pr-2',
            menuItem.children ? 'pl-3' : 'pl-6',
          )}
        >
          <span>
            { menuItem.name }
          </span>
          {
            menuItem.children && <ChevronRight />
          }
        </a>
      </li>
      {menuItem.children && <SidebarItems menuItems={menuItem.children} />}
    </>
  )
}
