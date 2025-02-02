import clsx from 'clsx'

interface MenuItem {
  name: string
  children?: MenuItem[]
}
const data: MenuItem[] = [
  ...Array.from({ length: 3 }, (_, index) => ({
    name: `typescript${index}`,
    children: [
      { name: 'tsconfig.json的配置' },
      { name: 'type 和 interface' },
    ],
  })),
  {
    name: 'html/css',
    children: [
      { name: 'html header' },
      ...Array.from({ length: 30 }, (_, e) => ({ name: `css 变量_${e}` })),
    ],
  },
]

export default function Sidebar() {
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
            menuItem.children ? 'pl-3' : 'pl-6',
          )}
        >
          { menuItem.name }
        </a>
      </li>
      {menuItem.children && <SidebarItems menuItems={menuItem.children} />}
    </>
  )
}
