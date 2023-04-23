import React from 'react'
import { ToggleSidebarButton } from '@/components/toggle-sidebar-button'
import { ToggleThemeButton } from '@/components/toggle-theme-button'

export interface TopbarProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
}

export const Topbar: React.FC<TopbarProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
}) => (
  <div className="ui-w-full ui-h-20 ui-flex ui-items-center ui-justify-between ui-px-4 md:ui-px-6">
    <div className="ui-text-5xl ui-font-bold ui-text-sky-500">nustX</div>
    <div className="ui-flex ui-items-center ui-gap-4">
      <ToggleThemeButton />
      <ToggleSidebarButton
        isOpen={isSidebarOpen}
        handleIsOpen={handleIsSidebarOpen}
      />
    </div>
  </div>
)
