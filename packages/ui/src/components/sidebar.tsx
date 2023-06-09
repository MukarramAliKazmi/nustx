import React from 'react'
import { SidebarItem } from '@/components/sidebar-item'
import { LogoutButton } from '@/components/logout-button'
import { SidebarBackdrop } from '@/components/sidebar-backdrop'

export interface SidebarProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
  sidebarItems: Array<{ title: string; route: string }>
}

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
  sidebarItems,
}) => (
  <div
    className={`z-30 flex flex-col w-48 md:w-64 px-4 py-6 md:px-6 md:py-8 bg-inherit transition-[transform] duration-500 -translate-x-full md:translate-x-0 absolute md:relative h-full box-border ${
      isSidebarOpen && 'translate-x-0'
    }`}
  >
    {sidebarItems.map(item => (
      <SidebarItem key={item.title} title={item.title} route={item.route} />
    ))}
    <div className="flex-1" />
    <LogoutButton />
    <SidebarBackdrop
      isSidebarOpen={isSidebarOpen}
      handleIsSidebarOpen={handleIsSidebarOpen}
    />
  </div>
)
