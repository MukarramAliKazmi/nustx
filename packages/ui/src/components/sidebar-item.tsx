import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface SidebarItemProps {
  title: string
  route: string
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ title, route }) => {
  const router = useRouter()
  return (
    <Link
      href={route}
      className={`ui-p-4 md:hover:ui-pl-6 ui-border-l-2 md:hover:ui-border-l-4 ui-transition-[border,_padding] ui-duration-500 ${
        router.pathname === route
          ? 'ui-text-sky-500 ui-border-sky-500 ui-pl-6 ui-border-l-4 ui-font-semibold'
          : 'ui-border-gray-200 hover:ui-border-gray-300 dark:ui-border-gray-800 dark:hover:ui-border-gray-500'
      }`}
    >
      {title}
    </Link>
  )
}
