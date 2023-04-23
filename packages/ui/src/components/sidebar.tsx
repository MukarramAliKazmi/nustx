import React from 'react'
import { SidebarItem } from '@/components/sidebar-item'
import { LogoutButton } from '@/components/logout-button'
import { SidebarBackdrop } from '@/components/sidebar-backdrop'

export interface SidebarProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
}) => (
  <div
    className={`ui-z-30 ui-flex ui-flex-col ui-w-48 md:ui-w-64 ui-px-4 ui-py-6 md:ui-px-6 md:ui-py-8 ui-bg-inherit ui-transition-[transform] ui-duration-500 ui--translate-x-full md:ui-translate-x-0 ui-absolute md:ui-relative ui-h-full ui-box-border ${
      isSidebarOpen && 'ui-translate-x-0'
    }`}
  >
    <SidebarItem title="Dashboard" route="/" />
    <SidebarItem title="Students" route="/students" />
    <SidebarItem title="Teachers" route="/teachers" />
    <SidebarItem title="Courses" route="/courses" />
    <SidebarItem title="Disciplines" route="/disciplines" />
    <div className="ui-flex-1" />
    <LogoutButton />
    <SidebarBackdrop
      isSidebarOpen={isSidebarOpen}
      handleIsSidebarOpen={handleIsSidebarOpen}
    />
  </div>
)
